import { useState, useEffect, useCallback } from "react";
import { fetchFees, fetchExchangeRate, FeeData, ExchangeData } from "@/services/api";

export const useFeeCalculator = () => {
  const [feeData, setFeeData] = useState<FeeData | null>(null);
  const [exchangeData, setExchangeData] = useState<ExchangeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [fees, exchange] = await Promise.all([
        fetchFees(),
        fetchExchangeRate("USD", "EUR"), // Default exchange rate
      ]);

      setFeeData(fees);
      setExchangeData(exchange);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const getExchangeRate = useCallback(async (from: string, to: string) => {
    try {
      const data = await fetchExchangeRate(from, to);
      setExchangeData(data);
      return data;
    } catch (err) {
      console.error("Failed to fetch exchange rate:", err);
      return null;
    }
  }, []);

  const calculateFees = (amount: number, userType: string, from: string, to: string) => {
    if (!feeData || !exchangeData) return null;

    // Find the appropriate fee service from the API data
    const isBusiness = userType === "business";
    const services = isBusiness ? feeData.Business : feeData.Customer;

    // Look for FX or transfer services that might apply
    let feePercent = 0.005; // Default 0.5%

    // Try to find relevant fee from API data
    const fxServices = services["FX"] || [];
    const payoutServices = services["Payout"] || [];

    // Look for transfer fees in FX services
    for (const service of fxServices) {
      if (service.Service.toLowerCase().includes("buy") && service.Service.toLowerCase().includes("usd")) {
        // Extract percentage from fee string (e.g., "FREE" or "1.5%")
        const feeStr = service.Fee;
        if (feeStr !== "FREE") {
          const percentMatch = feeStr.match(/(\d+(?:\.\d+)?)%/);
          if (percentMatch) {
            feePercent = parseFloat(percentMatch[1]) / 100;
            break;
          }
        }
      }
    }

    // If no FX fee found, use default based on user type
    if (feePercent === 0.005) {
      feePercent = userType === "premium" ? 0.003 : 0.005;
    }

    const fee = amount * feePercent;

    // Use the exchange rate from the API
    const fxRate = exchangeData.rate;
    const payout = (amount - fee) * fxRate;

    // Mock bank comparison (in real implementation, this could come from another API)
    const bankFeePercent = 0.02; // 2% bank fee
    const bankFee = amount * bankFeePercent;
    const bankFxRate = fxRate * 0.97; // Banks typically give worse rates
    const bankPayout = (amount - bankFee) * bankFxRate;
    const savings = payout - bankPayout;

    return {
      fee,
      fxRate,
      payout,
      bankPayout,
      savings: Math.max(0, savings),
    };
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    feeData,
    exchangeData,
    loading,
    error,
    getExchangeRate,
    calculateFees,
    reloadData: loadData,
  };
};

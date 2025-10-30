import { useState, useEffect } from "react";
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

  const getExchangeRate = async (from: string, to: string) => {
    try {
      const data = await fetchExchangeRate(from, to);
      setExchangeData(data);
      return data;
    } catch (err) {
      console.error("Failed to fetch exchange rate:", err);
      return null;
    }
  };

  const calculateFees = (amount: number, userType: string, from: string, to: string) => {
    if (!feeData || !exchangeData) return null;

    // Find the appropriate fee service
    const customerServices = feeData.Customer.products;
    const businessServices = feeData.Business.products;

    // For now, we'll use a simple fee calculation based on user type
    // In a real implementation, you'd match the service based on the transaction type
    const feePercent = userType === "premium" ? 0.003 : 0.005; // 0.3% or 0.5%
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

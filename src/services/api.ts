export interface FeeData {
  Customer: {
    [key: string]: Array<{
      Service: string;
      Fee: string;
      Description: string;
    }>;
  };
  Business: {
    [key: string]: Array<{
      Service: string;
      Fee: string;
      Description: string;
    }>;
  };
}

export interface ExchangeData {
  from: string;
  to: string;
  rate: number;
}

const BASE_URL = "https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default";

export const fetchFees = async (): Promise<FeeData> => {
  const response = await fetch(`${BASE_URL}/fee`);
  if (!response.ok) {
    throw new Error("Failed to fetch fees");
  }
  return response.json();
};

export const fetchExchangeRate = async (from: string, to: string): Promise<ExchangeData> => {
  // The API only supports NGN<->USD, so we'll use a fallback for other pairs
  if ((from === "NGN" && to === "USD") || (from === "USD" && to === "NGN")) {
    const response = await fetch(`${BASE_URL}/exchange?from=${from}&to=${to}`);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }
    return response.json();
  } else {
    // Fallback to mock rates for unsupported pairs
    const mockRates: { [key: string]: number } = {
      USD_EUR: 0.92,
      EUR_USD: 1.09,
      USD_GBP: 0.79,
      GBP_USD: 1.27,
      USD_CAD: 1.35,
      CAD_USD: 0.74,
      USD_AUD: 1.52,
      AUD_USD: 0.66,
      USD_JPY: 150.0,
      JPY_USD: 0.0067,
      USD_NGN: 1600.0, // Approximate rate
      NGN_USD: 0.000625,
    };

    const key = `${from}_${to}`;
    const rate = mockRates[key];

    if (!rate) {
      throw new Error(`Exchange rate not available for ${from} to ${to}`);
    }

    return {
      from,
      to,
      rate,
    };
  }
};

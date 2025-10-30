export interface FeeData {
  Customer: {
    products: {
      [key: string]: {
        services: Array<{
          service_name: string;
          rate: string;
          min: string;
          max: string;
          other_fees: string;
          status: string;
        }>;
      };
    };
  };
  Business: {
    products: {
      [key: string]: {
        services: Array<{
          service_name: string;
          rate: string;
          min: string;
          max: string;
          other_fees: string;
          status: string;
        }>;
      };
    };
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
  const response = await fetch(`${BASE_URL}/exchange?from=${from}&to=${to}`);
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rate");
  }
  return response.json();
};

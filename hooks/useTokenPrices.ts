import { useState, useEffect, useCallback } from 'react';
import { COINGECKO_IDS } from '../utils/tokenUtils';

interface TokenPrices {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

/**
 * Custom hook to fetch token prices from CoinGecko API
 * @returns Object containing token prices and loading state
 */
export function useTokenPrices() {
  const [prices, setPrices] = useState<TokenPrices>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get comma-separated list of tokens to fetch
  const tokenIds = Object.values(COINGECKO_IDS).join(',');

  const fetchPrices = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // CoinGecko API URL for price data
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenIds}&vs_currencies=usd&include_24hr_change=true`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch prices: ${response.statusText}`);
      }
      
      const data = await response.json();
      setPrices(data);
    } catch (err) {
      console.error('Error fetching token prices:', err);
      setError('Failed to fetch token prices');
      
      // Set fallback prices
      setPrices({
        [COINGECKO_IDS.ETH]: { usd: 3500, usd_24h_change: 1.5 },
        [COINGECKO_IDS.USDC]: { usd: 1, usd_24h_change: 0.01 }
      });
    } finally {
      setIsLoading(false);
    }
  }, [tokenIds]);

  useEffect(() => {
    fetchPrices();
    
    // Refresh prices every 5 minutes
    const intervalId = setInterval(fetchPrices, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, [fetchPrices]);

  // Helper function to get price for a specific token
  const getPriceForToken = useCallback((tokenSymbol: string): { price: number; change24h: number } => {
    const coinId = COINGECKO_IDS[tokenSymbol];
    if (!coinId || !prices[coinId]) {
      return { price: 0, change24h: 0 };
    }
    
    return { 
      price: prices[coinId].usd, 
      change24h: prices[coinId].usd_24h_change 
    };
  }, [prices]);

  return {
    prices,
    isLoading,
    error,
    refetch: fetchPrices,
    getPriceForToken
  };
} 
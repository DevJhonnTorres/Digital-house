import { useState, useEffect, useCallback } from 'react';
import { createPublicClient, http, formatUnits } from 'viem';
import { sepolia, arbitrumSepolia, baseSepolia } from 'viem/chains';
import { TokenBalance } from '../types/index';

// Chain configurations with proper RPC endpoints for Sepolia testnets
const CHAINS = {
  11155111: { 
    chain: {
      ...sepolia,
      rpcUrls: {
        default: { http: ['https://rpc.sepolia.org'] },
        public: { http: ['https://rpc.sepolia.org'] }
      }
    }, 
    name: 'Ethereum Sepolia' 
  },
  421614: { 
    chain: {
      ...arbitrumSepolia,
      rpcUrls: {
        default: { http: ['https://sepolia-rollup.arbitrum.io/rpc'] },
        public: { http: ['https://sepolia-rollup.arbitrum.io/rpc'] }
      }
    }, 
    name: 'Arbitrum Sepolia' 
  },
  84532: { 
    chain: {
      ...baseSepolia,
      rpcUrls: {
        default: { http: ['https://sepolia.base.org'] },
        public: { http: ['https://sepolia.base.org'] }
      }
    }, 
    name: 'Base Sepolia' 
  }
};

// Token contracts by chain - using Sepolia testnet addresses
const TOKEN_CONTRACTS = {
  11155111: { // Ethereum Sepolia
    USDC: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', // USDC on Sepolia (6 decimals)
    PYUSD: '0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9' // PYUSD on Sepolia (6 decimals)
  },
  421614: { // Arbitrum Sepolia
    USDC: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d', // USDC on Arbitrum Sepolia (6 decimals)
    PYUSD: '0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1' // PYUSD on Arbitrum Sepolia (6 decimals)
  },
  84532: { // Base Sepolia
    USDC: '0x036CbD53842c5426634e7929541eC2318f3dCF7e' // USDC on Base Sepolia (6 decimals)
  }
};

const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
] as const;

/**
 * Hook to fetch token balances across multiple chains
 */
export function useMultiChainBalances(address: string | undefined, chainId: number = 11155111) {
  const [balances, setBalances] = useState<TokenBalance>({ 
    ethBalance: '0', 
    uscBalance: '0',
    pyusdBalance: '0'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalances = useCallback(async () => {
    if (!address || !CHAINS[chainId as keyof typeof CHAINS]) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const chainConfig = CHAINS[chainId as keyof typeof CHAINS];
      
      // Create client with proper RPC configuration
      const client = createPublicClient({
        chain: chainConfig.chain,
        transport: http(chainConfig.chain.rpcUrls.default.http[0])
      });

      // Fetch native ETH balance
      const ethBalance = await client.getBalance({ 
        address: address as `0x${string}` 
      });
      
      // Fetch USDC balance if available on this chain
      let usdcBalance = BigInt(0);
      const usdcContract = TOKEN_CONTRACTS[chainId as keyof typeof TOKEN_CONTRACTS]?.USDC;
      if (usdcContract) {
        try {
          const result = await client.readContract({
            address: usdcContract as `0x${string}`,
            abi: ERC20_ABI,
            functionName: 'balanceOf',
            args: [address as `0x${string}`],
          });
          usdcBalance = result as bigint;
        } catch (err) {
          console.error(`Error fetching USDC balance on ${chainConfig.name}:`, err);
        }
      }
      
      // Fetch PYUSD balance (on Ethereum Sepolia and Arbitrum Sepolia)
      let pyusdBalance = BigInt(0);
      const pyusdContract = TOKEN_CONTRACTS[chainId as keyof typeof TOKEN_CONTRACTS]?.PYUSD;
      if (pyusdContract) {
        try {
          const result = await client.readContract({
            address: pyusdContract as `0x${string}`,
            abi: ERC20_ABI,
            functionName: 'balanceOf',
            args: [address as `0x${string}`],
          });
          pyusdBalance = result as bigint;
        } catch (err) {
          console.error('Error fetching PYUSD balance:', err);
        }
      }
      
      setBalances({
        ethBalance: formatUnits(ethBalance, 18),
        uscBalance: formatUnits(usdcBalance, 6),
        pyusdBalance: formatUnits(pyusdBalance, 6),
      });
      
    } catch (err) {
      console.error(`Error fetching balances on chain ${chainId}:`, err);
      setError(`Failed to fetch balances on ${CHAINS[chainId as keyof typeof CHAINS]?.name || 'Unknown'} network`);
    } finally {
      setIsLoading(false);
    }
  }, [address, chainId]);

  useEffect(() => {
    if (address && chainId) {
      fetchBalances();
    }
  }, [address, chainId, fetchBalances]);

  return { 
    balances, 
    isLoading, 
    error, 
    refetch: fetchBalances,
    chainName: CHAINS[chainId as keyof typeof CHAINS]?.name || 'Unknown'
  };
}

import { sepolia, arbitrumSepolia, baseSepolia } from 'viem/chains';

/**
 * Supported chains configuration for Digital House
 * Using Sepolia testnets for development and testing
 */

export const SUPPORTED_CHAINS = {
  ethereumSepolia: {
    id: 11155111,
    name: 'Ethereum Sepolia',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://rpc.sepolia.org'] },
    },
    blockExplorers: {
      default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
    },
    viemChain: sepolia,
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    color: '#627EEA'
  },
  arbitrumSepolia: {
    id: 421614,
    name: 'Arbitrum Sepolia',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://sepolia-rollup.arbitrum.io/rpc'] },
    },
    blockExplorers: {
      default: { name: 'Arbiscan', url: 'https://sepolia.arbiscan.io' },
    },
    viemChain: arbitrumSepolia,
    logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png',
    color: '#28A0F0'
  },
  baseSepolia: {
    id: 84532,
    name: 'Base Sepolia',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://sepolia.base.org'] },
    },
    blockExplorers: {
      default: { name: 'BaseScan', url: 'https://sepolia.basescan.org' },
    },
    viemChain: baseSepolia,
    logo: 'https://avatars.githubusercontent.com/u/108554348?s=280&v=4',
    color: '#0052FF'
  }
} as const;

export type SupportedChainId = keyof typeof SUPPORTED_CHAINS;

export const DEFAULT_CHAIN: SupportedChainId = 'ethereumSepolia';

/**
 * Get chain configuration by ID
 */
export function getChainById(chainId: number) {
  return Object.values(SUPPORTED_CHAINS).find(chain => chain.id === chainId);
}

/**
 * Get chain configuration by key
 */
export function getChain(chainKey: SupportedChainId) {
  return SUPPORTED_CHAINS[chainKey];
}

/**
 * Get all supported chain IDs
 */
export function getSupportedChainIds(): number[] {
  return Object.values(SUPPORTED_CHAINS).map(chain => chain.id);
}

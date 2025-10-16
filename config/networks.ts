import { Network } from '../types/index';
import { getNetworkLogoUrl, getTokenLogoUrl } from '../utils/tokenUtils';

// Ethereum Sepolia network configuration
export const ETHEREUM_SEPOLIA: Network = {
  id: 11155111,
  name: 'Ethereum Sepolia',
  shortName: 'Sepolia',
  icon: getNetworkLogoUrl(11155111),
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://rpc.sepolia.org',
  testnet: true,
  color: '#627EEA'
};

// Arbitrum Sepolia network configuration
export const ARBITRUM_SEPOLIA: Network = {
  id: 421614,
  name: 'Arbitrum Sepolia',
  shortName: 'Arb Sepolia',
  icon: getNetworkLogoUrl(421614),
  explorerUrl: 'https://sepolia.arbiscan.io',
  rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
  testnet: true,
  color: '#28A0F0'
};

// Base Sepolia network configuration
export const BASE_SEPOLIA: Network = {
  id: 84532,
  name: 'Base Sepolia',
  shortName: 'Base Sepolia',
  icon: getNetworkLogoUrl(84532),
  explorerUrl: 'https://sepolia.basescan.org',
  rpcUrl: 'https://sepolia.base.org',
  testnet: true,
  color: '#0052FF'
};

// Default network
export const DEFAULT_NETWORK = ETHEREUM_SEPOLIA;

// Get network by chain ID
export function getNetworkById(chainId: number): Network {
  switch (chainId) {
    case 11155111:
      return ETHEREUM_SEPOLIA;
    case 421614:
      return ARBITRUM_SEPOLIA;
    case 84532:
      return BASE_SEPOLIA;
    default:
      return DEFAULT_NETWORK;
  }
}

// Token configurations
export const TOKENS = {
  // Ethereum Sepolia tokens
  [ETHEREUM_SEPOLIA.id]: {
    ETH: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      icon: getTokenLogoUrl('ETH')
    },
    USDC: {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', // USDC on Sepolia
      icon: getTokenLogoUrl('USDC')
    },
    PYUSD: {
      symbol: 'PYUSD',
      name: 'PayPal USD',
      decimals: 6,
      address: '0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9',
      icon: getTokenLogoUrl('PYUSD')
    }
  },
  // Arbitrum Sepolia tokens
  [ARBITRUM_SEPOLIA.id]: {
    ETH: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      icon: getTokenLogoUrl('ETH')
    },
    USDC: {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d', // USDC on Arbitrum Sepolia
      icon: getTokenLogoUrl('USDC')
    },
    PYUSD: {
      symbol: 'PYUSD',
      name: 'PayPal USD',
      decimals: 6,
      address: '0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1',
      icon: getTokenLogoUrl('PYUSD')
    }
  },
  // Base Sepolia tokens
  [BASE_SEPOLIA.id]: {
    ETH: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
      icon: getTokenLogoUrl('ETH')
    },
    USDC: {
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
      address: '0x036CbD53842c5426634e7929541eC2318f3dCF7e', // USDC on Base Sepolia
      icon: getTokenLogoUrl('USDC')
    }
  }
}; 
// Type definitions for Digital House

export interface Wallet {
  address: string;
  walletClientType?: string;
}

export interface TokenBalance {
  ethBalance: string;
  uscBalance: string;
  pyusdBalance: string;
}

export interface Network {
  id: number;
  name: string;
  shortName: string;
  icon: string;
  explorerUrl: string;
  rpcUrl: string;
  testnet: boolean;
  color: string;
}

export interface Token {
  symbol: string;
  name: string;
  decimals: number;
  address?: string;
  icon: string;
}


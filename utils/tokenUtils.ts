// Token utility functions for Digital House

export const COINGECKO_IDS: { [key: string]: string } = {
  ETH: 'ethereum',
  USDC: 'usd-coin',
  PYUSD: 'paypal-usd'
};

export function getTokenLogoUrl(tokenSymbol: string): string {
  const logos: { [key: string]: string } = {
    ETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    USDC: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    PYUSD: 'https://cryptologos.cc/logos/paypal-usd-pyusd-logo.png'
  };
  
  return logos[tokenSymbol] || 'https://via.placeholder.com/40';
}

export function getNetworkLogoUrl(chainId: number): string {
  const logos: { [key: number]: string } = {
    1: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    11155111: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', // Ethereum Sepolia
    421614: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png', // Arbitrum Sepolia
    84532: 'https://avatars.githubusercontent.com/u/108554348?s=280&v=4' // Base Sepolia
  };
  
  return logos[chainId] || 'https://via.placeholder.com/40';
}

export function formatTokenBalance(balance: string, decimals: number = 6): string {
  const num = parseFloat(balance);
  if (isNaN(num)) return '0.00';
  
  if (num === 0) return '0.00';
  if (num < 0.01) return '< 0.01';
  
  return num.toFixed(decimals);
}



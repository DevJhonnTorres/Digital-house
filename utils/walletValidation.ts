// Wallet validation utilities for Digital House

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function isExternalWallet(wallet: any): boolean {
  return wallet.walletClientType !== 'privy';
}

export async function validateExternalWallet(
  address: string,
  userId: string
): Promise<ValidationResult> {
  // Basic validation - check if address is valid
  if (!address || !address.startsWith('0x') || address.length !== 42) {
    return {
      isValid: false,
      error: 'Invalid wallet address format'
    };
  }
  
  // In a real implementation, you would check against a database
  // For now, we'll just return valid
  return {
    isValid: true
  };
}



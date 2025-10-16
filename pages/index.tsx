import { usePrivy } from '@privy-io/react-auth';
import Layout from '../components/shared/Layout';
import Button from '../components/shared/Button';
import WalletManager from '../components/wallet/WalletManager';

export default function Home() {
  const { ready, authenticated, login, logout } = usePrivy();

  if (!ready) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Digital House...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Digital House - Decentralized Real Estate Rentals"
      description="Rent properties using blockchain technology with AI-powered pricing and crypto payments"
    >
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="text-center py-8 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to Digital House
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            A revolutionary platform for real estate rentals powered by blockchain technology.
            Rent properties with crypto payments and AI-powered pricing.
          </p>
          
          {!authenticated && (
            <div className="space-y-4">
              <Button onClick={login} variant="primary" size="large">
                🔐 Connect Wallet
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Login with email or connect your wallet to get started
              </p>
            </div>
          )}
        </div>

        {/* Features Section */}
        {!authenticated && (
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Property Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We manage your real estate assets and handle all rental operations with a 3% service fee
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                AI-Powered Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automated rental price estimation based on location, rooms, size, and market data
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Crypto Payments
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accept payments in ETH, USDC, and PYUSD across multiple networks
              </p>
            </div>
          </div>
        )}

        {/* Wallet Section */}
        {authenticated && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Your Wallet
              </h2>
              <Button onClick={logout} variant="secondary">
                Logout
              </Button>
            </div>
            <WalletManager />
          </div>
        )}

        {/* Network Info */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            🌐 Supported Networks
          </h4>
          <div className="grid grid-cols-3 gap-2 text-sm text-blue-800 dark:text-blue-400">
            <div>✓ Ethereum Sepolia</div>
            <div>✓ Arbitrum Sepolia</div>
            <div>✓ Base Sepolia</div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
            🚀 Coming Soon
          </h4>
          <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-400">
            <li>• Property listing and rental booking system</li>
            <li>• Smart contracts for secure rental agreements</li>
            <li>• Advanced AI pricing engine</li>
            <li>• Review and rating system</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}



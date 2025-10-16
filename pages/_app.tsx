import type { AppProps } from 'next/app';
import { PrivyProvider } from '@privy-io/react-auth';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import { sepolia, arbitrumSepolia, baseSepolia } from 'viem/chains';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        loginMethods: ['email', 'wallet', 'google', 'apple'],
        supportedChains: [sepolia, arbitrumSepolia, baseSepolia],
      }}
    >
        <Component {...pageProps} />
    </PrivyProvider>
  );
}

export default MyApp;



import React from 'react';
import Head from 'next/head';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Digital House', 
  description = 'A decentralized real estate rental platform powered by blockchain technology. Rent properties using crypto payments with AI-powered pricing.' 
}) => {
  // Define the site URL and image paths for metadata
  const siteUrl = 'https://digital-house.vercel.app';
  const imageUrl = `${siteUrl}/banner_digital_house.jpg`;
  
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/digital-house-logo.png" type="image/png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
        
        {/* Additional SEO metadata */}
        <meta name="keywords" content="real estate, rental, crypto, blockchain, web3, ethereum, pyusd, digital house" />
        <meta name="author" content="Digital House" />
      </Head>

      <header className="py-8 px-4 text-center border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 relative z-10">
        <div className="relative py-6 flex flex-col items-center">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-white text-3xl font-bold text-shadow-sm md:text-4xl mb-2">{title}</h1>
          <p className="text-white text-sm opacity-90 md:text-base">Decentralized Real Estate Rentals</p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6 md:px-6 md:py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 transition-colors duration-300">
          {children}
        </div>
      </main>

      <footer className="py-6 px-4 text-center border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm">
        <p className="opacity-90">Powered by Digital House | ETH Online 2025</p>
        <p className="text-xs opacity-75 mt-2">3% Service Fee | AI-Powered Pricing</p>
      </footer>
    </div>
  );
};

export default Layout; 
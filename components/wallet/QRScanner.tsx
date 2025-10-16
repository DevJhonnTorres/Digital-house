import React, { useState } from 'react';

interface QRScannerProps {
  onScan: (address: string) => void;
  onClose: () => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose }) => {
  const [error, setError] = useState<string | null>(null);
  const [manualAddress, setManualAddress] = useState('');

  const handleManualSubmit = () => {
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    
    if (ethAddressRegex.test(manualAddress)) {
      onScan(manualAddress);
    } else {
      setError('Invalid Ethereum address format. Please enter a valid wallet address.');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="w-11/12 max-w-md bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center bg-gray-900 p-3">
          <h3 className="text-white text-lg font-medium m-0">Enter Wallet Address</h3>
          <button 
            onClick={onClose} 
            className="bg-transparent border-none text-white text-2xl cursor-pointer hover:opacity-70"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Wallet Address
            </label>
            <input
              id="address"
              type="text"
              value={manualAddress}
              onChange={(e) => setManualAddress(e.target.value)}
              placeholder="0x..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {error && (
            <div className="bg-red-100 text-red-600 p-3 text-center text-sm mb-4 rounded">
              {error}
            </div>
          )}
          
          <div className="flex gap-3">
            <button
              onClick={handleManualSubmit}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-medium"
            >
              Use Address
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
        
        <p className="text-center p-4 text-sm text-gray-600 dark:text-gray-300 m-0 border-t border-gray-200 dark:border-gray-700">
          Enter a valid Ethereum wallet address (0x...)
        </p>
      </div>
    </div>
  );
};

export default QRScanner; 
import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  // Define spinner sizes
  const spinnerSizes = {
    small: 'w-5 h-5',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };
  
  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };
  
  const spinnerSize = spinnerSizes[size];
  const textSize = textSizes[size];
  
  return (
    <div className={`flex flex-col items-center justify-center p-4 ${fullScreen ? 'fixed inset-0 h-screen w-full bg-white/90 dark:bg-gray-900/90 z-50' : ''}`}>
      <div 
        className={`${spinnerSize} border-4 border-gray-200 border-l-blue-600 rounded-full animate-spin mb-4`}
      />
      {text && <p className={`${textSize} text-gray-600 dark:text-gray-400 m-0`}>{text}</p>}
    </div>
  );
};

export default Loading; 
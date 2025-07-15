import React from 'react';
import { ChefHat } from 'lucide-react';

const Loading = ({ size = 'medium', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <ChefHat className={`${sizeClasses[size]} text-primary-600 animate-bounce`} />
        <div className={`${sizeClasses[size]} absolute inset-0 rounded-full border-2 border-primary-200 border-t-primary-600 animate-spin`}></div>
      </div>
      <p className={`mt-4 text-gray-600 ${textSizeClasses[size]}`}>
        {message}
      </p>
    </div>
  );
};

export default Loading;
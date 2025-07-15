import React from 'react';
import { ChefHat } from 'lucide-react';

const Loading = ({ fullScreen = false, message = "Loading..." }) => {
  const containerClass = fullScreen
    ? "fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="text-center">
        <div className="relative">
          <ChefHat className="h-16 w-16 text-primary-600 mx-auto animate-bounce" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
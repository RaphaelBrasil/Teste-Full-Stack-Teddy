import React from "react";

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-start h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-gray-200 border-t-orange-500"></div>
    <span className="mt-4 text-xl">Carregando...</span>
  </div>
);

export default LoadingSpinner;

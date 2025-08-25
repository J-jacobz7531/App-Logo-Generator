
import React from 'react';
import LogoCard from './LogoCard';
import { LoadingSpinner } from './icons';

interface LogoDisplayProps {
  logos: string[];
  isLoading: boolean;
  error: string | null;
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center h-full">
          <LoadingSpinner className="h-12 w-12 text-amber-400" />
          <h3 className="text-xl font-semibold mt-4 text-amber-200">Generating Your Logos...</h3>
          <p className="text-amber-300 mt-1">The AI is creating unique designs. This may take a moment.</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center text-center h-full bg-red-900/20 border border-red-500/50 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-semibold text-red-300">An Error Occurred</h3>
            <p className="text-red-400 mt-2">{error}</p>
          </div>
        </div>
      );
    }

    if (logos.length > 0) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {logos.map((logoSrc, index) => (
            <LogoCard key={index} src={logoSrc} />
          ))}
        </div>
      );
    }

    return (
        <div className="flex items-center justify-center text-center h-full bg-[#3e322b]/50 rounded-lg p-6">
            <div>
              <h3 className="text-2xl font-semibold text-amber-200">Your Logo Designs Will Appear Here</h3>
              <p className="text-amber-300 mt-2 max-w-md mx-auto">Fill out the form on the left and click "Generate Logos" to see AI-powered branding options for your business.</p>
            </div>
        </div>
    );
  };

  return (
    <div className="bg-[#3e322b] p-6 rounded-lg shadow-2xl min-h-[60vh] lg:min-h-full flex flex-col justify-center">
      {renderContent()}
    </div>
  );
};

export default LogoDisplay;

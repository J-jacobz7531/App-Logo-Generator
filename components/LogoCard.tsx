
import React from 'react';

interface LogoCardProps {
  src: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ src }) => {
  return (
    <div className="bg-[#2a211b] p-4 rounded-lg shadow-inner aspect-square flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={src} alt="Generated Logo" className="max-w-full max-h-full object-contain" />
    </div>
  );
};

export default LogoCard;


import React from 'react';

export const LoadingSpinner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={`animate-spin ${props.className || ''}`}
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);


export const OphelLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        {...props}
        viewBox="0 0 100 80" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor"
        aria-labelledby="ophelLogoTitle"
    >
        <title id="ophelLogoTitle">Ophel Logo Icon</title>
        {/* Sun Rays */}
        <path d="M50 0 L48 10 H52 L50 0 Z" />
        <path d="M65 5 L60 15 L68 16 Z" />
        <path d="M35 5 L40 15 L32 16 Z" />
        <path d="M80 15 L72 23 L79 26 Z" />
        <path d="M20 15 L28 23 L21 26 Z" />
        <path d="M90 30 L80 35 L85 40 Z" />
        <path d="M10 30 L20 35 L15 40 Z" />
        
        {/* Africa */}
        <path fill="#d4af37" d="M50 12 C 40 15, 35 25, 38 40 C 40 50, 45 55, 42 60 C 45 62, 55 62, 58 60 C 65 55, 60 45, 62 40 C 65 25, 60 15, 50 12 Z" />
        
        {/* Hands */}
        <path fill="#d4af37" d="M30 78 C 20 70, 25 60, 38 58 C 40 68, 45 75, 30 78 Z" />
        <path fill="#d4af37" d="M70 78 C 80 70, 75 60, 62 58 C 60 68, 55 75, 70 78 Z" />
        
        {/* Plant */}
        <path fill="#90ee90" d="M50 75 V 60" stroke="#6b8e23" strokeWidth="1.5" />
        <path fill="#90ee90" d="M50 68 C 55 65, 58 62, 55 58" />
        <path fill="#90ee90" d="M50 68 C 45 65, 42 62, 45 58" />
        <path fill="#90ee90" d="M50 62 C 54 60, 56 58, 53 55" />
        <path fill="#90ee90" d="M50 62 C 46 60, 44 58, 47 55" />
    </svg>
);

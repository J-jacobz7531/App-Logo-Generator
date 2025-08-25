
import React, { useState } from 'react';
import type { LogoRequest } from '../types';

interface LogoGeneratorFormProps {
  onGenerate: (request: LogoRequest) => void;
  isLoading: boolean;
}

const elementsOptions = ["Continent of Africa", "Sun/Sun Rays", "Growing Plant/Sapling", "Cupped Hands", "Globe/Map", "Shipping/Trade Icon"];
const styleOptions = ["Minimalist", "Modern Corporate", "Rustic/Organic", "Geometric"];
const colorOptions = ["Earthy Tones (Browns, Golds, Greens)", "Vibrant & Fresh (Bright Greens, Yellows)", "Professional & Bold (Deep Blues, Oranges)", "Monochromatic"];

const LogoGeneratorForm: React.FC<LogoGeneratorFormProps> = ({ onGenerate, isLoading }) => {
  const [companyName, setCompanyName] = useState('OPHEL');
  const [tagline, setTagline] = useState('ΟΦΕΛΟΣ');
  const [selectedElements, setSelectedElements] = useState<string[]>(["Continent of Africa", "Sun/Sun Rays", "Growing Plant/Sapling", "Cupped Hands"]);
  const [style, setStyle] = useState('Modern Corporate');
  const [colors, setColors] = useState('Earthy Tones (Browns, Golds, Greens)');

  const handleElementChange = (element: string) => {
    setSelectedElements(prev =>
      prev.includes(element) ? prev.filter(e => e !== element) : [...prev, element]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ companyName, tagline, elements: selectedElements, style, colors });
  };

  const FormField: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="mb-6">
      <label className="block text-amber-200 text-sm font-bold mb-2">{label}</label>
      {children}
    </div>
  );

  return (
    <div className="bg-[#3e322b] p-6 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-semibold text-amber-300 border-b-2 border-amber-400/30 pb-3 mb-6">Customize Your Logo</h2>
      <form onSubmit={handleSubmit}>
        <FormField label="Company Name">
          <input
            type="text"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
            className="w-full bg-[#2a211b] text-amber-50 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            placeholder="e.g., Africa Harvest"
            required
          />
        </FormField>

        <FormField label="Tagline (Optional)">
          <input
            type="text"
            value={tagline}
            onChange={e => setTagline(e.target.value)}
            className="w-full bg-[#2a211b] text-amber-50 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            placeholder="e.g., Exporting Nature's Best"
          />
        </FormField>

        <FormField label="Key Elements">
            <div className="grid grid-cols-2 gap-2">
                {elementsOptions.map(element => (
                    <label key={element} className="flex items-center space-x-2 text-sm text-amber-100 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedElements.includes(element)}
                            onChange={() => handleElementChange(element)}
                            className="form-checkbox h-4 w-4 bg-[#2a211b] border-amber-400 text-amber-500 focus:ring-amber-400 rounded"
                        />
                        <span>{element}</span>
                    </label>
                ))}
            </div>
        </FormField>

        <FormField label="Logo Style">
            <select value={style} onChange={e => setStyle(e.target.value)} className="w-full bg-[#2a211b] text-amber-50 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition appearance-none">
                {styleOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
        </FormField>

        <FormField label="Color Palette">
            <select value={colors} onChange={e => setColors(e.target.value)} className="w-full bg-[#2a211b] text-amber-50 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition appearance-none">
                {colorOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
        </FormField>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-500 hover:bg-amber-400 text-[#2a211b] font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out disabled:bg-amber-800 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Logos'
          )}
        </button>
      </form>
    </div>
  );
};

export default LogoGeneratorForm;

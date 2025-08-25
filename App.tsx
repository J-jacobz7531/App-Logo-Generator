
import React, { useState, useCallback } from 'react';
import type { LogoRequest } from './types';
import { generateLogo } from './services/geminiService';
import LogoGeneratorForm from './components/LogoGeneratorForm';
import LogoDisplay from './components/LogoDisplay';
import { OphelLogo } from './components/icons';

const App: React.FC = () => {
  const [generatedLogos, setGeneratedLogos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (request: LogoRequest) => {
    setIsLoading(true);
    setError(null);
    setGeneratedLogos([]);
    try {
      const logos = await generateLogo(request);
      setGeneratedLogos(logos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#2a211b] text-amber-50 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-2">
                <OphelLogo className="h-16 w-16 text-amber-400" />
                 <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-amber-300 tracking-wider">AI Agri-Export Logo Designer</h1>
                    <p className="text-amber-100 mt-2 text-lg">Create a world-class logo for your agricultural export business.</p>
                 </div>
            </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <LogoGeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>
          <div className="lg:col-span-8">
            <LogoDisplay logos={generatedLogos} isLoading={isLoading} error={error} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

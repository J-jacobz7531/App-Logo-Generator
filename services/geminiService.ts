
import { GoogleGenAI } from "@google/genai";
import type { LogoRequest } from '../types';

if (!process.env.API_KEY) {
    // This is a placeholder for development. 
    // In a real environment, the API key would be securely managed.
    // The framework will inject the key.
    console.warn("API_KEY environment variable not set. Using a placeholder.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export async function generateLogo(request: LogoRequest): Promise<string[]> {
  const { companyName, tagline, elements, style, colors } = request;

  const prompt = `
    Generate 4 professional, modern, vector-style logos for an agricultural export company named "${companyName}".
    
    Company Name: "${companyName}"
    Tagline: "${tagline}" (The tagline is optional, include it if it fits the design naturally).

    Core Theme: The company exports high-quality agricultural products, connecting local farming with the global market. The brand should convey trust, quality, nature, and growth.

    Mandatory Design Elements to Incorporate: ${elements.join(', ')}.
    
    Visual Style: ${style}. The logo must be simple, clean, memorable, and easily scalable. It should look good in both large and small sizes, and in monochrome. Use flat design principles.

    Color Palette: ${colors}. The colors should be sophisticated and reflect the agricultural and professional nature of the business.

    Negative Prompts: Do NOT use realistic photos, 3D rendering, complex gradients, or overly detailed illustrations. Avoid stock imagery clichés. The logo should be a unique graphic mark.
    
    Output: 4 distinct logo variations.
  `;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: prompt,
      config: {
        numberOfImages: 4,
        outputMimeType: 'image/png',
        aspectRatio: '1:1',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      return response.generatedImages.map(img => `data:image/png;base64,${img.image.imageBytes}`);
    } else {
      throw new Error("The AI did not return any images. Please try refining your request.");
    }
  } catch (error) {
    console.error('Error generating images with Gemini:', error);
    // Enhance error message for user
    if (error instanceof Error && error.message.includes('API key not valid')) {
        throw new Error('The API key is invalid. Please check your configuration.');
    }
    throw new Error('Failed to generate logos. The AI service may be busy or the request may have been blocked. Please try again later.');
  }
}

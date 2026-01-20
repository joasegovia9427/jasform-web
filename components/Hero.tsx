
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const Hero: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedForm, setGeneratedForm] = useState<{title: string, fields: {label: string, type: string}[]} | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a form structure for: ${prompt}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              fields: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    label: { type: Type.STRING },
                    type: { type: Type.STRING, description: "e.g. text, email, number, textarea" }
                  },
                  required: ["label", "type"]
                }
              }
            },
            required: ["title", "fields"]
          }
        }
      });
      const data = JSON.parse(response.text || '{}');
      setGeneratedForm(data);
    } catch (error) {
      console.error("Failed to generate form", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          Now powered by Gemini 3.0
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Build forms at the <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">speed of thought.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          Stop dragging fields. Just describe what you need and watch JASForm create it instantly using advanced AI.
        </p>
        
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-200 flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="e.g., 'A registration form for a summer coding camp with t-shirt size'" 
              className="flex-grow px-6 py-4 text-slate-700 focus:outline-none text-lg rounded-xl"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center min-w-[160px] disabled:opacity-70"
            >
              {isGenerating ? (
                <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Generate Form'}
            </button>
          </div>
        </div>

        {generatedForm ? (
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden text-left animate-in zoom-in duration-500">
            <div className="bg-slate-50 border-b border-slate-100 px-8 py-4 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">{generatedForm.title}</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              {generatedForm.fields.map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <div className="w-full h-24 bg-slate-50 border border-slate-200 rounded-lg"></div>
                  ) : (
                    <div className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg"></div>
                  )}
                </div>
              ))}
              <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200">
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 h-32 bottom-0"></div>
              <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                  alt="App Interface" 
                  className="rounded-2xl shadow-2xl border border-slate-200 mx-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              />
          </div>
        )}
      </div>
      
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;

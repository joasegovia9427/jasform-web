import React from 'react';

const TryIt: React.FC = () => {
  const appUrl = "https://joasegovia9427.github.io/jasform-app/";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient matching the provided image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h3 className="text-2xl md:text-3xl font-medium text-blue-100 mb-4 opacity-90">
          Give it a chance!
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-12 tracking-tight">
          Try JASForm for free!
        </h2>
        
        <div className="flex justify-center">
          <a 
            href={appUrl}
            className="bg-sky-500 text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-sky-400 transition-all shadow-2xl hover:shadow-sky-400/20 active:scale-95 inline-block text-center border border-white/10"
          >
            Log in
          </a>
        </div>
      </div>
    </section>
  );
};

export default TryIt;
import React from 'react';

const Hero: React.FC = () => {
  const appUrl = "https://joasegovia9427.github.io/jasform-app/";

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="lg:w-2/3">
            <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Create awesome form easily, <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">but HIPAA Compliant!&nbsp;</span>
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-xl text-slate-600 mb-12">
              The dynamic form creation platform that is HIPAA Compliant by default in its free plan.
              Collect patient data with confidence. JASForm provides the enterprise-grade security and simplicity your medical practice needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a 
                href={appUrl}
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-500/20 active:scale-95 inline-block text-center"
              >
                Try for free!
              </a>
              <a 
                href="https://youtu.be/xPCi8Sn2ga0?si=y0dCL_y4lVwNpgHB&t=53" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition active:scale-95 flex items-center justify-center gap-2 animate-pulse"
              >
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </a>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/HeaderIllustration.webp" 
              alt="JASForm Illustration" 
              className="relative z-10 w-full max-w-[500px] h-auto drop-shadow-2xl transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>
      </div>
      
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
    </section>
  );
};

export default Hero;
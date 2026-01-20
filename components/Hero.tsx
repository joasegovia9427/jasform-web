import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Secure, HIPAA-compliant forms <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">built for healthcare.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12">
          Collect patient data with confidence. JASForm provides the enterprise-grade security and simplicity your medical practice needs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-500/20 active:scale-95">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition active:scale-95">
            Watch Demo
          </button>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-64 bottom-0"></div>
          <div className="p-2 bg-slate-100 rounded-3xl border border-slate-200 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
              alt="Medical Professional using Tablet" 
              className="rounded-2xl shadow-inner w-full h-[500px] object-cover"
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
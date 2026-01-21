import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Gradient updated to flow towards the bottom right */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h3 className="text-2xl md:text-3xl font-medium text-white/90 mb-2">
          Got any questions?
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          We're happy to help.
        </h2>
        
        <div className="flex justify-center">
          <a 
            href="mailto:hello@jasform.com"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-medium text-lg transition-all shadow-xl active:scale-95 inline-block text-center"
          >
            Mail us: hello@jasform.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
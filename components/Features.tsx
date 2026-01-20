import React from 'react';

const features = [
  {
    title: "Intuitive Form Builder",
    description: "Create dynamic forms with ease using JASForm's intuitive interface. Customize your forms with various field types, and conditional logic.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-yellow-400"
  },
  {
    title: "Interoperability",
    description: "Seamlessly integrate JASForm with other systems and applications. Our system allows for easy data exchange and integration, ensuring smooth workflows and efficient processes. Native integration with MediCall by Light-it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: "bg-indigo-500"
  },
  {
    title: "Reporting",
    description: "Gain valuable insights with reporting, data segmentation, and exportable report for data-driven decisions.",
    icon: (      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "bg-violet-500"
  },
  {
    title: "Usability and Accessibility",
    description: "JASForm is designed with usability and accessibility in mind. We strive to provide an intuitive and user-friendly experience for form creators and respondents alike.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
      </svg>
    ),
    color: "bg-pink-500"
  },
  {
    title: "Robust Security Measures",
    description: "JASForm prioritizes the security of your data. Our system follows best practices in cybersecurity and ensures the protection of sensitive information.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-emerald-500"
  },
  {
    title: "Flexible Form Deployment",
    description: "Deploy your forms internally within your organization or externally to your clients. JASForm supports both internal and external use cases, providing versatility and convenience.",
    icon: (      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: "bg-orange-500"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Features</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful tools for creators and developers. No complicated setups.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-all duration-700 hover:shadow-lg group">
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-slate-200`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-2 pt-2">
          <img 
            src="https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/HIPAA-Compliant.webp" 
            alt="HIPAA Compliant Badge" 
            className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-700"
          />
      </div>
    </section>
  );
};

export default Features;
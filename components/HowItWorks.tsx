import React from 'react';

const steps = [
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/Create%20the%20form480w.webp",
    title: "Create the form",
    description: "As an admin, you can easily create the form using our intuitive interface. Simply follow the step-by-step process to design the form according to your specific requirements. Add fields, customize options, and make it visually appealing to engage your users."
  },
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/Configure%20and%20share480w.webp",
    title: "Configure and share",
    description: "Once you have created the form, you can configure integrations with other tools by using Frames or send the information to a specific endpoint. After configuring it, you'll receive a unique link that you can share with your intended audience."
  },
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/Users%20complete%20the%20form480w.webp",
    title: "Users complete the form",
    description: "With the form created and shared, it's now time for the users to complete it. They can access the form using the provided link and fill in the required information. Our user-friendly interface ensures a smooth and hassle-free experience for the users."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How it works</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            JASForm is a powerful Dynamic Form Creation System that allows users to easily create and manage dynamic forms for various purposes. 
            Whether you need to create surveys, collect feedback, track patient information, or generate statistics, JASForm provides a 
            user-friendly interface and robust features to meet your form creation needs, with full security and HIPAA compliance by default in the basic plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="overflow-hidden flex flex-col items-center text-center">
              <div className="aspect-video w-full overflow-hidden h-96 flex items-center justify-center">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-contain transition-transform duration-700 scale-90 hover:scale-100"
                />
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
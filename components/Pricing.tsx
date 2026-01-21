
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-600">Choose the plan that's right for you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-slate-500 ml-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Up to 3 forms
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                100 submissions/mo
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 HIPAA Complaiant by defualt
              </li>
            </ul>
            <button className="w-full py-3 px-4 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition">Get Started</button>
          </div>

          {/* Pro */}
          <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl relative scale-105">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$29</span>
              <span className="text-slate-500 ml-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Unlimited forms
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                10k submissions/mo
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Remove branding
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">Go Pro</button>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Business</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$99</span>
              <span className="text-slate-500 ml-1">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Unlimited everything
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Priority support
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Custom Webhooks
              </li>
            </ul>
            <button className="w-full py-3 px-4 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 py-12">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <nav className="sticky top-28 space-y-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Getting Started</h4>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li><a href="#intro" className="text-blue-600 font-medium">Introduction</a></li>
                <li><a href="#setup" className="hover:text-blue-600">Quick Setup</a></li>
                <li><a href="#hipaa" className="hover:text-blue-600">HIPAA Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Features</h4>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li><a href="#builder" className="hover:text-blue-600">Form Builder</a></li>
                <li><a href="#logic" className="hover:text-blue-600">Conditional Logic</a></li>
                <li><a href="#integrations" className="hover:text-blue-600">Integrations</a></li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-grow max-w-3xl">
          <article className="prose prose-slate lg:prose-lg">
            <h1 id="intro" className="text-4xl font-extrabold text-slate-900 mb-6">Documentation</h1>
            <p className="text-xl text-slate-600 mb-8">
              Welcome to the JASForm developer and user guide. Learn how to build secure, HIPAA-compliant forms in minutes.
            </p>

            <section id="setup" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Setup</h2>
              <p className="text-slate-600 mb-4">
                Getting started with JASForm is easy. Simply create an account, click "New Form," and start dragging elements into the builder. 
                All data collected via JASForm is encrypted at rest and in transit using enterprise-grade AES-256 encryption.
              </p>
              <div className="bg-slate-900 rounded-xl p-6 text-slate-300 font-mono text-sm overflow-x-auto">
                <p># Install JASForm SDK (Optional)</p>
                <p>npm install @jasform/sdk</p>
              </div>
            </section>

            <section id="hipaa" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">HIPAA Compliance</h2>
              <p className="text-slate-600 mb-4">
                JASForm provides a Business Associate Agreement (BAA) even on our free tier. We ensure that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>All PHI data is strictly siloed and encrypted.</li>
                <li>Access logs are maintained for every data entry.</li>
                <li>Session timeouts and automatic logout are enabled by default.</li>
              </ul>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
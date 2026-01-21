import React, { useState } from 'react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { name: 'Introduction', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#intro' },
    { name: 'Requirements', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#requirements' },
    { name: 'Quickstart guide', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#quickstart' },
    { name: 'Features', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#features' },
    { name: 'Forms', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#forms' },
    { name: 'Users', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#users' },
    { name: 'Security', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#security' },
    { name: 'FAQ', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#faq' },
    { name: 'Glossary', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#glossary' },
    { name: 'Contact', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', href: '#contact-docs' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-72 shrink-0">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 px-2">JASForm</h2>
            
            {/* Quick Search */}
            <div className="relative mb-8 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Quick search..."
                className="block w-full pl-10 pr-12 py-2.5 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded-md">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Nav Menu */}
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-grow">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <a href="/jasform-web/" className="hover:text-blue-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Home
            </a>
            <span>&gt;</span>
            <span>Docs</span>
            <span>&gt;</span>
            <span className="text-slate-800 font-medium">JASForm</span>
          </nav>

          {/* Article Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 min-h-[800px] p-8 md:p-16 relative">
            {/* Print Icon */}
            <button className="absolute top-8 right-8 text-slate-400 hover:text-slate-600" title="Print article">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </button>

            <article className="max-w-none">
              <h1 id="intro" className="text-5xl font-bold text-slate-900 mb-12">JASForm</h1>
              
              <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">Articles</h2>
              
              <ul className="space-y-4">
                {sidebarItems.map((item) => (
                  <li key={item.name} className="flex items-center gap-2 group">
                    <span className="text-slate-400">•</span>
                    <a 
                      href={item.href} 
                      className="text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Added some placeholder content sections to allow for scroll testing */}
              <div className="mt-24 space-y-16">
                <section id="requirements" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Requirements</h3>
                  <p className="text-slate-600 leading-relaxed">
                    JASForm is a web-based platform. To ensure optimal performance and security, we recommend using the latest versions of modern browsers such as Chrome, Firefox, Safari, or Edge. 
                  </p>
                </section>

                <section id="quickstart" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Quickstart Guide</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Get up and running with JASForm in less than 5 minutes:
                  </p>
                  <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                    <li>Create your workspace account.</li>
                    <li>Click on "Create New Form" from the dashboard.</li>
                    <li>Drag and drop your desired fields from the components panel.</li>
                    <li>Configure HIPAA settings and publish.</li>
                  </ol>
                </section>

                <section id="security" className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Security</h3>
                  <p className="text-slate-600 leading-relaxed">
                    All data is encrypted with AES-256 at rest. Our infrastructure is hosted on ISO 27001 compliant data centers with 24/7 monitoring.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
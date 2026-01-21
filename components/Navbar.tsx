import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', isExternal: false },
    { name: 'How it works', href: '#how-it-works', isExternal: false },
    { name: 'Features', href: '#features', isExternal: false },
    { name: 'Blog', href: '#blog-archive', isExternal: true },
    { name: 'Team', href: '#team', isExternal: false },
    { name: 'Pricing', href: '#pricing', isExternal: false },
    { name: 'Contact', href: '#contact', isExternal: false },
    { name: 'Documentation', href: '#docs', isExternal: true },
  ];

  const appUrl = "https://joasegovia9427.github.io/jasform-app/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    // Only intercept if it's an internal landing page section and we are on the home page
    if (!isExternal && href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        e.preventDefault();
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home', false)}
              className="flex items-center gap-3 group shrink-0"
            >
              <img 
                src="https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/JASForm_Isologo_for_small.webp" 
                alt="JASForm Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                JASForm
              </span>
            </a>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href, link.isExternal)}
                className="text-slate-600 hover:text-blue-600 transition font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={appUrl}
              className="bg-blue-600 text-white min-w-[100px] px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 active:scale-95 text-sm xl:text-base ml-2 inline-block text-center whitespace-nowrap"
            >
              Log in
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200 shadow-xl overflow-y-auto max-h-[calc(100vh-64px)]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href, link.isExternal)}
              className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a 
              href={appUrl}
              className="block w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20 active:scale-95 text-center"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
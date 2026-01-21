import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TryIt from './components/TryIt';
import Blog from './components/Blog';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogArchive from './pages/BlogArchive';
import Documentation from './pages/Documentation';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'docs'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#blog-archive') {
        setCurrentPage('blog');
        window.scrollTo(0, 0);
      } else if (hash === '#docs') {
        setCurrentPage('docs');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'blog':
        return <BlogArchive />;
      case 'docs':
        return <Documentation />;
      default:
        return (
          <>
            <Hero />
            <HowItWorks />
            <Features />
            <TryIt />
            <Blog />
            <Team />
            <Pricing />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
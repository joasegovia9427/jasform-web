import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TryIt from './components/TryIt';
import BlogSection from './components/BlogSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <TryIt />
        <BlogSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
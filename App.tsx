
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <AboutMe />
        </section>
        
        <section id="portfolio" className="py-20 bg-slate-50">
          <Portfolio />
        </section>
        
        <section id="faq" className="py-20 bg-white">
          <FAQ />
        </section>
        
        <section id="contact" className="py-20 bg-slate-900 text-white overflow-hidden">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-110 focus:outline-none"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* AI Chatbot Overlay */}
      <Chatbot />
    </div>
  );
};

export default App;

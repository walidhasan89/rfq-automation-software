import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import BeforeAfter from './components/BeforeAfter';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rfq-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('rfq-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#06091a]' : 'bg-white'}`}
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <UseCases darkMode={darkMode} />
        <BeforeAfter darkMode={darkMode} />
        <Integrations darkMode={darkMode} />
        <Pricing darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <FinalCTA darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
        <div className={`p-3 border-t ${darkMode ? 'bg-[#080c1e]/95 border-blue-900/40 backdrop-blur-xl' : 'bg-white/95 border-gray-200 backdrop-blur-xl'}`}>
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-bold text-white gradient-brand btn-glow"
          >
            Add to Chrome — It's Free
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

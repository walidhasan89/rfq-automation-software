import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled
    ? darkMode
      ? 'bg-[rgba(8,12,28,0.88)] backdrop-blur-xl border-b border-blue-900/30 shadow-2xl shadow-blue-950/20'
      : 'bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-gray-200/60 shadow-lg shadow-gray-200/40'
    : 'bg-transparent border-b border-transparent';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero'); }} className="flex items-center gap-2.5 group flex-shrink-0">
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot Logo"
                className="w-8 h-8 rounded-lg object-contain"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                RFQ <span className="gradient-text">AutoPilot</span>
              </span>
            </a>

            {/* Center Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/8'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  darkMode
                    ? 'text-yellow-400 hover:bg-white/10'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {darkMode ? (
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.772 18.894a.75.75 0 10-1.06-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 5.106a.75.75 0 011.06 1.06l-1.59 1.591a.75.75 0 10-1.06-1.06l1.59-1.591z"/>
                  </svg>
                ) : (
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
                  </svg>
                )}
              </button>

              {/* CTA Button */}
              <a
                href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                Add to Chrome — It's Free
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className={`lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all ${
                  darkMode ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className={`hamburger-line w-5 h-0.5 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-700'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`hamburger-line w-5 h-0.5 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-700'} ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`hamburger-line w-5 h-0.5 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-700'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`px-4 pb-4 pt-2 space-y-1 ${darkMode ? 'bg-[rgba(8,12,28,0.95)] backdrop-blur-xl border-b border-blue-900/30' : 'bg-white/95 backdrop-blur-xl border-b border-gray-200/60'}`}>
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  darkMode ? 'text-gray-300 hover:text-white hover:bg-white/8' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white gradient-brand btn-glow mt-2"
            >
              Add to Chrome — It's Free
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

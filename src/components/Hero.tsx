import { useEffect, useRef } from 'react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('revealed'), 100);
  }, []);

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 ${
        darkMode ? 'bg-[#06091a]' : 'bg-white'
      }`}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-3xl opacity-25 ${
          darkMode ? 'bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900' : 'bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-100'
        }`} />
        <div className={`absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-15 ${
          darkMode ? 'bg-blue-700' : 'bg-blue-50'
        }`} />
        <div className={`absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-100'
        }`} />
        {/* Grid pattern */}
        <div className={`absolute inset-0 opacity-[0.03] ${darkMode ? 'opacity-[0.04]' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div ref={heroRef} className="section-reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ paddingTop: '80px' }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
            darkMode
              ? 'bg-blue-950/60 border-blue-700/50 text-blue-300'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            AI-Powered RFQ Automation · Chrome Extension
          </span>
        </div>

        {/* H1 */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 max-w-5xl mx-auto ${
          darkMode ? 'text-white' : 'text-gray-950'
        }`}>
          Automate Your RFQ Workflow —{' '}
          <span className="gradient-text">From Email Detection</span>{' '}
          to Quote Response
        </h1>

        {/* Subheadline */}
        <p className={`text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto mb-8 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          RFQ AutoPilot is the AI-powered automation tool that lives inside your Gmail and Outlook inbox. It automatically detects incoming RFQ emails, extracts critical data from attached PDFs, and helps you generate professional quotation replies in{' '}
          <strong className={darkMode ? 'text-white font-semibold' : 'text-gray-800 font-semibold'}>minutes — not hours</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-105 animate-gradient-shift shadow-xl"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
            </svg>
            Add to Chrome — It's Free
          </a>
        </div>

        {/* Trust Bar */}
        <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium ${
          darkMode ? 'text-gray-500' : 'text-gray-500'
        }`}>
          {['No credit card required', 'Works with Gmail & Outlook', '30 free RFQs/month', 'SOC 2 compliant'].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Hero visual/mockup */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className={`relative rounded-2xl overflow-hidden border ${
            darkMode
              ? 'border-blue-900/40 shadow-2xl shadow-blue-950/50'
              : 'border-gray-200/80 shadow-2xl shadow-gray-200/60'
          }`}
            style={{
              background: darkMode
                ? 'linear-gradient(135deg, #0d1b3e 0%, #0a1628 50%, #06091a 100%)'
                : 'linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f0f4ff 100%)'
            }}
          >
            {/* Window chrome */}
            <div className={`flex items-center gap-2 px-5 py-3.5 border-b ${darkMode ? 'border-blue-900/30' : 'border-gray-200/80'}`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className={`flex-1 mx-4 h-6 rounded-lg text-xs flex items-center px-3 font-mono ${darkMode ? 'bg-blue-950/60 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
                mail.google.com/mail/u/0
              </div>
            </div>
            {/* Inbox mockup */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Email list */}
              <div className="md:col-span-1 space-y-2">
                <div className={`text-xs font-semibold mb-3 uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Inbox</div>
                {[
                  { label: 'RFQ Detected', subject: 'RFQ #2024-0891 - Steel Parts', from: 'procurement@acme.com', tag: 'RFQ', active: true },
                  { label: 'RFQ Detected', subject: 'Price Request - 500 Units', from: 'buyer@global.co', tag: 'RFQ', active: false },
                  { label: '', subject: 'Team standup notes', from: 'hr@company.com', tag: '', active: false },
                  { label: 'RFQ Detected', subject: 'Quotation Request - BOM', from: 'purchase@fab.net', tag: 'RFQ', active: false },
                ].map((email, i) => (
                  <div key={i} className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                    email.active
                      ? darkMode ? 'bg-blue-900/40 border-blue-700/50' : 'bg-blue-50 border-blue-200'
                      : darkMode ? 'bg-white/4 border-white/6 hover:bg-white/8' : 'bg-white border-gray-100 hover:bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className={`text-xs font-medium truncate ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{email.from}</span>
                      {email.tag && (
                        <span className="flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {email.tag}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs truncate ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{email.subject}</p>
                  </div>
                ))}
              </div>

              {/* Email content / RFQ panel */}
              <div className="md:col-span-2 space-y-3">
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-blue-950/30 border-blue-800/40' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>RFQ #2024-0891 — Steel Parts</p>
                      <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>procurement@acme.com</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      ✓ Auto-Detected
                    </span>
                  </div>
                  <div className={`grid grid-cols-2 gap-2`}>
                    {[
                      { label: 'Part Number', value: 'ST-4420-B' },
                      { label: 'Quantity', value: '2,500 units' },
                      { label: 'Deadline', value: 'Dec 15, 2024' },
                      { label: 'Material', value: 'SS304 Steel' },
                    ].map((item, i) => (
                      <div key={i} className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-gray-50'}`}>
                        <p className={`text-[10px] font-medium uppercase tracking-wide mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</p>
                        <p className={`text-xs font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className={`mt-3 flex gap-2`}>
                    <button className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold text-white gradient-brand transition-all hover:opacity-90">
                      Generate Quote →
                    </button>
                    <button className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${darkMode ? 'border-blue-700/50 text-blue-400 hover:bg-blue-900/30' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                      View PDF
                    </button>
                  </div>
                </div>
                <div className={`flex items-center gap-2 p-3 rounded-xl border ${darkMode ? 'bg-emerald-950/20 border-emerald-800/30' : 'bg-emerald-50 border-emerald-200/60'}`}>
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <p className={`text-xs font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    PDF extracted in 2.3s · 4 items found · Quote generated in 8 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className={`absolute -left-4 top-1/3 hidden lg:flex items-center gap-2 px-3.5 py-2.5 rounded-xl border shadow-xl animate-float ${
            darkMode ? 'bg-[#0d1b3e] border-blue-800/50' : 'bg-white border-gray-200'
          }`} style={{ animationDelay: '0s' }}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>8x Faster</p>
              <p className={`text-[10px] ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Quote response</p>
            </div>
          </div>

          <div className={`absolute -right-4 bottom-1/3 hidden lg:flex items-center gap-2 px-3.5 py-2.5 rounded-xl border shadow-xl animate-float ${
            darkMode ? 'bg-[#0d1b3e] border-blue-800/50' : 'bg-white border-gray-200'
          }`} style={{ animationDelay: '1.5s' }}>
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>2,000+ Teams</p>
              <p className={`text-[10px] ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Using RFQ AutoPilot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

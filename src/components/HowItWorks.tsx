
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HowItWorksProps {
  darkMode: boolean;
}

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    emoji: '🔍',
    title: 'Auto-Detect RFQ Emails Instantly',
    subtitle: 'Step 1: Detect',
    description:
      'RFQ AutoPilot uses intelligent email classification to scan every incoming message in real time. It identifies RFQ emails — even when they don\'t contain the words "RFQ" — by analyzing subject lines, body content, sender patterns, and attachment types.',
    detail: 'Unlike traditional filters that rely on rigid keyword matching, our AI understands procurement language patterns across industries — manufacturing, distribution, export, engineering, and more.',
    highlight: 'No manual tagging. No folder rules. Every RFQ is flagged instantly.',
    color: 'blue',
    link: 'https://rfqautopilot.com/rfq-email-management-tool',
    linkLabel: 'RFQ Email Management Tool →',
  },
  {
    number: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    emoji: '📄',
    title: 'Extract Data from RFQ PDFs Automatically',
    subtitle: 'Step 2: Extract',
    description:
      'Most RFQs arrive as PDF attachments — specification sheets, Bills of Material, technical drawings, and procurement forms. Our extraction engine opens these attachments and pulls out the data that matters.',
    detail: 'Product names, part numbers & SKUs, quantities & units, delivery dates, technical specifications, and buyer contact information — all organized into a structured, editable format.',
    highlight: 'No more re-typing from PDFs. No more copy-paste errors.',
    color: 'indigo',
    link: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf',
    linkLabel: 'PDF Data Extraction →',
  },
  {
    number: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    emoji: '✉️',
    title: 'Generate & Send Quotation Responses with AI',
    subtitle: 'Step 3: Respond',
    description:
      'With your RFQ data extracted, our AI quotation engine drafts professional, accurate quotation responses in seconds. Choose from customizable templates, adjust pricing and terms, and send — all without leaving your inbox.',
    detail: 'Suggests pricing from historical patterns, auto-fills product details & delivery terms, generates branded cover emails, and supports multiple currencies and international Incoterms.',
    highlight: '45–60 minutes per RFQ → under 10 minutes. Respond faster. Win more deals.',
    color: 'cyan',
    link: 'https://rfqautopilot.com/quotation-email-automation',
    linkLabel: 'Quotation Email Automation →',
  },
];

const HowItWorks: React.FC<HowItWorksProps> = ({ darkMode }) => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="how-it-works" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#080c1e]' : 'bg-gray-50/80'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`} />
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-100'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Simple 3-Step Process
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            How RFQ AutoPilot Works —{' '}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            From the moment a request lands in your inbox to the moment your quotation goes out — our{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-300 decoration-gray-600' : 'text-gray-700 decoration-gray-400'}`}>RFQ automation software</a>{' '}
            makes everything faster, smarter, and error-free.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 relative">
          {/* Connector line */}
          <div className={`hidden lg:block absolute top-16 left-1/3 right-1/3 h-0.5 z-0 ${darkMode ? 'bg-gradient-to-r from-blue-700/0 via-blue-700/50 to-blue-700/0' : 'bg-gradient-to-r from-blue-200/0 via-blue-300 to-blue-200/0'}`} />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 group card-hover p-8 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-br from-[#0d1b3e]/80 to-[#080c1e]/60 border-blue-900/40 hover:border-blue-700/60 hover:shadow-2xl hover:shadow-blue-900/30'
                  : 'bg-white border-gray-200/80 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500 ${
                  darkMode ? 'bg-blue-950/60 border border-blue-800/50' : 'bg-blue-50 border border-blue-100'
                }`}>
                  {step.icon}
                </div>
                <span className={`text-5xl font-black tracking-tight opacity-20 ${darkMode ? 'text-blue-400' : 'text-blue-300'}`}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold mb-3 ${
                darkMode ? 'bg-blue-950/50 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                <span>{step.emoji}</span>
                <span>{step.subtitle}</span>
              </div>

              <h3 className={`text-xl font-bold mb-3 leading-snug ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {step.description}
              </p>
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {step.detail}
              </p>
              <div className={`flex items-start gap-2 p-3 rounded-xl ${
                darkMode ? 'bg-blue-950/40 border border-blue-900/40' : 'bg-blue-50/80 border border-blue-100'
              }`}>
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <p className={`text-xs font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  {step.highlight}
                </p>
              </div>
              {step.link && (
                <a
                  href={step.link}
                  className={`mt-4 inline-flex items-center text-xs font-semibold transition-colors duration-200 ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  {step.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-105"
          >
            Start Automating RFQs — Install Free Extension
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

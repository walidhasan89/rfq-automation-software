
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FeaturesProps {
  darkMode: boolean;
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Intelligent RFQ Email Detection',
    description: 'Automatically identify RFQ emails across Gmail and Outlook. Our AI classification scans sender behavior, subject lines, and attachment metadata to surface genuine procurement requests — and ignore everything else.',
    badge: 'AI-Powered',
    link: 'https://rfqautopilot.com/rfq-email-management-tool',
    linkLabel: 'RFQ Email Management →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'PDF & Document Data Extraction',
    description: 'Extract structured data from RFQ attachments including PDFs, Word documents, Excel spreadsheets, and scanned images. Handles complex procurement forms, multi-page spec sheets, and technical drawings.',
    badge: 'OCR + Parsing',
    link: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf',
    linkLabel: 'PDF Extraction Details →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI-Powered Quotation Generation',
    description: 'Generate complete, professional quotation responses using AI. Customize templates with your branding, product catalog, terms & conditions, and pricing. AI learns from past quotations to improve accuracy.',
    badge: 'Generative AI',
    link: 'https://rfqautopilot.com/ai-rfq-generator',
    linkLabel: 'AI Quote Generator →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Customizable Quote Templates',
    description: 'Create and save unlimited quote templates for different products, clients, regions, or industries. Standardize your quotation format across your team while allowing per-quote customization.',
    badge: 'Unlimited Templates',
    link: 'https://rfqautopilot.com/quotation-email-automation',
    linkLabel: 'Quotation Automation →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'RFQ Analytics Dashboard',
    description: 'Track RFQ response metrics — volume received, average response time, conversion rates, top-requesting clients, and revenue pipeline. Identify bottlenecks and opportunities with actionable data.',
    badge: 'Full Analytics',
    link: 'https://rfqautopilot.com/ai-rfq-processing-tool',
    linkLabel: 'AI Processing Tool →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Export & Integration',
    description: 'Export extracted RFQ data and generated quotes to CSV, Excel, or directly into your CRM and ERP systems. Compatible with Salesforce, HubSpot, Zoho CRM, SAP, and QuickBooks via CSV import or API.',
    badge: 'CRM Ready',
    link: 'https://rfqautopilot.com/procurement-chrome-extension',
    linkLabel: 'Procurement Extension →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Multi-Account Support',
    description: 'Connect multiple Gmail and Outlook accounts to a single RFQ AutoPilot dashboard. Perfect for sales teams managing separate regional or product-specific inboxes.',
    badge: 'Pro Feature',
    link: 'https://rfqautopilot.com/gmail-chrome-extension-for-sales',
    linkLabel: 'Gmail Sales Extension →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Smart Notifications & Deadlines',
    description: 'Never miss an RFQ deadline. RFQ AutoPilot detects submission deadlines mentioned in emails and PDFs, and sends smart alerts before time runs out.',
    badge: 'Smart Alerts',
    link: 'https://rfqautopilot.com/rfq-automation-software',
    linkLabel: 'RFQ Automation Details →',
  },
];

const Features: React.FC<FeaturesProps> = ({ darkMode }) => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="features" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#06091a]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-[0.06] ${darkMode ? 'bg-blue-600' : 'bg-blue-200'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Purpose-Built Features
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Powerful Features Built for{' '}
            <span className="gradient-text">RFQ Workflow Automation</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Every feature is purpose-built for teams that process{' '}
            <a href="https://en.wikipedia.org/wiki/Request_for_quotation" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-300 decoration-gray-600' : 'text-gray-700 decoration-gray-300'}`}>
              Requests for Quotation
            </a>{' '}
            — whether you handle 10 RFQs per week or 500.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group card-hover p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col ${
                darkMode
                  ? 'bg-gradient-to-br from-[#0d1b3e]/60 to-[#080c1e]/40 border-blue-900/40 hover:border-blue-700/60 hover:shadow-xl hover:shadow-blue-900/20'
                  : 'bg-white border-gray-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50'
              }`}
            >
              {/* Gradient shine on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-600/5 to-transparent'
                  : 'bg-gradient-to-br from-blue-50/80 to-transparent'
              }`} />

              <div className="relative z-10 flex flex-col flex-1">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-blue-500 transition-all duration-300 group-hover:scale-110 ${
                  darkMode ? 'bg-blue-950/60 border border-blue-800/50' : 'bg-blue-50 border border-blue-100'
                }`}>
                  {feature.icon}
                </div>
                <div className="mb-3">
                  <span className={`inline-flex text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    darkMode ? 'bg-blue-950/50 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {feature.badge}
                  </span>
                </div>
                <h3 className={`text-base font-bold mb-2.5 leading-snug ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed flex-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
                {feature.link && (
                  <a
                    href={feature.link}
                    className={`mt-4 text-xs font-semibold transition-colors duration-200 ${
                      darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    {feature.linkLabel}
                  </a>
                )}
              </div>
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
            Add to Chrome — It's Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

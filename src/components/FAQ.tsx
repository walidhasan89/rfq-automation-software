import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FAQProps {
  darkMode: boolean;
}

const faqs = [
  {
    q: 'What is RFQ automation software?',
    a: 'RFQ automation software is a tool that streamlines the Request for Quotation process by automatically detecting RFQ emails, extracting data from attached documents (like PDFs and spreadsheets), and helping users generate quotation responses faster. Instead of manually reading emails, copying data, and drafting quotes from scratch, RFQ automation software handles these repetitive tasks — reducing response times, minimizing errors, and allowing sales teams to focus on closing deals. RFQ AutoPilot is an AI-powered RFQ automation tool that works as a Chrome Extension inside Gmail and Outlook.',
  },
  {
    q: 'How does RFQ AutoPilot detect RFQ emails automatically?',
    a: 'RFQ AutoPilot uses AI-based email classification to analyze incoming messages in real time. It examines subject lines, email body content, sender patterns, and attachment metadata to determine whether an email is a Request for Quotation. Unlike basic keyword filters, our AI understands procurement language patterns across industries — so it catches RFQs even when they use terms like "pricing request," "bid invitation," "tender inquiry," or simply "please quote." Detected RFQs are automatically labeled and prioritized in your inbox.',
  },
  {
    q: 'What types of documents can RFQ AutoPilot extract data from?',
    a: 'RFQ AutoPilot can extract structured data from PDF files, Microsoft Word documents (.docx), Excel spreadsheets (.xlsx, .csv), and scanned images (using OCR). It handles complex procurement forms, multi-page specification sheets, Bills of Material (BOMs), technical drawings with text annotations, and standard RFQ templates used by major procurement platforms.',
  },
  {
    q: 'Does RFQ AutoPilot work with Gmail and Outlook?',
    a: 'Yes. RFQ AutoPilot is a Chrome Extension that integrates natively with both Gmail (including Google Workspace business accounts) and Microsoft Outlook (web version and Microsoft 365). All features — email detection, PDF extraction, and quote generation — work identically on both platforms. No additional setup or IT configuration is required.',
  },
  {
    q: 'Is RFQ AutoPilot free to use?',
    a: 'Yes, RFQ AutoPilot offers a permanent free plan that includes 30 RFQs per month, 10 AI credits for quotation generation, basic email detection, standard templates, and access to the analytics dashboard. No credit card is required to start. For higher volumes, custom templates, and priority support, paid plans start at $14.99/month.',
  },
  {
    q: 'How is RFQ AutoPilot different from CRM tools like Salesforce or HubSpot?',
    a: 'CRM tools are designed for managing customer relationships, sales pipelines, and contact databases. They are not built to detect RFQ emails, extract data from procurement PDFs, or generate quotation responses. RFQ AutoPilot is purpose-built for the RFQ-to-quote workflow. It complements your CRM — you can export extracted RFQ data and generated quotes directly into Salesforce, HubSpot, Zoho, or any CRM via CSV export or API.',
  },
  {
    q: 'How fast can I respond to an RFQ using RFQ AutoPilot?',
    a: 'Most users report reducing their per-RFQ response time from 45–90 minutes (manual process) to 5–12 minutes with RFQ AutoPilot. The exact time depends on the complexity of the RFQ and how much customization your quote requires. For straightforward pricing requests, some users generate and send quotes in under 3 minutes.',
  },
  {
    q: 'Is my email data secure with RFQ AutoPilot?',
    a: 'Absolutely. RFQ AutoPilot encrypts all data in transit using TLS 1.3 and at rest using AES-256 encryption. We are GDPR compliant and SOC 2 Type II certified. Your email content is processed in real time and is never stored permanently on our servers. We never share your data with third parties. You retain full control of your information at all times.',
  },
  {
    q: 'Can I use RFQ AutoPilot with my team?',
    a: 'Yes. The Pro plan supports multi-account access, allowing your entire sales or quotation team to use RFQ AutoPilot from their individual Gmail or Outlook accounts. Team analytics, shared templates, and centralized reporting are included. For enterprise teams with 10+ users, contact our sales team for custom pricing and onboarding.',
  },
  {
    q: 'What industries does RFQ AutoPilot support?',
    a: 'RFQ AutoPilot is industry-agnostic and works for any business that receives Requests for Quotation via email. Our most active users include manufacturers (CNC machining, injection molding, metal fabrication, electronics), exporters (agricultural commodities, textiles, chemicals), distributors (industrial supplies, fasteners, electrical components), construction firms, engineering consultancies, and B2B SaaS sales teams handling enterprise procurement requests.',
  },
  {
    q: 'Do I need to install any desktop software?',
    a: 'No. RFQ AutoPilot is a lightweight Chrome Extension. Simply install it from the Chrome Web Store, connect your Gmail or Outlook account, and you\'re ready to go. There is no desktop application, no server installation, and no IT support required.',
  },
  {
    q: 'Can RFQ AutoPilot handle RFQs in different languages?',
    a: 'Yes. RFQ AutoPilot\'s detection and extraction engines support multiple languages including English, Spanish, French, German, Portuguese, Chinese, Arabic, and Hindi. AI quotation generation currently supports English with more languages being added based on user demand.',
  },
];

interface FAQItemProps {
  q: string;
  a: string;
  darkMode: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a, darkMode, isOpen, onToggle }) => (
  <div className={`border-b last:border-b-0 transition-colors ${darkMode ? 'border-blue-900/30' : 'border-gray-100'}`}>
    <button
      onClick={onToggle}
      className={`w-full flex items-start justify-between gap-4 py-5 px-0 text-left transition-colors ${
        darkMode ? 'hover:text-white' : 'hover:text-gray-900'
      }`}
    >
      <span className={`text-base font-semibold leading-snug ${
        isOpen
          ? darkMode ? 'text-white' : 'text-gray-900'
          : darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {q}
      </span>
      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
        isOpen
          ? 'gradient-brand text-white rotate-45'
          : darkMode ? 'bg-blue-950/60 text-blue-400 border border-blue-800/50' : 'bg-gray-100 text-gray-500'
      }`}>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
      <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {a}
      </p>
    </div>
  </div>
);

const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="faq" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#06091a]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-[0.06] ${darkMode ? 'bg-blue-600' : 'bg-blue-50'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-16">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            FAQ
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Frequently Asked Questions About{' '}
            <span className="gradient-text">RFQ AutoPilot</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to know about our RFQ automation software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className={`p-8 rounded-2xl border ${
            darkMode ? 'bg-[#0d1b3e]/50 border-blue-900/40' : 'bg-white border-gray-200/80'
          }`}>
            {faqs.slice(0, 6).map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                darkMode={darkMode}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className={`p-8 rounded-2xl border ${
            darkMode ? 'bg-[#0d1b3e]/50 border-blue-900/40' : 'bg-white border-gray-200/80'
          }`}>
            {faqs.slice(6).map((faq, i) => (
              <FAQItem
                key={i + 6}
                q={faq.q}
                a={faq.a}
                darkMode={darkMode}
                isOpen={openIndex === i + 6}
                onToggle={() => setOpenIndex(openIndex === i + 6 ? null : i + 6)}
              />
            ))}
          </div>
        </div>

        <div className={`mt-10 p-6 rounded-2xl border text-center ${
          darkMode ? 'border-blue-900/40 bg-[#0d1b3e]/40' : 'border-gray-200 bg-gray-50'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Still have questions?{' '}
            <a
              href="mailto:support@rfqautopilot.com"
              className="text-blue-500 hover:text-blue-400 font-semibold"
            >
              Contact our support team
            </a>
            {' '}— we typically respond within a few hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

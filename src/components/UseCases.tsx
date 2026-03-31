
import { useScrollReveal } from '../hooks/useScrollReveal';

interface UseCasesProps {
  darkMode: boolean;
}

const useCases = [
  {
    icon: '🏭',
    title: 'Manufacturers',
    description: 'Receive RFQs from procurement teams, OEMs, and distributors daily. Each includes detailed specs, BOMs, and tight deadlines. RFQ AutoPilot extracts specifications from technical PDFs and auto-populates your quotation templates.',
    result: 'Cut response time from 4 hours → 45 mins, winning 22% more contracts in Q1.',
    stats: [{ label: 'Faster Response', value: '5x' }, { label: 'More Contracts', value: '+22%' }],
    link: 'https://rfqautopilot.com/rfq-software-for-manufacturers',
    linkLabel: 'RFQ Software for Manufacturers →',
  },
  {
    icon: '🌍',
    title: 'Exporters & International Traders',
    description: 'Managing RFQs across time zones and languages adds complexity. RFQ AutoPilot supports multi-language emails, international trade terms (FOB, CIF, DDP), and multiple currencies.',
    result: 'Process RFQs from 12 countries in USD, EUR, and GBP from a single Gmail inbox.',
    stats: [{ label: 'Countries Supported', value: '45+' }, { label: 'Currencies', value: 'Multi' }],
    link: 'https://rfqautopilot.com/rfq-management-for-export-companies',
    linkLabel: 'RFQ for Export Companies →',
  },
  {
    icon: '📦',
    title: 'Distributors & Wholesalers',
    description: "High-volume distributors juggle hundreds of pricing requests. RFQ AutoPilot's batch processing and template system lets you generate accurate quotes at scale — even for catalogs with thousands of SKUs.",
    result: '87% fewer quotation errors, daily output increased from 15 to 60 quotes.',
    stats: [{ label: 'Error Reduction', value: '87%' }, { label: 'Daily Quotes', value: '4x' }],
    link: 'https://rfqautopilot.com/rfq-software-for-distributors',
    linkLabel: 'RFQ for Distributors →',
  },
  {
    icon: '💼',
    title: 'Sales & Pre-Sales Teams',
    description: "Your sales team shouldn't spend 60% of their day on data entry. RFQ AutoPilot handles the administrative burden so your closers can focus on building relationships and negotiating deals.",
    result: '95% reduction in missed RFQs from shared inbox for a B2B SaaS sales team.',
    stats: [{ label: 'Missed RFQs', value: '-95%' }, { label: 'Time Saved', value: '3hrs/day' }],
    link: 'https://rfqautopilot.com/rfq-software-small-business',
    linkLabel: 'RFQ for Small Business →',
  },
  {
    icon: '🏗️',
    title: 'Engineering & Construction',
    description: "Large projects generate massive RFQ packages — often 50+ page PDFs with material lists, compliance requirements, and submission instructions. RFQ AutoPilot's extraction engine handles complex documents that would take hours manually.",
    result: 'Process 50+ page RFQ packages in minutes, not hours.',
    stats: [{ label: 'Doc Pages', value: '50+' }, { label: 'Processing Time', value: '<5 min' }],
    link: 'https://rfqautopilot.com/ai-rfq-processing-tool',
    linkLabel: 'AI RFQ Processing Tool →',
  },
];

const UseCases: React.FC<UseCasesProps> = ({ darkMode }) => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="use-cases" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#080c1e]' : 'bg-gray-50/80'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.08] ${darkMode ? 'bg-indigo-600' : 'bg-indigo-100'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-16">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Who It's For
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Built for Teams That Process{' '}
            <span className="gradient-text">RFQs Every Day</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            If your business receives Requests for Quotation by email, RFQ AutoPilot was built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className={`group card-hover p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                darkMode
                  ? 'bg-gradient-to-br from-[#0d1b3e]/60 to-[#080c1e]/40 border-blue-900/40 hover:border-blue-700/60 hover:shadow-2xl hover:shadow-blue-900/20'
                  : 'bg-white border-gray-200/80 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60'
              }`}
            >
              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon */}
                <div className="text-4xl mb-4">{useCase.icon}</div>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {useCase.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {useCase.description}
                </p>

                {/* Stats */}
                <div className="flex gap-3 mb-5">
                  {useCase.stats.map((stat, si) => (
                    <div key={si} className={`flex-1 p-3 rounded-xl text-center ${
                      darkMode ? 'bg-blue-950/40' : 'bg-blue-50'
                    }`}>
                      <p className="text-xl font-black gradient-text">{stat.value}</p>
                      <p className={`text-[10px] font-medium mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className={`flex items-start gap-2 p-3 rounded-xl mb-4 ${
                  darkMode ? 'bg-emerald-950/20 border border-emerald-800/30' : 'bg-emerald-50 border border-emerald-200/50'
                }`}>
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <p className={`text-xs font-medium italic ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    {useCase.result}
                  </p>
                </div>

                {/* Internal link */}
                <a
                  href={useCase.link}
                  className={`text-xs font-semibold transition-colors duration-200 ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  {useCase.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-105"
          >
            Join 2,000+ Teams Automating RFQs → Install Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

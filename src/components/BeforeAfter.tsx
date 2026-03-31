
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BeforeAfterProps {
  darkMode: boolean;
}

const rows = [
  {
    stage: 'Identifying RFQ emails',
    before: 'Scroll through inbox manually, miss RFQs buried in threads',
    after: 'AI auto-detects and labels RFQ emails instantly',
  },
  {
    stage: 'Opening & reading attachments',
    before: 'Download PDFs one by one, read through pages of specs',
    after: 'Auto-extraction pulls key data in seconds',
  },
  {
    stage: 'Entering data',
    before: 'Copy-paste from PDFs into Excel — error-prone, tedious',
    after: 'Structured data ready to use, no manual entry',
  },
  {
    stage: 'Drafting quotation',
    before: 'Start from scratch or hunt for old templates',
    after: 'AI generates complete quote from templates',
  },
  {
    stage: 'Formatting & sending',
    before: 'Manually format, attach files, compose email',
    after: 'One-click send with branded template',
  },
  {
    stage: 'Time per RFQ',
    before: '45–90 minutes',
    after: '5–12 minutes',
    highlight: true,
  },
  {
    stage: 'Daily capacity',
    before: '8–12 RFQs per person',
    after: '40–60 RFQs per person',
    highlight: true,
  },
  {
    stage: 'Error rate',
    before: 'High (typos, wrong specs, missed items)',
    after: 'Near-zero (auto-validated data)',
  },
  {
    stage: 'Missed RFQ deadlines',
    before: 'Frequent',
    after: 'Rare (smart deadline alerts)',
  },
  {
    stage: 'Response speed vs competitors',
    before: 'Slow — lose deals to faster responders',
    after: 'First to respond — win more contracts',
    highlight: true,
  },
];

const BeforeAfter: React.FC<BeforeAfterProps> = ({ darkMode }) => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="comparison" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#06091a]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.06] ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-16">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Before vs After
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            The Real Cost of Manual RFQ Processing
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Most businesses don't realize how much time and money their manual RFQ process actually costs. Here's what changes when you switch.
          </p>
        </div>

        {/* Desktop Table */}
        <div className={`hidden md:block rounded-2xl border overflow-hidden ${
          darkMode ? 'border-blue-900/40' : 'border-gray-200'
        }`}>
          <table className="w-full">
            <thead>
              <tr className={darkMode ? 'bg-[#0d1b3e]' : 'bg-gray-50'}>
                <th className={`px-6 py-4 text-left text-xs font-bold uppercase tracking-wider w-1/4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  RFQ Workflow Stage
                </th>
                <th className={`px-6 py-4 text-left text-xs font-bold uppercase tracking-wider w-[37.5%] ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                  ❌ Before (Manual Process)
                </th>
                <th className={`px-6 py-4 text-left text-xs font-bold uppercase tracking-wider w-[37.5%] ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  ✅ After (With RFQ AutoPilot)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t transition-colors ${
                    row.highlight
                      ? darkMode
                        ? 'bg-blue-950/20 border-blue-900/40'
                        : 'bg-blue-50/60 border-blue-100'
                      : darkMode
                        ? 'border-blue-900/20 hover:bg-blue-950/10'
                        : 'border-gray-100 hover:bg-gray-50/60'
                  }`}
                >
                  <td className={`px-6 py-4 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {row.stage}
                  </td>
                  <td className={`px-6 py-4 text-sm ${darkMode ? 'text-red-400/80' : 'text-red-600/90'}`}>
                    {row.before}
                  </td>
                  <td className={`px-6 py-4 text-sm font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div key={i} className={`p-5 rounded-xl border ${
              row.highlight
                ? darkMode ? 'bg-blue-950/30 border-blue-800/50' : 'bg-blue-50 border-blue-200'
                : darkMode ? 'bg-[#0d1b3e]/60 border-blue-900/30' : 'bg-white border-gray-200'
            }`}>
              <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {row.stage}
              </p>
              <div className="space-y-2">
                <div className={`flex items-start gap-2 p-2.5 rounded-lg ${darkMode ? 'bg-red-950/20' : 'bg-red-50'}`}>
                  <span className="text-sm">❌</span>
                  <p className={`text-sm ${darkMode ? 'text-red-400/80' : 'text-red-600'}`}>{row.before}</p>
                </div>
                <div className={`flex items-start gap-2 p-2.5 rounded-lg ${darkMode ? 'bg-emerald-950/20' : 'bg-emerald-50'}`}>
                  <span className="text-sm">✅</span>
                  <p className={`text-sm font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>{row.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className={`mt-10 p-8 rounded-2xl border text-center ${
          darkMode ? 'bg-gradient-to-br from-blue-950/40 to-[#0d1b3e]/40 border-blue-800/40' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/60'
        }`}>
          <p className={`text-base font-medium mb-4 leading-relaxed max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <strong className={darkMode ? 'text-white' : 'text-gray-900'}>The Bottom Line:</strong> Organizations using{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-200 decoration-gray-600' : 'text-gray-900 decoration-gray-400'}`}>RFQ automation software</a>{' '}
            respond <span className="gradient-text font-bold">30% faster</span> to procurement requests.{' '}
            <a
              href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-300 decoration-gray-600' : 'text-gray-700 decoration-gray-400'}`}
            >
              Research shows
            </a>{' '}
            the first supplier to submit an accurate quote{' '}
            <span className="gradient-text font-bold">wins the deal 60% of the time</span>.
          </p>
          <p className={`text-sm mb-6 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            With over{' '}
            <a
              href="https://www.radicati.com/wp/wp-content/uploads/2021/Email_Statistics_Report,_2021-2025_Executive_Summary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-400 decoration-gray-600' : 'text-gray-600 decoration-gray-400'}`}
            >
              300 billion emails sent daily
            </a>
            , RFQs get buried fast. Automation is no longer optional — it's a competitive advantage.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-105"
          >
            Stop Losing Deals to Slow Responses → Install Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

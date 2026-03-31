
import { useScrollReveal } from '../hooks/useScrollReveal';

interface IntegrationsProps {
  darkMode: boolean;
}

const integrations = [
  { name: 'Gmail', icon: '📧', desc: 'Native Gmail integration for Google Workspace and personal accounts', link: 'https://rfqautopilot.com/gmail-chrome-extension-for-sales' },
  { name: 'Outlook', icon: '📨', desc: 'Full Microsoft Outlook web & Microsoft 365 compatibility', link: 'https://rfqautopilot.com/outlook-add-in-for-rfq' },
  { name: 'Salesforce', icon: '☁️', desc: 'Export RFQ data via CSV or API', link: null },
  { name: 'HubSpot', icon: '🟠', desc: 'Push extracted data into HubSpot CRM', link: null },
  { name: 'Zoho CRM', icon: '🔵', desc: 'Zoho CRM compatible via CSV import', link: null },
  { name: 'Google Sheets', icon: '📊', desc: 'One-click export to Google Sheets', link: null },
  { name: 'SAP', icon: '🏢', desc: 'ERP integration via CSV export', link: null },
  { name: 'QuickBooks', icon: '💚', desc: 'Accounting integration for invoicing', link: null },
];

const securityItems = [
  { icon: '🔒', label: 'TLS 1.3 Encryption', desc: 'All data encrypted in transit' },
  { icon: '🛡️', label: 'AES-256 at Rest', desc: 'Enterprise-grade data encryption' },
  { icon: '🌍', label: 'GDPR Compliant', desc: 'Your data is never stored permanently' },
  { icon: '✅', label: 'SOC 2 Type II', desc: 'Independently audited security' },
];

const Integrations: React.FC<IntegrationsProps> = ({ darkMode }) => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="integrations" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#080c1e]' : 'bg-gray-50/80'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] ${darkMode ? 'bg-blue-700' : 'bg-blue-100'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-16">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Zero-Friction Setup
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Works Inside the{' '}
            <span className="gradient-text">Tools You Already Use</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A lightweight <a href="https://rfqautopilot.com/procurement-chrome-extension" className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-300 decoration-gray-600' : 'text-gray-700 decoration-gray-400'}`}>procurement Chrome Extension</a> that integrates directly into{' '}
            <a href="https://workspace.google.com/products/gmail/" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-300 decoration-gray-600' : 'text-gray-700 decoration-gray-400'}`}>Gmail</a> and{' '}
            <a href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-gray-300 decoration-gray-600' : 'text-gray-700 decoration-gray-400'}`}>Microsoft Outlook</a>. No new platforms to learn. No IT setup required.
          </p>
        </div>

        {/* Integrations grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {integrations.map((item, i) => {
            const inner = (
              <>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <p className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.name}</p>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</p>
                {item.link && (
                  <span className={`mt-2 text-[10px] font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Learn more →
                  </span>
                )}
              </>
            );
            const cls = `group card-hover p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center ${
              darkMode
                ? 'bg-[#0d1b3e]/60 border-blue-900/40 hover:border-blue-700/60 hover:shadow-xl hover:shadow-blue-900/20'
                : 'bg-white border-gray-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50'
            }`;
            return item.link ? (
              <a key={i} href={item.link} className={cls}>
                {inner}
              </a>
            ) : (
              <div key={i} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Security grid */}
        <div className={`p-8 rounded-2xl border ${
          darkMode ? 'bg-gradient-to-br from-[#0d1b3e]/60 to-[#080c1e]/40 border-blue-900/40' : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            🔐 Security & Compliance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityItems.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${
                darkMode ? 'bg-blue-950/30' : 'bg-gray-50'
              }`}>
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</p>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={`text-center text-sm mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            No third-party data sharing — ever. You retain full control of your information at all times.
          </p>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-105"
          >
            Install the Chrome Extension — Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

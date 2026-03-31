
interface FooterProps {
  darkMode: boolean;
}

const products = [
  {
    name: 'RFQ AutoPilot',
    tagline: 'AI RFQ Email Automation',
    description: 'Auto-detect RFQ emails, extract PDF data & generate quotes in Gmail & Outlook.',
    href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    badge: 'You are here',
    badgeType: 'current',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    name: 'ReplyChief',
    tagline: 'LinkedIn AI Copilot',
    description: 'AI-powered LinkedIn reply assistant. Engage smarter, grow faster.',
    href: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
    badge: 'Chrome Extension',
    badgeType: 'ext',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'indigo',
  },
  {
    name: 'AdminPalette',
    tagline: 'Shopify Admin Enhancer',
    description: 'Supercharge your Shopify admin with powerful UI enhancements.',
    href: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
    badge: 'Chrome Extension',
    badgeType: 'ext',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: 'violet',
  },
];

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: darkMode ? '#04060f' : '#0a0a0f',
        borderColor: darkMode ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Our Products — highlighted block */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">Our Products</h4>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.3), transparent)' }} />
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-blue-400 transition-colors duration-200"
            >
              by Inoviqa →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product) => {
              const colorMap: Record<string, { ring: string; bg: string; icon: string; badge: string; badgeBg: string }> = {
                blue: {
                  ring: 'rgba(59,130,246,0.5)',
                  bg: 'rgba(59,130,246,0.08)',
                  icon: '#3b82f6',
                  badge: '#1d4ed8',
                  badgeBg: 'rgba(59,130,246,0.15)',
                },
                indigo: {
                  ring: 'rgba(99,102,241,0.4)',
                  bg: 'rgba(99,102,241,0.06)',
                  icon: '#818cf8',
                  badge: '#4f46e5',
                  badgeBg: 'rgba(99,102,241,0.12)',
                },
                violet: {
                  ring: 'rgba(139,92,246,0.4)',
                  bg: 'rgba(139,92,246,0.06)',
                  icon: '#a78bfa',
                  badge: '#7c3aed',
                  badgeBg: 'rgba(139,92,246,0.12)',
                },
              };
              const c = colorMap[product.color];
              const isCurrent = product.badgeType === 'current';

              return (
                <a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-300"
                  style={{
                    background: isCurrent
                      ? `linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(29,78,216,0.08) 100%)`
                      : 'rgba(255,255,255,0.03)',
                    borderColor: isCurrent ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.06)',
                    boxShadow: isCurrent ? `0 0 24px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.05)` : 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = c.ring;
                    el.style.background = `linear-gradient(135deg, ${c.bg} 0%, rgba(255,255,255,0.02) 100%)`;
                    el.style.transform = 'translateY(-3px)';
                    el.style.boxShadow = `0 8px 32px ${c.ring.replace('0.4', '0.15')}, 0 0 0 1px ${c.ring}`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = isCurrent ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.06)';
                    el.style.background = isCurrent
                      ? 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(29,78,216,0.08) 100%)'
                      : 'rgba(255,255,255,0.03)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = isCurrent ? '0 0 24px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none';
                  }}
                >
                  {/* Icon + Badge row */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: c.bg, color: c.icon, border: `1px solid ${c.ring.replace('0.4', '0.25')}` }}
                    >
                      {product.icon}
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: isCurrent ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' : c.badgeBg,
                        color: isCurrent ? '#fff' : c.icon,
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{product.name}</p>
                    <p className="text-[11px] font-semibold mb-1.5" style={{ color: c.icon }}>{product.tagline}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-xs font-semibold mt-auto" style={{ color: c.icon }}>
                    <span>View Extension</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot Logo"
                className="w-8 h-8 rounded-lg object-contain"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span className="font-bold text-lg text-white">
                RFQ <span className="gradient-text">AutoPilot</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              AI-powered <a href="/rfq-automation-software" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 underline underline-offset-2 decoration-gray-600 hover:decoration-blue-400">RFQ automation software</a> for Gmail &amp; Outlook. Detect, extract, quote — faster.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white gradient-brand transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
              Add to Chrome — Free
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
              ].map(item => (
                <li key={item.label}>
                  {item.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Inoviqa
                </a>
              </li>
              <li>
                <a
                  href="https://rfqautopilot.com/rfq-email-management-tool"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  RFQ Email Management
                </a>
              </li>
              <li>
                <a
                  href="https://rfqautopilot.com/ai-rfq-generator"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  AI RFQ Generator
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Inoviqa
            </a>
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
            <span>Trusted by 2,000+ teams in 45 countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

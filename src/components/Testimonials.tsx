
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TestimonialsProps {
  darkMode: boolean;
}

const testimonials = [
  {
    stars: 5,
    quote: "We used to spend 3 hours every morning just sorting through emails to find RFQs. Now RFQ AutoPilot flags them automatically. Our quote response time dropped from 6 hours to under 1 hour. We've closed 4 extra deals per month since switching.",
    name: 'Rajesh M.',
    title: 'Export Manager',
    company: 'Auto Parts Manufacturer, India',
    avatar: 'RM',
    color: 'blue',
  },
  {
    stars: 5,
    quote: "The PDF extraction alone is worth the subscription. We get 30-page spec sheets from procurement teams, and RFQ AutoPilot pulls out part numbers, quantities, and deadlines in seconds. It would take our team 45 minutes to do that manually.",
    name: 'Sarah T.',
    title: 'Sales Operations Lead',
    company: 'Industrial Distributor, USA',
    avatar: 'ST',
    color: 'indigo',
  },
  {
    stars: 5,
    quote: "As a one-person export operation, I was drowning in RFQ emails from different countries. RFQ AutoPilot handles everything — detection, extraction, even drafting my quotation emails. It's like having a full-time assistant for $15/month.",
    name: 'Marco L.',
    title: 'Independent Trader',
    company: 'Agricultural Commodities, Brazil',
    avatar: 'ML',
    color: 'cyan',
  },
  {
    stars: 5,
    quote: "We compared 5 different RFQ tools. Most required us to leave our inbox and use a separate platform. RFQ AutoPilot is the only one that works directly inside Gmail. Zero learning curve for our team of 12 sales reps.",
    name: 'David K.',
    title: 'VP of Sales',
    company: 'Electronic Components Distributor, Germany',
    avatar: 'DK',
    color: 'blue',
  },
];

const caseStudy = {
  company: 'Mid-size fastener manufacturer (85 employees)',
  problem: '60+ RFQ emails/week, 2 full-time staff dedicated to processing',
  solution: 'Deployed RFQ AutoPilot Pro across sales team',
  results: [
    { metric: 'Processing staff', before: '2 FTE', after: '0.5 FTE' },
    { metric: 'Quote output', before: 'Baseline', after: '+300%' },
    { metric: 'Response time', before: '8 hours avg', after: '90 minutes' },
    { metric: 'ROI achieved', before: '—', after: 'In 3 weeks' },
  ],
};

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="testimonials" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#080c1e]' : 'bg-gray-50/80'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-16">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Customer Stories
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Trusted by Sales Teams, Manufacturers,{' '}
            <span className="gradient-text">and Exporters Worldwide</span>
          </h2>
          <div className={`flex items-center justify-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <Stars count={5} />
            <span>2,000+ teams · 45 countries · 4.9/5 rating</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group card-hover p-7 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#0d1b3e]/60 border-blue-900/40 hover:border-blue-700/60 hover:shadow-2xl hover:shadow-blue-900/20'
                  : 'bg-white border-gray-200/80 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50'
              }`}
            >
              <Stars count={t.stars} />
              <blockquote className={`mt-4 text-sm leading-relaxed italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                "{t.quote}"
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 gradient-brand`}>
                  {t.avatar}
                </div>
                <div>
                  <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{t.title} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className={`p-8 rounded-2xl border ${
          darkMode
            ? 'bg-gradient-to-br from-blue-950/40 to-[#0d1b3e]/60 border-blue-800/50'
            : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/60'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold mb-5 ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
            📊 Case Study Snapshot
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Company</p>
                <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{caseStudy.company}</p>
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Problem</p>
                <p className={`text-sm ${darkMode ? 'text-red-400/80' : 'text-red-600'}`}>{caseStudy.problem}</p>
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Solution</p>
                <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{caseStudy.solution}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {caseStudy.results.map((r, i) => (
                <div key={i} className={`p-4 rounded-xl ${darkMode ? 'bg-blue-950/40' : 'bg-white'}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{r.metric}</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">❌</span>
                      <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{r.before}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">✅</span>
                      <span className={`text-sm font-bold gradient-text`}>{r.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-105"
          >
            Join 2,000+ Teams → Install Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

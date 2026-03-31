import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PricingProps {
  darkMode: boolean;
}

const plans = [
  {
    name: 'Free',
    badge: null,
    emoji: '🆓',
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'Perfect for freelancers and small teams getting started with RFQ automation.',
    cta: 'Install Free →',
    ctaHref: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    primary: false,
    features: [
      { text: '30 RFQs per month', included: true },
      { text: '10 AI Credits', included: true },
      { text: 'Basic email RFQ detection', included: true },
      { text: 'Standard quotation templates', included: true },
      { text: 'Analytics dashboard (basic)', included: true },
      { text: 'Gmail & Outlook support', included: true },
      { text: 'Custom templates', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Solo',
    badge: 'Most Popular',
    emoji: '🚀',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    yearlySavings: '$30.88/year',
    desc: 'Ideal for individual sales reps, solopreneurs, and small export businesses.',
    cta: 'Start Solo Plan →',
    ctaHref: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    primary: true,
    features: [
      { text: '300 RFQs per month', included: true },
      { text: '100 AI Credits', included: true },
      { text: '200 data exports/month (CSV, Excel)', included: true },
      { text: 'Advanced RFQ email detection', included: true },
      { text: 'Custom quotation templates', included: true },
      { text: '5 saved quote templates', included: true },
      { text: 'Full analytics dashboard', included: true },
      { text: 'Email & chat support', included: true },
    ],
  },
  {
    name: 'Pro',
    badge: null,
    emoji: '💎',
    monthlyPrice: 29.99,
    yearlyPrice: 300,
    yearlySavings: '$59.88/year',
    desc: 'Built for teams, agencies, and high-volume operations that can\'t afford slow responses.',
    cta: 'Start Pro Plan →',
    ctaHref: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    primary: false,
    features: [
      { text: 'Unlimited RFQs', included: true },
      { text: '300 AI Credits', included: true },
      { text: 'Unlimited data exports', included: true },
      { text: 'Unlimited saved quote templates', included: true },
      { text: 'Full analytics + team reporting', included: true },
      { text: 'Priority support (< 4-hour response)', included: true },
      { text: 'Multi-account support', included: true },
      { text: 'API access + Dedicated onboarding', included: true },
    ],
  },
];

const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  const [yearly, setYearly] = useState(true);
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="pricing" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#06091a]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-[0.08] ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`} />
      </div>

      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-12">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Simple Transparent Pricing
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Start Free,{' '}
            <span className="gradient-text">Scale as You Grow</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            No contracts. Cancel anytime. Every plan includes core RFQ detection and extraction.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3">
            <span className={`text-sm font-medium ${!yearly ? (darkMode ? 'text-white' : 'text-gray-900') : (darkMode ? 'text-gray-500' : 'text-gray-400')}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                yearly ? 'bg-blue-600' : darkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
              aria-label="Toggle billing period"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${yearly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-medium ${yearly ? (darkMode ? 'text-white' : 'text-gray-900') : (darkMode ? 'text-gray-500' : 'text-gray-400')}`}>
              Yearly
            </span>
            {yearly && (
              <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                Save up to 17%
              </span>
            )}
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                plan.primary
                  ? 'border-blue-500/60 shadow-2xl shadow-blue-500/20 scale-[1.02]'
                  : darkMode
                    ? 'border-blue-900/40 hover:border-blue-700/60'
                    : 'border-gray-200 hover:border-blue-200'
              } ${
                plan.primary
                  ? darkMode ? 'bg-gradient-to-b from-blue-950/60 to-[#080c1e]' : 'bg-gradient-to-b from-blue-50 to-white'
                  : darkMode ? 'bg-[#0d1b3e]/50 hover:bg-[#0d1b3e]/70' : 'bg-white hover:shadow-xl hover:shadow-gray-100'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold text-white gradient-brand shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Gradient top border for primary */}
              {plan.primary && (
                <div className="absolute top-0 left-0 right-0 h-0.5 gradient-brand" />
              )}

              <div className="p-7 pt-9">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{plan.emoji}</span>
                  <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{plan.name} Plan</span>
                </div>

                <div className="mb-1">
                  <span className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-gray-950'}`}>
                    ${yearly && plan.monthlyPrice > 0
                      ? (plan.yearlyPrice! / 12).toFixed(2)
                      : plan.monthlyPrice === 0
                        ? '0'
                        : plan.monthlyPrice.toFixed(2)
                    }
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className={`text-sm ml-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>/mo</span>
                  )}
                  {plan.monthlyPrice === 0 && (
                    <span className={`text-sm ml-1 font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>forever</span>
                  )}
                </div>

                {yearly && plan.yearlySavings && (
                  <p className={`text-xs mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    ${plan.yearlyPrice}/year · Save {plan.yearlySavings}
                  </p>
                )}

                <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.desc}
                </p>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    plan.primary
                      ? 'gradient-brand text-white btn-glow hover:scale-105'
                      : darkMode
                        ? 'border border-blue-700/50 text-blue-300 hover:border-blue-500 hover:bg-blue-950/40'
                        : 'border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? darkMode ? 'text-gray-300' : 'text-gray-700'
                          : darkMode ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className={`mt-8 p-6 rounded-2xl border text-center ${
          darkMode ? 'border-blue-900/40 bg-[#0d1b3e]/40' : 'border-gray-200 bg-gray-50'
        }`}>
          <p className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            💡 Need a custom enterprise plan? For teams processing 1,000+ RFQs/month with custom integration, SSO, and SLA requirements —{' '}
            <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-blue-500 hover:text-blue-400 font-semibold underline underline-offset-2">
              Contact Sales →
            </a>
          </p>
        </div>

        {/* Trust */}
        <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          <span className="flex items-center gap-1.5">🔒 End-to-end encryption</span>
          <span className="flex items-center gap-1.5">📅 Cancel anytime, no contracts</span>
          <span className="flex items-center gap-1.5">💳 Secure payment via Stripe</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const { ref, revealed } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#06091a]' : 'bg-white'}`}>
      <div ref={ref} className={`section-reveal ${revealed ? 'revealed' : ''} relative z-10 max-w-2xl mx-auto px-4 sm:px-6`}>
        <div className="text-center mb-12">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
            darkMode ? 'bg-blue-950/60 border-blue-700/50 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            Get in Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Contact <span className="gradient-text">Our Team</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have questions? We'd love to help. Reach us at{' '}
            <a href="mailto:support@rfqautopilot.com" className="text-blue-500 hover:text-blue-400 font-medium">
              support@rfqautopilot.com
            </a>
          </p>
        </div>

        <div className={`p-8 rounded-2xl border ${
          darkMode ? 'bg-[#0d1b3e]/60 border-blue-900/40' : 'bg-white border-gray-200'
        }`}>
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full gradient-brand flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                We'll get back to you within 24 hours at {form.email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    darkMode
                      ? 'bg-blue-950/30 border-blue-800/50 text-white placeholder-gray-600 focus:border-blue-600'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    darkMode
                      ? 'bg-blue-950/30 border-blue-800/50 text-white placeholder-gray-600 focus:border-blue-600'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
                    darkMode
                      ? 'bg-blue-950/30 border-blue-800/50 text-white placeholder-gray-600 focus:border-blue-600'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white'
                  }`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-base font-bold text-white gradient-brand btn-glow transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

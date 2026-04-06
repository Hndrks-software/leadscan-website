import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const APP_URL = 'https://leadsnapfh.netlify.app';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'Perfect om te starten',
    features: ['1 gebruiker', '50 leads per maand', 'AI visitekaartje scanner', 'Basis dashboard', 'Email support'],
    cta: 'Gratis starten',
    popular: false,
  },
  {
    name: 'Team',
    monthlyPrice: 49,
    yearlyPrice: 39,
    desc: 'Voor groeiende sales teams',
    features: ['10 gebruikers', 'Onbeperkt leads', 'AI opvolg-berichten', 'Pipeline view', 'Voice-to-text notities', 'Lead enrichment', 'CSV & rapport export', 'Prioriteit support'],
    cta: 'Start 14 dagen gratis',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: -1,
    yearlyPrice: -1,
    desc: 'Voor grote organisaties',
    features: ['Onbeperkt gebruikers', 'Onbeperkt leads', 'Alles van Team', 'Custom branding', 'API toegang', 'SSO integratie', 'Dedicated account manager', 'Custom onboarding'],
    cta: 'Neem contact op',
    popular: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#4F46E5] font-semibold">Prijzen</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-900 mt-4">
            Simpele, eerlijke prijzen
          </h2>
          <p className="text-lg text-slate-500 mt-4">Start gratis, upgrade wanneer je wilt</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm ${!yearly ? 'text-gray-900' : 'text-gray-500'}`}>Maandelijks</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`w-12 h-6 rounded-full transition-colors relative ${yearly ? 'bg-[#4F46E5]' : 'bg-gray-200'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${yearly ? 'left-7' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${yearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Jaarlijks <span className="text-[#4F46E5] text-xs font-semibold">-20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#4F46E5]/10 to-transparent border-2 border-[#4F46E5]/30 shadow-[0_0_60px_-20px_rgba(79,70,229,0.3)]'
                  : 'glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-xs font-bold rounded-full">
                  Meest gekozen
                </div>
              )}

              <h3 className="text-xl font-bold font-['Montserrat'] text-gray-900">{plan.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{plan.desc}</p>

              <div className="mt-6 mb-8">
                {plan.monthlyPrice === 0 ? (
                  <span className="text-5xl font-extrabold font-['Montserrat'] text-gray-900">Gratis</span>
                ) : plan.monthlyPrice === -1 ? (
                  <span className="text-3xl font-extrabold font-['Montserrat'] text-gray-900">Op maat</span>
                ) : (
                  <>
                    <span className="text-5xl font-extrabold font-['Montserrat'] text-gray-900">
                      €{yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-500 text-sm">/maand</span>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${plan.popular ? 'text-[#4F46E5]' : 'text-gray-400'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/auth`}
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-indigo-600/20'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

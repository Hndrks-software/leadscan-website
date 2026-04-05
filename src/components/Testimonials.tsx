import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'LeadScan heeft onze opvolgsnelheid na beurzen met 10x verbeterd. De AI-gegenereerde emails zijn verbluffend persoonlijk.',
    name: 'Mark Jansen',
    role: 'Sales Director',
    company: 'PharmaSolutions',
    initials: 'MJ',
  },
  {
    quote: 'De voice-to-text functie is geniaal. Op de beursvloer typ je niet, maar met LeadScan spreek je gewoon je notities in.',
    name: 'Lisa de Groot',
    role: 'Account Manager',
    company: 'LogiFlow BV',
    initials: 'LG',
  },
  {
    quote: 'Eindelijk een tool die begrijpt hoe beurzen werken. Scan, kwalificeer, volg op — alles in één app. Onmisbaar.',
    name: 'Thomas van Berg',
    role: 'CEO',
    company: 'TechDirect',
    initials: 'TB',
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#9cbb48] font-semibold">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-900 mt-4">
            Wat onze klanten zeggen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2c4080] to-[#9cbb48] flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role} — {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Camera, Zap, BarChart3, Mail } from 'lucide-react';

const steps = [
  { icon: Camera, title: 'Scan', desc: 'Fotografeer het visitekaartje of voer handmatig in', num: '01' },
  { icon: Zap, title: 'AI Herkent', desc: 'Alle contactgegevens worden automatisch uitgelezen', num: '02' },
  { icon: BarChart3, title: 'Kwalificeer', desc: 'Beoordeel de lead: hot, warm of cold. Voeg notities toe via voice.', num: '03' },
  { icon: Mail, title: 'Volg Op', desc: 'AI genereert een gepersonaliseerde email of LinkedIn bericht', num: '04' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2c4080]/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#9cbb48] font-semibold">Hoe het werkt</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-white mt-4">
            Van scan tot deal in 4 stappen
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#9cbb48]/50 via-[#2c4080]/50 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-[#9cbb48] text-xs font-bold tracking-widest">{step.num}</span>
                <h3 className="text-2xl font-bold font-['Montserrat'] text-white mt-1 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>

              {/* Center icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#0d0e1a] border border-white/10 flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-[#9cbb48]" />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

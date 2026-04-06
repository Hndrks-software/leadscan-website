import { motion } from 'framer-motion';
import { Camera, Sparkles, Building2, Mic, GitBranch, Shield } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'AI Visitekaartje Scanner',
    desc: 'Richt je camera, AI leest alle contactgegevens in 2 seconden. Naam, email, telefoon, bedrijf — automatisch.',
    color: '#4F46E5',
    span: 'md:col-span-2',
  },
  {
    icon: Sparkles,
    title: 'AI Opvolg-berichten',
    desc: 'Genereer gepersonaliseerde emails en LinkedIn berichten met één klik. In het Nederlands, Engels of Duits.',
    color: '#7C3AED',
    span: '',
  },
  {
    icon: Building2,
    title: 'Bedrijfsinzichten',
    desc: 'AI haalt automatisch bedrijfsinfo op: sector, grootte en relevantie score.',
    color: '#6366F1',
    span: '',
  },
  {
    icon: Mic,
    title: 'Voice-to-text',
    desc: 'Spreek je notities in op de beursvloer. AI maakt er een nette samenvatting van.',
    color: '#EC4899',
    span: '',
  },
  {
    icon: GitBranch,
    title: 'Visuele Pipeline',
    desc: 'Volg elke lead door je funnel. Van nieuw tot gewonnen, met automatische herinneringen voor hot leads.',
    color: '#F59E0B',
    span: 'md:col-span-2',
  },
  {
    icon: Shield,
    title: 'Multi-tenant Platform',
    desc: 'Meerdere organisaties, elk met eigen gebruikers, rollen, branding en lead-isolatie.',
    color: '#312E81',
    span: '',
  },
];

export function BentoFeatures() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#4F46E5] font-semibold">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-900 mt-4">
            Alles wat je nodig hebt
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            Van visitekaartje tot deal. LeadScan automatiseert je hele beurs-workflow met AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group glass rounded-3xl p-8 transition-all duration-500 ${feature.span}`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
              >
                <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-bold font-['Montserrat'] text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

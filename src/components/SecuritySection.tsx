import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, FileCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Lock,
    title: 'End-to-end encryptie',
    desc: 'Alle data wordt versleuteld opgeslagen en verzonden via TLS 1.3.',
  },
  {
    icon: Eye,
    title: 'Data-isolatie per organisatie',
    desc: 'Row Level Security zorgt ervoor dat organisaties nooit bij elkaars data kunnen.',
  },
  {
    icon: Server,
    title: 'Europese hosting',
    desc: 'Alle data wordt opgeslagen op servers in de EU, conform AVG-wetgeving.',
  },
  {
    icon: Shield,
    title: 'AI data-anonimisering',
    desc: 'Gevoelige contactgegevens worden geanonimiseerd vóórdat ze naar AI worden gestuurd.',
  },
  {
    icon: FileCheck,
    title: 'JWT-verificatie',
    desc: 'Elke API-aanroep wordt geverifieerd met JSON Web Tokens. Geen toegang zonder authenticatie.',
  },
  {
    icon: Globe,
    title: 'AVG-compliant',
    desc: 'Volledig ingericht volgens de Europese privacywetgeving (GDPR/AVG).',
  },
];

export function SecuritySection() {
  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F46E5]/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#4F46E5] font-semibold">Beveiliging</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-900 mt-4">
            Jouw data is veilig bij ons
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            Enterprise-grade beveiliging als standaard. Geen compromissen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-8 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#4F46E5]/10 border border-[#4F46E5]/20">
                <feature.icon className="h-6 w-6 text-[#4F46E5]" />
              </div>
              <h3 className="text-lg font-bold font-['Montserrat'] text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/security"
            className="inline-flex items-center gap-2 text-sm text-[#4F46E5] font-semibold hover:underline"
          >
            Lees meer over onze beveiligingsmaatregelen →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

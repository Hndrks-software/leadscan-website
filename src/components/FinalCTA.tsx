import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const APP_URL = 'https://leadsnapfh.netlify.app';

export function FinalCTA() {
  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F46E5]/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold font-['Montserrat'] text-gray-900 leading-tight">
          Klaar om 10x sneller
          <br />
          <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            leads op te volgen?
          </span>
        </h2>
        <p className="text-lg text-slate-500 mt-6 mb-10">
          Begin vandaag nog met LeadScan. Geen creditcard nodig.
        </p>
        <a
          href={`${APP_URL}/auth`}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-lg font-bold rounded-2xl hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.5)] transition-all animate-pulse-glow"
        >
          Gratis starten
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="text-xs text-gray-500 mt-4">Gratis account — geen creditcard vereist</p>
      </motion.div>
    </section>
  );
}

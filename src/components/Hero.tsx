import { motion } from 'framer-motion';
import { ArrowRight, Camera, Zap, Sparkles } from 'lucide-react';

const APP_URL = 'https://leadsnapfh.netlify.app';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 gradient-mesh overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#9cbb48]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2c4080]/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-[#9cbb48] mb-8"
          >
            <Sparkles className="h-4 w-4" />
            Powered by AI — Gratis starten
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-['Montserrat'] leading-[1.05] tracking-tight"
          >
            <span className="text-gray-900">Beurs leads</span>
            <br />
            <span className="bg-gradient-to-r from-[#9cbb48] via-[#b8d462] to-[#9cbb48] bg-clip-text text-transparent animate-gradient">
              scannen & opvolgen
            </span>
            <br />
            <span className="text-gray-900">met AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            Scan visitekaartjes met AI, kwalificeer leads in real-time en genereer
            gepersonaliseerde opvolg-berichten. Van beursvloer tot deal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <a
              href={`${APP_URL}/auth`}
              className="group px-8 py-4 bg-gradient-to-r from-[#9cbb48] to-[#6e8435] text-white text-lg font-bold rounded-2xl hover:shadow-[0_0_40px_-10px_rgba(156,187,72,0.5)] transition-all flex items-center justify-center gap-2"
            >
              Gratis starten
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 glass text-white text-lg font-semibold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Bekijk hoe het werkt
            </a>
          </motion.div>
        </div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-1.5 glow-blue">
            <div className="bg-[#0d0e1a] rounded-[22px] p-8">
              <div className="bg-gradient-to-br from-[#12132a] to-[#0d0e1a] rounded-2xl aspect-[16/9] flex items-center justify-center relative overflow-hidden border border-white/5">
                {/* Scan frame */}
                <div className="w-[55%] aspect-[1.75/1] border border-white/15 rounded-xl relative">
                  <div className="absolute -top-0.5 -left-0.5 w-8 h-8 border-t-2 border-l-2 border-[#9cbb48] rounded-tl-xl" />
                  <div className="absolute -top-0.5 -right-0.5 w-8 h-8 border-t-2 border-r-2 border-[#9cbb48] rounded-tr-xl" />
                  <div className="absolute -bottom-0.5 -left-0.5 w-8 h-8 border-b-2 border-l-2 border-[#9cbb48] rounded-bl-xl" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-8 h-8 border-b-2 border-r-2 border-[#9cbb48] rounded-br-xl" />
                  <div className="absolute inset-x-2 top-0 h-full overflow-hidden rounded-xl">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#9cbb48] to-transparent animate-scan-line" style={{ boxShadow: '0 0 20px 4px rgba(156,187,72,0.4)' }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white/20" />
                  </div>
                </div>
                {/* OCR badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 text-[#9cbb48] text-xs border border-[#9cbb48]/20">
                  <Zap className="h-3.5 w-3.5" />
                  AI OCR Actief
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 lg:-right-6 top-8 glass rounded-2xl p-4 w-52 hidden md:block"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm">🔥</div>
              <div><p className="text-xs font-bold text-gray-900">Hot Lead!</p><p className="text-[10px] text-gray-500">Zojuist gescand</p></div>
            </div>
            <p className="text-[11px] text-gray-400">Jan de Vries — TechCorp BV</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -left-2 lg:-left-6 bottom-12 glass rounded-2xl p-4 w-56 hidden md:block"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-[#9cbb48]" />
              <p className="text-xs font-bold text-gray-900">AI Opvolging</p>
            </div>
            <p className="text-[11px] text-gray-400">"Beste Jan, leuk u ontmoet te hebben op de beurs..."</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

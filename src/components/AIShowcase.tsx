import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const TYPING_TEXT = `Beste Jan,

Het was erg leuk om u te ontmoeten op de Pharma Expo. Ons gesprek over de automatisering van uw sorteerprocessen heeft mij erg enthousiast gemaakt.

Op basis van wat u vertelde over de uitdagingen bij uw fulfilment center, denk ik dat onze MicroSorter oplossing perfect zou aansluiten.

Zou u volgende week tijd hebben voor een kort demo-gesprek?

Met vriendelijke groet,
Lisa — LeadScan`;

const AI_FEATURES = [
  'Visitekaartje scanner met 95% nauwkeurigheid',
  'Opvolg-emails in Nederlands, Engels en Duits',
  'Automatische bedrijfsinzichten en lead scoring',
  'Voice-to-text notities met AI samenvatting',
  'Slimme duplicate detectie tussen collega\'s',
  'Gepersonaliseerd op basis van gespreksnotities',
];

export function AIShowcase() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) { setHasStarted(true); setIsTyping(true); } },
      { threshold: 0.3 }
    );
    const el = document.getElementById('ai-showcase');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!isTyping) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setDisplayedText(TYPING_TEXT.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <section id="ai-showcase" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden glow-blue">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4F46E5]/10 rounded-full blur-[120px]" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-full text-sm text-[#4F46E5] mb-6">
                <Sparkles className="h-4 w-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-gray-900 mb-8">
                AI die jouw sales workflow transformeert
              </h2>
              <div className="space-y-4">
                {AI_FEATURES.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#4F46E5] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: typing demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="text-xs text-gray-500 ml-2">AI Opvolging — Email</span>
                </div>
                {/* Content */}
                <div className="p-6 h-80 overflow-hidden">
                  <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed font-mono">
                    {displayedText}
                    {isTyping && <span className="inline-block w-0.5 h-4 bg-[#818CF8] ml-0.5 animate-pulse" />}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import './index.css';
import {
  Camera, Sparkles, BarChart3, Shield, Zap, ArrowRight,
  CheckCircle2, Star, Mic, GitBranch, Building2, Mail, ChevronRight,
} from 'lucide-react';

const APP_URL = 'https://leadsnapfh.netlify.app';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* === NAVBAR === */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2c4080] to-[#1e2e5d] flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold font-['Montserrat']">LeadScan</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Hoe het werkt</a>
            <a href="#ai" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Prijzen</a>
          </div>
          <a
            href={`${APP_URL}/auth`}
            className="px-5 py-2.5 bg-gradient-to-r from-[#2c4080] to-[#1e2e5d] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-900/20 transition-all"
          >
            Inloggen
          </a>
        </div>
      </nav>

      {/* === HERO === */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
              <Sparkles className="h-4 w-4" />
              Powered by AI
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-['Montserrat'] leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Beurs leads scannen,
              <br />
              <span className="bg-gradient-to-r from-[#2c4080] to-[#9cbb48] bg-clip-text text-transparent">
                opvolgen met AI
              </span>
            </h1>
            <p className="text-xl text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Scan visitekaartjes, kwalificeer leads en genereer gepersonaliseerde opvolg-berichten. Alles in
              {'\u00A0'}real-time, alles met AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href={`${APP_URL}/auth`}
                className="px-8 py-4 bg-gradient-to-r from-[#9cbb48] to-[#6e8435] text-white text-lg font-bold rounded-2xl hover:shadow-xl hover:shadow-green-600/20 transition-all flex items-center justify-center gap-2 animate-pulse-glow"
              >
                Gratis starten
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-gray-50 text-gray-700 text-lg font-semibold rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                Bekijk demo
              </a>
            </div>
          </div>

          {/* Hero visual - Scan mockup */}
          <div className="mt-20 relative max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-[#2c4080] to-[#1e2e5d] rounded-3xl p-8 shadow-2xl shadow-blue-900/20">
              <div className="bg-black/30 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                {/* Scan frame mockup */}
                <div className="w-[60%] aspect-[1.75/1] border-2 border-white/30 rounded-xl relative">
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[3px] border-l-[3px] border-[#9cbb48] rounded-tl-xl" />
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-[3px] border-r-[3px] border-[#9cbb48] rounded-tr-xl" />
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-[3px] border-l-[3px] border-[#9cbb48] rounded-bl-xl" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[3px] border-r-[3px] border-[#9cbb48] rounded-br-xl" />
                  <div className="absolute inset-x-2 top-0 h-full overflow-hidden rounded-xl">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#9cbb48] to-transparent animate-scan-line" style={{ boxShadow: '0 0 15px 3px rgba(156,187,72,0.5)' }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-10 w-10 text-white/50 mx-auto mb-2" />
                      <p className="text-white/50 text-sm">Scan een visitekaartje</p>
                    </div>
                  </div>
                </div>
                {/* AI OCR badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-[#9cbb48] text-xs">
                  <Zap className="h-3.5 w-3.5" />
                  AI OCR Actief
                </div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -right-4 top-12 bg-white rounded-2xl shadow-xl p-4 w-52 animate-float hidden lg:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"><span className="text-sm">🔥</span></div>
                <div><p className="text-xs font-bold">Hot Lead!</p><p className="text-[10px] text-gray-400">Zojuist gescand</p></div>
              </div>
              <p className="text-xs text-gray-500">Jan de Vries - TechCorp</p>
            </div>
            <div className="absolute -left-4 bottom-16 bg-white rounded-2xl shadow-xl p-4 w-56 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-[#9cbb48]" />
                <p className="text-xs font-bold">AI Opvolging</p>
              </div>
              <p className="text-xs text-gray-500">"Beste Jan, leuk u ontmoet te hebben op..."</p>
            </div>
          </div>
        </div>
      </section>

      {/* === SOCIAL PROOF === */}
      <section className="py-16 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 font-['Montserrat']">500+</p>
              <p className="text-sm mt-1">Leads gescand</p>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 font-['Montserrat']">10x</p>
              <p className="text-sm mt-1">Sneller opvolgen</p>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 font-['Montserrat']">95%</p>
              <p className="text-sm mt-1">OCR nauwkeurigheid</p>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden sm:block" />
            <div className="text-center flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURES === */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Montserrat']">Alles wat je nodig hebt</h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">Van visitekaartje tot deal. LeadScan automatiseert je hele beurs-workflow.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: 'AI Visitekaartje Scanner', desc: 'Scan een kaartje, AI leest alle gegevens in. Naam, email, telefoon, bedrijf — in 2 seconden.', color: 'from-blue-500 to-blue-600' },
              { icon: Sparkles, title: 'AI Opvolg-berichten', desc: 'Genereer gepersonaliseerde emails en LinkedIn berichten met één klik. In NL, EN of DE.', color: 'from-green-500 to-green-600' },
              { icon: Building2, title: 'AI Bedrijfsinzichten', desc: 'Automatisch bedrijfsinfo ophalen: sector, grootte, relevantie score en gesprekspunten.', color: 'from-purple-500 to-purple-600' },
              { icon: Mic, title: 'Voice-to-text Notities', desc: 'Spreek je notities in op de beursvloer. AI maakt er een nette samenvatting van.', color: 'from-red-500 to-red-600' },
              { icon: GitBranch, title: 'Visuele Pipeline', desc: 'Volg elke lead door je funnel: Nieuw → Opvolging → Demo → Offerte → Gewonnen.', color: 'from-orange-500 to-orange-600' },
              { icon: Shield, title: 'Multi-tenant & Rollen', desc: 'Meerdere organisaties, elk met eigen gebruikers, rollen en lead-isolatie.', color: 'from-indigo-500 to-indigo-600' },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold font-['Montserrat'] mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Montserrat']">Hoe het werkt</h2>
            <p className="text-lg text-gray-500 mt-4">Van scan tot deal in 4 simpele stappen</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Scan', desc: 'Fotografeer het visitekaartje of voer handmatig in', icon: Camera },
              { step: '02', title: 'AI leest', desc: 'Alle contactgegevens worden automatisch herkend', icon: Zap },
              { step: '03', title: 'Kwalificeer', desc: 'Beoordeel de lead: hot, warm of cold', icon: BarChart3 },
              { step: '04', title: 'Volg op', desc: 'AI genereert een gepersonaliseerde email of LinkedIn bericht', icon: Mail },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2c4080] to-[#1e2e5d] flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <span className="text-xs font-bold text-[#9cbb48] tracking-widest">{step.step}</span>
                <h3 className="text-lg font-bold font-['Montserrat'] mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
                {i < 3 && <ChevronRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-300" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === AI SECTION === */}
      <section id="ai" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#2c4080] to-[#1e2e5d] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#9cbb48]/10 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm mb-6">
                <Sparkles className="h-4 w-4 text-[#9cbb48]" />
                AI-Powered
              </div>
              <h2 className="text-4xl font-bold font-['Montserrat'] mb-6">
                De kracht van AI in jouw sales workflow
              </h2>
              <div className="space-y-4">
                {[
                  'Visitekaartje scanner met 95% nauwkeurigheid',
                  'Gepersonaliseerde opvolg-emails in 3 talen',
                  'Automatische bedrijfsinzichten en lead scoring',
                  'Voice-to-text notities met AI samenvatting',
                  'Slim duplicate detectie tussen collega\'s',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#9cbb48] flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={`${APP_URL}/auth`}
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-[#9cbb48] to-[#6e8435] text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                Start gratis <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="pricing" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Montserrat']">Simpele prijzen</h2>
            <p className="text-lg text-gray-500 mt-4">Start gratis, upgrade wanneer je wilt</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Starter', price: 'Gratis', period: '', popular: false,
                features: ['1 gebruiker', '50 leads/maand', 'AI visitekaartje scanner', 'Basis dashboard'],
              },
              {
                name: 'Team', price: '€49', period: '/maand', popular: true,
                features: ['10 gebruikers', 'Onbeperkt leads', 'AI opvolg-berichten', 'Pipeline view', 'Voice-to-text', 'Lead enrichment', 'CSV export'],
              },
              {
                name: 'Enterprise', price: 'Op maat', period: '', popular: false,
                features: ['Onbeperkt gebruikers', 'Onbeperkt leads', 'Alles van Team', 'Custom branding', 'API toegang', 'Dedicated support'],
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-3xl p-8 ${plan.popular ? 'bg-gradient-to-br from-[#2c4080] to-[#1e2e5d] text-white shadow-2xl shadow-blue-900/20 scale-105' : 'bg-white border border-gray-200'}`}>
                {plan.popular && (
                  <div className="inline-flex items-center px-3 py-1 bg-[#9cbb48] text-white text-xs font-bold rounded-full mb-4">Populair</div>
                )}
                <h3 className="text-xl font-bold font-['Montserrat']">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold font-['Montserrat']">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${plan.popular ? 'text-[#9cbb48]' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${APP_URL}/auth`}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'bg-[#9cbb48] text-white hover:bg-[#8aaa3d]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === 'Op maat' ? 'Neem contact op' : 'Start nu'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-['Montserrat'] mb-6">
            Klaar om 10x sneller leads op te volgen?
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Begin vandaag nog met LeadScan. Geen creditcard nodig.
          </p>
          <a
            href={`${APP_URL}/auth`}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#9cbb48] to-[#6e8435] text-white text-lg font-bold rounded-2xl hover:shadow-xl hover:shadow-green-600/20 transition-all animate-pulse-glow"
          >
            Gratis starten <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2c4080] to-[#1e2e5d] flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold font-['Montserrat']">LeadScan</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Prijzen</a>
              <a href={`${APP_URL}/auth`} className="hover:text-white transition-colors">Inloggen</a>
            </div>
            <p className="text-sm text-gray-500">Powered by LeadScan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

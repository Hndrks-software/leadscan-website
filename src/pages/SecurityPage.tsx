import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, FileCheck, Globe, Database, KeyRound, UserCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const sections = [
  {
    icon: Lock,
    title: 'Encryptie',
    items: [
      'Alle data wordt versleuteld opgeslagen (AES-256) in de database',
      'Communicatie verloopt uitsluitend via HTTPS met TLS 1.3',
      'Wachtwoorden worden gehasht met bcrypt — wij kennen je wachtwoord niet',
      'Database-backups zijn versleuteld',
    ],
  },
  {
    icon: Eye,
    title: 'Data-isolatie & toegangscontrole',
    items: [
      'Row Level Security (RLS) op elke tabel in de database',
      'Organisaties kunnen nooit bij elkaars data — technisch onmogelijk',
      'Rollen-systeem: admin, manager, invoerder, bekijker — elk met eigen rechten',
      'Leads zijn standaard alleen zichtbaar voor de persoon die ze heeft gescand',
      'Duplicate-detectie werkt binnen de organisatie zonder data te lekken',
    ],
  },
  {
    icon: KeyRound,
    title: 'Authenticatie & autorisatie',
    items: [
      'JWT-verificatie (JSON Web Tokens) op elke API-aanroep',
      'Automatische token-verversing voor veilige sessies',
      'Elke Supabase Edge Function verifieert het JWT-token vóór uitvoering',
      'Geen toegang tot enige data zonder geldige authenticatie',
    ],
  },
  {
    icon: Shield,
    title: 'AI & privacy',
    items: [
      'Gevoelige contactgegevens worden geanonimiseerd vóórdat ze naar AI (Google Gemini) worden gestuurd',
      'AI-modellen worden niet getraind op jouw data',
      'OCR-verwerking gebeurt via beveiligde API-calls met minimale data-overdracht',
      'Opvolg-berichten worden gegenereerd zonder volledige contactgegevens te delen met de AI',
    ],
  },
  {
    icon: Server,
    title: 'Infrastructuur',
    items: [
      'Hosting via Supabase — gebouwd op AWS met enterprise-grade beveiliging',
      'Database in de Europese Unie (Frankfurt, Duitsland)',
      'Automatische database-backups (dagelijks, met point-in-time recovery)',
      'Edge Functions draaien in geïsoleerde Deno-containers',
      'CDN via Netlify voor snelle en veilige content delivery',
    ],
  },
  {
    icon: Globe,
    title: 'AVG / GDPR compliance',
    items: [
      'Volledig ingericht volgens de Europese privacywetgeving (AVG/GDPR)',
      'Data wordt opgeslagen en verwerkt binnen de EU',
      'Recht op inzage, correctie en verwijdering van persoonsgegevens',
      'Geen verkoop of deling van data met derden',
      'Data-minimalisatie: we verzamelen alleen wat nodig is voor de dienstverlening',
    ],
  },
  {
    icon: Database,
    title: 'Opslag & bestandsbeheer',
    items: [
      'Visitekaartje-foto\'s worden opgeslagen in beveiligde Supabase Storage buckets',
      'Upload-rechten zijn beperkt tot geauthenticeerde gebruikers',
      'Verwijder-rechten zijn beperkt tot organisatie-admins',
      'Bestanden zijn geïsoleerd per organisatie',
    ],
  },
  {
    icon: UserCheck,
    title: 'Organisatiebeheer',
    items: [
      'Multi-tenant architectuur met volledige data-scheiding',
      'Elke organisatie kan eigen branding instellen (logo, kleuren)',
      'Custom producten en markten per organisatie — geen gedeelde configuratie',
      'Super admin-rechten zijn beperkt tot platform-eigenaren',
    ],
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-gray-900 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Terug naar home
            </Link>

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-full text-sm text-[#4F46E5] mb-6">
                <Shield className="h-4 w-4" />
                Beveiliging & Privacy
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold font-['Montserrat'] text-gray-900 leading-tight">
                Hoe wij jouw data
                <br />
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  beschermen
                </span>
              </h1>
              <p className="text-lg text-slate-500 mt-6 max-w-2xl mx-auto leading-relaxed">
                Bij LeadScan is dataveiligheid geen bijzaak — het is de basis van ons platform.
                Hieronder leggen we transparant uit welke maatregelen we treffen om jouw leads,
                contactgegevens en bedrijfsdata te beschermen.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#4F46E5]/10 border border-[#4F46E5]/20">
                    <section.icon className="h-6 w-6 text-[#4F46E5]" />
                  </div>
                  <h2 className="text-xl font-bold font-['Montserrat'] text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 mt-12 text-center"
          >
            <FileCheck className="h-8 w-8 text-[#4F46E5] mx-auto mb-4" />
            <h3 className="text-xl font-bold font-['Montserrat'] text-gray-900 mb-3">
              Vragen over beveiliging?
            </h3>
            <p className="text-slate-500 text-sm max-w-lg mx-auto mb-6">
              We staan open voor vragen over onze beveiligingsmaatregelen. Neem gerust contact
              met ons op als je meer wilt weten over hoe we jouw data beschermen.
            </p>
            <a
              href="mailto:security@leadscan.nl"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-600/20 transition-all"
            >
              Neem contact op
            </a>
          </motion.div>

          {/* Last updated */}
          <p className="text-center text-xs text-slate-400 mt-8">
            Laatst bijgewerkt: april 2026
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

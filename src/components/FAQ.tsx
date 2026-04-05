import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Hoe werkt de AI visitekaartje scanner?',
    a: 'Je maakt een foto van het visitekaartje met je telefoon. Onze AI (Google Gemini) analyseert de afbeelding en extraheert automatisch alle contactgegevens: naam, email, telefoon, bedrijf, functie en land. Het duurt slechts 2-3 seconden.',
  },
  {
    q: 'In welke talen kan de AI opvolg-berichten genereren?',
    a: 'De AI kan gepersonaliseerde emails en LinkedIn berichten genereren in het Nederlands, Engels en Duits. Je kunt per bericht de taal kiezen.',
  },
  {
    q: 'Kunnen mijn teamleden elkaars leads zien?',
    a: 'Dat hangt af van de rol. Managers en admins zien alle leads. Accountmanagers (entry-rol) zien alleen hun eigen leads. Als een collega dezelfde lead heeft gescand, krijg je daar automatisch een melding van.',
  },
  {
    q: 'Werkt LeadScan offline op beurzen?',
    a: 'Je hebt een internetverbinding nodig voor de AI-functies (scannen, opvolgen). Maar de app is geoptimaliseerd voor trage connecties. We werken aan offline-modus voor een toekomstige update.',
  },
  {
    q: 'Hoe veilig is mijn data?',
    a: 'Zeer veilig. We gebruiken Supabase met Row Level Security op elke tabel. Alle API-calls zijn beveiligd met JWT-verificatie. Data is geïsoleerd per organisatie — je kunt nooit bij data van andere bedrijven. Gevoelige informatie wordt geanonimiseerd voordat het naar AI wordt gestuurd.',
  },
  {
    q: 'Kan ik mijn eigen branding toevoegen?',
    a: 'Ja! Je kunt je eigen logo uploaden en de primaire en secundaire kleuren van de app aanpassen. Zo ziet LeadScan eruit alsof het je eigen tool is.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#9cbb48] font-semibold">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-900 mt-4">
            Veelgestelde vragen
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

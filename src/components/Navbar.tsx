import { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const APP_URL = 'https://leadsnapfh.netlify.app';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'Hoe het werkt' },
  { href: '#pricing', label: 'Prijzen' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b14]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#9cbb48] to-[#6e8435] flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold font-['Montserrat'] text-white">LeadScan</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={`${APP_URL}/auth`} className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
            Inloggen
          </a>
          <a
            href={`${APP_URL}/auth`}
            className="px-5 py-2.5 bg-gradient-to-r from-[#9cbb48] to-[#6e8435] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-green-600/20 transition-all"
          >
            Start gratis
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0b14]/95 backdrop-blur-2xl border-b border-white/5 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white py-2">
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a href={`${APP_URL}/auth`} className="block text-center py-3 text-gray-300 border border-white/10 rounded-xl">Inloggen</a>
            <a href={`${APP_URL}/auth`} className="block text-center py-3 bg-gradient-to-r from-[#9cbb48] to-[#6e8435] text-white font-semibold rounded-xl">Start gratis</a>
          </div>
        </div>
      )}
    </nav>
  );
}

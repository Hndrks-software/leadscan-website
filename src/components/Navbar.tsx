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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold font-['Montserrat'] text-gray-900">LeadScan</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={`${APP_URL}/auth`} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Inloggen
          </a>
          <a
            href={`${APP_URL}/auth`}
            className="px-5 py-2.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-600/20 transition-all"
          >
            Start gratis
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-700 p-2">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-100 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a href={`${APP_URL}/auth`} className="block text-center py-3 text-gray-600 border border-gray-200 rounded-xl">Inloggen</a>
            <a href={`${APP_URL}/auth`} className="block text-center py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-semibold rounded-xl">Start gratis</a>
          </div>
        </div>
      )}
    </nav>
  );
}

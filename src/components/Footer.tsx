import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const APP_URL = 'https://leadsnapfh.netlify.app';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold font-['Montserrat'] text-gray-900">LeadScan</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-powered beurs lead capture. Scan, kwalificeer en volg op — alles in één platform.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Prijzen</a></li>
              <li><a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Hoe het werkt</a></li>
              <li><a href="#ai-showcase" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">AI Features</a></li>
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Over ons</a></li>
              <li><Link to="/security" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Beveiliging & Privacy</Link></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Voorwaarden</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold mb-4">Aan de slag</h4>
            <ul className="space-y-3">
              <li><a href={`${APP_URL}/auth`} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Inloggen</a></li>
              <li><a href={`${APP_URL}/auth`} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Gratis account aanmaken</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 LeadScan. Alle rechten voorbehouden.</p>
          <p className="text-xs text-gray-400">Made with AI in the Netherlands 🇳🇱</p>
        </div>
      </div>
    </footer>
  );
}

import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoBar } from './components/LogoBar';
import { BentoFeatures } from './components/BentoFeatures';
import { HowItWorks } from './components/HowItWorks';
import { AIShowcase } from './components/AIShowcase';
import { SecuritySection } from './components/SecuritySection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import SecurityPage from './pages/SecurityPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      <Hero />
      <LogoBar />
      <BentoFeatures />
      <HowItWorks />
      <AIShowcase />
      <SecuritySection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

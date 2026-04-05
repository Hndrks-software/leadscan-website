import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoBar } from './components/LogoBar';
import { BentoFeatures } from './components/BentoFeatures';
import { HowItWorks } from './components/HowItWorks';
import { AIShowcase } from './components/AIShowcase';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoBar />
      <BentoFeatures />
      <HowItWorks />
      <AIShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;

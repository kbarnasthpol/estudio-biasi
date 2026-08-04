import Hero from '../components/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact';
import MobileDivider from '../components/MobileDivider';
import TrustSection from '../components/TrustSection';
import ProblemSection from '../components/ProblemSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="snap-container">
      <div className="snap-section">
        <Hero />
      </div>

      <div className="snap-section py-10 md:py-0">
        <TrustSection />
      </div>

      <div className="snap-section py-10 md:py-0">
        <About />
      </div>

      <MobileDivider type="services" />

      <div className="snap-section py-10 md:py-0">
        <ProblemSection />
      </div>

      <div className="snap-section py-10 md:py-0">
        <Services />
      </div>

      <div className="snap-section py-10 md:py-0">
        <TestimonialsSection />
      </div>

      <div className="snap-section py-10 md:py-0">
        <FaqSection />
      </div>

      <MobileDivider type="contact" reverse />

      <div className="snap-section py-10 md:py-0">
        <Contact />
      </div>
      

      <FloatingWhatsApp />
    </div>
    
  );
}
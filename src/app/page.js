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
      <MobileDivider type="contact" reverse />

      <div className="snap-section ">
        <TrustSection />
      </div>
      <MobileDivider type="contact" />

      <div className="snap-section ">
        <About />
      </div>

      <MobileDivider type="services" />

      <div className="snap-section ">
        <ProblemSection />
      </div>
      <MobileDivider type="services" reverse />

      <div className="snap-section ">
        <Services />
      </div>
      <MobileDivider type="contact" />

      <div className="snap-section ">
        <TestimonialsSection />
      </div>
      <MobileDivider type="contact" reverse />

      <div className="snap-section ">
        <FaqSection />
      </div>

      <MobileDivider type="contact" reverse />

      <div className="snap-section ">
        <Contact />
      </div>
      

      <FloatingWhatsApp />
    </div>
    
  );
}
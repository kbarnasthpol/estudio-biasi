import Hero from '../components/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact';
import MobileDivider from '../components/MobileDivider';

export default function Home() {
  return (
    <div className="snap-container">
      <div className="snap-section">
        <Hero />
      </div>
      
      <div className="snap-section py-10 md:py-0">
        <About />
      </div>
      <MobileDivider type="services" />
      <div className="snap-section py-10 md:py-0">
        <Services />
      </div>
      <MobileDivider type="contact" reverse />
      
      <div className="snap-section py-10 md:py-0">
        <Contact />
      </div>
    </div>
  );
}
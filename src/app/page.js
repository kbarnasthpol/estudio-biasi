import Hero from '../components/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="snap-container">
      <div className="snap-section py-10 md:py-0">
        <Hero />
      </div>
      
      <div className="snap-section">
        <About />
      </div>
      
      <div className="snap-section">
        <Services />
      </div>
      
      <div className="snap-section">
        <Contact />
      </div>
    </div>
  );
}
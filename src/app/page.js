import Hero from '../components/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="snap-container">
      <div className="snap-section">
        <Hero />
      </div>
      
      <div className="snap-section py-10 md:py-0">
        <About />
      </div>
      
      <div className="snap-section py-10 md:py-0">
        <Services />
      </div>
      
      <div className="snap-section py-10 md:py-0">
        <Contact />
      </div>
    </div>
  );
}
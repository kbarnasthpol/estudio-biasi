import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="snap-container">
      <div className="snap-section">
        <Hero />
      </div>
      
      <div className="snap-section">
        <About />
      </div>
      
      <div className="snap-section">
        <Services />
      </div>
      
      <div className="snap-section font-sans">
        <Contact />
      </div>
    </div>
  );
}
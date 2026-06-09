'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'sobre-mi', label: 'NOSOTROS' },
    { id: 'areas-especializacion', label: 'SERVICIOS' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null;
        let bestRatio = 0;
        entries.forEach(entry => {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestEntry = entry;
          }
        });
        if (bestEntry && bestEntry.target.id) {
          setActiveSection(bestEntry.target.id);
        }
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: '-80px 0px -20% 0px' }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-secundario text-textoClaro fixed w-full top-0 z-50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        
        <div className="text-2xl font-bold tracking-wider text-principal z-50">
          BIASI<span className="text-detalles">&</span>ASOCIADOS
        </div>

        <button 
          className="text-2xl md:hidden focus:outline-none cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* MENÚ DESPLEGABLE COMPACTO */}
        <nav className={`
          absolute md:static top-full left-0 w-full md:w-auto bg-secundario
          md:bg-transparent flex flex-col md:flex-row items-center justify-start md:justify-end
          py-6 md:py-0 gap-6 transition-all duration-300 ease-in-out z-40 shadow-xl md:shadow-none
          ${isOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-2 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto'
          }
        `}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center w-full md:w-auto px-6 md:px-0">
            {navLinks.map((link, index) => (
              <li 
                key={link.id} 
                className="w-full md:w-auto transition-all duration-500 ease-out"
                style={{
                  // El retraso dinámico solo se aplica en móviles (pantallas chicas) cuando el menú se abre
                  transitionDelay: isOpen ? `${index * 75}ms` : '0ms'
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`
                    block py-2 px-4 text-md font-medium tracking-wide rounded-lg transition-all duration-300 md:hover:scale-110
                    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 md:translate-y-0 md:opacity-100'}
                    ${activeSection === link.id 
                      ? 'bg-detalles text-principal shadow-md'   
                      : 'text-principal hover:bg-principal hover:text-secundario' 
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}
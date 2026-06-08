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
    // Configuramos IntersectionObserver para detectar qué sección está más visible
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Buscamos la sección con mayor intersección visible
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
      { threshold: [0.3, 0.5, 0.7], rootMargin: '-80px 0px -20% 0px' } // Ajustamos márgenes para mejorar detección
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
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold tracking-wider text-principal">
          BIASI<span className="text-detalles">&</span>ASOCIADOS
        </div>

        <button 
          className="text-2xl md:hidden focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`
          fixed md:static top-[68px] left-0 w-full md:w-auto 
          bg-principal md:bg-transparent flex flex-col md:flex-row items-center justify-start md:justify-end
          pt-10 md:pt-0 gap-6 transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-8 text-center w-full md:w-auto px-6 md:px-0">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full md:w-auto">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`
                    block py-2 px-4 md:py-2 text-md font-medium tracking-wide rounded-lg transition-all duration-300 hover:scale-110
                    ${activeSection === link.id 
                      ? 'bg-detalles text-principal shadow-md'   // Activo: fondo bronce, texto violeta
                      : 'text-principal hover:bg-principal hover:text-secundario' // Inactivo: texto claro, hover sutil
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
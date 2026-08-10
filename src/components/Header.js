'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { areasData } from '../data/areas';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showHeader, setShowHeader] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { id: 'inicio', label: 'INICIO', href: '/' },
      { id: 'valores', label: 'VALORES', href: '/#valores' },
      { id: 'sobre-mi', label: 'NOSOTROS', href: '/#sobre-mi' },
      { id: 'problemas', label: 'PROBLEMAS', href: '/#problemas' },
      { id: 'areas-especializacion', label: 'SERVICIOS', href: '/#areas-especializacion', hasSubmenu: true },
      { id: 'faq', label: 'FAQ', href: '/faq' },
      { id: 'contacto', label: 'CONTACTO', href: '/#contacto' },
    ],
    []
  );
  {/* agregar cuando tenga testimonios
      { id: 'testimonios', label: 'TESTIMONIOS', href: '/#testimonios' },
      */}

  const serviceLinks = useMemo(
    () =>
      areasData.map((area) => ({
        href: `/servicios/${area.id}`,
        label: area.nombre,
      })),
    []
  );

  useEffect(() => {
    const hero = document.getElementById('inicio');

    if (!hero) {
      setShowHeader(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null;
        let bestRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestEntry = entry;
          }
        });

        if (bestEntry?.target?.id) {
          setActiveSection(bestEntry.target.id);
        }
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: '-80px 0px -20% 0px' }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const handleNavClick = (e, link) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(link.id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }

    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full font-titulo transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        showHeader
          ? 'border-b border-principal/10 bg-secundario/95 opacity-100 translate-y-0 backdrop-blur-lg'
          : 'pointer-events-none -translate-y-6 opacity-0'
      }`}
    >
      <div className="container relative mx-auto flex items-center justify-between px-4 py-4 md:px-8 md:py-5">
        <div
          className={`text-2xl font-titulo font-bold tracking-[-0.03em] text-principal transition-all duration-700 ${
            showHeader ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-110 opacity-0'
          }`}
        >
          BIASI<span className="text-detalles">&</span>ASOCIADOS
        </div>

        <button
          className="z-50 cursor-pointer text-2xl focus:outline-none md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`absolute left-0 top-full w-full transition-all duration-500 md:static md:w-auto ${
            isOpen ? 'visible translate-y-0 bg-secundario opacity-100' : 'invisible -translate-y-2 bg-transparent opacity-0'
          } md:visible md:translate-y-0 md:bg-transparent md:opacity-100`}
        >
          <ul className="flex w-full flex-col gap-2 px-4 py-6 text-center md:w-auto md:flex-row md:gap-6 md:px-0 md:py-0 md:text-left">
            {navLinks.map((link, index) => {
              const isServicesLink = link.hasSubmenu;

              return (
                <li
                  key={link.id}
                  className="w-full transition-all duration-500 ease-out md:w-auto"
                  style={{ transitionDelay: isOpen ? `${index * 75}ms` : '0ms' }}
                  onMouseEnter={() => isServicesLink && setIsServicesOpen(true)}
                  onMouseLeave={() => isServicesLink && setIsServicesOpen(false)}
                >
                  {isServicesLink ? (
                    <div className="relative">
                      <a
                        href="/#areas-especializacion"
                        onClick={(e) => {
                          handleNavClick(e, link);
                          if (window.innerWidth < 768) {
                            setIsServicesOpen((prev) => !prev);
                          } else {
                            setIsServicesOpen(true);
                          }
                        }}
                        className={`relative block px-3 py-2 text-[0.78rem] font-medium tracking-[0.2em] transition-all duration-300 md:hover:scale-105 ${
                          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 md:translate-y-0 md:opacity-100'
                        } ${activeSection === link.id ? 'text-detalles' : 'text-principal hover:text-detalles'}`}
                      >
                        {activeSection === link.id && (
                          <span className="absolute left-1/2 top-full mt-0 h-[2px] w-full -translate-x-1/2 rounded-full bg-detalles transition-all duration-300" />
                        )}
                        {link.label}
                      </a>

                      <div
                        className={`absolute left-0 top-full mt-3 w-72  border border-principal/10 bg-secundario/95 p-3 shadow-xl transition-all duration-300 ${
                          isServicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                        }`}
                      >
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.href}
                            href={serviceLink.href}
                            onClick={() => {
                              setIsServicesOpen(false);
                              setIsOpen(false);
                            }}
                            className="block px-3 py-2 text-sm text-principal transition hover:bg-principal/10 hover:text-detalles"
                          >
                            {serviceLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`relative block rounded-full px-3 py-2 text-[0.78rem] font-medium tracking-[0.2em] transition-all duration-300 md:hover:scale-105 ${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 md:translate-y-0 md:opacity-100'
                      } ${activeSection === link.id ? 'text-detalles' : 'text-principal hover:text-detalles'}`}
                    >
                      {activeSection === link.id && (
                        <span className="absolute left-1/2 top-full mt-0 h-[2px] w-full -translate-x-1/2 bg-detalles transition-all duration-300" />
                      )}
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
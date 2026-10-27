'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { areasData } from '../data/areas';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [heroIntersecting, setHeroIntersecting] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const showHeader = pathname !== '/' || !heroIntersecting;
  const activeNavSection =
    pathname === '/'
      ? activeSection
      : pathname === '/faq'
        ? 'faq'
        : pathname.startsWith('/servicios/')
          ? 'areas-especializacion'
          : null;

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
    if (pathname !== '/') return;

    const hero = document.getElementById('inicio');

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') return;

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
  }, [navLinks, pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const snapContainer = document.querySelector('.snap-container');
    const previousSnapOverflow = snapContainer?.style.overflow;

    document.body.style.overflow = 'hidden';
    if (snapContainer) snapContainer.style.overflow = 'hidden';

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      if (snapContainer) snapContainer.style.overflow = previousSnapOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const handleNavClick = (e, link) => {
    if (
      pathname === '/' &&
      (link.href === '/' || link.href.startsWith('/#'))
    ) {
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] h-[var(--header-height)] w-full font-titulo transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] md:h-[var(--header-height-desktop)] border-b border-principal/10 bg-secundario/95 backdrop-blur-lg ${
          showHeader ? '' : 'md:pointer-events-none md:-translate-y-6 md:opacity-0'
        } pointer-events-auto translate-y-0 opacity-100`}
      >
        <div className="container relative mx-auto flex h-full items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            aria-label="Estudio Jurídico Biasi y Asociados, inicio"
            onClick={() => {
              setIsOpen(false);
              setIsServicesOpen(false);
            }}
            className="relative z-[80] flex flex-col leading-none transition-all duration-700"
          >
            <span className="mb-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-principal/70">
              Estudio Jurídico
            </span>
            <span className="text-xl font-bold tracking-[-0.03em] text-principal md:text-2xl">
              BIASI<span className="text-detalles">&</span>ASOCIADOS
            </span>
          </Link>

          <button
            type="button"
            className="relative z-[80] flex h-11 w-11 cursor-pointer items-center justify-center border border-principal/20 text-xl text-principal transition hover:border-detalles hover:text-detalles focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detalles md:hidden"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setIsServicesOpen(false);
            }}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <i aria-hidden="true" className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-6 text-left">
              {navLinks.map((link) => {
                const isActive = activeNavSection === link.id;

                return (
                  <li
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => link.hasSubmenu && setIsServicesOpen(true)}
                    onMouseLeave={() => link.hasSubmenu && setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link)}
                      className={`relative block rounded-full px-3 py-2 text-[0.78rem] font-medium tracking-[0.2em] transition-all duration-300 hover:scale-105 ${
                        isActive ? 'text-detalles' : 'text-principal hover:text-detalles'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute left-1/2 top-full mt-0 h-[2px] w-full -translate-x-1/2 bg-detalles transition-all duration-300" />
                      )}
                    </Link>

                    {link.hasSubmenu && (
                      <div
                        className={`absolute left-0 top-full mt-3 w-72 border border-principal/10 bg-secundario/95 p-3 shadow-xl transition-all duration-300 ${
                          isServicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                        }`}
                      >
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.href}
                            href={serviceLink.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-3 py-2 text-sm text-principal transition hover:bg-principal/10 hover:text-detalles"
                          >
                            {serviceLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto bg-secundario px-6 pb-10 pt-[calc(var(--header-height)+1.5rem)] transition-all duration-300 md:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <div aria-hidden="true" className="mobile-divider-pattern pointer-events-none absolute inset-0 opacity-70" />
        <ul className="relative mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-2 text-center">
          {navLinks.map((link, index) => {
            const isActive = activeNavSection === link.id;

            return (
              <li
                key={link.id}
                className="w-full"
                style={{ transitionDelay: isOpen ? `${index * 45}ms` : '0ms' }}
              >
                {link.hasSubmenu ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isServicesOpen}
                      aria-controls="mobile-services-menu"
                      onClick={() => setIsServicesOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-center gap-3 border-b border-principal/10 px-4 py-4 text-sm font-semibold tracking-[0.2em] transition hover:text-detalles ${
                        isActive ? 'text-detalles' : 'text-principal'
                      }`}
                    >
                      {link.label}
                      <i aria-hidden="true" className={`fas fa-chevron-down text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      id="mobile-services-menu"
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                        isServicesOpen ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <Link
                          href={link.href}
                          onClick={(event) => handleNavClick(event, link)}
                          className="block border-b border-principal/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-detalles"
                        >
                          Todas las áreas
                        </Link>
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.href}
                            href={serviceLink.href}
                            onClick={() => {
                              setIsServicesOpen(false);
                              setIsOpen(false);
                            }}
                            className="block border-b border-principal/10 px-5 py-3 text-sm text-principal/85 transition hover:bg-principal/10 hover:text-detalles"
                          >
                            {serviceLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link)}
                    className={`relative block border-b border-principal/10 px-4 py-4 text-sm font-medium tracking-[0.2em] transition hover:text-detalles ${
                      isActive ? 'text-detalles' : 'text-principal'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
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
  const showHeader = isOpen || pathname !== '/' || !heroIntersecting;
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
    const scrollContainer = document.querySelector('.snap-container');

    if (!hero) return;

    const updateHeroVisibility = () => {
      const heroBounds = hero.getBoundingClientRect();
      const scrollBounds = scrollContainer?.getBoundingClientRect();
      const viewportTop = scrollBounds?.top ?? 0;
      const viewportBottom = scrollBounds?.bottom ?? window.innerHeight;
      const visibleHeight = Math.max(
        0,
        Math.min(heroBounds.bottom, viewportBottom) -
          Math.max(heroBounds.top, viewportTop)
      );
      const intersectionRatio = visibleHeight / heroBounds.height;

      setHeroIntersecting(intersectionRatio >= 0.2);
    };

    const initialUpdate = window.requestAnimationFrame(updateHeroVisibility);
    scrollContainer?.addEventListener('scroll', updateHeroVisibility, { passive: true });
    window.addEventListener('resize', updateHeroVisibility);

    return () => {
      window.cancelAnimationFrame(initialUpdate);
      scrollContainer?.removeEventListener('scroll', updateHeroVisibility);
      window.removeEventListener('resize', updateHeroVisibility);
    };
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
        className={`fixed inset-x-0 top-0 z-[70] h-[var(--header-height)] w-full border-b border-principal/10 bg-secundario/95 font-titulo backdrop-blur-lg transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] md:h-[var(--header-height-desktop)] ${
          showHeader
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0'
        }`}
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
            <span className="mb-1 pl-1 text-[8px] font-semibold text-center uppercase tracking-[0.4em] text-principal/70 md:text-[10px]">
              Estudio Jurídico
            </span>
            <span className="flex items-center font-titulo text-[15px] font-bold uppercase leading-none tracking-tight md:text-lg">
              <span className="bg-detalles px-2 py-1.5 text-principal md:px-2">
                BIASI
              </span>
              <span className="relative z-10 -mx-2 select-none bg-[linear-gradient(to_right,var(--color-secundario)_50%,var(--color-detalles)_50%)] bg-clip-text  text-transparent">
                &amp;
              </span>
              <span className="bg-principal px-2 py-1.5 text-secundario md:px-2">
                ASOCIADOS
              </span>
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
        className={`mobile-navigation-background fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto px-6 pb-10 pt-[calc(var(--header-height)+1.5rem)] transition-all duration-300 md:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-2 text-center">
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
                      className="mobile-services-submenu"
                      style={{
                        maxHeight: isServicesOpen ? '24rem' : 0,
                        opacity: isServicesOpen ? 1 : 0,
                        visibility: isServicesOpen ? 'visible' : 'hidden',
                      }}
                    >
                      <div>
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
'use client';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null);
  const timerRef = useRef(null);
  const lastScrollTopRef = useRef(0);
  const bouncingRef = useRef(false);

  const bounceToContact = () => {
    if (bouncingRef.current) return;
    const contact = document.getElementById('contacto');
    if (contact) {
      bouncingRef.current = true;
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        bouncingRef.current = false;
      }, 1000);
    }
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible && !bouncingRef.current) {
          bounceToContact();
        }
      }
    }, 5000);
  };

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      const isAtBottom = (window.innerHeight + currentScrollTop) >= document.documentElement.scrollHeight - 50;
      
      const rect = footer.getBoundingClientRect();
      const isFooterVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isFooterVisible) {
        resetTimer();

        if (currentScrollTop > lastScrollTopRef.current && isAtBottom) {
          bounceToContact();
          if (timerRef.current) clearTimeout(timerRef.current);
        }
      } else {
        if (timerRef.current) clearTimeout(timerRef.current);
      }

      lastScrollTopRef.current = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', () => {
      const rect = footer.getBoundingClientRect();
      const isFooterVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isFooterVisible) {
        resetTimer();
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full h-auto py-6 mt-auto border-t border-secundario/20 relative z-10"
    >
      <div className="container mx-auto max-w-4xl px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <div className="text-base font-bold tracking-wider text-secundario">
          BIASI<span className="text-detalles">&</span>ASOCIADOS
        </div>
        <p className="text-[10px] text-textoOscuro/60 uppercase tracking-wider">
          &copy; {new Date().getFullYear()} BIASI & ASOCIADOS. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
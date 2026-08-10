"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          document.body.classList.add("footer-active");
        } else {
          document.body.classList.remove("footer-active");
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
      document.body.classList.remove("footer-active");
    };
  }, []);

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Valores", href: "#valores" },
    { name: "Servicios", href: "#servicios" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative flex min-h-screen w-full snap-start items-center overflow-hidden bg-principal"
    >
      <Container>
        <div
          className={`flex min-h-screen flex-col justify-between py-10 transition-all duration-1000 md:py-14 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {/* CTA */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-8 h-[2px] w-24 bg-detalles md:w-32" />

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-secundario/70">
              Biasi & Asociados
            </p>

            <h2 className="max-w-3xl font-titulo text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-secundario sm:text-5xl md:text-6xl lg:text-7xl">
              ¿Necesitás
              <span className="block">
                asesoramiento<span className="text-detalles">?</span>
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-textoOscuro/70 md:text-lg md:leading-8">
              Una estrategia clara empieza con una conversación.
            </p>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center justify-center border border-detalles bg-detalles px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-secundario transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Solicitar asesoramiento
            </a>
          </div>

          {/* Información inferior */}
          <div className="border-t border-secundario/20 pt-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              
              {/* Marca */}
              <div>
                <h3 className="font-titulo text-2xl font-bold tracking-[-0.03em] text-secundario md:text-3xl">
                  BIASI<span className="text-detalles">&</span>ASOCIADOS
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-textoOscuro/60">
                  Asesoramiento jurídico con estrategia,
                  cercanía y compromiso.
                </p>

                <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-secundario/60">
                  La Plata · Buenos Aires
                </p>
              </div>

              {/* Navegación */}
              <nav>
                <ul className="flex flex-wrap justify-start gap-x-6 gap-y-3 md:max-w-md md:justify-end md:gap-x-7">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-xs font-semibold uppercase tracking-[0.16em] text-secundario/70 transition-colors duration-300 hover:text-secundario"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Copyright */}
            <div className="mt-8 flex flex-col gap-2 border-t border-secundario/10 pt-5 text-[10px] uppercase tracking-[0.15em] text-secundario/50 sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 Biasi & Asociados</span>
              <span>Todos los derechos reservados</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
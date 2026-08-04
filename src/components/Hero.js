"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCompact(!entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-secundario px-6 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(247,243,227,0.16),_transparent_45%),linear-gradient(135deg,_rgba(247,243,227,0.16),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center ">
        <div className="hidden md:block">
          <h1
            className={`font-titulo text-7xl font-bold tracking-[-0.04em] text-principal transition-all duration-700 ease-out lg:text-8xl ${
              compact ? "translate-y-4 scale-85 opacity-20" : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            BIASI<span className="text-detalles">&</span>ASOCIADOS
          </h1>
        </div>

        <div
          className={`w-full font-titulo transition-all duration-700 ease-out md:hidden ${
            compact ? "translate-y-4 scale-85 opacity-20" : "translate-y-0 scale-100 opacity-100"
          }`}
        >
          <h1 className="leading-none text-center">
            <span className="block text-8xl font-bold tracking-[-0.05em] text-principal">BIASI</span>
            <span className="mt-1 block text-4xl font-bold tracking-[-0.05em] text-principal">
              <span className="text-detalles">&</span>ASOCIADOS
            </span>
          </h1>
        </div>

        <div className={`mx-auto my-6 h-[2px] bg-detalles transition-all duration-1500 md:mx-0 ${compact ? "w-24 opacity-50" : "w-28 opacity-100 md:w-48"}`} />

        <h2
          className={`max-w-3xl text-xl font-semibold uppercase leading-relaxed tracking-[0.25em] text-principal transition-all duration-700 ${
            compact ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          Asesoramiento jurídico con estrategia, cercanía y compromiso.
        </h2>

        <p
          className={`mt-5 max-w-3xl text-base leading-8 text-principal/90 transition-all duration-700 delay-150 md:text-lg ${
            compact ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          Derecho Laboral, Penal, Familia, Civil y Comercial, Derecho Animal y Seguridad Pública.
        </p>

        <div
          className={`mt-12 flex flex-col items-center justify-center gap-3 transition-all duration-700 delay-200 sm:flex-row md:mt-14 md:items-start md:justify-start md:gap-4 ${
            compact ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center border border-detalles bg-detalles px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5"
          >
            Solicitar asesoramiento
          </a>
        </div>
      </div>
    </div>
  );
}
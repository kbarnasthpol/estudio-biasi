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
      className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-secundario px-6"
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-principal/10
          via-black/10
          to-principal/20
          via-50%
        "
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,38,31,0.08),transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(246,174,45,0.05),transparent_80%)]" />

      <div className="container mx-auto relative z-10">

  {/* ================= DESKTOP ================= */}
  <div className="hidden md:block">
    <h1
      className={`
        text-8xl
        font-extrabold
        tracking-tight
        text-principal
        transition-all duration-700 ease-out
        ${
          compact
            ? "scale-85 opacity-20 translate-y-4"
            : "scale-100 opacity-100 translate-y-0"
        }
      `}
    >
      BIASI<span className="text-detalles">&</span>ASOCIADOS
    </h1>
  </div>

  {/* ================= MOBILE ================= */}
  <div
    className={`
      md:hidden
      w-full
      -translate-y-10
      transition-all duration-700 ease-out
      ${
        compact
          ? "scale-85 opacity-20 translate-y-4"
          : "scale-100 opacity-100"
      }
    `}
  >
    <h1 className="text-left leading-none">
      <span className="block text-8xl font-extrabold text-principal">
        BIASI
      </span>

      <span className="block text-5xl font-bold text-right text-principal mt-1">
        <span className="text-detalles">&</span>ASOCIADOS
      </span>
    </h1>
  </div>

  <div
    className={`
      h-1
      bg-detalles
      mx-auto
      mb-6
      transition-all
      duration-1500
      ${
        compact
          ? "w-50 opacity-40"
          : "md:w-200 w-full opacity-100"
      }
    `}
  />

  <h2
    className={`
      text-base
      sm:text-xl
      md:text-2xl
      font-bold
      tracking-widest
      uppercase
      leading-relaxed
      text-principal
      transition-all
      duration-700
      text-right
      ${
        compact
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0"
      }
    `}
  >
    Asesoramiento Legal Integral{" "}
    <span className="text-detalles">&</span> Soluciones Estratégicas
  </h2>

</div>
    </div>
  );
}
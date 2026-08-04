"use client";

import useReveal from "../../hooks/useReveal";

export default function AboutCard({ visible }) {
  // Usamos el visible que viene del padre para mantener sincronía

  return (
    <div
      className={`
        transition-all duration-1000
        ${
          visible
            ? "opacity-100 translate-y-0 scale-y-100 scale-x-100 md:-translate-x-6"
            : "opacity-0 translate-y-10 scale-y-70 scale-x-70"
        }
      `}
    >
      <div className="relative w-[280px] sm:w-[480px] lg:w-[370px] h-[360px] sm:h-[480px] lg:h-[480px] overflow-hidden border border-secundario/20 shadow-2xl bg-secundario2/80 group">
        {/* Cuando tengas la foto simplemente reemplazamos esto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            
          </div>
        </div>

        {/* Overlay con gradiente mejorado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        

        {/* Texto */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          

          <h3
            className={`
              text-2xl md:text-3xl font-titulo font-bold tracking-tight text-white
              transition-all duration-700 delay-500
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            DRA. MARIA FERNANDA BIASI
          </h3>

          <p
            className={`
              mt-2 uppercase tracking-[0.25em] text-sm text-detalles
              transition-all duration-700 delay-700
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            Abogada - Lic. en Seguridad
          </p>

          {/* Línea decorativa */}
          <div
            className={`
              mt-3 h-px w-12 bg-gradient-to-r from-detalles to-transparent
              transition-all duration-700 delay-700
              ${visible ? "scale-x-100 origin-left" : "scale-x-0"}
            `}
          />

          {/* Años de experiencia */}
          <p
            className={`
              mt-3 text-xs text-white/50 flex items-center gap-2
              transition-all duration-700 delay-900
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <i className="fas fa-calendar-check text-detalles/50" />
            <span>Más de 20 años de trayectoria</span>
          </p>
        </div>

        {/* Decoración de esquina */}
        <div className="absolute bottom-0 right-0 h-20 w-20">
          <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-detalles/10" />
        </div>
      </div>
    </div>
  );
}
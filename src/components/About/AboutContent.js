"use client";

import useReveal from "../../hooks/useReveal";

export default function AboutContent() {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }
      `}
    >
      <h2
        className={`
          mt-4
          text-3xl
          lg:text-2xl
          text-center
          font-bold
          leading-tight
          text-secundario
          uppercase
          transition-all duration-700 delay-200
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        Compromiso-Experiencia-Trayectoria
      </h2>

      <div
        className={`
          w-full
          h-[3px]
          bg-detalles
          mt-8
          origin-left
          transition-all duration-700 delay-500
          ${
            visible
              ? "scale-x-100 translate-x-0"
              : "scale-x-0"
          }
        `}
      />

      <p
        className={`
          mt-10
          text-lg
          leading-8
          text-textoOscuro
          transition-all duration-700 delay-700
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        En{" "}
        <strong className="text-secundario">
          BIASI<span className="text-detalles">&</span>ASOCIADOS
        </strong>{" "}
        entendemos que cada situación legal representa una historia única.
        Nuestro compromiso es brindar un asesoramiento cercano, transparente
        y estratégico, acompañando a cada cliente con profesionalismo y
        responsabilidad durante todo el proceso.
      </p>

      <p
        className={`
          mt-6
          text-lg
          leading-8
          text-textoOscuro
          transition-all duration-1400 delay-700
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        Más que resolver conflictos, buscamos generar confianza y construir
        relaciones duraderas, ofreciendo soluciones jurídicas sólidas que
        aporten tranquilidad y seguridad en cada decisión.
      </p>

    </div>
  );
}
"use client";

import useReveal from "../../hooks/useReveal";

const items = [
  "Atención Personalizada",
  "Compromiso",
  "Transparencia",
  "Estrategia Jurídica",
];

export default function AboutStats() {

  const [ref, visible] = useReveal();

  return (

    <div
      ref={ref}
      className="grid grid-cols-2 gap-3"
    >

      {items.map((item, index) => (

        <div
          key={item}
          className={`
            flex
            items-center
            gap-3

            rounded-xl

            border
            border-secundario/15

            px-4
            py-3

            bg-principal

            transition-all duration-150 delay-100

            hover:border-secundario/40

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
          style={{
            transitionDelay: `${index * 20}ms`,
          }}
        >

          <i className="fas fa-check text-secundario" />

          <span className="text-sm font-medium text-detalles">

            {item}

          </span>

        </div>

      ))}

    </div>

  );

}
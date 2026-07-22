"use client";

import useReveal from "../../hooks/useReveal";

export default function AboutCard() {

  const [ref, visible] = useReveal();

  return (

    <div
      ref={ref}
      className={`
        transition-all duration-1000
        ${
          visible
            ? "opacity-100 translate-y-0 scale-y-100 scale-x-100"
            : "opacity-0 translate-y-10 scale-y-70 scale-x-70"
        }
      `}
    >

      <div
  className="
    relative
    w-[280px]
    sm:w-[480px]
    lg:w-[370px]

    h-[360px]
    sm:h-[480px]
    lg:h-[480px]

    rounded-3xl
    overflow-hidden

    border border-secundario/20

    shadow-2xl

    bg-secundario

    group
  "
>


          {/* Cuando tengas la foto simplemente reemplazamos esto */}

          <div className="absolute inset-0 flex items-center justify-center">

    <div className="text-center">


</div>

        </div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Texto */}

        <div className="absolute bottom-0 left-0 w-full p-6">

          <h3
            className={`
              text-2xl
              font-bold
              text-white
              transition-all duration-700 delay-500

              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-100"
              }
            `}
          >
            DRA. MARIA FERNANDA BIASI
          </h3>

          <p
            className={`
              mt-2
              uppercase
              tracking-[0.25em]
              text-sm
              text-secundario

              transition-all duration-700 delay-700

              ${
                visible
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >
            Abogada - Lic. en Seguridad
          </p>

        </div>

      </div>

    </div>

  );

}
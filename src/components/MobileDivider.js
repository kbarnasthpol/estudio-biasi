
"use client";

import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaBriefcase,
  FaLandmark,
  FaBuilding,
  FaHandshake,
  FaBook,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

import useReveal from "../hooks/useReveal";


/* =========================================================
   ICONOS
========================================================= */

const dividerIcons = {

  services: [
    FaBalanceScale,
    FaGavel,
    FaFileContract,
    FaBriefcase,
    FaLandmark,
    FaBuilding,
    FaHandshake,
    FaBook,
    FaShieldAlt,
  ],

  contact: [
    FaHandshake,
    FaFileContract,
    FaBalanceScale,
    FaUserTie,
    FaLandmark,
    FaShieldAlt,
    FaBook,
    FaGavel,
  ],

};


/* =========================================================
   FILA DE ICONOS
========================================================= */

function IconRow({ icons, reverse }) {

  return (

    <div
      className={`
        flex
        w-max
        gap-14
        ${
          reverse
            ? "animate-marqueeReverse"
            : "animate-marquee"
        }
      `}
    >

      {[...icons, ...icons].map((Icon, index) => (

        <Icon
          key={index}
          className="
            text-2xl
            text-secundario
            opacity-50
            shrink-0
          "
        />

      ))}

    </div>

  );

}


/* =========================================================
   FILA DE PUNTOS
========================================================= */

function DotRow({ reverse }) {

  return (

    <div
      className={`
        flex
        items-center
        w-max
        gap-10
        ${
          reverse
            ? "animate-marqueeReverse"
            : "animate-marquee"
        }
      `}
    >

      {[...Array(18)].map((_, index) => (

        <span
          key={index}
          className={`
            block
            rounded-full
            shrink-0
            ${
              index % 4 === 0
                ? "w-2 h-2 bg-detalles"
                : "w-1.5 h-1.5 bg-secundario/50"
            }
          `}
        />

      ))}

    </div>

  );

}

/* =========================================================
   SIGNOS PREGUNTAS
========================================================= */
function QuestionRow({ reverse }) {

  return (

    <div
      className={`
        flex
        items-center
        w-max
        gap-12
        ${
          reverse
            ? "animate-marqueeReverse"
            : "animate-marquee"
        }
      `}
    >

      {[...Array(16)].map((_, index) => (

        <div
          key={index}
          className="
            flex
            items-center
            gap-5
            shrink-0
          "
        >

          <span
            className="
              w-6
              h-px
              bg-detalles/50
            "
          />

          <span
            className="
              font-titulo
              text-2xl
              text-secundario/60
              leading-none
          "
          >
            ?
          </span>

          <span
            className="
              w-6
              h-px
              bg-detalles/50
            "
          />

        </div>

      ))}

    </div>

  );

}

/* =========================================================
   ORNAMENTOS
========================================================= */

function OrnamentRow({ icons, reverse }) {

  return (

    <div
      className={`
        flex
        items-center
        w-max
        gap-10
        ${
          reverse
            ? "animate-marqueeReverse"
            : "animate-marquee"
        }
      `}
    >

      {[...icons, ...icons].map((Icon, index) => (

        <div
          key={index}
          className="
            flex
            items-center
            gap-4
            shrink-0
          "
        >

          <span
            className="
              w-8
              h-px
              bg-detalles/50
            "
          />

          <Icon
            className="
              text-lg
              text-secundario/60
            "
          />

          <span
            className="
              w-8
              h-px
              bg-detalles/50
            "
          />

        </div>

      ))}

    </div>

  );

}


/* =========================================================
   LÍNEA MINIMALISTA
========================================================= */

function MinimalDivider() {

  return (

    <div className="relative w-full h-full flex items-center">

      <div
        className="
          absolute
          left-0
          right-0
          h-px
          bg-secundario/20
        "
      />

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          w-16
          h-px
          bg-detalles
        "
      />

    </div>

  );

}


/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function MobileDivider({

  type = "services",

  variant = "icons",

  title = null,

  reverse = false,

}) {

  const [revealRef, isVisible] = useReveal();

  const icons =
    dividerIcons[type] || dividerIcons.services;


  return (

    <div
      ref={revealRef}
      className="
        md:hidden
        h-[8vh]
        min-h-[55px]
        relative
        overflow-hidden
        flex
        items-center
        bg-principal
        border-y
        border-detalles
      "
    >


      {/* =====================================================
          LÍNEA DECORATIVA DE FONDO
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-30
          pointer-events-none
          z-0
        "
      >

        <svg
          className="
            w-[160%]
            h-full
            animate-linePulse
          "
          viewBox="0 0 600 100"
          fill="none"
        >

          <path
            d="
              M-20 50
              C60 35, 120 35, 190 50
              C250 65, 310 65, 370 50
              C430 35, 500 35, 680 50
            "
            stroke="var(--color-detalles)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

        </svg>

      </div>


      {/* =====================================================
          CONTENIDO DECORATIVO
      ===================================================== */}

      <div
        className={`
          absolute
          inset-0
          flex
          items-center
          transition-opacity
          duration-700
          ${
            isVisible
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >

        {/* ICONOS */}

        {variant === "icons" && (

          <IconRow
            icons={icons}
            reverse={reverse}
          />

        )}


        {/* PUNTOS */}

        {variant === "dots" && (

          <DotRow
            reverse={reverse}
          />

        )}


        {/* ORNAMENTOS */}

        {variant === "ornament" && (

          <OrnamentRow
            icons={icons}
            reverse={reverse}
          />

        )}
        {/* SIGNOS PREGUNTAS */}

        {variant === "question" && (
  <QuestionRow
    reverse={reverse}
  />
)}


        {/* LÍNEA MINIMAL */}

        {variant === "minimal" && (

          <MinimalDivider />

        )}

      </div>


      {/* =====================================================
          FADE LATERAL
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-principal
          via-transparent
          to-principal
          z-10
          pointer-events-none
        "
      />


      {/* =====================================================
          TÍTULO CENTRAL
      ===================================================== */}

      {title && (

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-20
            flex
            items-center
            gap-3
            px-5
            py-1.5
            bg-principal/70
            whitespace-nowrap
          
          "
        >

          {/* línea izquierda */}

          <span
            className="
              block
              w-5
              h-px
              bg-detalles
            "
          />

          <span
            className="
              font-titulo
              tracking-[0.09em]
              text-secundario
              uppercase
              font-extrabold
            text-xl
            "
          >
            {title}
          </span>

          {/* línea derecha */}

          <span
            className="
              block
              w-5
              h-px
              bg-detalles
            "
          />

        </div>

      )}


      {/* =====================================================
          LÍNEA INFERIOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-px
          bg-secundario/20
        "
      />

    </div>

  );

}

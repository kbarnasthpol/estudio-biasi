"use client";

import { useEffect, useState } from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaBriefcase,
  FaLandmark,
  FaShieldAlt,
} from "react-icons/fa";

import Container from "./Container";
import SectionFrame from "./SectionFrame";

export default function Hero() {
  const [compact, setCompact] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Array de textos para el efecto de cambio
  const textosAsesoramiento = [
    "Asesoramiento jurídico con estrategia, cercanía y compromiso.",
    "Defendemos tus intereses con la mejor estrategia legal.",
    "Soluciones legales a medida para cada situación.",
    "Compromiso y experiencia para tu tranquilidad."
  ];

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

  // Efecto para cambiar el texto cada 4 segundos con animación
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % textosAsesoramiento.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 400);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [textosAsesoramiento.length]);

  return (
    <section
      id="inicio"
      className="flex w-full items-center overflow-hidden md:py-10 lg:py-12"
    >
      <Container>
        <SectionFrame
          className="
            h-[72vh]
            min-h-[560px]
            max-h-[720px]
          "
        >
          <div
            className={`grid h-full transition-all duration-1000 ease-out md:grid-cols-[1.05fr_0.95fr] ${
              compact
                ? "translate-y-4 scale-[0.985] opacity-20"
                : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            {/* =====================================================
                IZQUIERDA
            ====================================================== */}

            <div
              className="
                flex
                min-h-0
                items-center
                px-7
                py-8

                sm:px-9

                md:px-10
                md:py-8

                lg:px-12

                xl:px-14
              "
            >
              <div className="w-full max-w-3xl">

                {/* -------------------------------------------------
                    IDENTIDAD - MODIFICADO CON MÁS PROTAGONISMO
                -------------------------------------------------- */}

               <div className="mb-6 flex w-full items-center overflow-hidden">
  {/* Lado Izquierdo - BIASI */}
  <div className=" bg-detalles py-3 px-6 text-end">
    <span className="font-titulo text-4xl md:text-5xl font-bold uppercase leading-none tracking-tight text-principal">
      BIASI
    </span>
  </div>

  {/* & Posicionada exactamente en la divisoria */}
  <div className="relative z-10 flex w-0 items-center justify-center pointer-events-none">
    <span
      className="font-titulo text-4xl md:text-5xl font-bold leading-none tracking-tight select-none"
      style={{
        background: 'linear-gradient(to right, var(--color-secundario) 50%, var(--color-detalles) 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      &amp;
    </span>
  </div>

  {/* Lado Derecho - ASOCIADOS */}
  <div className=" bg-principal py-3 px-6 text-start">
    <span className="font-titulo text-4xl md:text-5xl font-bold uppercase leading-none tracking-tight text-secundario">
      ASOCIADOS
    </span>
  </div>
</div>

                {/* -------------------------------------------------
                    TITULO
                -------------------------------------------------- */}

                <h1
                  className="
                    font-titulo
                    text-[3.4rem]
                    font-bold
                    uppercase
                    leading-[0.82]
                    tracking-[-0.045em]
                    text-textoClaro

                    sm:text-[3.8rem]

                    md:text-[3.55rem]

                    lg:text-[4rem]

                    xl:text-[4.45rem]
                  "
                >
                  
                  <span className="block">
                    Tu
                    <span className="md:hidden"/> situación
                  </span>

                  <span className="block">
                    legal<span className="text-detalles">.</span>
                  </span>

                  <span className="mt-1.5 block">
                    <span
                      className="
                        inline-block
                        bg-detalles
                        px-2
                        py-1
                        text-secundario
                      "
                    >
                      Nuestra
                    </span>{" "}
                    estrategia<span className="text-detalles">.</span>
                  </span>
                </h1>

                {/* -------------------------------------------------
                    LINEA
                -------------------------------------------------- */}

                <div className="my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32" />

                {/* -------------------------------------------------
                    DESCRIPCION - EFECTO MEJORADO SIN BUGS
                -------------------------------------------------- */}

                <div className="relative max-w-xl h-[48px] overflow-hidden">
                  <p
                    className={`
                      absolute
                      w-full
                      text-sm
                      leading-6
                      text-textoClaro/75
                      transition-all
                      duration-500
                      ease-in-out

                      md:text-[0.92rem]
                      md:leading-6

                      lg:text-base
                      lg:leading-6

                      ${isAnimating 
                        ? 'opacity-0 -translate-y-3 scale-95' 
                        : 'opacity-100 translate-y-0 scale-100'
                      }
                    `}
                  >
                    {textosAsesoramiento[textIndex]}
                  </p>
                  
                  {/* Indicador de cambio minimalista con animación */}
                  <div className="absolute bottom-0 left-0 mt-2 flex gap-1.5">
                    {textosAsesoramiento.map((_, index) => (
                      <span
                        key={index}
                        className={`
                          h-1 
                          rounded-full 
                          transition-all 
                          duration-700 
                          ease-in-out
                          ${index === textIndex
                            ? "w-8 bg-detalles"
                            : "w-1.5 bg-textoClaro/20"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* -------------------------------------------------
                    BOTONES
                -------------------------------------------------- */}

                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-2.5

                    sm:flex-row

                    md:mt-7
                    md:gap-3
                  "
                >
                  <a
                    href="#contacto"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      border
                      border-detalles
                      bg-detalles
                      px-5
                      py-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-secundario
                      transition
                      duration-300
                      hover:-translate-y-1
                      w-1/2
                      md:px-6
                      md:py-3
                      h-14
                    "
                  >
                    Solicitar asesoramiento
                  </a>

                  <a
                    href="#areas-especializacion"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      border
                      border-textoClaro/50
                      px-5
                      py-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-textoClaro
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-textoClaro
                      w-1/2
                      md:px-6
                      md:py-3
                      h-14
                    "
                  >
                    Ver servicios
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================================
                MOSAICO DERECHO - SIN CAMBIOS
            ====================================================== */}

            <div className="relative hidden h-full min-h-0 md:block">
              <div
                className="
                  grid
                  h-full
                  min-h-0
                  grid-cols-4
                  grid-rows-6
                  gap-1.5
                  lg:gap-2
                "
              >

                {/* =================================================
                    BLOQUE PRINCIPAL
                ================================================== */}

                <div
                  className="
                    relative
                    col-span-2
                    row-span-4
                    overflow-hidden
                    bg-principal
                  "
                >
                  <div className="flex h-full items-center justify-center">
                    <FaBalanceScale
                      className="
                        text-[7rem]
                        text-secundario/10

                        lg:text-[8rem]

                        xl:text-[9.5rem]
                      "
                    />
                  </div>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      bg-secundario
                      px-4
                      py-2
                      lg:px-5
                      lg:py-2.5
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-textoClaro

                        lg:text-[8px]
                      "
                    >
                      Estudio jurídico
                    </p>
                  </div>
                </div>

                {/* =================================================
                    ESCUDO
                ================================================== */}

                <div
                  className="
                    col-span-1
                    row-span-2
                    flex
                    items-center
                    justify-center
                    bg-detalles
                  "
                >
                  <FaShieldAlt
                    className="
                      text-4xl
                      text-secundario

                      lg:text-5xl

                      xl:text-[3.4rem]
                    "
                  />
                </div>

                {/* =================================================
                    DOCUMENTO
                ================================================== */}

                <div
                  className="
                    col-span-1
                    row-span-2
                    flex
                    items-center
                    justify-center
                    bg-textoClaro
                  "
                >
                  <FaFileContract
                    className="
                      text-4xl
                      text-secundario

                      lg:text-5xl

                      xl:text-[3.4rem]
                    "
                  />
                </div>

                {/* =================================================
                    MARTILLO
                ================================================== */}

                <div
                  className="
                    relative
                    col-span-1
                    row-span-2
                    overflow-hidden
                    bg-secundario
                  "
                >
                  <div
                    className="
                      absolute
                      inset-[-50%]
                      rotate-45
                      bg-[repeating-linear-gradient(
                        135deg,
                        transparent_0,
                        transparent_16px,
                        rgba(249,246,241,0.1)_16px,
                        rgba(249,246,241,0.1)_18px
                      )]
                    "
                  />

                  <div className="relative flex h-full items-center justify-center">
                    <FaGavel
                      className="
                        text-4xl
                        text-textoClaro

                        lg:text-5xl

                        xl:text-[3.4rem]
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    MALETIN
                ================================================== */}

                <div
                  className="
                    col-span-1
                    row-span-2
                    flex
                    items-center
                    justify-center
                    bg-detalles
                  "
                >
                  <FaBriefcase
                    className="
                      text-4xl
                      text-secundario

                      lg:text-5xl

                      xl:text-[3.4rem]
                    "
                  />
                </div>

                {/* =================================================
                    BALANZA
                ================================================== */}

                <div
                  className="
                    col-span-1
                    row-span-2
                    flex
                    items-center
                    justify-center
                    bg-principal
                  "
                >
                  <FaBalanceScale
                    className="
                      text-4xl
                      text-secundario

                      lg:text-5xl

                      xl:text-[3.4rem]
                    "
                  />
                </div>

                {/* =================================================
                    TRIBUNALES
                ================================================== */}

                <div
                  className="
                    col-span-1
                    row-span-2
                    flex
                    items-center
                    justify-center
                    bg-secundario
                  "
                >
                  <FaLandmark
                    className="
                      text-4xl
                      text-textoClaro

                      lg:text-5xl

                      xl:text-[3.4rem]
                    "
                  />
                </div>

                {/* =================================================
                    AREAS DE PRACTICA
                ================================================== */}

                <div
                  className="
                    col-span-2
                    row-span-2
                    flex
                    min-h-0
                    flex-col
                    justify-end
                    overflow-hidden
                    bg-principal
                    px-4
                    py-3

                    lg:px-5
                    lg:py-4

                    xl:px-6
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-secundario/55

                      lg:text-[8px]
                    "
                  >
                    Áreas de práctica
                  </span>

                  <div
                    className="
                      mt-2
                      font-titulo
                      text-[1rem]
                      font-bold
                      uppercase
                      leading-[1.18]
                      text-secundario

                      lg:text-[1.15rem]

                      xl:text-[1.3rem]
                    "
                  >
                    <p>Laboral · Familia · Penal · Civil y Comercial · Animal</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
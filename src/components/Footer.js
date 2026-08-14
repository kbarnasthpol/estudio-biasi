"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaLandmark,
} from "react-icons/fa";

import Container from "./Container";
import SectionFrame from "./SectionFrame";

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
    { name: "Valores", href: "#valores" },
    { name: "Nosotros", href: "#sobre-mi" },
    { name: "Problemas", href: "#problemas" },
    { name: "Servicios", href: "#areas-especializacion" },
    { name: "FAQ", href: "/faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="
        flex
        min-h-[100svh]
        w-full
        snap-start
        items-center
        overflow-hidden
      "
    >
      <Container>
        <SectionFrame
          className="
            h-[100svh]
            min-h-0
            max-h-none

            md:h-[72vh]
            md:min-h-[560px]
            md:max-h-[720px]
          "
        >
          <div
            className={`
              grid
              h-full
              transition-all
              duration-1000
              ease-out

              md:grid-cols-[0.3fr_1.05fr_0.95fr]

              ${
                visible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-[0.985] opacity-0"
              }
            `}
          >
            {/* =====================================================
                FRANJA IZQUIERDA (columna que salió del mosaico)
            ====================================================== */}

            <div className="relative hidden h-full min-h-0 md:block">
              <div
                className="
                  grid
                  h-full
                  min-h-0
                  grid-rows-3
                "
              >
                {/* =================================================
                    DOCUMENTO
                ================================================== */}

                <div
                  className="
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
                    TRIBUNAL
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    bg-detalles
                  "
                >
                  <FaLandmark
                    className="
                      text-4xl
                      text-secundario

                      lg:text-5xl

                      xl:text-[3.4rem]
                    "
                  />
                </div>
              </div>
            </div>

            {/* =====================================================
                IZQUIERDA (bloque de identidad / CTA)
            ====================================================== */}

            <div
              className="
                flex
                min-h-0
                flex-col

                px-5
                pt-8
                pb-5

                sm:px-9

                md:px-10
                md:py-8

                lg:px-12

                xl:px-14
              "
            >
              <div className="flex h-full w-full max-w-3xl flex-col justify-between">

                {/* =================================================
                    IDENTIDAD
                ================================================== */}

                <div className="flex flex-1 flex-col justify-between">

                  <div className="mb-8 w-full md:mb-10">

                    <div
                      className="
                        mb-2
                        pl-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.32em]
                        text-textoClaro/80
                      "
                    >
                      Estudio jurídico
                    </div>

                    {/* =============================================
                        MARCA
                    ============================================== */}

                    <div className="flex w-full items-center overflow-hidden">

                      {/* BIASI */}

                      <div
                        className="
                          bg-detalles
                          px-3
                          py-2

                          md:px-6
                          md:py-3
                        "
                      >
                        <span
                          className="
                            font-titulo
                            text-4xl
                            font-bold
                            uppercase
                            leading-none
                            tracking-tight
                            text-principal

                            md:text-5xl
                          "
                        >
                          BIASI
                        </span>
                      </div>

                      {/* & */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          w-0
                          items-center
                          justify-center
                          pointer-events-none
                        "
                      >
                        <span
                          className="
                            font-titulo
                            text-4xl
                            font-bold
                            leading-none
                            tracking-tight
                            select-none

                            md:text-5xl
                          "
                          style={{
                            background:
                              "linear-gradient(to right, var(--color-secundario) 50%, var(--color-detalles) 50%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          &amp;
                        </span>
                      </div>

                      {/* ASOCIADOS */}

                      <div
                        className="
                          bg-principal
                          px-3
                          py-2

                          md:px-6
                          md:py-3
                        "
                      >
                        <span
                          className="
                            font-titulo
                            text-4xl
                            font-bold
                            uppercase
                            leading-none
                            tracking-tight
                            text-secundario

                            md:text-5xl
                          "
                        >
                          ASOCIADOS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CTA
                  ================================================== */}

                  <h1
                    className="
                      font-titulo
                      text-[3.4rem]
                      font-bold
                      uppercase
                      leading-[0.9]
                      tracking-[-0.045em]
                      text-textoClaro

                      sm:text-[3.8rem]

                      md:text-[3.55rem]

                      lg:text-[4rem]

                      xl:text-[4.45rem]
                    "
                  >
                    <span className="text-detalles">¡</span>Estamos para lo que 
                    <span className="block">
                      necesites<span className="text-detalles">!</span>
                    </span>
                  </h1>

                  {/* Línea */}

                  <div className="my-5 h-[2px] w-24 bg-detalles md:w-32" />
                  <div className="mt-10 flex md:mt-8">

                  </div>
                </div>

                {/* =================================================
                    INFORMACIÓN INFERIOR
                ================================================== */}

                <div
                  className="
                    border-t
                    border-detalles/20
                    pt-4
                    text-right

                    md:pt-5
                  "
                >
                  <div className="flex flex-col gap-2">

                    <span
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-principal/50
                      "
                    >
                      Berisso · Buenos Aires
                    </span>

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.15em]
                        text-principal/40
                      "
                    >
                      © 2026 Biasi &amp; Asociados · Todos los derechos reservados
                    </span>

                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                MOSAICO DERECHO (ahora 3 columnas)
            ====================================================== */}

            <div className="relative hidden h-full min-h-0 md:block">

              <div
                className="
                  grid
                  h-full
                  min-h-0
                  grid-cols-3
                  grid-rows-6
                "
              >

                {/* =================================================
                    BLOQUE NAVEGACIÓN
                ================================================== */}

                <div
                  className="
                    col-span-2
                    row-span-6
                    flex
                    min-h-0
                    flex-col
                    justify-center
                    overflow-hidden
                    bg-secundario
                    px-5
                    py-5

                    lg:px-6
                    lg:py-6

                    xl:px-7
                  "
                >
              

                  <nav>
                    <ul className="space-y-2.5 lg:space-y-5">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="
                              group
                              flex
                              items-center
                              gap-4
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.18em]
                              text-textoClaro/80
                              transition-all
                              duration-300
                              hover:translate-x-1
                              hover:text-detalles

                              md:text-[13px]
                            "
                          >
                            <span
                              className="
                                h-[6px]
                                w-0
                                bg-detalles
                                transition-all
                                duration-300
                                group-hover:w-5
                              "
                            />

                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                 
                </div>

                {/* =================================================
                    RAYAS
                ================================================== */}

                <div
                  className="
                    relative
                    col-span-1
                    row-span-2
                    overflow-hidden
                    bg-detalles
                  "
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, var(--color-secundario) 0px, var(--color-secundario) 1px, transparent 4px, transparent 20px)",
                  }}
                />

                {/* =================================================
                    BALANZA
                ================================================== */}

                <div
                  className="
                    relative
                    col-span-1
                    row-span-2
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    bg-detalles
                  "
                >
                  <FaBalanceScale
                    className="
                      relative
                      z-10
                      text-4xl
                      text-secundario

                      lg:text-5xl

                      xl:text-[3.4rem]
                    "
                  />
                </div>

                {/* =================================================
                    RAYAS SECUNDARIAS
                ================================================== */}

                <div
                  className="
                    relative
                    col-span-1
                    row-span-2
                    overflow-hidden
                    bg-secundario
                  "
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, var(--color-principal) 0px, var(--color-principal) 0.5px, transparent 3px, transparent 20px)",
                  }}
                />

              </div>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </footer>
  );
}
"use client";

import AboutCard from "./AboutCard";
import AboutContent from "./AboutContent";
import Container from "../Container";
import useReveal from "../../hooks/useReveal";
import SectionFrame from '../SectionFrame';

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="sobre-mi" className="w-full scroll-mt-24">
      <Container>
        <SectionFrame>
          <div
            ref={ref}
            className={`
              relative grid overflow-hidden
              lg:grid-cols-12 lg:items-stretch
              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }
            `}
          >
            {/* Imagen - pegada al borde del contenedor, ocupa todo el alto */}
            <div className="relative h-[320px] w-full sm:h-[420px] lg:col-span-4 lg:h-auto">
              <AboutCard visible={visible} />
            </div>

            {/* Texto - con su propio padding, como el resto de las secciones */}
            <div className="relative  lg:col-span-8">
              {/* Decoraciones de fondo */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/5 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secundario/5 blur-3xl" />
              <div className="pointer-events-none absolute right-1/3 top-1/4 h-32 w-32 rounded-full bg-principal/5 blur-2xl" />

              <div className="relative z-10 flex h-full flex-col justify-center">
                <AboutContent visible={visible} />
              </div>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
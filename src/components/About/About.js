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
              relative overflow-hidden p-6 lg:p-10
              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }
            `}
          >
            {/* Decoraciones de fondo */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/5 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secundario/5 blur-3xl" />
            <div className="absolute right-1/3 top-1/4 h-32 w-32 rounded-full bg-principal/5 blur-2xl" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-6 items-end">
              <div className="lg:col-span-5 flex justify-center">
                <AboutCard visible={visible} />
              </div>

              <div className="lg:col-span-7">
                <AboutContent visible={visible} />
              </div>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
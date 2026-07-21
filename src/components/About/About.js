"use client";

import AboutCard from "./AboutCard";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";
import Container from "../Container";
import useReveal from "../../hooks/useReveal";

export default function About() {

  const [ref, visible] = useReveal();

  return (
    <section
      id="sobre-mi"
      className="w-full"
    >

      <Container>

        <div
          ref={ref}
          className={`
            relative
            overflow-hidden

            rounded-2xl

            border
            border-secundario/15

            bg-principal

            shadow-2xl

            p-6
            lg:pl-0
            lg:p-10

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:h-[75vh]
    md:min-h-[550px]
    
    md:max-h-[820px]

            ${
              visible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }
          `}
        >

          {/* Detalle de fondo */}
          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top_left,rgba(255,148,122,.05),transparent_45%)]

              pointer-events-none
            "
          />


          <div
            className="
              relative
              z-10

              grid
              lg:grid-cols-12

              gap-10
              lg:gap-3

              items-center
            "
          >

            {/* FOTO */}

            <div
              className="
                lg:col-span-5

                flex
                justify-center
              "
            >

              <AboutCard />

            </div>


            {/* TEXTO */}

            <div
              className="
                lg:col-span-7
              "
            >

              <AboutContent />

              <div className="mt-8">

                <AboutStats />

              </div>

            </div>


          </div>

        </div>


      </Container>

    </section>
  );
}
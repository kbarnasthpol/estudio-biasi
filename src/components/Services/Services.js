"use client";

import { useState } from "react";
import Container from "../Container";
import { areasData } from "../../data/areas";

import useReveal from "../../hooks/useReveal";

import ServicesSidebar from "./ServicesSidebar";
import ServicesContent from "./ServicesContent";

export default function Services() {

  const [selectedArea, setSelectedArea] = useState(areasData[0]);

  const [ref, visible] = useReveal();

  return (

    <section
      id="areas-especializacion"
      className="w-full"
    >

      <Container>

        <div
          ref={ref}
          className={`
                        overflow-hidden
                        md:rounded-2xl
                        md:border
                        border-secundario/15
                        bg-principal
                        shadow-1px
            md:shadow-2xl

                        transition-all
                        duration-1500
                        md:h-[75vh]
    md:min-h-[550px]
    md:max-h-[820px]
                        

                        ${visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-30 scale-90"
            }
                    `}
        >
          <div className="md:hidden p-6">
            <h2
className={`
mt-4
md:mt-0
text-3xl
font-titulo
font-bold
tracking-tight
text-right
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
especialidad
</h2>

      <div
        className={`
          w-full
          h-[3px]
          bg-detalles
          mt-1
          mb-5

          transition-all duration-1000 delay-500
          ${
            visible
              ? "scale-x-33 translate-x-0 origin-right"
              : "scale-x-0 origin-left"
          }
        `}
      />

          </div>

          <div className="flex flex-col md:flex-row md:h-full">

            <ServicesSidebar
              areas={areasData}
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              visible={visible}
            />

            <ServicesContent
              selectedArea={selectedArea}
              visible={visible}
            />

          </div>

        </div>

      </Container>

    </section>

  );

}
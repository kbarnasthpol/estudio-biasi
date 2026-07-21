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
                        rounded-2xl
                        border
                        border-secundario/15
                        bg-principal
                        shadow-1px
            md:shadow-2xl

                        transition-all
                        duration-700
                        md:h-[75vh]
    md:min-h-[550px]
    md:max-h-[820px]
                        

                        ${visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-30 scale-90"
            }
                    `}
        >

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
"use client";

import { useState } from "react";
import Container from "../Container";
import { areasData } from "../../data/areas";
import useReveal from "../../hooks/useReveal";
import ServicesSidebar from "./ServicesSidebar";
import ServicesContent from "./ServicesContent";
import SectionFrame from '../SectionFrame';


export default function Services() {
  const [selectedArea, setSelectedArea] = useState(areasData[0]);
  const [ref, visible] = useReveal();
  

  return (
    <section id="areas-especializacion" className="w-full">
      <Container>
        <SectionFrame className="bg-transparent">
        <div
          ref={ref}
          className={`  bg-principal transition-all duration-700 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-98"}`}
        >
          <div className="md:hidden p-6">
            <h2 className={`mt-3 text-3xl font-titulo font-bold tracking-tight text-right leading-tight text-secundario uppercase transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Objeto de trabajo.
            </h2>
            <div className={`mt-2 h-[2px] w-24 bg-detalles transition-all duration-1000 delay-500 ${visible ? "scale-x-100 origin-right" : "scale-x-0 origin-left"}`} />
          </div>

          <div className="flex flex-col md:flex-row md:min-h-[600px]">
            <ServicesSidebar areas={areasData} selectedArea={selectedArea} setSelectedArea={setSelectedArea} visible={visible} />
            <ServicesContent selectedArea={selectedArea} visible={visible} />
          </div>
        </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
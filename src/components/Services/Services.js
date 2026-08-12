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
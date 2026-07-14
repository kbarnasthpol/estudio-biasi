"use client";

import { useState } from "react";
import { areasData } from "../data/areas";

export default function Services() {
  const [selectedArea, setSelectedArea] = useState(areasData[0]);

  return (
    <section
      id="areas-especializacion"
      className="min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="container mx-auto max-w-7xl">

        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:hidden font-bold text-secundario relative inline-block after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-52 after:h-1 after:bg-detalles">
            ÁREAS DE ESPECIALIZACIÓN
          </h2>
        </div>

        {/* Expediente */}
        <div className="
    overflow-hidden
    rounded-2xl
    border
    border-secundario/15
    bg-principal
    shadow-2xl
    h-auto
    md:h-[575px]
">
          <div className="flex flex-col md:flex-row h-full">

            {/* PANEL IZQUIERDO */}

            <aside
  className="
    bg-secundario
    md:w-80
    shrink-0

    flex
    flex-row
    md:flex-col

    overflow-x-auto
    md:overflow-x-visible

    overflow-y-hidden
    md:overflow-y-auto

    whitespace-nowrap
    md:whitespace-normal

    border-b
    md:border-b-0
    md:border-r

    border-principal/10
  "
>
  {areasData.map((area) => {

    const active = area.id === selectedArea.id;

    return (
      <button
        key={area.id}
        onClick={() => setSelectedArea(area)}
        className={`
          relative

          shrink-0
          md:w-full

          px-6
          py-5

          md:px-8
          md:py-6

          text-left

          transition-all
          duration-300

          border-r
          md:border-r-0
          md:border-b

          border-principal/10

          ${
            active
              ? "bg-principal text-secundario font-semibold"
              : "text-principal hover:bg-secundario/80"
          }
        `}
      >
        {active && (
          <div className="absolute left-0 top-0 h-full w-1 bg-detalles" />
        )}

        {area.nombre}
      </button>
    );
  })}
</aside>

            {/* PANEL DERECHO */}

            <div className="flex-1 flex flex-col bg-principal">

              {/* Contenido */}
              <div
                key={selectedArea.id}
                className="
flex-1
overflow-y-auto

p-6
md:p-10
"
              >
                <p className="text-detalles uppercase tracking-[0.3em] text-sm mb-3">
                  Área de práctica
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-secundario mb-6">
                  {selectedArea.nombre}
                </h3>

                <p className="text-textoOscuro leading-8 text-base md:text-lg mb-10">
                  {selectedArea.descripcion}
                </p>

                <h4 className="font-semibold text-secundario mb-5">
                  Servicios incluidos
                </h4>

                <div className="flex flex-wrap gap-3">
                  {selectedArea.servicios.map((servicio) => (
                    <span
                      key={servicio}
                      className="
            px-3
py-2
text-xs

md:px-4
md:py-2
md:text-sm
            rounded-lg
            bg-secundario/5
            border
            border-secundario/10
            text-secundario
            text-sm
            font-medium
            transition-all
            duration-300
            hover:bg-detalles
            hover:text-principal
            hover:-translate-y-0.5
            cursor-default
          "
                    >
                      {servicio}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className=" bg-principal px-8 py-5 flex justify-end">
                <a href="#contacto">
                <button
                href="#contacto"
                  className="
        group
        flex
        items-center
        gap-2
        border-2
        border-detalles
        px-6
        py-3
        rounded-lg
        font-semibold
        text-secundario
        transition-all
        duration-300
        hover:bg-detalles
        hover:text-principal
      "
                >
                  Consultar
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
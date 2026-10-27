"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ServicesTags from "./ServicesTags";

export default function ServicesContent({ selectedArea, visible }) {
  const [currentArea, setCurrentArea] = useState(selectedArea);
  const isChanging = selectedArea.id !== currentArea.id;
  const consultationMessage = encodeURIComponent(
    `Hola! Necesito asesoramiento en ${currentArea.nombre} y quiero pactar una reunión con el estudio.`
  );
  const consultationUrl = `https://api.whatsapp.com/send?phone=+5492213507725&text=${consultationMessage}`;

  useEffect(() => {
    if (selectedArea.id === currentArea.id) return;
    const changeTimer = setTimeout(() => setCurrentArea(selectedArea), 150);

    return () => clearTimeout(changeTimer);
  }, [currentArea.id, selectedArea]);

  return (
    <div className="relative flex h-[550px] flex-1 flex-col overflow-hidden bg-principal">
      <div
        key={currentArea.id}
        aria-live="polite"
        className={`service-content-scroll relative z-10 min-h-0 flex-1 overflow-y-auto p-6 transition-all duration-300 md:p-10 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className={`relative min-w-0 transition-all duration-300 ${isChanging ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-secundario/60">
            <i className="fas fa-briefcase mr-2 text-detalles" />
            Área de práctica
          </p>

          <h3 className="mb-5 font-titulo text-2xl font-bold uppercase leading-tight tracking-tight text-secundario md:text-4xl">
            <span className="section-highlight">{currentArea.nombre}</span>
          </h3>

          <p className="max-w-3xl border-l-2 border-detalles/70 pl-4 text-base leading-8 text-textoOscuro md:text-lg">
            {currentArea.descripcion}
          </p>

          <div className="mt-7">
            <h4 className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-secundario md:text-xs">
              <i className="fas fa-list-check text-detalles" />
              Temas que podemos abordar
            </h4>
            <ServicesTags
              servicios={currentArea.servicios}
              visible={visible && !isChanging}
              isChanging={isChanging}
            />
          </div>
        </div>
      </div>

      <div className={`relative z-10 flex min-h-20 flex-wrap justify-end gap-0  border-secundario/15 bg-principal px-6 py-0 transition-all duration-300 md:px-0 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      } ${isChanging ? "opacity-0 -translate-x-8" : ""}`}>
        <Link 
          href={`/servicios/${currentArea.id}`} 
          className="group inline-flex w-1/2 items-center justify-center gap-2 border border-detalles bg-detalles px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Ver detalle de esta área
          <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
        </Link>
        <a 
          href={consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-1/2 items-center justify-center gap-2 border border-secundario2/20 bg-secundario2 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          
          Consultar por esta área
          <i className="fab fa-whatsapp text-2xl text-green" />
        </a>
      </div>
    </div>
  );
}
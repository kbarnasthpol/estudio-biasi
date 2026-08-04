"use client";

import { useState } from "react";
import Link from "next/link";
import ServicesTags from "./ServicesTags";

export default function ServicesContent({ selectedArea, visible }) {
  const [currentArea, setCurrentArea] = useState(selectedArea);
  const [isChanging, setIsChanging] = useState(false);

  const handleAreaChange = (newArea) => {
    if (newArea.id === currentArea.id) return;

    setIsChanging(true);

    setTimeout(() => {
      setCurrentArea(newArea);
      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 150);
  };

  if (selectedArea.id !== currentArea.id && !isChanging) {
    handleAreaChange(selectedArea);
  }

  return (
    <div className="flex-1 flex flex-col bg-principal md:min-h-[520px] relative">
      {/* Decoración de fondo sutíl */}
      <div className="absolute -right-20 -bottom-20 h-32 w-32 rounded-full bg-detalles/5 blur-2xl" />
      
      <div
        key={currentArea.id}
        className={`flex-1 overflow-y-auto p-6 md:p-10 duration-700 delay-200 relative z-10 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >

        <p className={`text-detalles uppercase tracking-[0.3em] text-sm mb-3 transition-all duration-300 ease-in-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-50"
        }`}>
          <i className="fas fa-briefcase mr-2" />
          Área de práctica
        </p>

        <h3 className={`text-2xl md:text-4xl font-titulo font-bold tracking-tight text-secundario mb-6 transition-all duration-300 ease-in-out delay-50 ${
          visible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-6 blur-[8px]"
        } ${isChanging ? "opacity-0" : ""}`}>
          {currentArea.nombre}
        </h3>

        {/* Línea decorativa */}
        <div className={`mb-6 h-px w-16 bg-gradient-to-r from-detalles to-transparent transition-all duration-500 ${
          visible ? "scale-x-100" : "scale-x-0"
        }`} />

        <p className={`text-textoOscuro leading-8 text-base md:text-lg mb-8 text-justify transition-all duration-200 ease-in-out delay-100 ${
          visible ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-6 blur-[8px]"
        } ${isChanging ? "opacity-0" : ""}`}>
          <i className="fas fa-quote-left mr-2 text-detalles/30 text-sm" />
          {currentArea.descripcion}
          <i className="fas fa-quote-right ml-2 text-detalles/30 text-sm" />
        </p>

        <h4 className="uppercase tracking-[0.25em] text-sm font-semibold text-secundario mb-5 flex items-center gap-2">
          <i className="fas fa-list-check text-detalles" />
          Servicios incluidos
        </h4>

        <ServicesTags servicios={currentArea.servicios} visible={visible && !isChanging} isChanging={isChanging} />
      </div>

      <div className={`bg-principal px-8 py-5 flex flex-wrap justify-end gap-3 transition-all duration-400 ease-in-out delay-200 relative z-10 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      } ${isChanging ? "opacity-0 -translate-x-8" : ""}`}>
        <Link 
          href={`/servicios/${currentArea.id}`} 
          className="inline-flex items-center gap-2 border border-detalles bg-detalles px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg group"
        >
          Ver detalle de esta área
          <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
        </Link>
        <a 
          href="#contacto" 
          className="inline-flex items-center gap-2 border border-secundario2/20 bg-secundario2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg group"
        >
          <i className="fab fa-whatsapp text-2xl text-green" />
          Consultar por esta área
        </a>
      </div>
    </div>
  );
}
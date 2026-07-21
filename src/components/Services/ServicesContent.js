"use client";

import { useState } from "react";
import ServicesTags from "./ServicesTags";

export default function ServicesContent({ selectedArea, visible }) {
  // Guardamos el área actual y el estado de transición
  const [currentArea, setCurrentArea] = useState(selectedArea);
  const [isChanging, setIsChanging] = useState(false);

  // Función para cambiar el área con animación
  const handleAreaChange = (newArea) => {
    if (newArea.id === currentArea.id) return;
    
    setIsChanging(true);
    
    // Cambiamos el contenido después de la animación de salida
    setTimeout(() => {
      setCurrentArea(newArea);
      // Pequeño delay para asegurar que el DOM se actualice
      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 150);
  };

  // Si el área seleccionada cambia desde el sidebar, ejecutamos la animación
  if (selectedArea.id !== currentArea.id && !isChanging) {
    handleAreaChange(selectedArea);
  }

  return (
    <div className="flex-1 flex flex-col md:h-full bg-principal">

      {/* Contenido */}
      <div
        key={currentArea.id}
        className="
          flex-1
          overflow-y-auto
          p-6
          md:p-10
        "
      >

        {/* Área - etiqueta */}
        <p
          className={`
            text-detalles
            uppercase
            tracking-[0.3em]
            text-sm
            mb-3

            transition-all
            duration-300
            ease-in-out

            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}

          `}
        >
          Área de práctica
        </p>

        {/* Título - Fade horizontal desde la izquierda */}
        <h3
          className={`
            text-2xl
            md:text-3xl
            font-bold
            text-secundario
            mb-6

            transition-all
            duration-300
            ease-in-out
            delay-50

            ${visible
  ? "opacity-100 translate-x-0 blur-0"
  : "opacity-0 -translate-x-6 blur-[8px]"
}
${isChanging
  ? "opacity-0 translate-x-3 blur-[8px]"
  : ""
}
          `}
        >
          {currentArea.nombre}
        </h3>

        {/* Descripción - Fade horizontal desde la izquierda */}
        <p
          className={`
            text-textoOscuro
            leading-8
            text-base
            md:text-lg
            mb-10

            transition-all
            duration-200
            ease-in-out
            delay-100

            ${visible
  ? "opacity-100 translate-x-0 blur-0"
  : "opacity-0 -translate-x-6 blur-[8px]"
}
${isChanging
  ? "opacity-0 translate-x-3 blur-[8px]"
  : ""
}
          `}
        >
          {currentArea.descripcion}
        </p>

        {/* Subtitulo - Fade horizontal desde la izquierda */}
        <h4
          className={`
            font-semibold
            text-secundario
            mb-5

            transition-all
            duration-300
            ease-in-out
            delay-150

            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
          `}
        >
          Servicios incluidos
        </h4>

        <ServicesTags
          servicios={currentArea.servicios}
          visible={visible && !isChanging}
          isChanging={isChanging}
        />

      </div>

      {/* Footer - Fade horizontal desde la derecha */}
      <div
        className={`
          bg-principal
          px-8
          py-5
          flex
          justify-end

          transition-all
          duration-400
          ease-in-out
          delay-200

          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
          ${isChanging ? "opacity-0 -translate-x-8" : ""}
        `}
      >
        <a href="#contacto">
          <button
            className="
              group
              flex
              items-center
              gap-2
              border-2
              border-detalles
              px-6
              py-3
              rounded-2xl
              font-semibold
              text-principal
              sm:text-secundario
              transition-all
              duration-300
              hover:bg-detalles
              hover:text-principal
              bg-detalles
              sm:bg-transparent
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
  );
}
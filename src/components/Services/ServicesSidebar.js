"use client";

import { useEffect, useRef } from "react";

export default function ServicesSidebar({
  areas,
  selectedArea,
  setSelectedArea,
  visible,
}) {
    const sidebarRef = useRef(null);
useEffect(() => {

  if (!visible) return;

  // Solo móviles
  if (window.innerWidth >= 768) return;

  const sidebar = sidebarRef.current;

  if (!sidebar) return;


  const timer = setTimeout(() => {

    sidebar.scrollTo({
      left: 500,
      behavior: "smooth",
    });


    setTimeout(() => {

      sidebar.scrollTo({
        left: 0,
        behavior: "smooth",
      });

    }, 1600);


  }, 900);




  return () => clearTimeout(timer);

}, [visible]);
    
  return (
    
    <aside
     ref={sidebarRef}
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

        border-0

        border-principal/10
        h-full
        
      "
    >
      {areas.map((area, index) => {
        const active = area.id === selectedArea.id;

        return (
          <button
            key={area.id}
            onClick={() => setSelectedArea(area)}
            className={`
              relative

              shrink-0
              flex-1
md:flex-1

              px-6
              py-5

              md:px-8
              md:py-6

              text-left

              border-r
              md:border-r-0
              md:border-b

              border-principal/10

              transition-colors
              duration-200

              ${
                active
                  ? "bg-principal text-secundario font-semibold"
                  : "text-principal hover:bg-secundario/80"
              }

              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }
            `}
            style={{
              transitionDelay: `${index * 0}ms`,
            }}
          >
            {active && (
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-2
                  bg-detalles
                "
              />
            )}
<div className={`${
                active
                  ? "md:translate-x-6 scale-102 font-bold"
                  : ""
              }`}>
            {area.nombre}
</div>
          </button>
        );
      })}
    </aside>
  );
}
"use client";

export default function ServicesTags({ servicios, visible, isChanging }) {
  return (
    <div className="flex flex-wrap gap-3">
      {servicios.map((servicio, index) => (
        <span
          key={servicio}
          className={`
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
            font-medium

            cursor-default

            transition-all
            duration-200
            ease-in-out

            hover:bg-detalles
            hover:text-principal
            hover:-translate-y-0.5

            ${visible && !isChanging 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 translate-y-3 scale-95"
            }
          `}
          style={{
            transitionDelay: `${!isChanging ? index * 30 : 0}ms`,
          }}
        >
          {servicio}
        </span>
      ))}
    </div>
  );
}
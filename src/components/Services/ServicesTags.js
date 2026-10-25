"use client";

export default function ServicesTags({ servicios, visible, isChanging }) {
  return (
    <ul className="flex flex-wrap items-start gap-2">
      {servicios.map((servicio, index) => (
        <li
          key={servicio.nombre}
          className={`group inline-flex w-fit max-w-full items-center gap-3 border border-secundario/15 bg-secundario/[0.03] px-3 py-2 text-[10px] font-medium uppercase leading-5 tracking-wide text-secundario transition-all duration-300 hover:translate-x-1 hover:border-detalles/60 hover:bg-detalles/15 md:gap-4 md:px-5 md:text-sm ${
            visible && !isChanging
              ? "service-tag-enter"
              : "opacity-0"
          }`}
          style={{
            animationDelay: `${visible && !isChanging ? index * 70 : 0}ms`,
          }}
        >
          <span className={`flex items-center gap-3 md:gap-4 ${
            visible && !isChanging ? "service-tag-content-enter" : "translate-y-3"
          }`}>
            <span aria-hidden="true" className="font-titulo text-xs font-semibold text-detalles transition-colors group-hover:text-secundario">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{servicio.nombre}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
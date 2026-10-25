"use client";

export default function ServicesTags({ servicios, visible, isChanging }) {
  return (
    <ul className="grid grid-cols-2 gap-0 ">
      {servicios.map((servicio, index) => (
        <li
          key={servicio.nombre}
          className={`flex min-h-12 items-center gap-2 px-2 py-2 text-[10px] font-medium uppercase leading-5 tracking-wide text-secundario transition-all duration-300 md:gap-3 md:px-5 md:text-sm ${
            visible && !isChanging
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
          style={{
            transitionDelay: `${!isChanging ? index * 30 : 0}ms`,
          }}
        >
          <span aria-hidden="true" className="font-titulo text-xs font-semibold text-detalles">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{servicio.nombre}</span>
        </li>
      ))}
    </ul>
  );
}
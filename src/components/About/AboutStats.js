"use client";

import useReveal from "../../hooks/useReveal";

const items = [
  "Formación sólida",
  "Enfoque práctico",
  "Acompañamiento real",
  "Visión integral",
];

export default function AboutStats() {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className="grid gap-3 md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item}
          className={`
            flex items-center gap-3 border border-secundario/12 px-4 py-3 bg-principal
            transition-all duration-1500 delay-100 hover:border-secundario/40
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ transitionDelay: `${index * 20}ms` }}
        >
          <i className="fas fa-check text-secundario" />
          <span className="text-sm font-medium text-detalles uppercase">{item}</span>
        </div>
      ))}
    </div>
  );
}
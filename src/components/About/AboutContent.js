"use client";

import useReveal from "../../hooks/useReveal";

const infoItems = [
  {
    icon: "fas fa-gavel",
    title: "Trayectoria",
    text: "Trabajo con criterio y continuidad en asuntos de alto impacto.",
  },
  {
    icon: "fas fa-location-dot",
    title: "Ubicación",
    text: "Atención cercana en La Plata, Berisso y alrededores",
  },
  {
    icon: "fas fa-video",
    title: "Modalidad",
    text: "Presencial y virtual según la necesidad de cada caso.",
  },
];

export default function AboutContent({ visible }) {
  return (
    <div
      className={`px-6 py-8 md:px-0 md:py-0 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="md:px-10 md:py-10">

      <div className="mb-3 pl-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoClaro/60">
        Sobre el estudio
      </div>

      <h2 className={`mt-3 text-3xl md:text-4xl font-titulo font-bold uppercase leading-[0.95] tracking-[-0.03em] text-textoClaro transition-all duration-700 delay-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}>
        Una mirada jurídica cercana, clara y{" "}
        <span className="inline-block bg-detalles px-2 py-1 text-secundario">
          firme
        </span>
        .
      </h2>

      <div className={`my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32 transition-all duration-1000 delay-500 ${
        visible ? "scale-x-100 origin-left" : "scale-x-0 origin-left"
      }`} />

      <p className={`mt-8 text-base lg:text-lg leading-8 text-textoClaro text-justify transition-all duration-700 delay-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}>
        <i className="fas fa-quote-left mr-2 text-detalles/30 text-sm" />
        En <strong className="text-principal font-titulo">BIASI<span className="text-detalles">&</span>ASOCIADOS</strong> trabajamos con una trayectoria construida desde la contención de situaciones reales, la escucha activa y la búsqueda de soluciones concretas.
      </p>

      <p className={`mt-4 text-base lg:text-lg leading-8 text-textoClaro text-justify transition-all duration-1400 delay-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}>
        Nuestro enfoque también contempla la ubicación y la cercanía de quienes nos consultan, entendiendo que la confianza crece cuando el acompañamiento es claro, humano y cercano a la realidad de cada persona.
        <i className="fas fa-quote-right ml-2 text-detalles/30 text-sm" />
      </p>

      </div>
      {/* Bloque tipo mosaico Trust: sin separación entre celdas, fondos alternados */}
      <div className=" grid grid-cols-1 overflow-hidden border-2 border-dotted border-detalles divide-y divide-textoClaro/15 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
        {infoItems.map((item, index) => {
          const striped = index === 1;
          const dark = index === 0;

          return (
            <div
              key={item.title}
              className={`
                group relative flex flex-col gap-2 overflow-hidden p-4
                transition-all duration-300
                lg:p-5
                ${dark ? "bg-detalles/15" : "bg-principal/10"}
              `}
              style={
                striped
                  ? {
                      backgroundImage: `repeating-linear-gradient(135deg, var(--color-secundario) 0px, var(--color-secundario) 1px, transparent 4px, transparent 20px)`,
                    }
                  : undefined
              }
            >
              <div className="flex items-center gap-2">
                <i className={`${item.icon} text-detalles`} />
                <p className="text-xs uppercase tracking-[0.3em] text-detalles">{item.title}</p>
              </div>
              <p className="text-sm leading-7 text-textoClaro">{item.text}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
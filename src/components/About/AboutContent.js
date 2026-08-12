"use client";

import useReveal from "../../hooks/useReveal";

export default function AboutContent({ visible }) {
  return (
    <div
      className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      

      <p className="text-xs hidden md:block uppercase tracking-[0.35em] text-detalles">
        <i className="fas fa-scale-balanced mr-2" />
        Sobre el estudio
      </p>
      
      <h2 className={`mt-3 text-3xl md:text-4xl font-titulo font-bold tracking-tight leading-tight text-secundario2 transition-all duration-700 delay-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}>
        Una mirada jurídica cercana, clara y firme.
      </h2>

      <div className={`mt-3 h-[2px] w-24 bg-detalles transition-all duration-1000 delay-500 ${
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

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="border-principal/15 bg-principal/10 border p-4 transition-all duration-300 hover:border-detalles/20 hover:-translate-y-1 hover:shadow-lg group">
          <div className="flex items-center gap-2 mb-2">
            <i className="fas fa-gavel text-detalles" />
            <p className="text-xs uppercase tracking-[0.3em] text-detalles">Trayectoria</p>
          </div>
          <p className="text-sm leading-7 text-textoClaro">Trabajo con criterio y continuidad en asuntos de alto impacto.</p>
        </div>
        
        <div className="border-principal/15 bg-principal/10 border p-4 transition-all duration-300 hover:border-detalles/20 hover:-translate-y-1 hover:shadow-lg group">
          <div className="flex items-center gap-2 mb-2">
            <i className="fas fa-location-dot text-detalles" />
            <p className="text-xs uppercase tracking-[0.3em] text-detalles">Ubicación</p>
          </div>
          <p className="text-sm leading-7 text-textoClaro">Atención cercana en La Plata, Berisso y alrededores</p>
        </div>
        
        <div className="border-principal/15 bg-principal/10 border p-4 transition-all duration-300 hover:border-detalles/20 hover:-translate-y-1 hover:shadow-lg group">
          <div className="flex items-center gap-2 mb-2">
            <i className="fas fa-video text-detalles" />
            <p className="text-xs uppercase tracking-[0.3em] text-detalles">Modalidad</p>
          </div>
          <p className="text-sm leading-7 text-textoClaro">Presencial y virtual según la necesidad de cada caso.</p>
        </div>
      </div>

      
    </div>
  );
}
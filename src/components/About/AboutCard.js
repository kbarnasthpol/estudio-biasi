"use client";

export default function AboutCard({ visible }) {
  return (
    <div
      className={`
        relative h-full w-full overflow-hidden bg-principal
        transition-all duration-1000
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Cuando tengas la foto, va acá con object-cover, igual que en el Hero */}
      <div className="absolute inset-0 flex items-center justify-center" />

      

      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Texto */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-justify">
        <h3
          className={`
             text-2xl md:text-2xl font-titulo font-bold tracking-tight text-secundario bg-detalles inline-block px-2 py-1
            transition-all duration-700 delay-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          DRA. MARIA FERNANDA BIASI
        </h3>

        <p
          className={`
            mt-2 uppercase tracking-[0.25em] text-sm text-detalles
            transition-all duration-700 delay-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Abogada - Licenciada en Seguridad
        </p>

        <div
          className={`
            mt-3 h-px w-12 bg-gradient-to-r from-detalles to-transparent
            transition-all duration-700 delay-700
            ${visible ? "scale-x-100 origin-left" : "scale-x-0"}
          `}
        />

        <p
          className={`
            mt-3 text-xs text-textoClaro/50 flex items-center gap-2
            transition-all duration-700 delay-900
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <i className="fas fa-calendar-check text-detalles/50" />
          <span>Más de 20 años de trayectoria</span>
        </p>
      </div>
    </div>
  );
}
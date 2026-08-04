'use client';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
    href="https://maps.app.goo.gl/VTr2bbvbfg8CPatx8"
target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver ubicación física"
        className="flex h-14 w-14 items-center justify-center border border-secundario/20 bg-principal text-secundario shadow-lg transition hover:-translate-y-1"
      >
        <i className="fas fa-map-marker-alt text-2xl" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+5492213507725&text=Hola!%20Necesito%20asesor%C3%ADa%20legal%20y%20quiero%20pactar%20una%20reuni%C3%B3n%20con%20su%20estudio."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex h-14 w-14 items-center justify-center border border-[#25D366] bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1"
      >
        <i className="fab fa-whatsapp text-2xl" />
      </a>
    </div>
  );
}

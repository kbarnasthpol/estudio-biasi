import Link from 'next/link';
import Container from './Container';
import FloatingWhatsApp from './FloatingWhatsApp';
import SectionFrame from './SectionFrame';

export default function ServiceDetailPage({ area }) {
  return (
    <div className="min-h-screen bg-principal pt-24">
      <main className="pb-20">
        <Container>
          <SectionFrame className="bg-principal/95">
            <div className="px-6 py-8 md:px-10 md:py-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <Link href="/#areas-especializacion" className="inline-flex w-fit items-center rounded-full border border-secundario/15 bg-principal px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5">
                  Volver a servicios
                </Link>
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-detalles">Especialidad jurídica</p>
                  <h1 className="mt-3 text-3xl font-titulo font-bold leading-tight text-secundario md:text-4xl">
                    {area.nombre}
                  </h1>
                  <p className="mt-5 text-base leading-8 text-textoOscuro md:text-lg">
                    {area.descripcion}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-secundario/10 bg-secundario px-6 py-6 text-principal lg:max-w-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-detalles">Cómo lo abordamos</p>
                  <p className="mt-3 text-base leading-8 text-principal/90">
                    Analizamos cada situación con criterio, claridad y acompañamiento real para definir una estrategia adecuada desde el primer contacto.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="/servicios"
                      className="inline-flex items-center justify-center rounded-full border border-detalles bg-detalles px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5"
                    >
                      Volver a servicios
                    </a>
                    <a
                      href="/"
                      className="inline-flex items-center justify-center rounded-full border border-principal/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-principal transition hover:-translate-y-0.5"
                    >
                      Inicio
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {area.servicios.map((servicio) => (
                  <div key={servicio} className="rounded-[1.25rem] border border-secundario/10 bg-principal/70 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secundario">{servicio}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-secundario/10 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-textoOscuro/80">
                  Si necesitás orientación, podés escribirnos para coordinar una consulta inicial y recibir una primera mirada sobre tu situación.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-secundario/15 bg-principal px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5"
                  >
                    Volver al inicio
                  </a>
                  <a
                    href="/faq"
                    className="inline-flex items-center justify-center rounded-full border border-detalles bg-detalles px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5"
                  >
                    Ver FAQ
                  </a>
                </div>
              </div>
            </div>
          </SectionFrame>
        </Container>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}

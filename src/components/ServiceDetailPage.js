import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import FloatingWhatsApp from "./FloatingWhatsApp";
import PageActions from "./PageActions";
import SectionFrame from "./SectionFrame";
import CopyrightNotice from "./CopyrightNotice";

export default function ServiceDetailPage({ area }) {
  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-20">
      <main className="page-motion-in flex-1 pb-0 bg-secundario/80">
        <Container>
          <SectionFrame className="border-x-0 shadow-none">
            <div>
              <header className="relative isolate flex min-h-[420px] items-end overflow-hidden border-b border-principal/15 md:min-h-[500px]">
                <Image
                  src={area.imagen.src}
                  alt=""
                  fill
                  loading="eager"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover grayscale"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-secundario/10 via-secundario/20 to-secundario/30 backdrop-blur-[3px]"
                />

                <PageActions
                  backHref="/#areas-especializacion"
                  backLabel="Volver a servicios"
                  contactLabel="Consultar por esta área"
                  variant="overlay"
                />

                <div className="relative z-10 px-6 pb-12 pt-32 md:px-10 md:pb-14 md:pt-16">
                  <h1 className="font-titulo text-4xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-principal md:text-6xl">
                    <span className=" section-highlight opacity-90">{area.nombre}</span>
                  </h1>
                  <div className="my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32" />
                  <p className="max-w-3xl border-l-2 bg-secundario/50 border-detalles/80 pl-5 text-base leading-8 text-principal md:text-lg">
                    {area.descripcion}
                  </p>
                </div>

                <p className="absolute bottom-2 right-3 z-10 max-w-[90%] text-right text-[9px] leading-4 text-principal/75 md:bottom-3 md:right-5 md:text-[10px]">
                  <a
                    href={area.imagen.source}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    {area.imagen.title}
                  </a>{" "}
                  — {area.imagen.creator},{" "}
                  <a
                    href={area.imagen.licenseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    {area.imagen.license}
                  </a>
                </p>
              </header>

              <section
                aria-labelledby="service-topics-title"
                className="px-6 py-8 md:px-10 md:py-12"
              >
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoClaro/60">
                  Alcance del área
                </p>
                <h2
                  id="service-topics-title"
                  className="font-titulo text-center text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-textoClaro md:text-4xl"
                >
                  <span className="text-detalles">¿</span>En qué podemos orientarte<span className="text-detalles">?</span>              </h2>
                <div className="my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32" />
                <p className=" text-base leading-8 text-textoClaro/80 md:text-lg">
                  Estos son algunos de los temas que pueden motivar una
                  consulta en esta área. Cada situación es distinta y requiere
                  conversar sobre sus circunstancias.
                </p>

                <ol className="mt-8 border-y-2 border-dotted border-detalles/60">
                  {area.servicios.map((servicio, index) => (
                    <li
                      key={servicio.nombre}
                      className="grid gap-2 border-b border-principal/15 py-5 last:border-b-0 md:grid-cols-[5rem_1fr] md:gap-6 md:py-6"
                    >
                      <span
                        aria-hidden="true"
                        className="font-titulo text-sm font-semibold text-detalles"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-titulo text-lg font-semibold uppercase tracking-wide text-principal md:text-xl">
                          {servicio.nombre}
                        </h3>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-principal/75 md:text-base">
                          {servicio.descripcion}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <aside className="grid gap-6 border-t border-principal/15 bg-principal/90 px-6 py-8 md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-10">
                <div className="max-w-3xl">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoOscuro/60">
                    Un abordaje claro
                  </p>
                  <h2 className="font-titulo section-highlight text-2xl font-bold uppercase leading-tight text-detalles md:text-3xl">
                    Cada situación merece ser escuchada.
                                      </h2>
                  <p className="mt-4 text-sm leading-7 text-secundario/80 md:text-base">
                    El primer paso es conversar sobre lo que te pasa y conocer
                    las circunstancias de tu consulta, con claridad y
                    confidencialidad.
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-center md:items-end">
                  <Link
                    href="/#contacto"
                    className="inline-flex w-fit items-center justify-center gap-2 border border-detalles bg-detalles px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg md:text-sm"
                  >
                    Iniciar una consulta
                    <i aria-hidden="true" className="fas fa-arrow-right text-xs" />
                  </Link>

                </div>
              </aside>
            </div>
          </SectionFrame>
        </Container>
      </main>

      <CopyrightNotice />
      <FloatingWhatsApp />
    </div>
  );
}

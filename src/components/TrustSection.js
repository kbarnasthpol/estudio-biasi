'use client';

import Container from './Container';
import SectionFrame from './SectionFrame';
import useReveal from '../hooks/useReveal';

const items = [
  { title: 'Atención cercana', text: 'Cada caso se analiza de forma personal, sin respuestas genéricas.' },
  { title: 'Estrategia jurídica', text: 'Diseñamos una línea de acción clara según el contexto y los objetivos.' },
  { title: 'Comunicación clara', text: 'Explicamos cada paso con lenguaje simple y directo.' },
  { title: 'Acompañamiento real', text: 'Te acompañamos con criterio, compromiso y responsabilidad.' },
];

export default function TrustSection() {
  const [ref, visible] = useReveal();

  return (
    <section id="valores" className="w-full scroll-mt-24">
      <Container>
        <SectionFrame>
          <div
            ref={ref}
            className={`relative bg-transparent text-textoClaro transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Decoraciones de fondo */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/5 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secundario/5 blur-3xl" />
            <div className="absolute left-1/3 top-1/2 h-32 w-32 rounded-full bg-principal/5 blur-2xl" />

            <div className="relative z-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Columna izquierda - Texto principal */}
                <div className="max-w-4xl text-start lg:text-left px-6 py-8 text-textoClaro md:px-10 md:py-12 justify-between flex flex-col">
                  <div className="mb-3 pl-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoClaro/60">
                    Nuestros valores
                  </div>

                  <h2 className="mt-3 text-3xl text-left md:text-4xl font-titulo font-bold uppercase leading-[0.95] tracking-[-0.03em] text-textoClaro">
                    Un estudio jurídico que combina criterio, cercanía y{' '}
                    <span className="inline-block bg-detalles px-2 py-1 text-secundario">
                      estrategia
                    </span>
                    .
                  </h2>

                  <div className="my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32" />

                  <p className="text-base md:text-lg text-textoClaro/80 leading-8">
                    <i className="fas fa-quote-left mr-2 text-detalles/30 text-sm" />
                    Cada situación legal merece una mirada particular. Por eso trabajamos con un enfoque integral, claro y comprometido, orientado a proteger tus derechos y acompañarte con confianza desde el primer encuentro hasta la resolución de la cuestión.
                    <i className="fas fa-quote-right ml-2 text-detalles/30 text-sm" />
                  </p>

                  {/* Indicadores de confianza */}
                  <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                    <div className="flex items-center gap-2 text-sm text-textoClaro/70">
                      <i className="fas fa-shield-halved text-detalles" />
                      <span>Confidencialidad garantizada</span>
                    </div>
                    <div className="hidden h-4 w-px bg-textoClaro/20 lg:block" />
                    <div className="flex items-center gap-2 text-sm text-textoClaro/70">
                      <i className="fas fa-clock text-detalles" />
                      <span>Respuesta rápida</span>
                    </div>
                    <div className="hidden h-4 w-px bg-textoClaro/20 lg:block" />
                    <div className="flex items-center gap-2 text-sm text-textoClaro/70">
                      <i className="fas fa-star text-detalles" />
                      <span>Compromiso real</span>
                    </div>
                  </div>
                </div>

                {/* Columna derecha - Mosaico de valores en formato lista */}
                <div className="flex flex-col justify-end px-6 py-8 md:px-0 md:py-0">
                  <div className="py-5 text-[18px] text-center justify-center items-center font-semibold uppercase bg-detalles tracking-[0.32em] text-textoClaro">
                    Nuestra forma de trabajar
                  </div>

                  <div className="grid grid-cols-1 h-full grid-rows-4 overflow-hidden border-dotted border-t-0 border-detalles border-2 divide-y divide-textoClaro/15">
                    {items.map((item, index) => {
                      const striped = index === 1 || index === 3;
                      const dark = index === 0 || index === 3;

                      return (
                        <div
                          key={item.title}
                          className={`
                            group relative flex items-center gap-4
                            overflow-hidden p-4 transition-all duration-300
                            lg:p-5
                            ${dark ? 'bg-detalles/15' : 'bg-principal/10'}
                          `}
                          style={
                            striped
                              ? {
                                  backgroundImage: `repeating-linear-gradient(135deg, var(--color-secundario) 0px, var(--color-secundario) 1px, transparent 4px, transparent 20px)`,
                                }
                              : undefined
                          }
                        >
                          <span
                            className="
                              inline-flex h-7 w-7 shrink-0 items-center justify-center
                              bg-detalles/20 text-xs font-bold text-detalles
                              transition-all duration-300 group-hover:bg-detalles/30
                            "
                          >
                            {index + 1}
                          </span>

                          <div>
                            <h3 className="font-titulo text-sm font-bold uppercase tracking-wide text-textoClaro lg:text-base">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs leading-6 text-textoClaro/75 lg:text-sm">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
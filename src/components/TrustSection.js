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
            className={`relative bg-transparent px-6 py-8 text-principal md:px-10 md:py-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Decoraciones de fondo */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/5 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secundario/5 blur-3xl" />
            <div className="absolute left-1/3 top-1/2 h-32 w-32 rounded-full bg-principal/5 blur-2xl" />

            <div className="relative z-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                {/* Columna izquierda - Texto principal */}
                <div className="max-w-4xl text-start lg:text-left">
                  {/* Badge decorativo */}
                  <div className="mb-4 hidden md:block flex items-center justify-center lg:justify-start">
                    <span className="inline-flex items-center gap-2 rounded-full bg-detalles/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-detalles">
                      <span className="h-1.5 w-1.5 rounded-full bg-detalles" />
                      Nuestros valores
                    </span>
                  </div>
                  
                  <h2 className="mt-3 text-3xl text-left md:text-4xl font-titulo font-bold text-secundario2 leading-tight">
                    Un estudio jurídico que combina criterio, cercanía y estrategia.
                  </h2>

                  {/* Línea decorativa */}
                  <div className="mt-4 flex justify-center lg:justify-start">
                    <div className="h-px w-20 bg-gradient-to-r from-detalles to-transparent" />
                  </div>

                  <p className="mt-6 text-base md:text-lg text-textoClaro leading-8">
                    <i className="fas fa-quote-left mr-2 text-detalles/30 text-sm" />
                    Cada situación legal merece una mirada particular. Por eso trabajamos con un enfoque integral, claro y comprometido, orientado a proteger tus derechos y acompañarte con confianza desde el primer encuentro hasta la resolución de la cuestión.
                    <i className="fas fa-quote-right ml-2 text-detalles/30 text-sm" />
                  </p>

                  {/* Indicadores de confianza */}
                  <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                    <div className="flex items-center gap-2 text-sm text-principal/70">
                      <i className="fas fa-shield-halved text-detalles" />
                      <span>Confidencialidad garantizada</span>
                    </div>
                    <div className="hidden h-4 w-px bg-principal/20 lg:block" />
                    <div className="flex items-center gap-2 text-sm text-principal/70">
                      <i className="fas fa-clock text-detalles" />
                      <span>Respuesta rápida</span>
                    </div>
                    <div className="hidden h-4 w-px bg-principal/20 lg:block" />
                    <div className="flex items-center gap-2 text-sm text-principal/70">
                      <i className="fas fa-star text-detalles" />
                      <span>Compromiso real</span>
                    </div>
                  </div>
                </div>

                {/* Columna derecha - Lista de valores */}
                <div className="border border-principal/15 bg-principal/10 p-5 md:p-6 text-principal transition-all duration-300 hover:border-detalles/20 hover:shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <i className="fas fa-list-check text-detalles" />
                    <p className="text-sm uppercase tracking-[0.25em] text-detalles">Nuestra forma de trabajar</p>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    {items.map((item, index) => (
                      <div 
                        key={item.title} 
                        className={`group border-b border-principal/10 pb-3 last:border-b-0 last:pb-0 transition-all duration-300 ${
                          index < items.length - 1 ? 'hover:border-detalles/20' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-detalles/10 text-detalles text-xs font-bold transition-all duration-300 group-hover:bg-detalles/20">
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="text-base font-semibold text-principal flex items-center gap-2">
                              {item.title}
                              
                            </h3>
                            <p className="mt-1 text-sm leading-7 text-principal/80">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
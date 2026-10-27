'use client';

import Container from './Container';
import SectionFrame from './SectionFrame';
import useReveal from '../hooks/useReveal';

const problems = [
  'Un despido o conflicto laboral',
  'Una situación familiar o de convivencia',
  'Un problema penal o una denuncia',
  'Una consulta civil o comercial',
  'Una cuestión de protección animal',
  'La necesidad de empezar con orientación',
];

export default function ProblemSection() {
  const [ref, visible] = useReveal();

  return (
    <section id="problemas" className="w-full scroll-mt-24">
      <Container>
        <SectionFrame className="md:min-h-[680px]">
          <div
            ref={ref} 
            className={`relative min-h-[620px] text-textoClaro transition-all duration-700 md:min-h-[680px] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Decoraciones de fondo */}
            <div className="ambient-float absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/10 blur-3xl" />
            <div className="ambient-float absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-principal/5 blur-3xl" />
            <div className="ambient-float absolute right-1/4 top-1/2 h-32 w-32 rounded-full bg-detalles/5 blur-2xl" />

            <div className="relative z-10">
              <div className="grid min-h-[620px] lg:min-h-[680px] lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
                {/* Columna izquierda - Texto */}
                <div className="flex max-w-3xl flex-col justify-center px-6 py-8 md:px-10 md:py-12">
                  <div className="mb-3 pl-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoClaro/60">
                    Asesoría legal
                  </div>

                  <p className="text-xs uppercase tracking-[0.35em] text-detalles">
                    <i className="fas fa-circle-exclamation mr-2" />
                    ¿Tenés un problema legal?
                  </p>
                  
                  <h2 className="mt-3 text-left font-titulo text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-textoClaro md:text-4xl">
                    No hace falta saber por dónde empezar para pedir{' '}
                    <span className="section-highlight">ayuda.</span>
                  </h2>

                  {/* Línea decorativa */}
                  <div className="my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32" />

                  <div className="max-w-xl border-l-2 border-detalles/60 pl-5">
                    <p className="text-base leading-8 text-textoClaro/80 md:text-lg">
                      A veces lo más difícil es dar el primer paso. Si algo te preocupa, podés contarnos brevemente qué está pasando y te orientamos sobre las opciones más adecuadas.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <div className="flex items-center gap-2 text-sm text-principal/70">
                      <i className="fas fa-phone text-detalles" />
                      <span>Podés contarnos tu situación</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-principal/70">
                      <i className="fas fa-clock text-detalles" />
                      <span>Respondemos a la brevedad</span>
                    </div>
                  </div>

                  <p className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-detalles md:text-xs">
                    Ejemplos por los que se suele empezar una consulta
                    <i className="fas fa-arrow-right text-xs hidden md:block" />
                  </p>

                  <div className="mt-8 grid min-h-20 grid-cols-[4rem_1fr] overflow-hidden border-y border-textoClaro/15 md:mt-10 md:min-h-24 md:grid-cols-[5rem_1fr]">
                    <div aria-hidden="true" className="diagonal-pattern bg-detalles/15" />
                    <p className="flex items-center px-4 py-3 text-xs leading-6 text-textoClaro/80 md:px-6 md:text-sm">
                      No necesitás tener todas las respuestas: podemos ayudarte a ordenar el primer paso.
                    </p>
                  </div>
                </div>

                {/* Columna derecha - Lista de problemas */}
                <div className="flex min-h-[500px] w-full flex-col overflow-hidden lg:min-h-0">
                  <div className="grid flex-1 grid-cols-2 overflow-hidden border-2 border-dotted border-detalles/60">
                    {problems.map((problem, index) => (
                      <div
                        key={problem}
                        className={`group relative flex min-h-28 items-center gap-4 overflow-hidden border-b border-textoClaro/15 bg-principal/5 p-4 transition-all duration-300 last:border-b-0 hover:bg-detalles/10 odd:border-r [&:nth-child(n+5)]:border-b-0 md:min-h-32 md:p-5 ${
                          visible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        <span className="font-titulo text-sm font-semibold text-detalles/80">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-medium uppercase leading-6 tracking-[0.12em] text-textoClaro md:text-sm">
                          {problem}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className=" grid grid-cols-2">
                    <div
                      aria-hidden="true"
                      className="diagonal-pattern min-h-20 bg-principal/80 hidden md:block md:min-h-24"
                    />
                    <a
                      href="#contacto"
                      className="group inline-flex min-h-20 items-center justify-center gap-2 bg-detalles px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-secundario transition hover:bg-detalles/90 md:min-h-24 md:px-6 md:text-sm"
                    >
                      Contanos qué necesitás
                      <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                    </a>
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
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
        <SectionFrame className="bg-secundario/95">
          <div 
            ref={ref} 
            className={`relative px-6 py-8 text-principal md:px-10 md:py-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Decoraciones de fondo */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/10 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-principal/5 blur-3xl" />
            <div className="absolute right-1/4 top-1/2 h-32 w-32 rounded-full bg-detalles/5 blur-2xl" />

            <div className="relative z-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                {/* Columna izquierda - Texto */}
                <div className="max-w-3xl text-center lg:text-left">
                  {/* Badge decorativo */}
                  <div className="mb-4 hidden md:block flex items-center justify-center lg:justify-start">
                    <span className="inline-flex items-center gap-2 rounded-full bg-detalles/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-detalles">
                      <span className="h-1.5 w-1.5 rounded-full bg-detalles" />
                      Asesoría legal
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.35em] text-detalles">
                    <i className="fas fa-circle-exclamation mr-2" />
                    ¿Tenés un problema legal?
                  </p>
                  
                  <h2 className="mt-3 text-secundario2 text-3xl md:text-4xl font-titulo font-bold leading-tight">
                    No hace falta saber por dónde empezar para pedir ayuda.
                  </h2>

                  {/* Línea decorativa */}
                  <div className="mt-4 flex justify-center lg:justify-start">
                    <div className="h-px w-20 bg-gradient-to-r from-detalles to-transparent" />
                  </div>

                  <p className="mt-6 text-base md:text-lg leading-8 text-principal/90">
                    <i className="fas fa-quote-left mr-2 text-justify text-detalles/30 text-sm" />
                    A veces lo más difícil es dar el primer paso. Si algo te preocupa, podés contarnos brevemente qué está pasando y te orientamos sobre las opciones más adecuadas.
                    <i className="fas fa-quote-right ml-2 text-detalles/30 text-sm" />
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
                    <div className="flex items-center gap-2 text-sm text-principal/70">
                      <i className="fas fa-phone text-detalles" />
                      <span>Consultas sin compromiso</span>
                    </div>
                    <div className="hidden h-4 w-px bg-principal/20 lg:block" />
                    <div className="flex items-center gap-2 text-sm text-principal/70">
                      <i className="fas fa-clock text-detalles" />
                      <span>Respondemos a la brevedad</span>
                    </div>
                  </div>

                  <p className="mt-8 text-l uppercase tracking-[0.25em] text-detalles flex items-center justify-center lg:justify-center gap-2">
                    <i className="fas fa-arrow-right text-xs" />
                    Ejemplos por los que se suele empezar una consulta
                    <i className="fas fa-arrow-right text-xs" />
                  </p>
                </div>

                {/* Columna derecha - Lista de problemas */}
                <div className="w-full">
                  <div className="mx-auto max-w-xl text-center">
                    <div className="space-y-3">
                      {problems.map((problem, index) => (
                        <div 
                          key={problem} 
                          className={`group flex items-center justify-center border border-principal/15 bg-principal/10 px-4 py-4 text-sm uppercase tracking-[0.2em] text-center transition-all duration-300 hover:border-detalles/30 hover:bg-detalles/10 hover:-translate-y-0.5 hover:shadow-lg ${
                            visible 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-6'
                          }`}
                          
                        >
                          <span className="flex items-center gap-3">
                            
                            {problem}
                            
                          </span>
                        </div>
                      ))}
                    </div>

                    
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
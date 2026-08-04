'use client';

import Container from './Container';
import SectionFrame from './SectionFrame';
import useReveal from '../hooks/useReveal';

const testimonials = [
  {
    quote: 'Un espacio claro y profesional para resolver dudas importantes con confianza.',
    name: 'Consulta preparada',
    role: 'Testimonio pendiente de publicación 1',
  },
  {
    quote: 'La propuesta del estudio transmite seriedad, cercanía y una mirada estratégica.',
    name: 'Consulta preparada',
    role: 'Testimonio pendiente de publicación 2',
  },
  {
    quote: 'Cada contacto transmite una idea muy clara: asesoramiento serio y cercano.',
    name: 'Consulta preparada',
    role: 'Testimonio pendiente de publicación 3',
  },
];

export default function TestimonialsSection() {
  const [ref, visible] = useReveal();

  return (
    <section id="testimonios" className="w-full scroll-mt-24">
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
            <div className="absolute right-1/3 top-1/2 h-32 w-32 rounded-full bg-principal/5 blur-2xl" />

            <div className="relative z-10">
              {/* Badge decorativo */}
              <div className="mb-4  flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-detalles/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-detalles">
                  <span className="h-1.5 w-1.5 rounded-full bg-detalles" />
                  Lo que dicen nuestros clientes
                </span>
              </div>

              <div className="max-w-4xl ">
                <p className=" hidden md:block text-xs uppercase tracking-[0.35em] text-detalles">
                  <i className="fas fa-star mr-2" />
                  Testimonios
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-titulo font-bold text-secundario2 leading-tight">
                  La confianza de quienes nos eligen se construye día a día.
                </h2>
                <p className="mt-4 text-base md:text-lg text-textoClaro leading-8">
                  <i className="fas fa-quote-left mr-2 text-detalles/30 text-sm" />
                  Mientras incorporamos nuevas opiniones reales, dejamos esta sección preparada para mostrar la valoración del estudio de forma elegante y sencilla.
                  <i className="fas fa-quote-right ml-2 text-detalles/30 text-sm" />
                </p>
              </div>

              {/* Línea decorativa */}
              <div className="mt-6 flex">
                <div className="h-px w-20 bg-gradient-to-r from-detalles to-transparent" />
              </div>

              {/* Contador de testimonios */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-sm text-principal/60">
                  <i className="fas fa-comment-dots mr-2 text-detalles" />
                  {testimonials.length} testimonios disponibles
                </span>
              </div>

              <div className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-detalles/30 scrollbar-track-transparent">
                {testimonials.map((item, index) => (
                  <div 
                    key={item.name + item.role} 
                    className="min-w-[280px] flex-1 snap-start border-principal/15 bg-principal/10 border px-5 py-6 md:min-w-[320px] transition-all duration-300 hover:border-detalles/30 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Comillas decorativas grandes */}
                    <div className="relative">
                      <i className="fas fa-quote-left absolute -left-2 -top-2 text-4xl text-detalles/10" />
                      <p className="relative z-10 text-base leading-8 text-textoClaro pl-4">
                        {item.quote}
                      </p>
                    </div>
                    
                    {/* Línea separadora */}
                    <div className="mt-4 h-px w-12 bg-gradient-to-r from-detalles/30 to-transparent" />
                    
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-detalles/20 text-detalles">
                        <i className="fas fa-user text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-secundario2">{item.name}</p>
                        <p className="text-sm text-textoClaro/70 flex items-center gap-1">
                          <i className="fas fa-circle text-[4px] text-detalles/50" />
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores de scroll */}
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <span 
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === 0 
                        ? 'w-8 bg-detalles' 
                        : 'w-1.5 bg-detalles/30'
                    }`}
                  />
                ))}
              </div>

              
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
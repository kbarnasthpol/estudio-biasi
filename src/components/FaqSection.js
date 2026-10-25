'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import SectionFrame from './SectionFrame';
import useReveal from '../hooks/useReveal';

const faqs = [
  {
    question: '¿Necesito una consulta previa para comenzar?',
    answer: 'Sí. La consulta inicial nos permite entender la situación y avanzar con una orientación clara.',
  },
  {
    question: '¿Atienden consultas por WhatsApp?',
    answer: 'Sí, podemos responder consultas iniciales por WhatsApp y coordinar una reunión posterior.',
  },
  {
    question: '¿Se pueden atender casos de forma virtual?',
    answer: 'Sí. La modalidad puede adaptarse según la necesidad de cada caso y la comodidad del cliente.',
  },
  {
    question: '¿Qué información conviene llevar a la primera consulta?',
    answer: 'Es útil llevar documentación relevante, fechas, nombres y cualquier antecedente que ayude a comprender la situación.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useReveal();

  return (
    <section id="faq" className="w-full scroll-mt-24">
      <Container>
        <SectionFrame>
          <div 
            ref={ref} 
            className={`relative bg-transparent px-6 py-8 text-principal md:px-10 md:py-12 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Decoraciones de fondo */}
            <div className="ambient-float absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/5 blur-3xl" />
            <div className="ambient-float absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secundario/5 blur-3xl" />

            <div className="relative z-10">
              {/* Badge decorativo */}
              <div className="mb-3 pl-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoClaro/60">
                Resolvemos tus dudas
              </div>

              <div className="max-w-5xl">
                <p className="text-xs uppercase tracking-[0.35em] text-detalles">
                  <i className="fas fa-question-circle mr-2" />
                  FAQ
                </p>
                <h2 className="mt-3 text-left font-titulo text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-textoClaro md:text-4xl">
                  <span className="section-highlight">Preguntas frecuentes</span>{' '}
                  para despejar dudas desde el comienzo.
                </h2>
              </div>

              {/* Línea decorativa */}
              <div className="my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32" />

              <div className="mt-8 flex flex-col gap-3">
                {faqs.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={item.question} 
                      className="flex shrink-0 flex-col overflow-hidden border border-principal/15 bg-principal/95 shadow-none transition-colors duration-300 hover:border-detalles/50"
                    >
                      <button
                        type="button"
                        id={`faq-question-${index}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className="group flex min-h-14 w-full flex-none items-center justify-between gap-3 px-5 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-detalles"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      >
                        <span className="flex items-center gap-3 text-sm font-semibold text-secundario md:text-base">
                          <span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold transition-all duration-300 ${
                            isOpen 
                              ? 'bg-detalles text-secundario' 
                              : 'border border-secundario/15 bg-principal text-secundario/70'
                          }`}>
                            {index + 1}
                          </span>
                          {item.question}
                        </span>
                        <span className={`text-xl text-detalles transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      <div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        aria-hidden={!isOpen}
                        className={`overflow-hidden transition-[max-height] duration-300 ${
                          isOpen ? 'max-h-40' : 'max-h-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-4 text-sm leading-7 text-textoOscuro md:text-base">
                            <i className="fas fa-quote-left mr-2 text-detalles/30 text-xs" />
                            {item.answer}
                            <i className="fas fa-quote-right ml-2 text-detalles/30 text-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-sm text-textoClaro/60">
                  <i className="fas fa-clock mr-2 text-detalles" />
                  ¿No encontraste tu pregunta? Escríbenos directamente
                </p>
                <Link 
                  href="/faq" 
                  className="group inline-flex w-full items-center justify-center border border-detalles bg-detalles px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg md:w-auto md:text-sm"
                >
                  Ver más preguntas
                  <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
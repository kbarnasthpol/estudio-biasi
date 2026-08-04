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
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/5 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-secundario/5 blur-3xl" />

            <div className="relative z-10">
              {/* Badge decorativo */}
              <div className="mb-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-detalles/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-detalles">
                  <span className="h-1.5 w-1.5 rounded-full bg-detalles" />
                  Resolvemos tus dudas
                </span>
              </div>

              <div className="max-w-5xl">
                <p className="text-xs uppercase tracking-[0.35em] text-detalles">
                  <i className="fas fa-question-circle mr-2" />
                  FAQ
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-titulo font-bold text-secundario2 leading-tight">
                  Preguntas frecuentes para despejar dudas desde el comienzo.
                </h2>
              </div>

              {/* Línea decorativa */}
              <div className="mt-4 flex">
                <div className="h-px w-20 bg-gradient-to-r from-detalles to-transparent" />
              </div>

              <div className="mt-8 space-y-3">
                {faqs.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={item.question} 
                      className="border border-secundario/12 bg-principal/80 shadow-none overflow-hidden transition-all duration-300 hover:border-detalles/20"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-5 py-4 text-left group"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      >
                        <span className="flex items-center gap-3 text-base font-semibold text-secundario">
                          <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                            isOpen 
                              ? 'bg-detalles text-secundario' 
                              : 'bg-secundario/10 text-secundario/50'
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
                      <div className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}>
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm md:text-base leading-7 text-textoOscuro">
                            <i className="fas fa-quote-left mr-2 text-detalles/30 text-xs" />
                            {item.answer}
                            <i className="fas fa-quote-right ml-2 text-detalles/30 text-xs" />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-sm text-principal/60">
                  <i className="fas fa-clock mr-2 text-detalles" />
                  ¿No encontraste tu pregunta? Escríbenos directamente
                </p>
                <Link 
                  href="/faq" 
                  className="inline-flex items-center justify-center border border-detalles bg-detalles px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg group"
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
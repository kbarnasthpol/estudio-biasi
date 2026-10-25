'use client';

import Link from 'next/link';
import Container from './Container';
import SectionFrame from './SectionFrame';
import PageActions from './PageActions';
import useReveal from '../hooks/useReveal';

const faqs = [
  {
    question: '¿Necesito una consulta previa para comenzar?',
    answer: 'Sí. La consulta inicial nos permite entender la situación y avanzar con una orientación clara y personalizada.',
  },
  {
    question: '¿Atienden consultas por WhatsApp?',
    answer: 'Sí. Podemos responder consultas iniciales por WhatsApp y coordinar una reunión posterior.',
  },
  {
    question: '¿Se pueden atender casos de forma virtual?',
    answer: 'Sí. La modalidad puede adaptarse según la necesidad de cada caso y la comodidad del cliente.',
  },
  {
    question: '¿Qué información conviene llevar a la primera consulta?',
    answer: 'Es útil llevar documentación relevante, fechas, nombres y cualquier antecedente que ayude a comprender la situación.',
  },
  {
    question: '¿Qué áreas atiende el estudio?',
    answer: 'Trabajamos en Derecho Laboral, Penal, Familia, Civil y Comercial, Derecho Animal y Seguridad Pública.',
  },
  {
    question: '¿Cómo se coordina una entrevista?',
    answer: 'Podés escribirnos por WhatsApp o completar el formulario de contacto para que nos pongamos en contacto.',
  },
];

export default function FAQPageSection() {
  const [ref, visible] = useReveal();

  return (
    <section id="faq-page" className="w-full">
      <Container>
        <SectionFrame>
          <div
            ref={ref}
            className={`relative px-6 py-8 text-principal transition-all duration-700 md:px-10 md:py-12 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="ambient-float pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-detalles/5 blur-3xl" />
            <div className="relative z-10">
              <PageActions
                backHref="/"
                backLabel="Volver al inicio"
                contactLabel="Consultar por una duda"
                variant="embedded"
              />

              <div className="max-w-3xl">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoClaro/60">
                  Preguntas frecuentes
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-detalles">
                  FAQ ampliada
                </p>
                <h2 className="mt-3 font-titulo text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-textoClaro md:text-4xl">
                  <span className="section-highlight">Respuestas claras</span>{' '}
                  para empezar con confianza.
                </h2>
                <p className="mt-4 text-base leading-8 text-principal/80 md:text-lg">
                  Pensamos esta sección como un espacio preparado para crecer con nuevas preguntas reales y para acompañar a quienes llegan buscando orientación.
                </p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {faqs.map((item) => (
                  <div
                    key={item.question}
                    className="border border-secundario/12 bg-principal/95 p-5"
                  >
                    <h3 className="text-base font-semibold text-secundario">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-textoOscuro md:text-base">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center border border-detalles bg-detalles px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Consultar por una duda
                </Link>
              </div>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}

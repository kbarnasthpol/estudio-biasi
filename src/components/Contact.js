"use client";

import Container from "./Container";
import SectionFrame from "./SectionFrame";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "fab fa-whatsapp",
      color: "bg-[#25D366] hover:bg-[#1fae54] text-white",
      url: "https://api.whatsapp.com/send?phone=+5492213507725&text=Hola!%20Necesito%20asesor%C3%ADa%20legal%20y%20quiero%20pactar%20una%20reuni%C3%B3n%20con%20su%20estudio.",
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      color: "bg-principal/80 hover:bg-principal/90 text-secundario",
      url: "mailto:mfbiasi@hotmail.com?subject=CONSULTA&body=Hola%2C%20me%20comunico%20con%20usted%20por%20...",
    },
  ];

  const [ref, visible] = useReveal();

  return (
    <section
      id="contacto"
      className="relative flex min-h-[calc(100dvh-var(--header-height))] w-full flex-col"
    >
      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-1 items-center">
        <Container>
          <div ref={ref} className="w-full">
            <SectionFrame className="border-x-0 shadow-none">
              <div
                className={`relative overflow-hidden bg-transparent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  visible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-10 scale-95 opacity-0"
                }`}
              >
                {/* Decoración de fondo */}
                <div className="ambient-float absolute -right-20 -top-20 h-64 w-64 rounded-full bg-detalles/5 blur-3xl" />
                <div className="ambient-float absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-secundario/5 blur-3xl" />
                
                <div className="relative z-10 grid items-stretch lg:grid-cols-12">
                  {/* FORMULARIO */}
                  <div
                    className={`flex items-end justify-start transition-all duration-700 delay-300 lg:col-span-5 ${
                      visible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="w-full  bg-principal/5 px-6 py-8 text-principal md:px-8 md:py-10">
                      {/* Icono decorativo */}
                    

                      <h3 className="font-titulo text-center text-2xl font-bold uppercase leading-tight text-textoClaro">
                        Iniciar consulta
                      </h3>

                      <div className="my-4 h-[2px] w-16 bg-detalles" />

                      <p className="text-sm leading-7 text-principal/80">
                        Revisaremos previamente tu situación antes de coordinar
                        una entrevista.
                      </p>

                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeevxFp8amKbv5WZKeeGpSoQ3g8buYwwLzeSeWC5B-zc-eXKg/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-6 inline-flex h-14 w-full items-center justify-center gap-3 border border-detalles bg-detalles px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg md:text-sm"
                      >
                        Completar formulario
                        <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                      </a>

                      <div className="mt-7 border-t border-principal/15 pt-5">
                        <div className="flex items-start gap-3 text-xs leading-6 text-principal/80 md:text-sm">
                          <i className="fas fa-map-pin mt-1 text-detalles" />
                          <div>
                            <p>Reunión: presencial y virtual</p>
                            <p>Zona: La Plata - Berisso - Ensenada</p>
                          </div>
                        </div>

                        <div className="mt-4 overflow-hidden">
                          <iframe
                            title="Ubicación del estudio"
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d204.59106644721493!2d-57.88158683468789!3d-34.86986731028101!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1785866802701!5m2!1ses-419!2sar"
                            className="h-44 w-full"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            style={{ border: 0 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* INFORMACIÓN DE CONTACTO */}
                  <div
                    className={`relative flex min-h-[360px] flex-col transition-all duration-700 delay-150 lg:col-span-7 ${
                      visible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`}
                  >
                    <div aria-hidden="true" className="diagonal-pattern h-8 w-full shrink-0 bg-detalles/10 md:h-10" />

                    <div className="flex flex-1 flex-col px-6 py-8 text-left md:px-10">
                      <div className="mb-3 pl-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-textoClaro/60">
                        Contacto directo
                      </div>

                      <h2 className="font-titulo text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-textoClaro md:text-4xl">
                        Hablemos sobre tu{' '}
                        <span className="section-highlight">situación.</span>
                      </h2>

                      <div className="my-5 h-[2px] w-24 bg-detalles md:my-6 md:w-32" />

                      <p className="max-w-2xl border-l-2 border-detalles/60 pl-5 text-base leading-8 text-textoClaro/80 md:text-lg">
                        Cada situación requiere una estrategia distinta. Si
                        necesitás orientación, podés escribirnos por WhatsApp,
                        enviar un email o completar el formulario para que
                        podamos analizar tu caso con tiempo.
                      </p>

                      <p className="mt-6 text-sm text-principal/60">
                        <i className="fas fa-clock mr-2 text-detalles" />
                        Respondemos a la brevedad.
                      </p>

                      <div className="mt-auto grid w-full gap-3 pt-6 sm:grid-cols-2">
                        {socialLinks.map((link, index) => (
                          <a
                            key={link.name}
                            href={link.url}
                            className={`group inline-flex h-14 items-center justify-center gap-3 border border-detalles px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg md:text-sm ${link.color} ${
                              visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }`}
                            style={{ transitionDelay: `${index * 120}ms` }}
                          >
                            <i className={`${link.icon} text-lg`} />
                            <span>{link.name}</span>
                            <i aria-hidden="true" className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div aria-hidden="true" className="diagonal-pattern h-8 w-full shrink-0 bg-detalles/10 md:h-10" />
                  </div>
                </div>
              </div>
            </SectionFrame>
          </div>
        </Container>
      </div>
    </section>
  );
}
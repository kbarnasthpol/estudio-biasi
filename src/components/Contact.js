"use client";

import Container from "./Container";
import Footer from "./Footer";
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
            <SectionFrame>
              <div
                className={`relative overflow-hidden bg-transparent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  visible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-10 scale-95 opacity-0"
                }`}
              >
                {/* Decoración de fondo */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-detalles/5 blur-3xl" />
                <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-secundario/5 blur-3xl" />
                
                <div className="relative z-10 grid items-stretch lg:grid-cols-12">
                  {/* FORMULARIO */}
                  <div
                    className={`flex items-center justify-start p-6 transition-all duration-700 delay-300 md:p-8 lg:col-span-5 ${
                      visible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="w-full max-w-md border border-principal/15 bg-principal/10 px-7 py-7 text-principal md:px-8 md:py-8">
                      {/* Icono decorativo */}
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-detalles/20 p-3">
                          <i className="fas fa-pen-fancy text-2xl text-detalles" />
                        </div>
                      </div>

                      <h3 className="text-center text-2xl font-semibold uppercase text-principal">
                        Iniciar consulta
                      </h3>

                      <p className="mt-4 text-center text-sm leading-7 text-principal/80">
                        Revisaremos previamente tu situación antes de coordinar
                        una entrevista.
                      </p>

                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeevxFp8amKbv5WZKeeGpSoQ3g8buYwwLzeSeWC5B-zc-eXKg/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center bg-detalles px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-secundario transition hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Completar formulario
                        <i className="fas fa-arrow-right ml-2 text-xs" />
                      </a>

                      <div className="mt-7 border-t border-principal/15 pt-5">
                        <div className="flex items-start gap-3 text-sm leading-7 text-principal/80">
                          <i className="fas fa-map-pin mt-1 text-detalles" />
                          <div>
                            <p>Reunión: presencial y virtual</p>
                            <p>Zona: La Plata - Berisso - Ensenada</p>
                          </div>
                        </div>

                        <div className="mt-4 overflow-hidden border border-secundario2">
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
                    className={`flex min-h-[320px] items-center justify-center p-6 transition-all duration-700 delay-150 md:p-8 lg:col-span-7 ${
                      visible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="flex w-full max-w-2xl flex-col justify-between text-center lg:text-left p-5">
                      {/* Badge decorativo */}
                      <div className="mb-2 flex justify-center lg:justify-end">
                        <span className="inline-flex items-center gap-2 rounded-full bg-detalles/10 px-3 py-3 mb-5 text-xs font-medium uppercase tracking-wider text-detalles">
                          <span className="h-1.5 w-1.5 rounded-full bg-detalles" />
                          Contacto directo
                        </span>
                      </div>

                      <h2 className="font-titulo text-3xl font-bold leading-tight text-secundario2 md:text-5xl">
                        Hablemos sobre tu situación.
                      </h2>

                      <p className="mt-6 max-w-2xl text-base leading-8 text-textoClaro text-justify md:text-lg">
                        Cada situación requiere una estrategia distinta. Si
                        necesitás orientación, podés escribirnos por WhatsApp,
                        enviar un email o completar el formulario para que
                        podamos analizar tu caso con tiempo.
                      </p>

                      {/* Línea decorativa */}
                      <div className="my-6 flex justify-center lg:justify-start">
                        <div className="h-px w-20 bg-gradient-to-r from-detalles to-transparent" />
                      </div>

                      {/* Texto de disponibilidad */}
                      <p className="text-sm text-principal/60 text-center">
                        <i className="fas fa-clock mr-2  text-detalles" />
                        Respondemos a la brevedad.
                      </p>

                      <div className="mt-4 flex w-full flex-wrap justify-center gap-3 lg:justify-center">
                        {socialLinks.map((link, index) => (
                          <a
                            key={link.name}
                            href={link.url}
                            className={`group flex w-full items-center justify-center gap-3 border border-secundario p-3 text-center text-sm font-medium uppercase transition-all duration-200 hover:scale-105 hover:shadow-lg md:w-1/2 ${link.color} ${
                              visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }`}
                            style={{
                              transitionDelay: `${index * 120}ms`,
                            }}
                          >
                            <i className={`${link.icon} text-lg`} />
                            <span>{link.name}</span>
                            <span className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
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
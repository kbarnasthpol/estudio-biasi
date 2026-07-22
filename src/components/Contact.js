"use client";

import Container from "./Container";
import Footer from "./Footer";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const socialLinks = [
    {
      name: "WhatsApp - +5492213507725",
      icon: "fab fa-whatsapp",
      color: "bg-green-500/70 hover:bg-green-500",
      url: "https://api.whatsapp.com/send?phone=+5492213507725&text=Hola!%20Necesito%20asesor%C3%ADa%20legal%20y%20quiero%20pactar%20una%20reuni%C3%B3n%20con%20su%20estudio.",
    },
    {
      name: "Email - mfbiasi@hotmail.com",
      icon: "fas fa-envelope",
      color: "bg-blue-500/70 hover:bg-blue-500",
      url: "mailto:estudioabogadosbiasi@gmail.com",
    },
  ];
  const [ref, visible] = useReveal();
  console.log("CONTACT VISIBLE:", visible);

  return (
    <section id="contacto" className="relative w-full">

      <Container>
    <div ref={ref}>
        <div
          className={`
    relative
    overflow-hidden
    rounded-2xl
    md:border
    md:border-secundario/15
    bg-principal
    shadow-1px
    md:shadow-2xl

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
            }
  `}
        >
          {/* Detalle de fondo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,148,122,.05),transparent_45%)] pointer-events-none" />

          <div className="grid lg:grid-cols-12 relative z-10">

            {/* ================= IZQUIERDA ================= */}

            <div
              className={`
  lg:col-span-7
  p-8
  md:p-14
  flex
  flex-col
  justify-center

  transition-all
  duration-700
  delay-150

  ${visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                }
`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secundario leading-tight max-w-xl">
                Iniciemos una conversación.
              </h2>

              <p className="mt-8 text-textoOscuro leading-8 text-base md:text-lg max-w-xl">
                Cada situación requiere una estrategia diferente.
                Completá nuestro formulario de orientación para que
                podamos analizar previamente tu caso y aprovechar al
                máximo la primera reunión.
              </p>

              <div className="mt-12 flex flex-wrap gap-8">

                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={`
                    group
                    flex
                    items-center
                    gap-3
                    text-principal
                    ${link.color}
                    hover:text-principal
                    text-principal/90
                    transition-all
                    duration-100
                    border-1
                    border-secundario
                    p-3
                    rounded-2xl
                    hover:scale-105
                    w-full
                    md:w-auto
                    text-center
                    ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                      }
`}
                    style={{
                      transitionDelay: `${index * 120}ms`
                    }}
                  >
                    <i className={`${link.icon} text-lg`} />

                    <span className="text-sm font-medium">
                      {link.name}
                    </span>

                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                  </a>

                ))}

              </div>

            </div>

            {/* ================= DERECHA ================= */}

            <div
className={`
lg:col-span-5
flex
items-center
justify-center
p-8
md:p-14

transition-all
duration-700
delay-300

${
 visible
 ? "opacity-100 translate-x-0"
 : "opacity-0 translate-x-10"
}
`}
>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeevxFp8amKbv5WZKeeGpSoQ3g8buYwwLzeSeWC5B-zc-eXKg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group

                w-full
                max-w-sm

                rounded-3xl

                border
                border-secundario/10

                bg-secundario/90

                px-10
                py-14

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-detalles
                hover:scale-102
                hover:shadow-[0_20px_60px_rgba(2,82,89,.18)]
                "
              >

                <div className="flex flex-col items-center text-center">

                  <div
                    className="
                    h-20
                    w-20

                    rounded-full

                    bg-detalles/10

                    flex
                    items-center
                    justify-center

                    mb-8
                    "
                  >
                    <i className="fas fa-file-signature text-3xl text-detalles" />
                  </div>

                  <p className="uppercase tracking-[0.3em] text-principal/60 text-xs mb-3">
                    Formulario
                  </p>

                  <h3 className="text-3xl font-bold text-principal">
                    Iniciar consulta
                  </h3>

                  <p className="mt-4 mb-4 text-principal/80 leading-7">
                    Revisaremos previamente tu situación antes de coordinar una entrevista.
                  </p>

                  <div
                    className="
                    group
        flex
        items-center
        gap-2
        border-1
        border-principal
        px-8
        py-3
        rounded-2xl
        font-semibold
        text-secundario
        transition-all
        duration-300
        bg-principal
        group-hover:text-detalles
                    "
                  >

                    Completar formulario

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </a>

            </div>

          </div>

        </div>
        </div>

        <Footer />
      </Container>

    </section>
  );
}
// components/Contact.js
'use client';
import Footer from './Footer'; // Asegurate de que la ruta de importación sea la correcta para tu proyecto

export default function Contact() {
  const socialLinks = [
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://api.whatsapp.com/send?phone=+5492213507725&text=Hola!%20Necesito%20asesor%C3%ADa%20legal%20y%20quiero%20pactar%20una%20reuni%C3%B3n%20con%20su%20estudio.', color: 'hover:text-green-500 hover:border-green-500/30' },
    { name: 'Email', icon:'fas fa-envelope' ,url:'mailto:estudioabogadosbiasi@gmail.com', color: 'hover:text-blue-400 hover:border-blue-400/30' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#', color: 'hover:text-pink-500 hover:border-pink-500/30' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#', color: 'hover:text-blue-600 hover:border-blue-600/30' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: '#', color: 'hover:text-red-500 hover:border-red-500/30' },
  ];

  return (
    <div 
      id="contacto" 
      className="w-full flex flex-col justify-between bg-secundario text-principal px-6 min-h-screen md:h-screen pt-16 md:pt-12 relative"
    >
      {/* Detalle decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(246,174,45,0.03),transparent_40%)] pointer-events-none" />

      {/* Contenedor Principal (Centrado verticalmente con my-auto) */}
      <div className="container mx-auto max-w-4xl my-auto relative z-10 w-full py-8 md:py-0">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-2xl text-detalles md:text-4xl font-bold mb-3">
            Iniciá tu Consulta Legal Hoy
          </h2>
          <p className="text-textoClaro max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
            Estamos listos para asesorarte y ofrecerte el respaldo jurídico que necesitás. Hacé clic abajo para enviarnos los detalles de tu caso.
          </p>
        </div>

        {/* Grid de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LADO IZQUIERDO: Canales de Atención */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-detalles">
              Nuestros Canales
            </h3>
            <p className="text-textoClaro text-xs md:text-sm leading-relaxed">
              Podés encontrarnos en nuestras redes sociales o escribirnos de forma directa a nuestros medios oficiales:
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className={`flex items-center gap-2 bg-detalles2/5 border border-detalles2/10 px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${link.color} hover:bg-detalles2/10`}
                >
                  <i className={`${link.icon} text-sm md:text-base`}></i>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* LADO DERECHO: Botón al Google Forms */}
          <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            <i className="fas fa-file-alt text-3xl md:text-3xl text-detalles2 mb-3" />
            <h4 className="text-textoClaro md:text-lg font-bold mb-1 text-center">Formulario de Orientación</h4>
            <p className="text-textoClaro text-[11px] md:text-xs text-center mb-5 leading-relaxed max-w-xs">
              Completá nuestro formulario en línea con los datos de tu situación para que podamos analizarlo previo a la entrevista.
            </p>
            
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeevxFp8amKbv5WZKeeGpSoQ3g8buYwwLzeSeWC5B-zc-eXKg/viewform?usp=publish-editor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center bg-satisfactorio text-principal/50 font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-satisfactorio/70 hover:text-textoClaro hover:border-1 hover:border-detalles2 transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase"
            >
              CONTÁCTANOS AQUÍ
            </a>
          </div>
        </div>
      </div>
      
      {/* El footer ahora vive acá abajo, impidiendo que quede separado o colgado de forma extraña */}
      <Footer />
    </div>
  );
}
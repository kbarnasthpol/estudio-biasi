export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-secundario ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO IZQUIERDO: Imagen o Representación Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square bg-gray-100 rounded-2xl shadow-xl border-2 border-detalles/20 flex items-center justify-center p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-principal group-hover:bg-transparent transition-colors duration-300" />
              <i className="fas fa-balance-scale text-9xl text-detalles/20 group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute bottom-4 text-xs tracking-widest text-detalles font-semibold uppercase">
                Estudio Jurídico
              </span>
            </div>
          </div>

          {/* LADO DERECHO: Contenido Informativo */}
          <div className="lg:col-span-7">
            <span className="text-detalles font-bold tracking-wider text-sm uppercase block mb-2">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-textoClaro mb-6">
              Compromiso, Experiencia y Trayectoria
            </h2>
            
            <div className="space-y-4 text-textoClaro leading-relaxed text-base">
              <p>
                En <strong className="font-bold text-detalles uppercase">Biasi<span className="text-principal">&</span>Asociados</strong> nos dedicamos a ofrecer soluciones legales personalizadas con el más alto nivel de profesionalismo y ética. Entendemos que cada caso es único, por lo que priorizamos una atención cercana y un análisis estratégico minucioso para proteger los intereses de nuestros clientes.
              </p>
              <p>
                Nuestra misión es brindar tranquilidad jurídica a través de una representación sólida y un asesoramiento transparente en las distintas ramas del derecho. Nos avala la dedicación constante y el compromiso inquebrantable con la justicia en cada etapa del proceso.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-textoClaro">
              <div className="flex items-center gap-3 bg-satisfactorio px-4 py-3 rounded-xl">
                <i className="fas fa-check-circle text-lg" />
                <span className="text-sm font-medium">Atención Personalizada</span>
              </div>
              <div className="flex items-center gap-3 bg-satisfactorio px-4 py-3 rounded-xl border border-white/10">
                <i className="fas fa-check-circle text-lg" />
                <span className="text-sm font-medium">Soluciones Concretas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
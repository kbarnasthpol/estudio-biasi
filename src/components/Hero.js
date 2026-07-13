export default function Hero() {
  return (
    <div 
      id="inicio" 
      className="w-full h-full flex items-center justify-center text-center relative overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88, 38, 31, 0.08),transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(246,174,45,0.05),transparent_80%)]" />
      
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-md text-secundario">
          BIASI<span className="text-detalles">&</span>ASOCIADOS
        </h1>
        
        <div className="w-24 h-1 bg-detalles mx-auto mb-6" />
        
        <h2 className="text-base sm:text-xl md:text-2xl font-light tracking-widest text-textoOscuro max-w-2xl mx-auto uppercase leading-relaxed font-bold">
          Asesoramiento Legal Integral <p className="text-detalles">&</p> Soluciones Estratégicas
        </h2>  
        <div className="mt-10">
          <a 
            href="#areas-especializacion"
            className="inline-block bg-secundario text-detalles font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-detalles hover:text-secundario hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide uppercase text-sm"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
    </div>
  );
}
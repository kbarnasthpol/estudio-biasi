import { areasData } from '../data/areas';
import CardEspecialidad from './CardEspecialidad';

export default function Services() {
  return (
    <div 
      id="areas-especializacion" 
      className="w-full h-full flex flex-col items-center justify-center bg-nada px-4 py-16 md:py-0 overflow-y-auto min-h-screen md:h-screen py-20 md:py-0"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-30 md:mb-4">
          <h2 className="text-2xl md:text-4xl text-secundario font-bold tracking-wide inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-50 after:h-1 after:bg-detalles">
            ÁREAS DE ESPECIALIZACIÓN
          </h2>
        </div>
        
        {/* Grid totalmente controlado */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center overflow-y-auto max-h-[70vh] md:max-h-none p-2">
          {areasData.map((area) => (
            <CardEspecialidad key={area.id} area={area} />
          ))}
        </div>
      </div>
    </div>
  );
}
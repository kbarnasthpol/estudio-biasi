'use client';
import { useState } from 'react';

export default function CardEspecialidad({ area }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full max-w-[340px] h-[200px] perspective-50 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* LADO FRONTAL (FRENTE) - Fondo intermedio para resaltar */}
        <div className="absolute w-full h-full backface-hidden bg-secundario rounded-2xl shadow-xl p-6 flex flex-col justify-between border-t-4 border-principal/50">
          <div className="text-center flex-1 flex flex-col justify-center">
            <div className="text-3xl text-detalles mb-3">
              <i className={area.icon}></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-principal tracking-wide mb-2">
              {area.title}
            </h3>
            <p className="text-textoClaro text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
              {area.description}
            </p>
          </div>
          
          <div className="text-center mt-2">
            <span className="text-[11px] font-semibold text-principal bg-detalles2/10 px-3 py-1.5 rounded-full border-2 border-detalles transition-all">
              Ver detalles ➔
            </span>
          </div>
        </div>

        {/* LADO TRASERO (REVERSO) - Fondo violeta oscuro */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-detalles text-secundario rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-b-4 border-secundario/50">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-base font-bold text-secundario mb-3 text-center border-b border-detalles2 pb-2 uppercase tracking-wider">
              Servicios Incluidos
            </h3>
            <p className="text-[11px] text-textoOscuro mb-4 text-center">
              Asistencia y representación estratégica en:
            </p>
            
            <div className="flex flex-wrap gap-1.5 justify-center overflow-y-auto max-h-[110px] pr-1">
              {area.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="bg-satisfactorio text-principal/50 text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-wide shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}
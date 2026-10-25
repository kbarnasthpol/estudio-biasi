const imageCredits = {
  laboral: {
    src: "/img/areas/laboral.jpg",
    title: "Women sewing at long tables next to tall windows in a garment factory",
    creator: "Kheel Center, Cornell University Library",
    source: "https://www.flickr.com/photos/38445726@N04/5279325617",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  penal: {
    src: "/img/areas/penal.jpg",
    title: "Court Gavel - Judge's Gavel - Courtroom",
    creator: "weiss_paarz_photos",
    source: "https://www.flickr.com/photos/141290938@N03/26682691294",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  familia: {
    src: "/img/areas/familia.jpg",
    title: "Brand New Parents",
    creator: "OakleyOriginals",
    source: "https://www.flickr.com/photos/47264866@N00/8479540406",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  animal: {
    src: "/img/areas/animal.jpg",
    title: "Puppy eyes",
    creator: "Steve @ the alligator farm",
    source: "https://www.flickr.com/photos/28171941@N04/2841061494",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  civil: {
    src: "/img/areas/civil.jpg",
    title: "Signing Paperwork",
    creator: "danielmoyle",
    source: "https://www.flickr.com/photos/56844027@N05/9237786653",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  seguridad: {
    src: "/img/areas/seguridad.jpg",
    title: "Why actuated signals are bad for pedestrians",
    creator: "Eric Fischer",
    source: "https://www.flickr.com/photos/24431382@N03/6508082835",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
};

export const areasData = [
  {
    id: "laboral",
    nombre: "Derecho Laboral",
    imagen: imageCredits.laboral,
    descripcion:
      "Brindamos asesoramiento integral tanto a trabajadores como a empleadores en conflictos laborales, reclamos salariales, despidos y demás cuestiones derivadas de la relación de trabajo. Nuestro objetivo es proteger sus derechos y alcanzar la mejor solución posible.",
    servicios: [
      {
        nombre: "Despidos con y sin causa",
        descripcion:
          "Consultas sobre la finalización del vínculo laboral y las circunstancias de la desvinculación.",
      },
      {
        nombre: "Indemnizaciones",
        descripcion:
          "Revisión de consultas relacionadas con compensaciones por despido, según cada situación.",
      },
      {
        nombre: "Reclamos salariales",
        descripcion:
          "Diferencias de haberes y pagos pendientes originados en la relación de trabajo.",
      },
      {
        nombre: "Accidentes de trabajo",
        descripcion:
          "Orientación ante accidentes o lesiones ocurridos en el marco de la actividad laboral.",
      },
      {
        nombre: "Acoso laboral",
        descripcion:
          "Consultas por situaciones de hostigamiento o trato conflictivo en el ámbito de trabajo.",
      },
      {
        nombre: "Vacaciones y licencias",
        descripcion:
          "Dudas y consultas sobre licencias, descansos y vacaciones en la relación laboral.",
      },
    ],
  },
  {
    id: "penal",
    nombre: "Derecho Penal y Procesal Penal",
    imagen: imageCredits.penal,
    descripcion:
      "Ejercemos la defensa técnica de personas denunciadas, imputadas o víctimas de delitos, acompañando cada etapa del proceso penal con una estrategia jurídica sólida y un trato profesional y confidencial.",
    servicios: [
      {
        nombre: "Defensa en procesos penales",
        descripcion:
          "Asistencia y representación jurídica durante las distintas instancias de un proceso penal.",
      },
      {
        nombre: "Asistencia al imputado",
        descripcion:
          "Orientación y acompañamiento para personas imputadas en una causa penal.",
      },
      {
        nombre: "Presentación de denuncias",
        descripcion:
          "Asesoramiento para analizar y presentar una denuncia ante hechos que podrían constituir un delito.",
      },
      {
        nombre: "Apelaciones",
        descripcion:
          "Consultas sobre la revisión de decisiones judiciales por las vías procesales correspondientes.",
      },
      {
        nombre: "Excarcelaciones",
        descripcion:
          "Asistencia en solicitudes vinculadas con la libertad durante el trámite de una causa penal.",
      },
      {
        nombre: "Representación en juicio",
        descripcion:
          "Representación jurídica de las partes durante la etapa de juicio.",
      },
    ],
  },
  {
    id: "familia",
    nombre: "Derecho de Familia",
    imagen: imageCredits.familia,
    descripcion:
      "Acompañamos a nuestros clientes en situaciones familiares complejas, procurando soluciones jurídicas que prioricen la protección de los derechos personales y el bienestar de todas las partes involucradas.",
    servicios: [
      {
        nombre: "Divorcios",
        descripcion:
          "Asesoramiento jurídico en consultas y trámites relacionados con la disolución del matrimonio.",
      },
      {
        nombre: "Alimentos",
        descripcion:
          "Consultas sobre la determinación, actualización o cumplimiento de obligaciones alimentarias.",
      },
      {
        nombre: "Cuidado personal",
        descripcion:
          "Orientación sobre la organización del cuidado cotidiano de hijos e hijas.",
      },
      {
        nombre: "Régimen de comunicación",
        descripcion:
          "Consultas para establecer o revisar la comunicación y el vínculo con hijos e hijas.",
      },
      {
        nombre: "Filiación",
        descripcion:
          "Asesoramiento sobre cuestiones jurídicas vinculadas con la determinación de los vínculos de filiación.",
      },
      {
        nombre: "Medidas de protección",
        descripcion:
          "Orientación ante situaciones que requieren evaluar medidas judiciales de protección.",
      },
      {
        nombre: "Violencia familiar",
        descripcion:
          "Asistencia jurídica en consultas relacionadas con situaciones de violencia en el entorno familiar.",
      },
      {
        nombre: "Responsabilidad parental",
        descripcion:
          "Consultas sobre derechos y responsabilidades de madres y padres respecto de sus hijos e hijas.",
      },
    ],
  },
  {
    id: "animal",
    nombre: "Derecho Animal",
    imagen: imageCredits.animal,
    descripcion:
      "Promovemos la protección jurídica de los animales mediante asesoramiento y representación en casos vinculados al maltrato, la crueldad y la aplicación de la legislación vigente en materia de bienestar animal.",
    servicios: [
      {
        nombre: "Denuncias por maltrato",
        descripcion:
          "Orientación para consultas sobre hechos de maltrato hacia animales y su posible denuncia.",
      },
      {
        nombre: "Denuncias por crueldad",
        descripcion:
          "Asesoramiento ante situaciones de crueldad animal y consultas sobre cómo documentarlas.",
      },
      {
        nombre: "Protección animal",
        descripcion:
          "Consultas jurídicas relacionadas con la protección y el bienestar de los animales.",
      },
      {
        nombre: "Tenencia responsable",
        descripcion:
          "Orientación sobre cuestiones jurídicas vinculadas con el cuidado y la tenencia de animales.",
      },
      {
        nombre: "Adopciones",
        descripcion:
          "Consultas sobre aspectos jurídicos relacionados con procesos de adopción animal.",
      },
      {
        nombre: "Asesoramiento legal",
        descripcion:
          "Orientación jurídica ante dudas o conflictos vinculados con animales.",
      },
    ],
  },
  {
    id: "civil",
    nombre: "Derecho Civil y Comercial",
    imagen: imageCredits.civil,
    descripcion:
      "Ofrecemos asesoramiento integral a personas físicas y jurídicas en asuntos civiles y comerciales, brindando soluciones legales orientadas a la prevención de conflictos y la defensa de sus intereses.",
    servicios: [
      {
        nombre: "Contratos",
        descripcion:
          "Consultas sobre redacción, interpretación o cumplimiento de acuerdos y contratos.",
      },
      {
        nombre: "Daños y perjuicios",
        descripcion:
          "Asesoramiento ante reclamos vinculados con daños y sus posibles consecuencias jurídicas.",
      },
      {
        nombre: "Accidentes de tránsito",
        descripcion:
          "Orientación sobre reclamos y cuestiones civiles derivados de accidentes de tránsito.",
      },
      {
        nombre: "Sucesiones",
        descripcion:
          "Asistencia en trámites y consultas relacionados con la transmisión de bienes por fallecimiento.",
      },
      {
        nombre: "Usucapión",
        descripcion:
          "Consultas sobre procesos de adquisición de derechos sobre inmuebles por posesión prolongada.",
      },
      {
        nombre: "Desalojos",
        descripcion:
          "Asesoramiento en conflictos relacionados con la restitución de inmuebles.",
      },
      {
        nombre: "Propiedad",
        descripcion:
          "Consultas sobre derechos, titularidad y conflictos vinculados con bienes.",
      },
      {
        nombre: "Empresas",
        descripcion:
          "Orientación jurídica para empresas en cuestiones civiles y comerciales.",
      },
      {
        nombre: "Sociedades",
        descripcion:
          "Consultas sobre constitución, funcionamiento y situaciones jurídicas de sociedades.",
      },
      {
        nombre: "Fundaciones",
        descripcion:
          "Asesoramiento jurídico para fundaciones y entidades sin fines de lucro.",
      },
      {
        nombre: "Concursos y quiebras",
        descripcion:
          "Orientación ante procesos vinculados con situaciones de insolvencia.",
      },
    ],
  },
  {
    id: "seguridad",
    nombre: "Seguridad Pública y Ciudadana",
    imagen: imageCredits.seguridad,
    descripcion:
      "Asesoramos a instituciones, empresas y particulares en cuestiones vinculadas a la seguridad pública, prevención de riesgos y cumplimiento de la normativa vigente.",
    servicios: [
      {
        nombre: "Consultoría en seguridad",
        descripcion:
          "Análisis y orientación sobre necesidades y cuestiones jurídicas relacionadas con la seguridad.",
      },
      {
        nombre: "Asesoramiento institucional",
        descripcion:
          "Consultas jurídicas para instituciones en materias vinculadas con la seguridad pública.",
      },
      {
        nombre: "Planes de prevención",
        descripcion:
          "Orientación en el diseño y revisión de planes destinados a prevenir riesgos.",
      },
      {
        nombre: "Cumplimiento normativo",
        descripcion:
          "Consultas sobre la normativa aplicable a actividades y proyectos vinculados con la seguridad.",
      },
      {
        nombre: "Gestión de riesgos",
        descripcion:
          "Asesoramiento para identificar riesgos y evaluar acciones de prevención.",
      },
    ],
  },
];

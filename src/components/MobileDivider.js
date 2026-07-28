"use client";

import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaBriefcase,
  FaLandmark,
  FaBuilding,
  FaHandshake,
  FaBook,
  FaShieldAlt,
  FaUserTie,
  FaScaleBalanced
} from "react-icons/fa";

import useReveal from "../hooks/useReveal";


const dividerIcons = {

  services: [
    FaBalanceScale,
    FaGavel,
    FaFileContract,
    FaBriefcase,
    FaLandmark,
    FaBuilding,
    FaHandshake,
    FaBook,
    FaShieldAlt,
  ],


  contact: [
    FaHandshake,
    FaFileContract,
    FaBalanceScale,
    FaUserTie,
    FaLandmark,
    FaShieldAlt,
    FaBook,
    FaGavel,
  ]

};



function IconRow({ icons, reverse }) {

  return (

    <div
      className={`
        flex
        w-max
        gap-14
        ${
          reverse
          ? "animate-marqueeReverse"
          : "animate-marquee"
        }
      `}
    >

      {[...icons, ...icons].map((Icon,index)=>(

        <Icon
          key={index}
          className="
            text-2xl
            text-principal
            opacity-80
            shrink-0
          "
        />

      ))}

    </div>

  )

}




export default function MobileDivider({
  type="services",
  reverse=false
}) {


  const [revealRef,isVisible] = useReveal();


  const icons =
    dividerIcons[type] || dividerIcons.services;



  return (

    <div
      ref={revealRef}
      className={`
        md:hidden
        h-[10vh]
        relative
        overflow-hidden
        flex
        items-center
        bg-secundario
        border-detalles
border-y-1

      `}
    >

{/* Línea decorativa de fondo */}
<div
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    opacity-30
    pointer-events-none
    z-0
  "
>

  <svg
    className="
      w-[160%]
      h-full
      animate-linePulse
    "
    viewBox="0 0 600 100"
    fill="none"
  >

    <path
      d="
     M-20 50
    C60 35, 120 35, 190 50
    C250 65, 310 65, 370 50
    C430 35, 500 35, 680 50
      "
      stroke="var(--color-detalles)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

  </svg>

</div>

      {/* Fade lateral */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-secundario
          via-transparent
          to-secundario
          z-10
          pointer-events-none
        "
      />



      {/* Línea superior */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-5px
          bg-principal/20
        "
      />



      <div
        className={`
          transition-opacity
          duration-700
          w-full
          ${
            isVisible
            ? "opacity-100"
            : "opacity-0"
          }
        `}
      >

        <IconRow
          icons={icons}
          reverse={reverse}
        />

      </div>




      {/* Línea inferior */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-px
          bg-principal/20
        "
      />


    </div>

  )

}
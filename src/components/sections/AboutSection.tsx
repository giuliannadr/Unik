"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamDetails = {
  Camila: {
    role: "Estrategia",
    bio: "Analista por naturaleza, estratégica por convicción. Camila es el motor que traza la ruta hacia el éxito de cada marca.",
    image: "/Cami.jpeg",
    color: "#FAD600"
  },
  Iara: {
    role: "Creatividad",
    bio: "Creativa sin límites e impulsora de ideas explosivas. Iara transforma lo cotidiano en una experiencia visual memorable.",
    image: "/Iara.jpeg",
    color: "#D9C5E0"
  }
};

export const AboutSection = () => {
  const [selectedProfile, setSelectedProfile] = useState<null | keyof typeof teamDetails>(null);

  useEffect(() => {
    if (selectedProfile) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }
  }, [selectedProfile]);

  return (
   <section id="nosotras" className="relative py-20 md:py-32 px-6 overflow-visible">    
      {/* Background Layer - Separado para permitir capas entre secciones */}
      <div className="absolute inset-0 z-0" />

      {/* Círculos Decorativos - z-10 para estar sobre fondos pero bajo contenidos de otras secciones */}
     {/* Círculos Decorativos - Corregidos para ser proporcionales */}

{/* 1. Círculo Amarillo Superior Izquierdo */}
<div className="absolute top-[2%] left-[-10%] md:left-[-5%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#FAD600] z-10" />

{/* Círculo Gris: Movido a Services.tsx para evitar cortes y mejorar el stacking */}

{/* 3. Círculo Amarillo Lateral Derecho (Corregido h-24) */}
<div className="absolute top-[40%] right-[-5%] md:right-[2%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#FAD600] z-10" />
      {/* Contenido Principal - z-20 */}
      <div className="max-w-[1300px] mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-between">
          
          {/* Columna de Texto */}
          <div className="lg:w-5/12 text-[#3A2372] text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 md:mb-10"
            >
              Sobre <br /> 
              <span className="italic font-light">Nosotras.</span>
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              <p className="text-2xl sm:text-3xl font-light italic leading-tight max-w-xl mx-auto lg:mx-0">
                "Somos publicistas y sobre todo una <span className="font-black underline decoration-[#FAD600] decoration-[8px] md:decoration-[12px] underline-offset-4">dupla explosiva</span>."
              </p>
              <p className="text-base md:text-lg font-medium opacity-80 max-w-md mx-auto lg:mx-0">
                Un espacio donde el desafío, las ideas y la originalidad nacen para darle una nueva imagen a tu marca.
              </p>
              
              <div className="flex flex-row sm:flex-row justify-center lg:justify-start gap-8 sm:gap-12 pt-6 border-t border-[#3A2372]/10 md:border-t-0">
                {(Object.keys(teamDetails) as Array<keyof typeof teamDetails>).map((name) => (
                  <button 
                    key={name}
                    onClick={() => setSelectedProfile(name)}
                    className="text-center lg:text-left group transition-transform hover:-translate-y-1"
                  >
                    <p className="font-black text-2xl sm:text-3xl group-hover:text-[#FAD600] transition-colors">{name}</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Conoceme +</p>
                    <div className="h-1 w-0 group-hover:w-full bg-[#FAD600] transition-all duration-300 mt-1 mx-auto lg:mx-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        {/* Columna de Imagen */}
<div className="lg:w-6/12 w-full -mt-10 lg:mt-0">
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }} 
    whileInView={{ opacity: 1, scale: 1 }} 
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.02, 
      rotate: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 } 
    }}
    // El "relative" aquí permite que el círculo se posicione respecto a este contenedor
    className="relative cursor-pointer max-w-lg mx-auto lg:max-w-none"
  >
    {/* 1. CONTENEDOR DE LA IMAGEN (Con overflow-hidden) */}
    <div className="relative h-[450px] sm:h-[550px] md:h-[650px] w-full rounded-[3rem] md:rounded-[4.5rem] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl transition-shadow duration-500 hover:shadow-3xl">
      <Image 
        src="/SUR-Juntas.jpeg" 
        alt="Camila e Iara de UNIK" 
        fill 
        className="object-cover" 
        priority
      />
    </div>

  {/* 2. CÍRCULO (Equilibrado) */}
<motion.div 
  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.03, 1] }}
  transition={{ duration: 5, repeat: Infinity }}
  whileHover={{ scale: 1.1, rotate: -5 }}
  // Reducimos a w-24/h-24 en mobile y w-36/h-36 en desktop
  className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-24 h-24 md:w-36 md:h-36 bg-[#FAD600] rounded-full flex flex-col items-center justify-center text-[#3A2372] font-black text-center shadow-xl z-30 border-[5px] md:border-[8px] border-white"
>
  <div className="flex flex-col items-center leading-none">
    {/* Texto en tamaño intermedio */}
    <span className="text-[11px] md:text-[16px] tracking-tighter uppercase">
      UNIK
    </span>
    <span className="text-[11px] md:text-[16px] tracking-tighter uppercase mb-1">
      POWER
    </span>
    
    {/* Rayo con el mismo color que el texto */}
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 md:w-8 md:h-8" 
      fill="#3A2372" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  </div>
</motion.div>
  </motion.div>
</div>
        </div>
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedProfile && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProfile(null)}
              className="absolute inset-0 bg-[#3A2372]/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative bg-white w-full max-w-5xl rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[90vh] lg:h-[600px] z-[110]"
            >
              <button 
                onClick={() => setSelectedProfile(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-50 text-2xl md:text-3xl font-black text-[#3A2372] bg-white/80 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >✕</button>

              <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative flex-none">
                <Image 
                  src={teamDetails[selectedProfile].image} 
                  alt={selectedProfile} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white flex-1 min-h-0 overflow-hidden">
                <span className="text-[#FAD600] font-black uppercase tracking-widest text-xs mb-3 md:mb-4 flex-none">
                  {teamDetails[selectedProfile].role}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#3A2372] tracking-tighter mb-4 md:mb-6 leading-none flex-none">
                  {selectedProfile}
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl text-[#3A2372]/70 font-light italic leading-relaxed flex-1 overflow-hidden">
                  "{teamDetails[selectedProfile].bio}"
                </p>
                <div 
                  className="mt-8 md:mt-10 h-3 md:h-4 w-20 md:w-24 rounded-full flex-none" 
                  style={{ backgroundColor: teamDetails[selectedProfile].color }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
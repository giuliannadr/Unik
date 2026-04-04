"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useRef } from "react";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";

// 1. COMPONENTE INTERNO PARA EL CÍRCULO DE TIZA ANIMADO (Ajustado para que sea más grande)
const ChalkCircle = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-flex items-center justify-center mx-1 px-1">
      {/* El texto va primero para el z-index natural */}
      <span className="relative z-10">{children}</span>
      
      {/* SVG del trazo de tiza (Ajustado el viewBox y el escalado) */}
      <svg
        viewBox="0 0 120 40" // Proporción más ancha para un óvalo más amplio
        className="absolute inset-0 w-[140%] h-[160%] -left-[20%] -top-[30%] pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        <motion.path
          // Un óvalo más imperfecto y "dibujado" a mano alzada
          d="M 10 20 C 10 5, 110 5, 110 20 C 110 35, 10 35, 13 22" 
          fill="none"
          stroke="#FAD600" // Tu amarillo vibrante
          strokeWidth="3.5" // Grosor del trazo ligeramente aumentado
          strokeLinecap="round"
          strokeDasharray="0 1" // Empezamos sin trazo para la animación
          
          // Efecto de textura de tiza/fibrón usando filtros SVG básicos
          filter="url(#chalkTexturizer)"
          
          // Animación de dibujo de Framer Motion
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 2.4, // Un delay ligeramente mayor para que se dibuje al final de la intro
            duration: 1.8, // Una animación más lenta para que sea más dramática
            ease: "easeInOut",
          }}
        />
        
        {/* Definición del filtro de textura (ruido fractal) */}
        <defs>
          <filter id="chalkTexturizer">
            {/* Genera ruido de grano fino y más irregular */}
            <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="4" result="noise" />
            {/* Usa el ruido para desplazar los bordes del trazo, dándole ese look más orgánico */}
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-[95dvh] w-full flex flex-col items-center justify-center bg-[#3A2372] overflow-hidden rounded-b-[60px] md:rounded-b-[100px] shadow-2xl z-20">
      
      {/* 1. COMPOSICIÓN DE FONDO */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="absolute top-[5%] right-[-10%] md:right-[-5%] w-[180px] md:w-[450px] h-[180px] md:h-[450px] rounded-full bg-[#FAD600]" 
        />
        <motion.div 
           initial={{ scale: 0.9, opacity: 0, x: -50 }}
           animate={{ scale: 1, opacity: 1, x: 0 }}
           transition={{ duration: 1.2, delay: 0.3 }}
           className="absolute bottom-[-80px] md:bottom-[-80px] left-[-80px] md:left-[-80px] w-[320px] md:w-[400px] h-[320px] md:h-[400px] rounded-full bg-[#A0A0A0]" 
        />
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
        
        {/* Agencia de publicidad: Mantiene el efecto blanco/mezcla */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="mb-4 md:mb-10 mix-blend-difference"
        >
          <span className="text-white font-heading font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] sm:text-[10px] md:text-xs opacity-80">
             Agencia de publicidad
          </span>
        </motion.div>
        
        {/* Título Principal */}
        <h1 className="text-[20vw] sm:text-[16vw] md:text-[180px] lg:text-[220px] leading-[0.75] font-heading font-black mb-8 md:mb-12 tracking-tighter">
          {/* unik. -> AMARILLO INTENSO PURO */}
          <span className="text-[#FAD600] inline-block relative z-10">
            unik.
          </span> 
          <br />
          
          {/* Portfolio -> BLANCO CON MEZCLA */}
          <span className="mix-blend-difference text-[6vw] sm:text-[5vw] md:text-[60px] lg:text-[80px] font-subheading italic font-light text-white uppercase tracking-[0.2em] md:tracking-[0.3em] block mt-4 md:mt-6">
             Portfolio
          </span>
        </h1>
        
        {/* Párrafo final: Con el CÍRCULO DE TIZA aplicado y ajustado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }} 
          className="flex flex-col items-center mix-blend-difference"
        >
          <div className="text-base sm:text-lg md:text-2xl lg:text-3xl font-sans font-light text-white max-w-[280px] sm:max-w-xl lg:max-w-4xl leading-tight">
             Tu marca es{" "}
             {/* APLICAMOS EL CÍRCULO DE TIZA AJUSTADO AQUÍ */}
             <ChalkCircle>única</ChalkCircle>,{" "}
             hagamos que el mundo la vea.
             <AnimatedUnderline color="bg-white" height="h-[1px] md:h-1" />
          </div>
        </motion.div>
      </div>

      {/* 3. BOTÓN DE ACCIÓN */}
  <motion.a
  href={`https://wa.me/5491158765411?text=${encodeURIComponent(
    "¡Hola UNIK! Vi la web y me interesa potenciar mi marca. ¿Podemos hablar de mi proyecto?"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8 }}
  className="inline-block" // Asegura que el link rodee bien al botón
>
  <motion.button
    className="mt-12 md:mt-16 z-20 bg-[#FAD600] text-[#3A2372] px-8 md:px-16 py-4 md:py-7 rounded-full font-heading font-black text-[9px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] hover:scale-105 hover:shadow-[0_0_40px_rgba(250,214,0,0.4)] transition-all active:scale-95 [-webkit-tap-highlight-color:transparent]"
  >
    HABLEMOS DE TU MARCA
  </motion.button>
</motion.a>
        {/* 4. SCROLL INVITE (Ajustes de texto para Mobile) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute bottom-20 right-8 md:bottom-20 md:right-20 z-30 pointer-events-none lg:pointer-events-auto scale-[0.6] md:scale-100 origin-bottom-right"
      >
        <div className="relative flex items-center justify-center group cursor-pointer [-webkit-tap-highlight-color:transparent] pr-6 md:pr-0">   <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 md:w-40 md:h-40 border border-white/20 rounded-full flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full p-2 overflow-visible">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              {/* AJUSTES DE TEXTO MOBILE: Cambiamos a minúsculas y ajustamos font-size/letter-spacing para mobile */}
              <text className="font-sans font-medium fill-white/40 md:fill-white/40
                                text-[12px] [letter-spacing:0.02em] lowercase
                                md:text-[10.5px] md:[letter-spacing:0.12em] md:font-black md:uppercase">
                <textPath xlinkHref="#circlePath" className="md:hidden">
                  • explora nuestro mundo • unik • explora nuestro mundo • unik •
                </textPath>
                <textPath xlinkHref="#circlePath" className="hidden md:block">
                  • EXPLORA NUESTRO MUNDO • UNIK • EXPLORA NUESTRO MUNDO • UNIK •
                </textPath>
              </text>
            </svg>
          </motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9, backgroundColor: "#3A2372", color: "#FAD600" }} 
            className="w-12 h-12 md:w-20 md:h-20 bg-[#FAD600] rounded-full flex items-center justify-center text-[#3A2372] shadow-2xl z-10 border-4 border-white transform-gpu pointer-events-auto transition-colors duration-200"
          >
            <Zap size={20} className="fill-current md:w-8 md:h-8" />
          </motion.div>
        </div>
      </motion.div>

      {/* 5. SOCIAL SIGNATURES */}
      <div className="absolute bottom-20 md:bottom-28 left-6 md:left-10 flex items-stretch gap-3 md:gap-5 z-40">
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "circOut" }}
          className="w-[2px] md:w-[3px] bg-[#FAD600] origin-bottom rounded-full shadow-[0_0_15px_rgba(250,214,0,0.3)]"
        />

        <div className="flex flex-col justify-center gap-1 md:gap-2">
          <motion.a 
            href="https://instagram.com/somos.unik" 
            target="_blank"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="text-[15px] md:text-[15px] font-black uppercase tracking-[0.2em] md:tracking-[0.45em] text-white hover:text-[#FAD600] transition-all group"
          >
            <span className="relative">
              @somos.unik
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] md:h-[2px] bg-[#FAD600] group-hover:w-full transition-all duration-300"></span>
            </span>
          </motion.a>
          
          
        </div>
      </div>
    </section>
  );
};
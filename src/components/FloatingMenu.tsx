"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, LayoutGroup } from "framer-motion";
import { Menu, X, Briefcase, User, Wrench, Send, ArrowRight } from "lucide-react";

/**
 * Bubble Menu: Amethyst Glass Edition
 * Foco: Color violeta intenso, refracción profunda y dos puntos de luz.
 */
const menuItems = [
  { id: "nosotras", label: "About", icon: <User size={20} /> },
 { id: "servicios", label: "Services", icon: <Wrench size={20} /> },
   { id: "proyectos", label: "Selected Works", icon: <Briefcase size={20} /> },
  { id: "contacto", label: "Contact", icon: <Send size={20} /> },
];

export const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- EFECTO MAGNÉTICO ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isOpen) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.35);
    mouseY.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <LayoutGroup>
      <div className="fixed top-6 right-6 md:top-10 md:right-10 z-[500] floating-menu-container">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            // BURBUJA CERRADA: Amatista Glass con Dos Puntos de Luz
            <motion.div
              key="bubble"
              ref={containerRef}
              layoutId="glass-panel"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              onClick={() => setIsOpen(true)}
              className="
                relative w-16 h-16 md:w-20 md:h-20 
                rounded-full flex items-center justify-center 
                shadow-[0_12px_40px_rgba(0,0,0,0.3)]
                cursor-pointer group overflow-hidden
                
                /* --- AMETHYST GLASS EFFECT --- */
                bg-[#3A2372]/60             /* Violeta más intenso y traslúcido */
                backdrop-blur-[20px]        /* Desenfoque profundo */
                backdrop-saturate-[180%]    /* Viveza de color */
                border border-white/20      /* Borde de cristal */

                /* --- LUZ EXTRA (Pseudo-elementos para los extremos) --- */
                before:absolute before:inset-0
                before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)] /* Luz Superior Izquierda */
                
                after:absolute after:inset-0
                after:bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.3),transparent_50%)] /* Luz Inferior Derecha (Violeta) */
              "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div layout className="relative z-10">
                <Menu className="text-[#FAD600] group-hover:scale-110 transition-transform duration-300" size={26} />
              </motion.div>
            </motion.div>
          ) : (
            // PANEL ABIERTO: Amatista Glass Expandido
            <React.Fragment key="open-panel">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-[#020617]/20 backdrop-blur-[8px] z-[-1]"
              />

              <motion.div
                layoutId="glass-panel"
                className="
                  text-white p-6 md:p-8 
                  rounded-[2.5rem] md:rounded-[3rem] 
                  shadow-[0_24px_64px_rgba(0,0,0,0.4)]
                  w-[min(90vw,380px)] origin-top-right overflow-hidden
                  
                  /* --- AMETHYST PANEL EFFECT --- */
                  bg-[#3A2372]/75             /* Más opaco para lectura */
                  backdrop-blur-[30px] 
                  backdrop-saturate-[160%]
                  border border-white/10
                  
                  /* Luz ambiental interna */
                  before:absolute before:inset-0
                  before:bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_60%)]
                "
                initial={{ scale: 0.9, opacity: 0, x: 20, y: -20 }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, x: 20, y: -20 }}
              >
                {/* Header sutil */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FAD600]/80">Navegación</span>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X size={18} className="text-white/40" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 relative z-10">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/0 hover:bg-white/10 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[#FAD600] opacity-80 group-hover:opacity-100">{item.icon}</span>
                          <span className="font-semibold text-lg tracking-tight">{item.label}</span>
                        </div>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer del Menú */}
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between opacity-40 relative z-10">
                  <span className="text-[9px] font-medium tracking-widest">UNIK AGENCY</span>
                  <div className="text-[9px] font-bold px-2 py-1 border border-white/20 rounded">2026</div>
                </div>
              </motion.div>
            </React.Fragment>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};
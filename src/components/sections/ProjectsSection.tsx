"use client";

import { motion, useTransform, useScroll, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  detailedDescription: string;
  slogan: string;
  images: string[];
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "Independiente", 
    category: "Concientización", 
    imageUrl: "/Independiente1.jpeg", 
    year: "2024",
    slogan: "Nadie se queda en el banco.",
    detailedDescription: "Concientización sobre el TEA y promoción del palco sensorial para la inclusión de hinchas.",
    images: ["/Independiente1.jpeg", "/Independiente2.jpeg"] 
  },
  { 
    id: 2, 
    title: "Radio Nacional", 
    category: "Rebranding", 
    imageUrl: "/Nacional1.jpeg", 
    year: "2023",
    slogan: "Bancamos lo nacional.",
    detailedDescription: "Rebranding estratégico para modernizar la percepción de la radio pública.",
    images: ["/Nacional1.jpeg", "/Nacional2.jpeg", "/Nacional3.jpeg", "/Nacional4.jpeg"]
  },
  { 
    id: 3, 
    title: "Premios Obrar", 
    category: "Impacto Social", 
    imageUrl: "/Unfpa2.jpeg", 
    year: "2023",
    slogan: "A mí no me va a pasar.",
    detailedDescription: "Campaña de concientización sobre salud reproductiva en adolescentes.",
    images: ["/Unfpa1.jpeg", "/Unfpa2.jpeg", "/Unfpa3.jpeg"]
  },
  { 
    id: 4, 
    title: "Olimpo", 
    category: "Branding", 
    imageUrl: "/Olimpo.jpeg", 
    year: "2024",
    slogan: "Entre lo más alto, con vos.",
    detailedDescription: "Identidad visual basada en la excelencia y la cultura general.",
    images: ["/Olimpo.jpeg", "/Olimpo2.png"]
  },
  { 
    id: 5, 
    title: "Casancrem", 
    category: "Sensorial", 
    imageUrl: "/CasanCrem.jpeg", 
    year: "2023",
    slogan: "Saboreando recuerdos.",
    detailedDescription: "Marketing sensorial explorando gatillos emocionales del consumidor.",
    images: ["/CasanCrem.jpeg", "/CasanCrem2.jpeg"]
  },
  { 
    id: 6, 
    title: "Creación de Banners", 
    category: "Diseño Gráfico", 
    imageUrl: "/Farmacia1.jpeg", 
    year: "2023",
    slogan: "Comunicación visual efectiva.",
    detailedDescription: "Diseño de piezas digitales optimizadas para entorno web.",
    images: ["/Farmacia1.jpeg", "/Farmacia2.jpeg", "/Farmacia3.jpeg"]
  },
];

export const ProjectsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start end", "end start"] 
  });

  // FISICA DE SUAVIZADO: Evita el "temblor" sincronizando el scroll con un resorte más suave
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,   // Aún más suave para evitar jitter
    damping: 35,     // Alta amortiguación para estabilidad
    restDelta: 0.001
  });

  const x = useTransform(
    smoothProgress, 
    [0.2, 0.8], 
    ["100vw", isMobile ? "-550vw" : "-250vw"]
  );

  const textOpacity = useTransform(smoothProgress, [0.1, 0.25, 0.4, 0.75, 0.85], [1, 1, 0.08, 0.08, 1]);
  const textColor = useTransform(smoothProgress, [0, 0.3, 0.75, 0.9], ["#3A2372", "#3A2372", "#D1D1D1", "#FAD600"]);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }
  }, [selectedId]);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="proyectos" ref={targetRef} className="relative h-[600vh] bg-[#F4F4F4]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* TEXTO DE FONDO */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <motion.h2 
            style={{ 
              opacity: textOpacity, 
              color: textColor,
              willChange: "opacity, color" // Avisa a la GPU para optimizar
            }}
            className="text-[18vw] font-black uppercase leading-[0.75] text-center select-none tracking-tighter"
          >
            Selected <br/> Works
          </motion.h2>
        </div>

        {/* CARDS DE PROYECTOS */}
        <motion.div 
          style={{ x, translateZ: 0, backfaceVisibility: "hidden" }} // Forzamos GPU y ocultamos backface para estabilidad
          className="flex gap-12 md:gap-20 z-10 relative h-full items-center transform-gpu"
        > 
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className={`group relative h-[400px] w-[300px] md:h-[550px] md:w-[450px] flex-none overflow-hidden rounded-[3rem] md:rounded-[3.5rem] bg-white shadow-2xl cursor-pointer
                ${index % 2 === 0 ? "self-start mt-24" : "self-end mb-24"}`}
            >
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 768px) 300px, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2372]/90 via-[#3A2372]/30 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-20">
                <div className="absolute top-8 right-8 bg-[#3A2372] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="text-[#FAD600]" size={24} />
                </div>
                <p className="text-[#FAD600] text-[10px] font-black uppercase tracking-[0.4em] mb-4">{project.category}</p>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* POPUP EDITORIAL */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#3A2372]/98 backdrop-blur-3xl" 
            />
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden flex flex-col h-[90vh] shadow-2xl z-10"
            >
              {/* Botón Cerrar */}
              <button onClick={() => setSelectedId(null)} className="absolute top-6 right-6 bg-gray-100 p-3 rounded-full z-50">
                <X size={20} className="text-[#3A2372]" />
              </button>

              <div className="p-8 md:p-14 flex flex-col h-full overflow-hidden">
                <div className="max-w-4xl flex-none mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-[#FAD600] text-[#3A2372] text-[10px] font-black rounded-full uppercase">{selectedProject.year}</span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase">{selectedProject.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#3A2372] uppercase leading-[0.85] tracking-tighter mb-3">{selectedProject.title}</h3>
                  <p className="text-sm md:text-base text-gray-500 font-light line-clamp-2 md:line-clamp-3">{selectedProject.detailedDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-md min-h-[150px]">
                      <Image src={img} alt="Gallery" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 flex-none">
                  <p className="text-base md:text-xl font-serif italic text-gray-400">"{selectedProject.slogan}"</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
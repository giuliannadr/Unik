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
    id: 1, title: "Independiente", category: "Concientización", imageUrl: "/Independiente1.jpeg", year: "2024",
    slogan: "Nadie se queda en el banco.",
    detailedDescription: "Concientización sobre el TEA y promoción del palco sensorial para la inclusión de hinchas.",
    images: ["/Independiente1.jpeg", "/Independiente2.jpeg"] 
  },
  { 
    id: 2, title: "Radio Nacional", category: "Rebranding", imageUrl: "/Nacional1.jpeg", year: "2023",
    slogan: "Bancamos lo nacional.",
    detailedDescription: "Rebranding estratégico para modernizar la percepción de la radio pública.",
    images: ["/Nacional1.jpeg", "/Nacional2.jpeg", "/Nacional3.jpeg", "/Nacional4.jpeg"]
  },
  { 
    id: 3, title: "Premios Obrar", category: "Impacto Social", imageUrl: "/Unfpa2.jpeg", year: "2023",
    slogan: "A mí no me va a pasar.",
    detailedDescription: "Campaña de concientización sobre salud reproductiva en adolescentes.",
    images: ["/Unfpa1.jpeg", "/Unfpa2.jpeg", "/Unfpa3.jpeg"]
  },
  { 
    id: 4, title: "Olimpo", category: "Branding", imageUrl: "/Olimpo.jpeg", year: "2024",
    slogan: "Entre lo más alto, con vos.",
    detailedDescription: "Identidad visual basada en la excelencia y la cultura general.",
    images: ["/Olimpo.jpeg", "/Olimpo2.png"]
  },
  { 
    id: 5, title: "Casancrem", category: "Sensorial", imageUrl: "/CasanCrem.jpeg", year: "2023",
    slogan: "Saboreando recuerdos.",
    detailedDescription: "Marketing sensorial explorando gatillos emocionales del consumidor.",
    images: ["/CasanCrem.jpeg", "/CasanCrem2.jpeg"]
  },
  { 
    id: 6, title: "Creación de Banners", category: "Diseño Gráfico", imageUrl: "/Farmacia1.jpeg", year: "2023",
    slogan: "Comunicación visual efectiva.",
    detailedDescription: "Diseño de piezas digitales optimizadas para entorno web.",
    images: ["/Farmacia1.jpeg", "/Farmacia2.jpeg", "/Farmacia3.jpeg"]
  },
];

export const ProjectsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 30,
    restDelta: 0.001
  });

  // ── Texto DESKTOP: el amarillo aparece DESPUÉS de que salgan los proyectos
  const deskTextOpacity = useTransform(smoothProgress, [0, 0.08, 0.70, 0.78], [1, 0.08, 0.08, 1]);
  const deskTextColor   = useTransform(
    smoothProgress,
    [0, 0.08, 0.70, 0.80],
    ["#3A2372", "#D1D1D1", "#D1D1D1", "#FAD600"]
  );

  // ── Texto MOBILE: los proyectos aparecen antes y el amarillo llega antes
  const mobTextOpacity = useTransform(smoothProgress, [0, 0.07, 0.62, 0.72], [1, 0.08, 0.08, 1]);
  const mobTextColor   = useTransform(
    smoothProgress,
    [0, 0.07, 0.62, 0.74],
    ["#3A2372", "#D1D1D1", "#D1D1D1", "#FAD600"]
  );

  // Mobile: columna única de tarjetas — aparece antes, sale antes
 const mobileCardsY = useTransform(smoothProgress, [0, 0.60], ["80vh", "-300vh"]);
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
    <section id="proyectos" ref={targetRef} className="relative h-[650vh] bg-[#F4F4F4]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Texto MOBILE */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center z-0 pointer-events-none px-4">
          <motion.h2
            style={{ opacity: mobTextOpacity, color: mobTextColor }}
            className="text-[18vw] font-black uppercase leading-[0.75] text-center select-none tracking-tighter"
          >
            Selected <br /> Works
          </motion.h2>
        </div>

        {/* Texto DESKTOP */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center z-0 pointer-events-none px-4">
          <motion.h2
            style={{ opacity: deskTextOpacity, color: deskTextColor }}
            className="text-[18vw] font-black uppercase leading-[0.75] text-center select-none tracking-tighter"
          >
            Selected <br /> Works
          </motion.h2>
        </div>

        {/* ── MOBILE: columna única, tarjetas compactas ── */}
        {/* Parte desde top:100% (justo debajo del viewport) y sube con mobileCardsY */}
        <div className="md:hidden absolute top-full left-0 right-0 px-4 z-10">
          <motion.div
            style={{ y: mobileCardsY, translateZ: 0 }}
            className="flex flex-col gap-5 transform-gpu will-change-transform"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                className="group relative w-full overflow-hidden rounded-[1.25rem] bg-white shadow-xl cursor-pointer"
                style={{ height: "175px" }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-active:scale-105"
                  sizes="100vw"
                  priority={index < 2}
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2372]/90 via-[#3A2372]/20 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white z-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[#FAD600] text-[9px] font-black uppercase tracking-[0.35em] mb-0.5">{project.category}</p>
                      <h3 className="text-xl font-black uppercase tracking-tighter leading-none">{project.title}</h3>
                    </div>
                    <ArrowUpRight className="text-[#FAD600] flex-none opacity-70" size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── DESKTOP / TABLET: 2 columnas escalonadas (código original del usuario) ── */}
        <div className="hidden md:block relative z-10 w-full max-w-6xl mx-auto px-10 h-full">
          <div className="grid grid-cols-2 gap-16 h-full">

            {/* Columna izquierda */}
            <div className="flex flex-col gap-40 pt-[30vh]">
              {projects.filter((_, i) => i % 2 === 0).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  progress={smoothProgress}
                  column="left"
                  onSelect={() => setSelectedId(project.id)}
                />
              ))}
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col gap-40 pt-[70vh]">
              {projects.filter((_, i) => i % 2 !== 0).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  progress={smoothProgress}
                  column="right"
                  onSelect={() => setSelectedId(project.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal compartido */}
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
              className="relative bg-white w-full max-w-6xl rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col h-[85vh] shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 bg-gray-100 p-3 rounded-full z-50 hover:bg-[#FAD600] transition-colors"
              >
                <X size={20} className="text-[#3A2372]" />
              </button>

              <div className="p-6 md:p-14 flex flex-col h-full overflow-y-auto">
                <div className="max-w-4xl flex-none mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-[#FAD600] text-[#3A2372] text-[10px] font-black rounded-full uppercase">{selectedProject.year}</span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase">{selectedProject.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-6xl font-black text-[#3A2372] uppercase leading-[0.85] tracking-tighter mb-4">{selectedProject.title}</h3>
                  <p className="text-sm md:text-lg text-gray-500 font-light max-w-2xl">{selectedProject.detailedDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-none">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="relative aspect-video md:aspect-square rounded-[1.5rem] overflow-hidden shadow-md">
                      <Image src={img} alt="Gallery" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="pt-8 mt-8 border-t border-gray-100 pb-4">
                  <p className="text-xl md:text-2xl font-serif italic text-gray-400">"{selectedProject.slogan}"</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ── Componente de tarjeta para desktop (código original del usuario) ──
const ProjectCard = ({ project, progress, column, onSelect }: any) => {
  const y = useTransform(
    progress,
    [0, 0.72],
    [column === "left" ? "90vh" : "120vh", "-400vh"]
  );

  return (
    <motion.div
      style={{ y }}
      onClick={onSelect}
      layoutId={`card-${project.id}`}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-white shadow-xl cursor-pointer transform-gpu"
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
        priority={project.id <= 2}
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3A2372]/80 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[#FAD600] text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.category}
            </p>
            <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="text-[#FAD600] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" size={24} />
        </div>
      </div>
    </motion.div>
  );
};
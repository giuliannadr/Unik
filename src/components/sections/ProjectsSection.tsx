"use client";

import { motion, useTransform, useScroll, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, Maximize2 } from "lucide-react";

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
// ── Texto MOBILE: Desaparece casi al inicio (0.05) y vuelve al final (0.85)
  const mobTextOpacity = useTransform(
    smoothProgress, 
    [0, 0.05, 0.45, 0.85], 
    [1, 0.08, 0.08, 1]
  );

  const mobTextColor = useTransform(
    smoothProgress,
    [0, 0.05, 0.85, 0.95], // El cambio al amarillo es súbito y solo al final
    ["#3A2372", "#D1D1D1", "#D1D1D1", "#FAD600"]
  );

  // ── Tarjetas MOBILE: Empiezan a subir antes (0.10) y tienen más recorrido
  const mobileCardsY = useTransform(
    smoothProgress, 
    [0.10, 0.85], 
    ["100vh", "-380vh"] // -380vh asegura que terminen de pasar todas
  );

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

 
  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);

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
   {/* ... (Todo el código anterior de imports y constantes se mantiene igual) ... */}

{/* POPUP NIVEL 1: GRID AUTO-ADAPTABLE */}
{/* POPUP NIVEL 1: GRID AUTO-ADAPTABLE */}
<AnimatePresence>
  {selectedId && selectedProject && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={() => setSelectedId(null)}
        className="absolute inset-0 bg-[#3A2372]/98 backdrop-blur-3xl"
      />
      
      <motion.div
        layoutId={`card-${selectedId}`}
        className="relative bg-white w-full max-w-6xl rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl z-10 flex flex-col h-full max-h-[90vh]"
      >
        <button 
          onClick={() => setSelectedId(null)} 
          className="absolute top-6 right-6 bg-gray-100 p-3 rounded-full z-50 hover:bg-[#FAD600] transition-all active:scale-90 shadow-sm"
        >
          <X size={20} className="text-[#3A2372]" />
        </button>

        <div className="flex flex-col h-full">
          {/* Header con Padding */}
          <div className="p-8 md:p-14 pb-6 flex-none">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-[#FAD600] text-[#3A2372] text-[11px] font-black rounded-full uppercase tracking-tighter">
                {selectedProject.year}
              </span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                {selectedProject.category}
              </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-[#3A2372] uppercase tracking-tighter mb-3 leading-[0.85]">
              {selectedProject.title}
            </h3>
            <p className="text-sm md:text-lg text-gray-500 max-w-2xl leading-relaxed">
              {selectedProject.detailedDescription}
            </p>
          </div>

          {/* GRID INTELIGENTE CON STAGGER ANIMATION */}
          <div className="flex-1 min-h-0 w-full overflow-y-auto px-8 md:px-14 pb-8">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.1 } } // Aparecen de a una
              }}
              className="flex flex-wrap gap-4 w-full h-full"
            >
              {selectedProject.images.map((img, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  onClick={() => setFullscreenIdx(i)} // Llama al estado de React
                  className="relative group cursor-zoom-in overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-gray-100 shadow-inner flex-grow"
                  style={{ 
                    flexBasis: selectedProject.images.length === 2 ? '45%' : '30%',
                    minHeight: '280px',
                    maxHeight: '500px' // Evita que una sola imagen sea gigante
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Image 
                    src={img} 
                    alt={`Gallery item ${i}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#3A2372]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-xl p-4 rounded-full border border-white/30 scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="text-white" size={28} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Footer con Slogan */}
          <div className="px-8 md:px-14 py-8 bg-gray-50/50 border-t border-gray-100 flex-none">
            <p className="text-xl md:text-3xl font-serif italic text-[#3A2372]/30 leading-none">
              "{selectedProject.slogan}"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
{/* POPUP NIVEL 2: IMAGEN FULLSCREEN */}
<AnimatePresence>
  {fullscreenIdx !== null && selectedProject && (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-10">
      {/* Fondo oscuro para el segundo nivel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setFullscreenIdx(null)}
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
      />

      {/* Botón de cierre */}
      <button
        onClick={() => setFullscreenIdx(null)}
        className="absolute top-8 right-8 z-[210] bg-white/10 hover:bg-white/20 p-4 rounded-full text-white backdrop-blur-md transition-all active:scale-90"
      >
        <X size={24} />
      </button>

      {/* Contenedor de la Imagen */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full h-full max-w-7xl flex items-center justify-center"
      >
        <div className="relative w-full h-[80vh]">
          <Image
            src={selectedProject.images[fullscreenIdx]}
            alt="Fullscreen view"
            fill
            className="object-contain" // Para que no se corte la imagen
            quality={100}
            priority
          />
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
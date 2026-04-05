"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);

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
    <section id="proyectos" className="relative bg-[#F4F4F4] py-20 md:py-32 px-5 md:px-14">

      {/* Encabezado de sección */}
      <div className="max-w-7xl mx-auto mb-10 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-[15vw] md:text-[7vw] font-black uppercase leading-none tracking-tighter text-[#3A2372]"
        >
          Selected Works
        </motion.h2>
      </div>

      {/* ─── MOBILE: columna única ─── */}
      <div className="flex flex-col gap-5 md:hidden max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative w-full h-[200px] overflow-hidden rounded-[1.5rem] bg-white shadow-xl cursor-pointer"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index < 2}
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2372] via-[#3A2372]/20 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
              <p className="text-[#FAD600] text-[9px] font-black uppercase tracking-widest mb-1">{project.category}</p>
              <div className="flex justify-between items-end">
                <h3 className="text-xl font-black uppercase tracking-tighter leading-none">{project.title}</h3>
                <ArrowUpRight className="text-[#FAD600] flex-none" size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── DESKTOP: 2 columnas escalonadas ─── */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {/* Columna izquierda */}
        <div className="flex flex-col gap-8">
          {projects.filter((_, i) => i % 2 === 0).map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-white shadow-xl cursor-pointer"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="45vw"
                priority={project.id <= 2}
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2372]/90 via-transparent to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <p className="text-[#FAD600] text-[10px] font-black uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </p>
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl font-black uppercase tracking-tighter">{project.title}</h3>
                  <ArrowUpRight className="text-[#FAD600] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Columna derecha — desplazada hacia abajo */}
        <div className="flex flex-col gap-8 mt-24">
          {projects.filter((_, i) => i % 2 !== 0).map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: idx * 0.1 + 0.15 }}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-white shadow-xl cursor-pointer"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="45vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2372]/90 via-transparent to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <p className="text-[#FAD600] text-[10px] font-black uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </p>
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl font-black uppercase tracking-tighter">{project.title}</h3>
                  <ArrowUpRight className="text-[#FAD600] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── MODAL ─── */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#3A2372]/98 backdrop-blur-3xl"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative bg-white w-full max-w-6xl rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 bg-gray-100 p-3 rounded-full z-50 hover:bg-[#FAD600] transition-colors"
              >
                <X size={20} className="text-[#3A2372]" />
              </button>

              <div className="flex flex-col h-full">
                <div className="p-8 md:p-14 pb-6 flex-none">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#FAD600] text-[#3A2372] text-[11px] font-black rounded-full">{selectedProject.year}</span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{selectedProject.category}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-[#3A2372] uppercase tracking-tighter mb-3">{selectedProject.title}</h3>
                  <p className="text-sm md:text-lg text-gray-500 max-w-2xl">{selectedProject.detailedDescription}</p>
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto px-8 md:px-14 pb-8">
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setFullscreenIdx(i)}
                        className="relative cursor-zoom-in overflow-hidden rounded-[1.5rem] bg-gray-100 flex-grow min-h-[200px] md:min-h-[300px]"
                      >
                        <Image src={img} alt="Gallery" fill className="object-cover" />
                        <div className="absolute top-3 right-3 opacity-0 hover:opacity-100 transition-opacity">
                          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full">
                            <Maximize2 size={14} className="text-[#3A2372]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <p className="text-lg md:text-xl font-serif italic text-gray-400">"{selectedProject.slogan}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── FULLSCREEN IMAGE ─── */}
      <AnimatePresence>
        {selectedId && selectedProject && fullscreenIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenIdx(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image
                src={selectedProject.images[fullscreenIdx]}
                alt="Fullscreen"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
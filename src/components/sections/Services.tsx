"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, Sparkles, Megaphone, PenTool, Globe } from "lucide-react";

// Componente del Logo Oficial de WhatsApp (SVG)
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const services = [
  {
    id: 1,
    title: "Contenido",
    description: "Narrativas visuales que detienen el scroll.",
    bg: "bg-[#3A2372]",
    icon: <Sparkles size={20} className="text-[#FAD600]" />, 
    size: "md:col-span-8 md:row-span-2",
    details: "Desarrollamos contenido estratégico adaptado a la esencia de tu marca.",
    image: "/Contenido.png",
    titleClass: "text-4xl md:text-6xl lg:text-7xl", 
    descClass: "text-xs md:text-sm whitespace-nowrap" 
  },
  {
    id: 2,
    title: "Branding",
    description: "Identidades con alma.",
    bg: "bg-[#FAD600]",
    icon: <PenTool size={20} className="text-[#3A2372]" />,
    size: "md:col-span-4 md:row-span-1",
    details: "Desde el logo hasta la voz de la marca. Creamos sistemas visuales coherentes.",
    image: "/Branding.png",
    titleClass: "text-2xl md:text-3xl",
    descClass: "text-[10px] md:text-xs"
  },
  {
    id: 3,
    title: "Estrategia",
    description: "Crecimiento puro.",
    bg: "bg-[#A0A0A0]",
    icon: <Megaphone size={20} className="text-[#3A2372]" />,
    size: "md:col-span-4 md:row-span-1",
    details: "Analizamos el mercado para trazar la hoja de ruta ideal.",
    image: "/Estrategia2.png",
    titleClass: "text-2xl md:text-3xl",
    descClass: "text-[10px] md:text-xs"
  },
  {
    id: 4,
    title: "Community Manager",
    description: "Gestión estratégica de comunidades.",
    bg: "bg-[#EBEBEB]",
    icon: <Globe size={20} className="text-[#3A2372]" />,
    size: "md:col-span-12 md:row-span-1",
    details: "Transformamos seguidores en embajadores apasionados de tu marca.",
    image: "/Community.webp",
    titleClass: "text-3xl md:text-4xl lg:text-5xl",
    descClass: "text-[11px] md:text-sm max-w-md",
    imgClass: "scale-90 md:scale-75 origin-center" 
  }
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }
  }, [selectedService]);

  // Configuración de WhatsApp
  const phone = "5491158765411";
  const getWhatsappUrl = (serviceName?: string) => {
    const baseMsg = "¡Hola UNIK! Me interesa potenciar mi marca.";
    const serviceMsg = serviceName ? ` Me gustaría consultar específicamente por el servicio de ${serviceName}.` : "";
    return `https://wa.me/${phone}?text=${encodeURIComponent(baseMsg + serviceMsg)}`;
  };

  return (
    <section id="servicios" className="relative min-h-screen flex items-center px-6 py-20 overflow-visible">
      <div className="absolute inset-0 bg-[#F4F4F4] z-10" />
      <div className="absolute top-[-100px] md:top-[-300px] right-[-150px] md:right-[-100px] w-[280px] h-[280px] md:w-[550px] md:h-[550px] rounded-full bg-[#A0A0A0] z-[15] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* TEXTO IZQUIERDA */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-2 lg:sticky lg:top-24">
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-[#FAD600] font-heading font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">
              Capabilities
            </motion.span>
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black text-[#3A2372] leading-[0.85] tracking-tighter mb-6">
              Nuestros <br /> 
              <span className="font-subheading italic font-light text-[#A0A0A0]">Servicios.</span>
            </motion.h2>

            <motion.p className="text-[#3A2372]/70 max-w-xs text-xm font-light leading-relaxed mb-8">
              Soluciones creativas diseñadas para elevar la presencia digital de marcas que buscan destacar.
            </motion.p>

            <motion.a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-3.5 bg-[#3A2372] text-white px-5 py-3.5 rounded-full w-fit shadow-2xl hover:shadow-[#3A2372]/30 transition-all active:scale-95"
            >
              <div className="bg-[#25D366] p-1.5 rounded-full text-white group-hover:scale-110 transition-transform">
                <WhatsAppLogo className="w-4 h-4" />
              </div>
              <span className="font-heading font-black text-[9px] tracking-[0.2em] uppercase pr-1">
                Quiero asesoramiento
              </span>
            </motion.a>
          </div>

          {/* GRID BENTO */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-fr">
              {services.map((service) => (
                <motion.div
                  layoutId={`bento-${service.id}`}
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  whileHover={{ y: -10, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative ${service.size} p-8 lg:p-10 rounded-[2.5rem] cursor-pointer group flex flex-col justify-between border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[240px] md:min-h-[280px]`}
                >
                  <div className="absolute inset-0 z-0">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0" />
                    <div className={`absolute inset-0 ${service.bg} opacity-40 transition-opacity group-hover:opacity-20`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity" />
                  </div>

                  <div className="flex justify-between items-start z-10 relative">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
                      {service.icon}
                    </div>
                    <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all border border-white/10">
                        <ArrowRight size={18} className="text-white" />
                    </div>
                  </div>

                  <div className="z-10 mt-auto relative">
                    <h3 className={`text-white ${service.titleClass} font-heading font-black mb-2 tracking-tighter leading-[0.85] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]`}>
                      {service.title}
                    </h3>
                    <p className={`text-white/90 ${service.descClass} font-medium uppercase tracking-wider line-clamp-2`}>
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedService(null)} className="absolute inset-0 bg-[#3A2372]/95 backdrop-blur-lg" />
            <motion.div layoutId={`bento-${selectedService.id}`} className="relative bg-white rounded-[3rem] p-10 md:p-14 max-w-2xl w-full z-[110] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              <button onClick={() => setSelectedService(null)} className="absolute top-8 right-8 text-[#3A2372]/40 hover:text-[#3A2372] z-20 w-10 h-10 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:rotate-90 transition-all">
                <X size={20} />
              </button>
              
              <div className="relative z-10">
                <div className="mb-8 scale-[1.5] origin-left drop-shadow-md w-fit">
                  {selectedService.icon}
                </div>
                <h3 className="text-5xl md:text-6xl font-heading font-black text-[#3A2372] mb-5 uppercase tracking-tighter leading-none">
                  {selectedService.title}
                </h3>
                <p className="text-[#3A2372]/70 text-xl font-light leading-relaxed mb-12 max-w-lg">
                  {selectedService.details}
                </p>
                <a 
                  href={getWhatsappUrl(selectedService.title)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-heading font-black text-[11px] tracking-widest w-full hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all uppercase"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                  Consultar por este servicio
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
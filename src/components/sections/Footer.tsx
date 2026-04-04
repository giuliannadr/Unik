"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Instagram } from "@/components/icons/BrandIcons";

// Componente del Logo Oficial de WhatsApp con fondo blanco para contraste
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#fff" d="M12.072 1.761a10.05 10.05 0 00-9.303 5.65 10.13 10.13 0 00.5 10.56L1.5 22.5l4.595-1.204a10.14 10.14 0 004.835 1.226h.006a10.07 10.07 0 0010.07-10.07c0-2.69-1.045-5.216-2.943-7.115a10.04 10.04 0 00-7.042-2.943z" />
    <path fill="#25D366" d="M12.072 0C5.405 0 0 5.405 0 12.072c0 2.132.553 4.218 1.605 6.056L0 24l6.072-1.593a12.02 12.02 0 005.995 1.587h.005c6.666 0 12.072-5.405 12.072-12.072A12.03 12.03 0 0012.072 0zm6.818 17.151c-.282.793-1.63 1.516-2.28 1.614-.51.077-1.174.11-1.848-.108-.415-.134-.949-.311-1.63-.604-2.9-1.246-4.793-4.223-4.938-4.417-.145-.194-1.182-1.571-1.182-3 0-1.428.746-2.129 1.012-2.414.267-.285.584-.356.779-.356s.39.003.559.012c.178.009.418-.068.656.502.246.59.843 2.056.918 2.203.074.148.124.32.025.517-.1.197-.15.32-.298.492-.148.173-.311.385-.444.53-.148.163-.303.342-.13.636.173.294.768 1.267 1.65 2.053 1.137 1.011 2.093 1.324 2.39 1.472.296.148.47.123.644-.077.174-.199.743-.865.941-1.161.198-.296.395-.247.692-.099.297.148 1.883.887 2.205 1.047.32.16.535.237.613.371.079.135.079.778-.203 1.571z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phone = "5491158765411";
  const email = "somosunik.contacto@gmail.com";
  
  // WhatsApp: El mensaje se incluye después del ?text=
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent("¡Hola UNIK! Me interesa potenciar mi marca.")}`;
  
  // Gmail: El mensaje se incluye en el cuerpo (body) y el asunto (su)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent("Consulta de Marca - UNIK")}&body=${encodeURIComponent("Hola UNIK, me gustaría obtener más información sobre sus servicios.")}`;

  return (
    <footer id="contacto" className="relative w-full bg-[#F4F4F4] px-6 pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden border-t border-[#3A2372]/5">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-heading font-black text-[#3A2372] tracking-tighter uppercase mb-8"
          >
            Tu marca es <span className="text-[#A0A0A0] italic font-light lowercase font-subheading">única</span>, <br /> 
            <span className="text-[#FAD600]">hagamos que el <br /> mundo la vea.</span>
          </motion.h2>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-[#3A2372] text-white px-8 py-4 md:px-12 md:py-6 rounded-full text-[10px] md:text-xs font-heading font-black tracking-[0.2em] uppercase transition-all group shadow-xl"
          >
            <WhatsAppLogo className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Hablemos de tu marca
          </motion.a>
        </div>

        {/* Info & Redes */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-[#3A2372]/10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[#3A2372] font-black tracking-[0.2em] text-[9px] uppercase">
              UNIK Creative © {currentYear}
            </span>
            <p className="text-[#A0A0A0] text-[9px] tracking-widest uppercase font-medium">
              Buenos Aires, Argentina
            </p>
          </div>

          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://www.instagram.com/somos.unik/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#3A2372]/50 hover:text-[#3A2372] transition-colors"
            >
              <Instagram size={14} />
              <span className="text-[9px] font-black tracking-widest uppercase">Instagram</span>
            </a>
            <a 
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#3A2372]/50 hover:text-[#3A2372] transition-colors"
            >
              <Mail size={14} />
              <span className="text-[9px] font-black tracking-widest uppercase">Email</span>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="#top" className="group flex items-center gap-1 text-[#3A2372] font-black tracking-[0.1em] text-[9px] uppercase hover:text-[#FAD600] transition-colors">
              Back to top 
              <ArrowUpRight size={10} />
            </a>
            <span className="text-[#A0A0A0] text-[9px] tracking-widest uppercase italic font-medium">
              Dev by @giulianna.dev
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
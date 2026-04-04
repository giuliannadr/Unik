import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { BoutiqueCursor } from "@/components/BoutiqueCursor";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-unik-surface relative cursor-none w-full overflow-x-clip">
      <BoutiqueCursor />
      
      <Hero />
      
      {/* Mantenemos el contenedor principal en z-30 para estar sobre el Hero,
          pero dentro manejamos la jerarquía de las secciones.
      */}
      <div className="relative -mt-30 md:mt-12 w-full overflow-x-clip">
        
        <ScrollAnimation delay={0.2} className="relative">
          <AboutSection />
        </ScrollAnimation>
        
        {/* Servicios: IMPORTANTE - Quitamos el mt-30 excesivo y aseguramos z-index superior */}
        <ScrollAnimation className="relative -mt-1 md:mt-0">
          <Services />
        </ScrollAnimation>
        
        <ScrollAnimation className="mt-16 md:mt-24">
          <ProjectsSection />
        </ScrollAnimation>
        
       <Footer/>
      </div>

    </main>
  );
}
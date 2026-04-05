import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Inter } from "next/font/google";
import Script from "next/script"; // Importamos el componente de Next
import "./globals.css";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FloatingMenu } from "@/components/FloatingMenu";

const montserrat = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["400", "500", "700", "800", "900"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["italic", "normal"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// --- CONFIGURACIÓN DE SEO AVANZADA ---
export const metadata: Metadata = {
  title: "Unik | Agencia de Publicidad Creativa",
  description: "Transformamos ideas en experiencias digitales de alto impacto. Especialistas en branding, desarrollo web y estrategias de contenido.",
  keywords: ["Agencia de publicidad", "Diseño Web", "Branding", "Marketing Digital", "Buenos Aires"],
  authors: [{ name: "Unik Agency" }],
  openGraph: {
    title: "Unik | Agencia de Publicidad",
    description: "Creatividad y estrategia para marcas que buscan destacar.",
    url: "https://tu-dominio-unik.com", // Cambialo por tu URL real
    siteName: "Unik Agency",
    images: [
      {
        url: "/og-image.jpg", // Asegurate de tener una imagen de 1200x630 en /public
        width: 1200,
        height: 630,
        alt: "Unik Agencia de Publicidad",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unik | Agencia de Publicidad",
    description: "Creatividad y estrategia para marcas que buscan destacar.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        {/* --- GOOGLE ANALYTICS --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-97391XGXZ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-97391XGXZ7', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="antialiased bg-unik-surface text-unik-primary font-sans selection:bg-unik-accent selection:text-unik-primary md:cursor-none">
        <PageWrapper>
          <div className="noise-overlay" />
          {children}
          <FloatingMenu />
        </PageWrapper>
      </body>
    </html>
  );
}
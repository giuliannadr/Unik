import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { FloatingMenu } from "@/components/FloatingMenu";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["italic", "normal"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Unik | Agencia de Publicidad",
  description: "Agencia creativa de publicidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable} ${inter.variable} scroll-smooth`}>
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

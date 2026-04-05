# UNIK Creative Agency 🟡

**UNIK** es la presencia digital oficial de la agencia, construida con un enfoque extremo en rendimiento, estética y conversión. Cada detalle —desde las animaciones hasta el SEO técnico— está optimizado para transmitir la identidad de la marca.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 15** (App Router) | Framework principal, SSR, optimización de imágenes |
| **TypeScript** | Tipado fuerte en toda la aplicación |
| **Tailwind CSS** | Sistema de diseño atómico |
| **Framer Motion** | Animaciones y micro-interacciones |
| **Lucide React** | Iconografía |
| **Be Vietnam Pro** | Tipografía principal (headings) vía `next/font/google` |
| **Playfair Display** | Tipografía secundaria / itálica |

---

## ✨ Características Principales

- **Animaciones premium** con Framer Motion (`whileInView`, `useScroll`, `useSpring`)
- **Cursor personalizado** para desktop (boutique cursor)
- **Menú flotante** tipo burbuja con efecto magnético y glassmorphism
- **Modales de proyecto** con galería de imágenes y zoom fullscreen
- **WhatsApp Business** integrado en hero, servicios y footer
- **Layout responsivo** distinto para mobile y desktop en cada sección

---

## 🔍 SEO

Configurado en `src/app/layout.tsx` con la API de metadata de Next.js:

```ts
export const metadata: Metadata = {
  title: "Unik | Agencia de Publicidad Creativa",
  description: "Transformamos ideas en experiencias digitales de alto impacto...",
  keywords: ["Agencia de publicidad", "Diseño Web", "Branding", "Marketing Digital", "Buenos Aires"],
  authors: [{ name: "Unik Agency" }],
  icons: {
    icon: "/Unik-logo.png",       // Favicon de la pestaña
    shortcut: "/Unik-logo.png",
    apple: "/Unik-logo.png",      // Icono en iOS al guardar en pantalla de inicio
  },
  openGraph: {
    title: "Unik | Agencia de Publicidad",
    description: "Creatividad y estrategia para marcas que buscan destacar.",
    url: "https://unik-kappa.vercel.app/",   // ⚠️ Actualizar con el dominio real
    siteName: "Unik Agency",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unik | Agencia de Publicidad",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,   // Necesario en App Router para que el sitio no se vea como mobile en desktop
};
```

---

## 📊 Google Analytics

Integrado en `src/app/layout.tsx` usando `next/script` con estrategia `afterInteractive` para no bloquear el LCP:

```tsx
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
```

**Measurement ID:** `G-97391XGXZ7`  
Para verificar que funciona: Google Analytics → Tiempo Real → Ver usuarios activos al navegar el sitio.

---

## 🚀 Instalación y Desarrollo

```bash
# Clonar repositorio
git clone https://github.com/giuliannadr/Unik.git
cd Unik

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

---

## 📁 Estructura de Carpetas

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fuentes, SEO, Google Analytics, viewport
│   ├── page.tsx            # Página principal (ensamblado de secciones)
│   └── globals.css         # Variables CSS, tipografías, animaciones globales
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            # Sección principal con animaciones de entrada
│   │   ├── AboutSection.tsx    # Equipo + modal de perfiles
│   │   ├── Services.tsx        # Grid bento de servicios + modales
│   │   ├── ProjectsSection.tsx # Galería de proyectos + modal con galería
│   │   └── Footer.tsx          # CTA final + datos de contacto
│   │
│   ├── FloatingMenu.tsx        # Menú burbuja flotante con efecto magnético
│   ├── BoutiqueCursor.tsx      # Cursor personalizado (solo desktop)
│   ├── ScrollAnimation.tsx     # Wrapper reutilizable para animaciones de entrada
│   └── AnimatedUnderline.tsx   # Línea animada decorativa
│
public/
├── Unik-logo.png           # Favicon / logo de pestaña
├── og-image.jpg            # ⚠️ Imagen OG para redes (crear: 1200×630px)
├── SUR-Juntas.jpeg         # Foto del equipo (About)
├── Cami.jpeg / Iara.jpeg   # Fotos de perfiles (modal About)
└── [imágenes de proyectos] # Independiente, Nacional, Unfpa, Olimpo, etc.
```

---

## 📌 Notas de Despliegue

1. **Vercel** es el entorno recomendado — soporte nativo para Next.js, edge functions y caché de assets.
2. Actualizar la URL en `metadata.openGraph.url` con el dominio final.
3. Verificar que `og-image.jpg` existe en `/public` antes de publicar.
4. En Google Analytics confirmar que el Measurement ID `G-97391XGXZ7` corresponde a la propiedad correcta.

---

## 👩‍💻 Autora

Desarrollado con precisión técnica por [@giulianna.dev](https://instagram.com/giulianna.dev).

© 2026 UNIK Creative Agency — Buenos Aires, Argentina.
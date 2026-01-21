# MP3Linker — Convertidor de YouTube a MP3

Aplicación web para convertir enlaces de YouTube a archivos MP3 de forma rápida y sencilla. Construida con React + Vite, Tailwind CSS e i18next para soporte multilenguaje.

## Características
- Conversión de videos de YouTube a MP3
- Interfaz moderna con animaciones y diseño responsive
- Historial de conversiones almacenado en local (LocalStorage)
- Soporte multilenguaje (es, en, it, fr, po, de)
- Estilos con Tailwind CSS y fuente Poppins

## Tecnologías
- React 18, Vite 5
- Tailwind CSS 3, PostCSS, Autoprefixer
- i18next y react-i18next
- Framer Motion, react-icons, lucide-react

## Requisitos Previos
- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto y definir:

```env
VITE_APP_RAPIDAPI_KEY=TU_CLAVE_DE_RAPIDAPI
```

La clave se usa en el flujo de conversión dentro de la aplicación.

## Scripts

- Desarrollo: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

## Ejecución en Desarrollo

```bash
npm run dev
```

Vite abrirá un servidor local en `http://localhost:5173` (o el puerto disponible).

## Construcción para Producción

```bash
npm run build
npm run preview
```

## Estilos (Tailwind)
- Configuración en `tailwind.config.js` apuntando a `index.html` y `src/**/*.{js,ts,jsx,tsx}`
- Directivas de Tailwind y fuente Poppins están incluidas en `src/index.css`

Referencias:
- [tailwind.config.js](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/tailwind.config.js#L1-L15)
- [index.css](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/index.css)

## Internacionalización (i18n)
La inicialización está en `src/main.tsx` y las traducciones en `src/assets/translations/*/global.json`.

Referencias:
- [main.tsx](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/main.tsx#L1-L53)

## Estructura General
- Componentes principales en `src/components`:
  - [Navbar.tsx](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/components/Navbar.tsx)
  - [Convert.tsx](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/components/Convert.tsx)
  - [History.tsx](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/components/History.tsx)
  - [Tool.tsx](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/components/Tool.tsx)
  - [Footer.tsx](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/components/Footer.tsx)
  - [Back.tsx](file:///c:/Users/danie/Documents/Programacion/Portafolio-Proyectos/convert%20youtube%20to%20mp3/src/components/Back.tsx)

## Accesibilidad y UX
- Header sticky para evitar solapamiento con el contenido
- Enfoque en contraste adecuado y navegación clara

## Contribuciones
1. Realiza un fork
2. Crea tu rama de feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m "feat: agrega nueva funcionalidad"`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## Licencia
Sin licencia especificada en el proyecto.


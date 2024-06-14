import download from "./download.svg";
import fast from "./fast.svg";
import like from "./like.svg";
import responsive from "./responsive.svg";

interface ToolConvert {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const ToolConvert: ToolConvert[] = [
  {
    id: 1,
    image: responsive,
    title: "Multiplataforma",
    description:
      "Nuestro convertidor de videos de YouTube a MP3 funciona perfectamente en Linux, Windows y MacOS y es compatible con todos los navegadores.",
  },
  {
    id: 2,
    image: download,
    title: "Descarga gratis",
    description:
      " MP3Linker siempre es gratuito y puede convertir y descargar video y audio ilimitado. Use esta conversión tantas veces como desee, sin ningún compromiso de calidad.",
  },
  {
    id: 3,
    image: like,
    title: "Facil de usar",
    description:
      "No es necesario que registre la cuenta. Solo es necesario que ingrese la URL del video que desea convertir y descargar. Seleccione el formato y luego haga clic en Descargar para comenzar este proceso de conversión.",
  },
  {
    id: 4,
    image: fast,
    title: "Velocidad de descarga",
    description:
      "Descarga tus videos de YouTube convertidos a MP3 en segundos! Disfruta de una conversión rápida y sin complicaciones.",
  },
];

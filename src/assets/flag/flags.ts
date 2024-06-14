import germany from "./germany.svg";
import englad from "./england.svg";
import italy from "./italy.svg";
import spain from "./spain.svg";
import france from "./france.svg";
import portugal from "./portugal.svg";

interface Flags {
  id: number;
  name: string;
  image: string;
  lng: string;
}

export const flags: Flags[] = [
  { id: 1, name: "DE", image: germany, lng: "de" },
  { id: 2, name: "EN", image: englad, lng: "en" },
  { id: 3, name: "IT", image: italy, lng: "it" },
  { id: 4, name: "ES", image: spain, lng: "es" },
  { id: 5, name: "FR", image: france, lng: "fr" },
  { id: 6, name: "PO", image: portugal, lng: "po" },
];

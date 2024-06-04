import headphones from "../assets/headphones.svg";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center mt-20 font-poppins bg-[#131313] py-5 text-white">
      <p className="text-sm flex items-center gap-1">
        © 2024 - <img className="w-5 h-5" src={headphones} alt="" /> MP3Linker.
        Todos los derechos reservados.
      </p>
    </footer>
  );
};

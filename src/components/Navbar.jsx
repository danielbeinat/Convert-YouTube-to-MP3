import { useState, useEffect } from "react";
import spain from "../assets/flag/spain.svg";
import headphones from "../assets/headphones.svg";
import { flags } from "../assets/flag/flags";

const link = [
  { name: "Inicio", href: "#" },
  { name: "FAQ", href: "#section2" },
];

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTransparent(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex fixed w-full top-0 z-20 justify-between font-poppins items-center md:pl-6 md:pr-14 px-6 py-3 ${
          isTransparent ? "bg-[rgba(0,0,0,0.8)]" : "bg-black"
        }`}
      >
        <a href="/">
          <div className="flex items-center gap-2">
            <img className="w-8 h-8" src={headphones} alt="headphones" />
            <h1 className="text-white font-bold text-xl">MP3Linker</h1>
          </div>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-5">
            {link.map((item, index) => (
              <li key={index} className="flex">
                <a
                  href={item.href}
                  className="text-white text-lg hover:text-red-500 duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setShow(!show)}
          className="bg-white rounded px-2 py-1"
        >
          <img className="w-6 h-6" src={spain} alt="" />
        </button>

        {show && (
          <div className="fixed flex flex-col bg-white items-start justify-start border-2 rounded md:top-[50px] md:right-10 top-[50px] right-3 z-10">
            {flags.map((item) => (
              <div
                className="flex items-center cursor-pointer hover:bg-red-500 hover:text-white w-full px-2 py-2 duration-300 gap-2"
                key={item.id}
              >
                <img className="w-6 h-6" src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

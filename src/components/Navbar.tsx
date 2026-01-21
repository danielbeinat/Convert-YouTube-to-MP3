import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiHome, FiHelpCircle, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { IoMdHeadset } from "react-icons/io";
import { flags } from "../assets/flag/flags";

interface Item {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface Flag {
  id: number;
  name: string;
  lng: string;
  image: string;
}

const link: Item[] = [
  { name: "Inicio", href: "#", icon: <FiHome /> },
  { name: "FAQ", href: "#section2", icon: <FiHelpCircle /> },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  const [show, setShow] = useState<boolean>(false);
  const [isTransparent, setIsTransparent] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShow(false);
  };

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
    <header
      className={`sticky w-full top-0 z-20 font-poppins transition-all duration-300 backdrop-blur-xl ${
        isTransparent
          ? "bg-slate-900/80 border-b border-white/10"
          : "bg-slate-900/95 border-b border-white/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a
            href="/"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="MP3Linker - Inicio"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-2">
                <IoMdHeadset className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-xl bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                MP3Linker
              </h1>
              <span className="text-xs text-gray-400">YouTube to MP3</span>
            </div>
          </motion.a>

          <nav className="hidden md:flex space-x-8">
            {link.map((item: Item, index: number) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white/80 hover:text-white text-lg font-medium transition-all duration-300 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t(`header.${item.name}`)}
              >
                <div className="text-purple-300">{item.icon}</div>
                <span>{t(`header.${item.name}`)}</span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShow(!show)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 border border-white/20"
              aria-label="Seleccionar idioma"
              aria-expanded={show}
            >
              <FiGlobe className="w-5 h-5 text-purple-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 rounded-lg p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-purple-300" />
              ) : (
                <FiMenu className="w-6 h-6 text-purple-300" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 mt-2 w-56 rounded-2xl shadow-2xl bg-slate-800/95 backdrop-blur-xl border border-white/20 overflow-hidden"
          >
            <div
              className="py-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-menu"
            >
              {flags.map((item: Flag) => (
                <motion.button
                  key={item.id}
                  onClick={() => changeLanguage(item.lng)}
                  className="flex items-center w-full px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                  role="menuitem"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  <div className="relative mr-3">
                    <img
                      className="w-5 h-5 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                    {i18n.language === item.lng && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    )}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/20"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {link.map((item: Item, index: number) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-purple-300">{item.icon}</div>
                  <span>{t(`header.${item.name}`)}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

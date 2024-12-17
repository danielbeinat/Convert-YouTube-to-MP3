import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiHome, FiHelpCircle, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { IoMdHeadset } from "react-icons/io";
import spainFlag from "../assets/flag/spain.svg";
import { flags } from "../assets/flag/flags";

interface Item {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface Flag {
  id: number;
  name: string;
  image: string;
  lng: string;
}

const link: Item[] = [
  { name: "Inicio", href: "#", icon: <FiHome /> },
  { name: "FAQ", href: "#section2", icon: <FiHelpCircle /> },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  const [show, setShow] = useState<boolean>(false);
  const [isTransparent, setIsTransparent] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("es");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
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
      className={`fixed w-full top-0 z-20 font-poppins transition-all duration-300 ${
        isTransparent
          ? "bg-gradient-to-r from-purple-900 to-indigo-900 bg-opacity-80 backdrop-blur-md"
          : "bg-gradient-to-r from-purple-800 to-indigo-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoMdHeadset className="w-8 h-8 text-white" />
            <h1 className="text-white font-bold text-xl">MP3Linker</h1>
          </motion.a>

          <nav className="hidden md:flex space-x-8">
            {link.map((item: Item, index: number) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white text-lg hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{t(`header.${item.name}`)}</span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShow(!show)}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
            >
              <FiGlobe className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {flags.map((item: Flag) => (
                <motion.button
                  key={item.id}
                  onClick={() => changeLanguage(item.lng)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300"
                  role="menuitem"
                  whileHover={{ backgroundColor: "#F3E8FF" }}
                  whileTap={{ backgroundColor: "#E9D5FF" }}
                >
                  <img
                    className="w-5 h-5 mr-3"
                    src={item.image}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
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
            className="md:hidden bg-gradient-to-r from-purple-800 to-indigo-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {link.map((item: Item, index: number) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="text-white flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 transition-colors duration-300"
                  whileHover={{ backgroundColor: "#7C3AED" }}
                  whileTap={{ backgroundColor: "#6D28D9" }}
                >
                  {item.icon}
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

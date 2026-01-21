import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiSmartphone, FiDownload, FiHeart, FiZap } from "react-icons/fi";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

export const Tool: React.FC = () => {
  const { t } = useTranslation("global");

  const icons: Record<string, React.ReactNode> = {
    responsive: <FiSmartphone />,
    download: <FiDownload />,
    like: <FiHeart />,
    fast: <FiZap />,
  };

  const cards: Card[] = t("card", { returnObjects: true });

  return (
    <section
      id="section2"
      className="font-poppins bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 py-24 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 drop-shadow-lg">
            {t("tool.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("tool.description")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {cards.map((item: Card, index: number) => {
            const icon = item.image
              ? icons[item.image.split("/").pop()!.split(".")[0]]
              : null;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 p-6 flex flex-col items-center text-center border border-gray-700/50 group-hover:border-purple-500/50 relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-500/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 min-h-[280px] max-w-sm mx-auto">
                  <div>
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 text-white rounded-full mb-5 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-purple-500/50">
                      {React.cloneElement(icon as React.ReactElement, {
                        className: "w-8 h-8",
                      })}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

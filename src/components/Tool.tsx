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
      className="font-poppins bg-gradient-to-br from-purple-900 to-gray-900 py-24 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            {t("tool.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("tool.description")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col justify-between border border-gray-700 group-hover:border-purple-500">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full mb-6 mx-auto transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                      {React.cloneElement(icon as React.ReactElement, {
                        className: "w-8 h-8",
                      })}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">
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

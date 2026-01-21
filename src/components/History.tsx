import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ConversionHistory } from "../types";
import {
  FiClock,
  FiTrash2,
  FiDownload,
  FiMusic,
  FiCalendar,
} from "react-icons/fi";

export const History: React.FC = () => {
  const { t } = useTranslation("global");
  const [history, setHistory] = useLocalStorage<ConversionHistory[]>(
    "conversion-history",
    [],
  );

  const clearHistory = () => {
    setHistory([]);
  };

  const removeFromHistory = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  if (history.length === 0) {
    return (
      <section className="font-poppins bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/10">
              <FiClock className="w-12 h-12 text-purple-300" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Historial de Conversiones
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tus conversiones aparecerán aquí automáticamente
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <FiMusic className="w-5 h-5" />
                  <span>MP3 de alta calidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5" />
                  <span>Guardado localmente</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="font-poppins bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Historial de Conversiones
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Accede rápidamente a tus conversiones anteriores
          </p>
        </motion.div>

        <div className="flex justify-between items-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-white font-medium">
              {history.length}{" "}
              {history.length === 1 ? "conversión" : "conversiones"} guardadas
            </span>
          </div>
          {history.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearHistory}
              className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm text-red-300 hover:text-red-200 px-6 py-3 rounded-full transition duration-300 border border-red-400/30"
              aria-label="Limpiar historial"
            >
              <FiTrash2 className="w-4 h-4" />
              Limpiar todo
            </motion.button>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {history.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1 mr-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                      <FiMusic className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      MP3 Convertido
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FiCalendar className="w-3 h-3" />
                    <span>{formatDate(item.timestamp)}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromHistory(item.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-400/10"
                  aria-label={`Eliminar ${item.title}`}
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>

              {item.downloadLink && (
                <motion.a
                  href={item.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-xl transition duration-300 shadow-lg group-hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Descargar ${item.title}`}
                >
                  <FiDownload className="w-4 h-4" />
                  <span className="font-medium">Descargar</span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

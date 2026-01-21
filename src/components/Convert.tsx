import { useState } from "react";
const { VITE_APP_RAPIDAPI_KEY } = import.meta.env;
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ConversionResult, ValidationError } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ConversionHistory } from "../types";
import {
  Download,
  RotateCcw,
  Music,
  Play,
  Clock,
  AlertCircle,
  AlertTriangle,
  TriangleAlert,
  RefreshCw,
} from "lucide-react";

const YOUTUBE_URL_REGEX =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;

const validateYouTubeUrl = (
  url: string,
): { isValid: boolean; videoId?: string; error?: ValidationError } => {
  if (!url || url.trim() === "") {
    return {
      isValid: false,
      error: { type: "url", message: "Por favor, ingrese una URL" },
    };
  }

  const match = url.match(YOUTUBE_URL_REGEX);
  if (!match) {
    return {
      isValid: false,
      error: { type: "url", message: "URL de YouTube no válida" },
    };
  }

  const videoId = match[4];
  if (!videoId) {
    return {
      isValid: false,
      error: {
        type: "invalidVideo",
        message: "No se pudo extraer el ID del video",
      },
    };
  }

  return { isValid: true, videoId };
};

export const Convert = () => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<ValidationError | null>(null);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [history, setHistory] = useLocalStorage<ConversionHistory[]>(
    "conversion-history",
    [],
  );
  const { t, i18n } = useTranslation("global");

  const handleConvert = async () => {
    setError(null);

    const validation = validateYouTubeUrl(url);
    if (!validation.isValid) {
      setError(validation.error!);
      return;
    }

    const { videoId } = validation;
    const apiUrl = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": VITE_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
    };

    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new Error(
          `Error al obtener el video. Código: ${response.status}`,
        );
      }

      const result = await response.json();

      if (!result.link) {
        throw new Error("notFound");
      }

      setResult(result);

      // Add to history
      const historyItem: ConversionHistory = {
        id: Date.now().toString(),
        title: result.title,
        url: url,
        timestamp: Date.now(),
        downloadLink: result.link,
      };
      setHistory((prev) => [historyItem, ...prev].slice(0, 10)); // Keep only last 10 items
    } catch (error: any) {
      console.error("Error en la solicitud:", error.message);

      let errorType: ValidationError["type"] = "api";
      let errorMessage = "Error al procesar la solicitud";

      switch (error.message) {
        case "rateLimit":
          errorType = "rateLimit";
          errorMessage = "Límite de solicitudes alcanzado. Intenta más tarde.";
          break;
        case "notFound":
          errorType = "notFound";
          errorMessage = "Video no encontrado o no disponible.";
          break;
        case "network":
          errorType = "network";
          errorMessage = "Error de conexión. Verifica tu internet.";
          break;
        default:
          errorType = "api";
          errorMessage = "Error del servicio. Intenta más tarde.";
      }

      setError({ type: errorType, message: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative font-poppins min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-4xl px-4 py-8 text-white"
      >
        {result ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20"
          >
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  {result.title}
                </h1>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out transform shadow-lg"
                  onClick={() => window.open(result.link, "_blank")}
                  aria-label={`Descargar ${result.title}`}
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  {t("convert.download")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-full transition duration-300 ease-in-out transform border border-white/30"
                  onClick={() => window.location.reload()}
                  aria-label="Convertir otro video"
                >
                  <RotateCcw className="w-5 h-5" />
                  {t("convert.back")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
              >
                <Music className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="font-bold text-4xl md:text-6xl text-center bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent mb-4">
                {t("convert.title")}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Convierte tus videos favoritos de YouTube a MP3 con la mejor
                calidad
              </p>
            </div>

            <div className="w-full max-w-2xl">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <input
                  placeholder={t("convert.placeholder")}
                  type="text"
                  className="relative w-full h-16 px-6 pr-20 text-gray-800 bg-white/95 backdrop-blur-sm rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition duration-300 ease-in-out shadow-2xl placeholder-gray-500"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleConvert()}
                  aria-label="URL del video de YouTube"
                  aria-invalid={
                    error?.type === "url" || error?.type === "invalidVideo"
                  }
                  aria-describedby={error ? "error-message" : undefined}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-3 transition duration-300 ease-in-out shadow-lg"
                  onClick={handleConvert}
                  disabled={isLoading}
                  aria-label={
                    isLoading ? "Convirtiendo video" : "Convertir video"
                  }
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
            </div>
            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 border-3 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                      <div className="absolute inset-0 w-8 h-8 border-3 border-pink-400 border-t-transparent rounded-full animate-spin animation-delay-150"></div>
                    </div>
                    <span className="text-white font-medium">
                      Convirtiendo video...
                    </span>
                  </div>
                  <div className="mt-3 bg-white/20 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 rounded-2xl max-w-2xl w-full backdrop-blur-xl border ${
                  error.type === "rateLimit"
                    ? "bg-yellow-500/20 border-yellow-400/50"
                    : error.type === "notFound"
                      ? "bg-orange-500/20 border-orange-400/50"
                      : "bg-red-500/20 border-red-400/50"
                }`}
                role="alert"
                aria-live="polite"
                id="error-message"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {error.type === "rateLimit" && (
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-yellow-400" />
                      </div>
                    )}
                    {error.type === "notFound" && (
                      <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-orange-400" />
                      </div>
                    )}
                    {(error.type === "api" || error.type === "network") && (
                      <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center">
                        <TriangleAlert className="w-6 h-6 text-red-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {error.type === "rateLimit"
                        ? "Límite alcanzado"
                        : error.type === "notFound"
                          ? "Video no encontrado"
                          : "Error de conversión"}
                    </h3>
                    <p className="text-gray-300">{error.message}</p>
                  </div>
                </div>
              </motion.div>
            )}
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-300 max-w-2xl">
                {t("convert.description")}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                  <span>Soporta todos los formatos</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                  </svg>
                  <span>Conversión rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                  <span>100% seguro</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

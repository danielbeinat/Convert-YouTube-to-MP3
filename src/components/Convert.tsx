// import { useState } from "react";
// const { VITE_APP_RAPIDAPI_KEY } = import.meta.env;
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";

// interface Result {
//   title: string;
//   link: string;
// }

// export const Convert = () => {
//   const [url, setUrl] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const [result, setResult] = useState<Result | null>(null);
//   const { t, i18n } = useTranslation("global");

//   const handleConvert = async () => {
//     if (url === "" || url.length < 43) {
//       setError(t("convert.error.url"));
//       return;
//     } else {
//       setError("");
//     }

//     let link = url;

//     const urlObj = new URL(link);
//     const searchParams = new URLSearchParams(urlObj.search);
//     const videoId = searchParams.get("v");

//     if (!videoId) {
//       setError(t("convert.error.invalidVideo"));
//       return;
//     }

//     const apiUrl = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;

//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": VITE_APP_RAPIDAPI_KEY,
//         "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(apiUrl, options);

//       if (!response.ok) {
//         throw new Error(
//           `Error al obtener el video. Código: ${response.status}`
//         );
//       }

//       const result = await response.json();
//       setResult(result);
//     } catch (error: any) {
//       console.error("Error en la solicitud:", error.message);
//       setError(t("convert.error.api"));
//     }
//   };

//   return (
//     <div className="relative font-poppins min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="relative z-10 w-full max-w-4xl px-4 py-8 text-white"
//       >
//         {result ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-2xl"
//           >
//             <div className="flex flex-col gap-6 items-center justify-center">
//               <div className="flex items-center gap-3 mb-4">
//                 <i className="fa-solid fa-headphones text-2xl text-purple-400"></i>
//                 <h1 className="text-2xl md:text-3xl font-bold text-center">
//                   {result.title}
//                 </h1>
//               </div>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out transform"
//                   onClick={() => window.open(result.link, "_blank")}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
//                     />
//                   </svg>
//                   {t("convert.download")}
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out transform"
//                   onClick={() => window.location.reload()}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
//                     />
//                   </svg>
//                   {t("convert.back")}
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col items-center gap-8"
//           >
//             <h1 className="font-bold text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
//               {t("convert.title")}
//             </h1>
//             <div className="w-full max-w-2xl">
//               <div className="relative">
//                 <input
//                   placeholder={t("convert.placeholder")}
//                   type="text"
//                   className="w-full h-14 px-5 pr-16 text-gray-700 bg-white bg-opacity-90 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
//                   value={url}
//                   onChange={(e) => setUrl(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && handleConvert()}
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition duration-300 ease-in-out"
//                   onClick={handleConvert}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M14 5l7 7m0 0l-7 7m7-7H3"
//                     />
//                   </svg>
//                 </motion.button>
//               </div>
//             </div>
//             {error && (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-red-400 font-medium text-center"
//               >
//                 {error}
//               </motion.p>
//             )}
//             <p className="text-lg text-center text-gray-300 max-w-2xl">
//               {t("convert.description")}
//             </p>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };
import { useState } from "react";
const { VITE_APP_RAPIDAPI_KEY } = import.meta.env;
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Result {
  title: string;
  link: string;
}

export const Convert = () => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t, i18n } = useTranslation("global");

  const handleConvert = async () => {
    if (url === "" || url.length < 43) {
      setError(t("convert.error.url"));
      return;
    } else {
      setError("");
    }

    let link = url;

    const urlObj = new URL(link);
    const searchParams = new URLSearchParams(urlObj.search);
    const videoId = searchParams.get("v");

    if (!videoId) {
      setError(t("convert.error.invalidVideo"));
      return;
    }

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
          `Error al obtener el video. Código: ${response.status}`
        );
      }

      const result = await response.json();
      setResult(result);
    } catch (error: any) {
      console.error("Error en la solicitud:", error.message);
      setError(t("convert.error.api"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative font-poppins min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900">
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
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-headphones text-2xl text-purple-400"></i>
                <h1 className="text-2xl md:text-3xl font-bold text-center">
                  {result.title}
                </h1>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out transform"
                  onClick={() => window.open(result.link, "_blank")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  {t("convert.download")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out transform"
                  onClick={() => window.location.reload()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
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
            <h1 className="font-bold text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              {t("convert.title")}
            </h1>
            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  placeholder={t("convert.placeholder")}
                  type="text"
                  className="w-full h-14 px-5 pr-16 text-gray-700 bg-white bg-opacity-90 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleConvert()}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition duration-300 ease-in-out"
                  onClick={handleConvert}
                  disabled={isLoading}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
            {isLoading && (
              <motion.div
                className="w-full max-w-2xl bg-gray-700 h-2 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
              </motion.div>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 font-medium text-center"
              >
                {error}
              </motion.p>
            )}
            <p className="text-lg text-center text-gray-300 max-w-2xl">
              {t("convert.description")}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

import React, { useState } from "react";
import background from "../assets/background.png";
const { VITE_APP_RAPIDAPI_KEY } = import.meta.env;

export const Convert = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    if (url === "" || url.length < 43) {
      setError("Please enter a URL");
      return;
    } else {
      setError("");
    }

    let link = url;

    // Usa la URL para extraer el videoId
    const urlObj = new URL(link);
    const searchParams = new URLSearchParams(urlObj.search);
    const videoId = searchParams.get("v");

    if (!videoId) {
      setError("Error al obtener el video. Por favor, verifica la URL.");
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

    try {
      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new Error(
          `Error al obtener el video. Código: ${response.status}`
        );
      }

      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      setError("Error al obtener el video. Por favor, verifica la URL.");
    }
  };

  return (
    <div className="relative font-poppins h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <div className="relative z-10 flex flex-col gap-5 text-white mb-10 text-center">
        {result ? (
          <div className="resultados mt-5">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="title flex items-center gap-2 mb-4">
                <i className="fa-solid fa-headphones"></i>
                <h1 className="text-3xl font-bold text-center">
                  {result.title}
                </h1>
              </div>
              <div className="click flex gap-7">
                <button
                  className="descargar flex items-center gap-2 bg-green-600 text-white py-4 px-4 rounded"
                  onClick={() => window.open(result.link, "_blank")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Descargar
                </button>
                <button
                  className="buttonback flex items-center gap-2 bg-red-600 text-white py-4 px-4 rounded"
                  onClick={() => window.location.reload()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  Volver a convertir
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-bold text-[50px]">
              Convertidor de YouTube a MP3
            </h1>
            <div className="flex items-center justify-center w-auto h-[65px] border-2 border-red-600 rounded-lg">
              <input
                placeholder="Ingresa la URL del video de YouTube"
                type="text"
                className="text-black font-medium h-full w-full rounded-l px-5 outline-none"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                className="w-[200px] h-full bg-red-600 rounded-r"
                onClick={handleConvert}
              >
                Convertir
              </button>
            </div>
            {error && (
              <p className="error text-lg font-medium text-red-600">{error}</p>
            )}
            <p className="text-lg font-medium">
              Introduzca la URL del video de YouTube que desea convertir a MP3.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

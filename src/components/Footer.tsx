import { useTranslation } from "react-i18next";
import { Headphones, Github, Twitter, Heart, Sparkles } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation("global");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative bg-gray-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-xl border border-violet-500/30">
                <Headphones className="w-8 h-8 text-violet-400" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                {t("footer.tagline") || "Convert YouTube to MP3 with ease"}
              </span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
          </div>

          <div className="my-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <span>© {currentYear}</span>
                <span className="text-gray-500">•</span>
                <span>{t("footer.description")}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-gray-300">Always online</span>
              </div>

              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-sm text-gray-400">Made with</span>
                <span className="text-sm font-medium text-violet-400">
                  passion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

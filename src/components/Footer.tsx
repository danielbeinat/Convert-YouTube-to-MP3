import { useTranslation } from "react-i18next";
import { Headphones } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation("global");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 blur-xl" />

      <div className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <Headphones className="w-6 h-6 text-violet-400" />
            </div>
          </div>

          <div className="my-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {t("footer.description")}
            </p>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span>Always online for you</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

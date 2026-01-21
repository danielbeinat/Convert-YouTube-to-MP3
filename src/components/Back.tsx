import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const Back = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-purple-600 before:rounded-full before:blur-md before:opacity-0 group-hover:before:opacity-50 before:transition-opacity before:duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-y-[-2px]" />
        </button>
      )}
    </div>
  );
};

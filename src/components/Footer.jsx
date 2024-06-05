import headphones from "../assets/headphones.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <footer className="flex items-center justify-center mt-20 font-poppins bg-[#131313] py-5 text-white">
      <p className=" text-sm flex items-center justify-center text-center gap-1">
        © 2024 -{" "}
        <img className="w-5 h-5 hidden md:block" src={headphones} alt="" />{" "}
        {t("footer.description")}
        {}
      </p>
    </footer>
  );
};

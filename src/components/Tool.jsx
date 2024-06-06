import { useTranslation } from "react-i18next";

import responsiveImage from "../assets/ToolConvert/responsive.svg";
import downloadImage from "../assets/ToolConvert/download.svg";
import likeImage from "../assets/ToolConvert/like.svg";
import fastImage from "../assets/ToolConvert/fast.svg";

export const Tool = () => {
  const { t, i18n } = useTranslation("global");
  const images = {
    responsive: responsiveImage,
    download: downloadImage,
    like: likeImage,
    fast: fastImage,
  };
  return (
    <>
      <section id="section2" className="font-poppins">
        <div className="flex flex-col gap-6 mt-[70px] mb-[70px] ">
          <h1 className="md:text-2xl text-xl font-bold text-center">
            {t("tool.title")}
          </h1>
          <p className="text-center text-gray-600 text-[15px]  md:px-10 px-5">
            {t("tool.description")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
          {t("card", { returnObjects: true }).map((item) => {
            const itemWithImage = {
              ...item,
              image:
                item.image && item.image.length > 0
                  ? images[item.image.split("/").pop().split(".")[0]]
                  : null,
            };

            return (
              <div
                key={itemWithImage.id}
                className="flex flex-col w-[80%] mx-auto bg-gray-300 md:px-10 px-5 py-10 rounded-lg items-center cursor-pointer hover:scale-105 duration-500 gap-4"
              >
                {itemWithImage.image && (
                  <img
                    className="w-[80px] h-[80px]"
                    src={itemWithImage.image}
                    alt={itemWithImage.title}
                  />
                )}

                <h1 className="text-center font-bold text-xl">
                  {itemWithImage.title}
                </h1>
                <p className="text-center text-gray-600 " id="compatiblep">
                  {itemWithImage.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

// import { useTranslation } from "react-i18next";
// import responsiveImage from "../assets/ToolConvert/responsive.svg";
// import downloadImage from "../assets/ToolConvert/download.svg";
// import likeImage from "../assets/ToolConvert/like.svg";
// import fastImage from "../assets/ToolConvert/fast.svg";

// interface Card {
//   id: number;
//   title: string;
//   description: string;
//   image: string | null;
// }

// export const Tool = () => {
//   const { t } = useTranslation("global");

//   const images: Record<string, string> = {
//     responsive: responsiveImage,
//     download: downloadImage,
//     like: likeImage,
//     fast: fastImage,
//   };

//   const cards: Card[] = t("card", { returnObjects: true });

//   return (
//     <>
//       <section id="section2" className="font-poppins">
//         <div className="flex flex-col gap-6 mt-[70px] mb-[70px] ">
//           <h1 className="md:text-2xl text-xl font-bold text-center">
//             {t("tool.title")}
//           </h1>
//           <p className="text-center text-gray-600 text-[15px]  md:px-10 px-5">
//             {t("tool.description")}
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
//           {cards.map((item: Card) => {
//             const itemWithImage = {
//               ...item,
//               image:
//                 item.image && item.image.length > 0
//                   ? images[item.image.split("/").pop()!.split(".")[0]]
//                   : null,
//             };

//             return (
//               <div
//                 key={itemWithImage.id}
//                 className="flex flex-col w-[80%] mx-auto bg-gray-300 md:px-10 px-5 py-10 rounded-lg items-center cursor-pointer hover:scale-105 duration-500 gap-4"
//               >
//                 {itemWithImage.image && (
//                   <img
//                     className="w-[80px] h-[80px]"
//                     src={itemWithImage.image}
//                     alt={itemWithImage.title}
//                   />
//                 )}

//                 <h1 className="text-center font-bold text-xl">
//                   {itemWithImage.title}
//                 </h1>
//                 <p className="text-center text-gray-600 " id="compatiblep">
//                   {itemWithImage.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// import React from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import { FiSmartphone, FiDownload, FiHeart, FiZap } from "react-icons/fi";

// interface Card {
//   id: number;
//   title: string;
//   description: string;
//   image: string | null;
// }

// export const Tool: React.FC = () => {
//   const { t } = useTranslation("global");

//   const icons: Record<string, React.ReactNode> = {
//     responsive: <FiSmartphone />,
//     download: <FiDownload />,
//     like: <FiHeart />,
//     fast: <FiZap />,
//   };

//   const cards: Card[] = t("card", { returnObjects: true });

//   return (
//     <section
//       id="section2"
//       className="font-poppins bg-gradient-to-br from-gray-900 to-gray-800 py-24 text-white"
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//             {t("tool.title")}
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             {t("tool.description")}
//           </p>
//         </motion.div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {cards.map((item: Card, index: number) => {
//             const icon = item.image
//               ? icons[item.image.split("/").pop()!.split(".")[0]]
//               : null;

//             return (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="group"
//               >
//                 <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col justify-between border border-gray-700 group-hover:border-blue-500">
//                   <div>
//                     <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mb-6 mx-auto transform transition-transform group-hover:scale-110 group-hover:rotate-12">
//                       {React.cloneElement(icon as React.ReactElement, {
//                         className: "w-8 h-8",
//                       })}
//                     </div>
//                     <h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-blue-400 transition-colors">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">
//                       {item.description}
//                     </p>
//                   </div>
//                   {/* <motion.div
//                     className="mt-6 text-blue-400 text-center opacity-0 group-hover:opacity-100 transition-opacity"
//                     initial={{ y: 10 }}
//                     animate={{ y: 0 }}
//                   >
//                     Saber más →
//                   </motion.div> */}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
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

import { ToolConvert } from "../assets/ToolConvert/ToolConvert";
export const Tool = () => {
  return (
    <>
      <section id="section2" className="font-poppins">
        <div className="flex flex-col gap-6 mt-[70px] mb-[70px] ">
          <h1 className="md:text-2xl text-xl font-bold text-center">
            MP3Linker Convertidor DE YOUTUBE
          </h1>
          <p className="text-center text-gray-600 text-[15px]  md:px-10 px-5">
            ¡Bienvenido a nuestro excepcional{" "}
            <strong>convertidor de YouTube a MP3!</strong> ¿Quieres disfrutar de
            tu música favorita en cualquier momento y en cualquier lugar? ¡Estás
            en el lugar correcto! Nuestra plataforma ofrece una experiencia de
            conversión de primera clase que combina eficiencia, facilidad de uso
            y calidad incomparable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
          {ToolConvert.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[80%] mx-auto bg-gray-300 md:px-10 px-5 py-10 rounded-lg items-center cursor-pointer hover:scale-105 duration-500 gap-4"
            >
              <img
                className="w-[80px] h-[80px]"
                src={item.image}
                alt={item.title}
              />

              <h1 className="text-center font-bold text-xl">{item.title}</h1>
              <p className="text-center text-gray-600 " id="compatiblep">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

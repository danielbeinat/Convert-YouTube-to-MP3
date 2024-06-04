import { Navbar } from "./components/Navbar";
import { Convert } from "./components/Convert";
import { Tool } from "./components/Tool";
import { Footer } from "./components/Footer";
import { Back } from "./components/Back";
export const App = () => {
  return (
    <>
      <Navbar />
      <Convert />
      <Tool />
      <Footer />
      <Back />
    </>
  );
};

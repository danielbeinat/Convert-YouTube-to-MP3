import { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Convert } from "./components/Convert";
import { History } from "./components/History";
const Tool = lazy(() =>
  import("./components/Tool").then((module) => ({ default: module.Tool })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer })),
);
const Back = lazy(() =>
  import("./components/Back").then((module) => ({ default: module.Back })),
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
  </div>
);

export const App = () => {
  return (
    <>
      <Navbar />
      <Convert />
      <History />
      <Suspense fallback={<LoadingFallback />}>
        <Tool />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Back />
      </Suspense>
    </>
  );
};

import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { initScrollReveal } from "./lib/scroll-reveal";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);

// Ativa fade-up automático em todas as <section> via IntersectionObserver
initScrollReveal();

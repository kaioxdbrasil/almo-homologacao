import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initScrollReveal } from "./lib/scroll-reveal";

createRoot(document.getElementById("root")!).render(<App />);

// Ativa fade-up automático em todas as <section> via IntersectionObserver
initScrollReveal();

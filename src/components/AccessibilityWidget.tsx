import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Plus, Minus, X } from "lucide-react";

interface A11yState {
  fontSize: number;
  grayscale: boolean;
  highContrast: boolean;
  negativeContrast: boolean;
  whiteBackground: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
}

const defaultState: A11yState = {
  fontSize: 100,
  grayscale: false,
  highContrast: false,
  negativeContrast: false,
  whiteBackground: false,
  underlineLinks: false,
  readableFont: false,
};

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(defaultState);

  const applyStyles = useCallback((newState: A11yState) => {
    const root = document.documentElement;

    // Font size
    root.style.fontSize = `${newState.fontSize}%`;

    // Grayscale
    if (newState.grayscale) {
      root.style.filter = "grayscale(100%)";
    } else if (newState.negativeContrast) {
      root.style.filter = "invert(100%)";
    } else if (newState.highContrast) {
      root.style.filter = "contrast(150%)";
    } else {
      root.style.filter = "";
    }

    // White background
    if (newState.whiteBackground) {
      root.classList.add("a11y-white-bg");
    } else {
      root.classList.remove("a11y-white-bg");
    }

    // Underline links
    if (newState.underlineLinks) {
      root.classList.add("a11y-underline-links");
    } else {
      root.classList.remove("a11y-underline-links");
    }

    // Readable font
    if (newState.readableFont) {
      root.classList.add("a11y-readable-font");
    } else {
      root.classList.remove("a11y-readable-font");
    }
  }, []);

  const update = (partial: Partial<A11yState>) => {
    const newState = { ...state, ...partial };
    setState(newState);
    applyStyles(newState);
  };

  const reset = () => {
    setState(defaultState);
    applyStyles(defaultState);
  };

  const increaseFontSize = () => {
    if (state.fontSize < 150) update({ fontSize: state.fontSize + 10 });
  };

  const decreaseFontSize = () => {
    if (state.fontSize > 70) update({ fontSize: state.fontSize - 10 });
  };

  const toggleOption = (key: keyof A11yState) => {
    if (key === "fontSize") return;
    // For filter-based options, only one can be active
    if (key === "grayscale" || key === "highContrast" || key === "negativeContrast") {
      update({
        grayscale: key === "grayscale" ? !state.grayscale : false,
        highContrast: key === "highContrast" ? !state.highContrast : false,
        negativeContrast: key === "negativeContrast" ? !state.negativeContrast : false,
      });
    } else {
      update({ [key]: !state[key] });
    }
  };

  const options = [
    { label: "Aumentar texto", action: increaseFontSize, icon: <Plus size={16} /> },
    { label: "Diminuir texto", action: decreaseFontSize, icon: <Minus size={16} /> },
    { label: "Escala de cinza", action: () => toggleOption("grayscale"), active: state.grayscale },
    { label: "Alto contraste", action: () => toggleOption("highContrast"), active: state.highContrast },
    { label: "Contraste negativo", action: () => toggleOption("negativeContrast"), active: state.negativeContrast },
    { label: "Fundo branco", action: () => toggleOption("whiteBackground"), active: state.whiteBackground },
    { label: "Sublinhar links", action: () => toggleOption("underlineLinks"), active: state.underlineLinks },
    { label: "Fonte legível", action: () => toggleOption("readableFont"), active: state.readableFont },
  ];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Acessibilidade"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-l-xl bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:w-14 transition-all"
      >
        <Accessibility size={22} />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 z-[60]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "110%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "110%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-4 top-1/2 -translate-y-1/2 w-72 sm:w-80 bg-secondary z-[70] shadow-2xl flex flex-col rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-secondary-foreground/10">
                <div className="flex items-center gap-2">
                  <Accessibility size={18} className="text-secondary-foreground" />
                  <h2 className="font-display text-base font-bold text-secondary-foreground">Acessibilidade</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                  aria-label="Fechar"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Options */}
              <div className="px-3 py-3 space-y-1.5">
                {options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={opt.action}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                      opt.active
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary-foreground text-foreground hover:bg-primary-foreground/80"
                    }`}
                  >
                    {opt.icon && <span>{opt.icon}</span>}
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Reset */}
              <div className="px-3 pb-3 pt-2 border-t border-secondary-foreground/10">
                <button
                  onClick={reset}
                  className="w-full px-3 py-2.5 rounded-xl text-sm font-bold bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
                >
                  Redefinir
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

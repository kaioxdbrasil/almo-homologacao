import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import almoIsotipo from "@/assets/almo-isotipo-white.png";

const navItems = [
  { label: "Empreender", href: "/empreendedor" },
  { label: "Condomínio", href: "/condominio" },
  { label: "Empresa", href: "/empresa" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
];

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a ALMO.";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/80 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={almoIsotipo} alt="ALMO" className="h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <div className="rounded-xl bg-gradient-to-r from-secondary to-primary-foreground p-[2px]">
            <Button
              asChild
              className="rounded-[10px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menu"
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-b border-primary/80 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="rounded-xl bg-gradient-to-r from-secondary to-primary-foreground p-[2px] w-full">
                <Button
                  asChild
                  className="w-full rounded-[10px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

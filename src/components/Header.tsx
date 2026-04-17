import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import almoIsotipo from "@/assets/almo-isotipo-white.png";
import almoLogo from "@/assets/almo-logo.png";

const navItems = [
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Números", href: "/#numeros" },
  { label: "Dúvidas", href: "/#duvidas" },
  { label: "Blog", href: "/blog" },
];

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a ALMO.";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.getElementById(href.replace("/#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const logoSrc = scrolled ? almoIsotipoDark : almoIsotipo;
  const textColorClass = scrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground";
  const mobileMenuBg = scrolled ? "bg-background border-b" : "bg-primary border-b border-primary/80";
  const buttonVariant = scrolled ? "outline" : "default";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" 
          : "bg-primary/95 backdrop-blur-md border-b border-primary/80"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoSrc} alt="ALMO" className="h-10 md:h-12" />
          <span className={`text-sm font-semibold tracking-tight ${scrolled ? "text-foreground/90" : "text-primary-foreground/90"}`}>
            Honest Market
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith("/#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors ${textColorClass}`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors ${textColorClass}`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:block">
          <div className={`rounded-xl p-[2px] ${scrolled ? "bg-gradient-to-r from-primary to-primary/70" : "bg-gradient-to-r from-secondary to-primary-foreground"}`}>
            <Button asChild className={`rounded-[10px] font-bold ${
              scrolled 
                ? "bg-background text-primary hover:bg-background/90" 
                : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            }`}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Seja Licenciado
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button 
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`} 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden ${mobileMenuBg}`}
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item) => (
                item.href.startsWith("/#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className={`rounded-xl p-[2px] w-full ${scrolled ? "bg-gradient-to-r from-primary to-primary/70" : "bg-gradient-to-r from-secondary to-primary-foreground"}`}>
                <Button asChild className={`w-full rounded-[10px] font-bold ${
                  scrolled 
                    ? "bg-background text-primary hover:bg-background/90" 
                    : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                }`}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Seja Licenciado
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

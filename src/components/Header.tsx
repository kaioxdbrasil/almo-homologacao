import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import almoLogoWhite from "@/assets/almo-logo-white.png";
import almoLogo from "@/assets/almo-logo.png";

type NavItem = { label: string; href: string };

type HeaderVariant = "default" | "condominios";

const DEFAULT_NAV: NavItem[] = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Números", href: "/#numeros" },
  { label: "Dúvidas", href: "/#duvidas" },
  { label: "Para condomínios", href: "/condominios" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
];

const CONDOS_NAV: NavItem[] = [
  { label: "Para condomínios", href: "/condominios" },
  { label: "O que é", href: "/condominios#o-que-e" },
  { label: "Como funciona", href: "/condominios#como-funciona" },
  { label: "Dúvidas", href: "/condominios#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
];

const DEFAULT_WHATSAPP =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent("Olá! Gostaria de saber mais sobre a ALMO.");

const CONDOS_WHATSAPP =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em ter uma unidade Almo no meu condomínio/empresa.",
  );

interface HeaderProps {
  variant?: HeaderVariant;
}

export default function Header({ variant = "default" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCondos = variant === "condominios";
  const navItems = isCondos ? CONDOS_NAV : DEFAULT_NAV;
  const whatsappUrl = isCondos ? CONDOS_WHATSAPP : DEFAULT_WHATSAPP;
  const ctaLabel = isCondos ? "Falar com um especialista" : "Seja Licenciado";
  const ctaTarget = isCondos ? "#cta-final" : null;

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.getElementById(href.replace("/#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    if (href.startsWith("/condominios#")) {
      const id = href.replace("/condominios#", "");
      if (location.pathname !== "/condominios") {
        window.location.href = href;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/condominios") return location.pathname === "/condominios";
    return false;
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    if (ctaTarget && location.pathname === "/condominios") {
      e.preventDefault();
      document.getElementById(ctaTarget.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const logoSrc = scrolled ? almoLogo : almoLogoWhite;
  const textColorClass = scrolled
    ? "text-foreground/80 hover:text-[#6FCFEB]"
    : "text-primary-foreground/80 hover:text-[#6FCFEB]";
  const activeColorClass = scrolled
    ? "text-primary font-semibold hover:text-[#6FCFEB]"
    : "text-secondary font-semibold hover:text-[#6FCFEB]";
  const mobileMenuBg = scrolled
    ? "bg-background border-b"
    : "bg-primary border-b border-primary/80";

  const renderNavLink = (item: NavItem, mobile = false) => {
    const active = isActive(item.href);
    const baseClass = mobile
      ? "text-left text-sm font-medium transition-colors"
      : "text-sm font-medium transition-colors";
    const colorClass = active ? activeColorClass : textColorClass;

    if (item.href.startsWith("/#") || item.href.startsWith("/condominios#")) {
      return (
        <button
          key={item.label}
          onClick={() => handleNavClick(item.href)}
          className={`${baseClass} ${colorClass}`}
        >
          {item.label}
        </button>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.href}
        onClick={() => setOpen(false)}
        className={`${baseClass} ${colorClass}`}
      >
        {item.label}
      </Link>
    );
  };

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
          <span
            className={`text-sm font-semibold tracking-tight ${
              scrolled ? "text-foreground/90" : "text-primary-foreground/90"
            }`}
          >
            Honest Market
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => renderNavLink(item))}
        </nav>

        <div className="hidden lg:block">
          <div
            className={`rounded-xl p-[2px] ${
              scrolled
                ? "bg-gradient-to-r from-primary to-primary/70"
                : "bg-gradient-to-r from-secondary to-primary-foreground"
            }`}
          >
            <Button
              asChild
              className={`rounded-[10px] font-bold ${
                scrolled
                  ? "bg-background text-primary hover:bg-background/90"
                  : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              }`}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
              >
                {ctaLabel}
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
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
              {navItems.map((item) => renderNavLink(item, true))}
              <div
                className={`rounded-xl p-[2px] w-full ${
                  scrolled
                    ? "bg-gradient-to-r from-primary to-primary/70"
                    : "bg-gradient-to-r from-secondary to-primary-foreground"
                }`}
              >
                <Button
                  asChild
                  className={`w-full rounded-[10px] font-bold ${
                    scrolled
                      ? "bg-background text-primary hover:bg-background/90"
                      : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  }`}
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCtaClick}
                  >
                    {ctaLabel}
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

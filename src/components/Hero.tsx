import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Briefcase, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-market.jpg";

const ctas = [
  {
    icon: TrendingUp,
    label: "Quero empreender",
    sub: "Renda recorrente",
    to: "/empreendedor",
    primary: true,
  },
  {
    icon: Building2,
    label: "Quero no meu condomínio",
    sub: "Comodidade 24h",
    to: "/condominio",
    primary: false,
  },
  {
    icon: Briefcase,
    label: "Quero na minha empresa",
    sub: "Benefício pro time",
    to: "/empresa",
    primary: false,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-24 pb-12 overflow-hidden bg-primary">
      {/* Brand pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/[0.08] blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* Text + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold text-primary-foreground/90">
                +50 unidades operando no Brasil
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-foreground leading-[1.15] mb-5">
              Leve um mercado autônomo para seu espaço{" "}
              <span className="text-secondary">ou comece um negócio lucrativo</span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Condomínios, empresas ou empreendedores — escolha como você quer usar a ALMO.
            </p>

            {/* 3 CTAs segmentados */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-3 mb-5"
            >
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  to={cta.to}
                  className={`group relative flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl border-2 transition-all ${
                    cta.primary
                      ? "bg-secondary border-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary-foreground/5 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60"
                  }`}
                >
                  <cta.icon size={22} className="mb-2" />
                  <span className="font-display font-bold text-sm leading-tight">
                    {cta.label}
                  </span>
                  <span className={`text-xs mt-1 ${cta.primary ? "opacity-80" : "opacity-70"}`}>
                    {cta.sub}
                  </span>
                  <ArrowRight
                    size={14}
                    className="absolute top-3 right-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              ))}
            </motion.div>

            <p className="text-xs text-primary-foreground/60">
              Resposta em até 1 dia útil • Sem compromisso
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft max-w-md lg:max-w-lg mx-auto aspect-[4/3]">
              <img
                src={heroImg}
                alt="Minimercado autônomo ALMO instalado em condomínio, funcionando 24h"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

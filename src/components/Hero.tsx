import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-market.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero abrir um minimercado autônomo ALMO!";

const trustItems = [
  "Sem funcionário",
  "Funciona 24h",
  "Modelo validado",
];

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-24 pb-12 overflow-hidden bg-primary">
      {/* Subtle brand pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/[0.08] blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Tag de prova */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold text-primary-foreground/90">
                +20 unidades operando na região Norte
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.15] mb-5">
              Leve um{" "}
              <span className="text-secondary">mercado autônomo</span>{" "}
              para seu espaço ou comece um negócio lucrativo
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/80 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Condomínios, empresas ou empreendedores — escolha como você quer usar a ALMO. Sem funcionário, funcionando 24h.
            </p>

            {/* Trust badges */}
            <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start mb-7">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                  <CheckCircle2 className="text-secondary" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <div className="rounded-xl bg-gradient-to-r from-secondary to-primary-foreground p-[2px]">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="px-6 h-12 rounded-[10px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold w-full sm:w-auto"
                >
                  Quero abrir um minimercado
                </Button>
              </div>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-6 h-12 rounded-xl border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Quero um no meu condomínio ou empresa
                </a>
              </Button>
            </motion.div>

            <p className="text-xs text-primary-foreground/60 mt-4">
              Resposta em até 1 dia útil • Sem compromisso
            </p>
          </motion.div>

          {/* Image column */}
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

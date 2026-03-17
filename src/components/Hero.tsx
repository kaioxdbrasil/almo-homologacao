import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-market.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero montar meu minimercado autônomo!";
const CONDO_URL = "https://wa.me/5511999999999?text=Quero levar a ALMO para meu condomínio!";

const rotatingWords = [
  "Sem funcionário",
  "Operação simples",
  "Automatizada",
  "Escalável",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Subtle brand pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/[0.06] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-[1.2] mb-4">
              Seu próprio minimercado, funcionando 24h por dia
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Instale um mercado autônomo em condomínios e gere renda recorrente
              com operação simples e automatizada.
            </p>

            {/* CTAs side by side */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <Button size="lg" asChild className="px-6 h-12">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Quero montar meu minimercado
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-6 h-12">
                <a href={CONDO_URL} target="_blank" rel="noopener noreferrer">
                  Levar para meu condomínio
                </a>
              </Button>
            </motion.div>

            {/* Rotating words below buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-2 justify-center lg:justify-start h-8"
            >
              <span className="text-sm text-muted-foreground">✦</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-base font-semibold text-primary"
                >
                  {rotatingWords[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft max-w-sm lg:max-w-md mx-auto aspect-[4/3]">
              <img
                src={heroImg}
                alt="Minimercado autônomo ALMO com prateleiras inteligentes e produtos diversos"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

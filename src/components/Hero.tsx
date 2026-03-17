import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-market.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero montar meu minimercado autônomo!";
const CONDO_URL = "https://wa.me/5511999999999?text=Quero levar a ALMO para meu condomínio!";

const valuePills = [
  "Sem funcionário fixo",
  "Operação automatizada",
  "Modelo escalável",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Subtle brand pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/[0.06] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-primary leading-[1.15] mb-6">
              Seu próprio minimercado, funcionando 24h por dia
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Instale um mercado autônomo em condomínios e gere renda recorrente
              com operação simples e automatizada.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col gap-4 justify-center lg:justify-start mb-10 max-w-sm mx-auto lg:mx-0"
            >
              <Button size="lg" asChild className="text-base px-8 h-13">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  🚀 Quero montar meu minimercado
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-13">
                <a href={CONDO_URL} target="_blank" rel="noopener noreferrer">
                  🏢 Levar para meu condomínio
                </a>
              </Button>
            </motion.div>

            {/* Value pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start"
            >
              {valuePills.map((text) => (
                <span key={text} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="text-primary shrink-0" size={16} />
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={heroImg}
                alt="Minimercado autônomo ALMO com prateleiras inteligentes e produtos diversos"
                className="w-full object-cover"
                loading="eager"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

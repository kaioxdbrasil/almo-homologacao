import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-market.jpg";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero levar a ALMO para meu espaço!";
const INVEST_URL = "https://wa.me/5511999999999?text=Quero investir na ALMO!";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Tecnologia que transforma{" "}
              <span className="text-gradient">conveniência em faturamento</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Mercados e geladeiras autônomas para condomínios, empresas e empreendedores
              que querem operar com praticidade, escala e inteligência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Quero levar a ALMO para meu espaço
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href={INVEST_URL} target="_blank" rel="noopener noreferrer">
                  Quero investir na ALMO
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroImg}
              alt="Mercado autônomo ALMO com prateleiras inteligentes e produtos diversos"
              className="rounded-2xl shadow-soft w-full"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WA_COMERCIAL, waUrl } from "@/lib/constants";

const WHATSAPP_URL = waUrl(WA_COMERCIAL, "Quero abrir um minimercado autônomo ALMO!");

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  variant?: "honest-market" | "almogo";
}

export default function FinalCTA({ 
  title = "Pronto pra ter seu próprio minimercado?",
  subtitle = "+50 pessoas já estão faturando com o modelo ALMO. Você pode ser a próxima.",
  variant = "honest-market"
}: FinalCTAProps) {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappText = variant === "almogo" 
    ? "Quero instalar uma Almo GO no meu espaço!"
    : "Quero abrir um minimercado autônomo ALMO!";
  const whatsappUrl = waUrl(WA_COMERCIAL, whatsappText);

  return (
    <section
      id="contato"
      className="relative w-full py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#425CC7" }}
    >
      {/* Dot grid pattern — consistente com o hero */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-base font-bold h-12 px-8 bg-white hover:bg-white/90"
              style={{ color: "#425CC7" }}
            >
              Quero começar agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base font-bold h-12 px-8 border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

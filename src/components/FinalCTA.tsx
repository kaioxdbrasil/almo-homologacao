import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero começar minha unidade ALMO!";
const INVEST_URL = "https://wa.me/5511999999999?text=Quero investir na ALMO!";

export default function FinalCTA() {
  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-3xl p-12 md:p-20 text-center text-primary-foreground"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Comece sua unidade agora
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
            Fale com nossa equipe e descubra como a ALMO pode transformar seu espaço em uma fonte de renda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base font-semibold">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={INVEST_URL} target="_blank" rel="noopener noreferrer">
                Quero investir
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

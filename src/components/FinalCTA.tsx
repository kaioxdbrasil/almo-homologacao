import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Quero abrir um minimercado autônomo ALMO!";

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-3xl p-10 md:p-16 text-center text-primary-foreground"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Pronto pra ter seu próprio minimercado?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            +50 pessoas já estão faturando com o modelo ALMO. Você pode ser a próxima.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToForm}
              className="text-base font-bold h-12 px-8"
            >
              Quero começar agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base font-bold h-12 px-8 border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const points = [
  "Modelo de negócio validado e lucrativo",
  "Operação simplificada com suporte completo",
  "Oportunidade de escala em mercado em crescimento",
  "Retorno previsível com renda recorrente",
];

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero falar com um especialista sobre investir na ALMO!";

export default function InvestorSection() {
  return (
    <section id="investidores" className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Quer operar uma unidade ALMO?
            </h2>
            <p className="text-lg opacity-90 mb-10">
              Seja um operador ALMO e faça parte do futuro do varejo autônomo no Brasil.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-10 text-left max-w-md mx-auto"
          >
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle size={20} className="shrink-0 text-secondary" />
                <span className="opacity-90">{p}</span>
              </li>
            ))}
          </motion.ul>

          <Button size="lg" variant="secondary" asChild className="text-base font-semibold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar com especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

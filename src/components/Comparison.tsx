import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Modelo de licenciamento (sem royalty mensal)", almo: true, others: false },
  { feature: "Suporte humano via WhatsApp em até 1 dia útil", almo: true, others: false },
  { feature: "Sistema próprio (app + dashboard + antifraude)", almo: true, others: true },
  { feature: "Treinamento e mentoria contínua incluídos", almo: true, others: false },
  { feature: "Sem taxa percentual sobre faturamento", almo: true, others: false },
  { feature: "Estrutura completa entregue (chave na mão)", almo: true, others: true },
  { feature: "Comunidade ativa de licenciados", almo: true, others: false },
];

export default function Comparison() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Por que escolher ALMO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ALMO vs. outras redes do mercado
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comparativo honesto. Você merece saber exatamente o que está contratando.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1fr_1fr] bg-gradient-hero text-primary-foreground">
            <div className="p-4 md:p-5 font-display font-bold text-sm md:text-base">
              Característica
            </div>
            <div className="p-4 md:p-5 text-center font-display font-bold text-sm md:text-base bg-secondary text-secondary-foreground min-w-[80px] md:min-w-0">
              ALMO
            </div>
            <div className="p-4 md:p-5 text-center font-display font-bold text-sm md:text-base min-w-[80px] md:min-w-0">
              Outras
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1fr_1fr] items-center ${
                i % 2 === 0 ? "bg-background" : "bg-card"
              } ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="p-4 md:p-5 text-sm md:text-base text-foreground">
                {row.feature}
              </div>
              <div className="p-4 md:p-5 flex justify-center min-w-[80px] md:min-w-0">
                {row.almo ? (
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <Check className="text-primary-foreground" size={16} strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                    <X className="text-muted-foreground" size={16} strokeWidth={3} />
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5 flex justify-center min-w-[80px] md:min-w-0">
                {row.others ? (
                  <div className="w-7 h-7 rounded-full bg-muted-foreground/30 flex items-center justify-center">
                    <Check className="text-muted-foreground" size={16} strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-destructive/15 flex items-center justify-center">
                    <X className="text-destructive" size={16} strokeWidth={3} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          * Comparativo baseado em informações públicas das principais redes do segmento (abr/2026).
        </p>
      </div>
    </section>
  );
}

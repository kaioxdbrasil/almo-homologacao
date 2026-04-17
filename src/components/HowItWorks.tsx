import { motion } from "framer-motion";
import { Wrench, Package, ShoppingCart, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Wrench,
    title: "Instalamos a estrutura",
    desc: "Levamos tudo até o local: equipamentos, layout e configuração.",
  },
  {
    icon: Package,
    title: "O espaço é abastecido",
    desc: "Produtos selecionados pro perfil do seu público, prontos pra venda.",
  },
  {
    icon: ShoppingCart,
    title: "Pessoas compram sozinhas",
    desc: "Pelo app ou terminal, 24h por dia, sem fila e sem funcionário.",
  },
  {
    icon: TrendingUp,
    title: "O responsável lucra",
    desc: "Faturamento entra direto, com dashboard pra acompanhar tudo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Simples assim
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona a ALMO
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            4 passos do contrato à operação. Sem complicação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                <step.icon className="text-primary-foreground" size={28} />
              </div>
              <div className="font-display text-sm font-bold text-primary mb-2">
                Passo {i + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

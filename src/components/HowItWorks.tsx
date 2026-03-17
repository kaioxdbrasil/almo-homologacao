import { motion } from "framer-motion";
import { Wrench, Package, ShoppingCart, BarChart3 } from "lucide-react";

const steps = [
  { icon: Wrench, title: "Instalação da estrutura", desc: "Montamos e configuramos tudo no local ideal para seu público." },
  { icon: Package, title: "Abastecimento e configuração", desc: "Produtos selecionados e sistema de pagamento automatizado." },
  { icon: ShoppingCart, title: "Compra automatizada", desc: "Usuários compram com autonomia, 24h por dia, sem filas." },
  { icon: BarChart3, title: "Gestão inteligente", desc: "Acompanhe vendas, estoque e performance em tempo real." },
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Da instalação à operação, simplificamos cada etapa para você.
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-primary-foreground" size={28} />
              </div>
              <div className="font-display text-sm font-bold text-primary mb-2">
                Etapa {i + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

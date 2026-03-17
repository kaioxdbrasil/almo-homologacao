import { motion } from "framer-motion";
import { Cpu, Bot, Palette, Expand, Settings, Puzzle } from "lucide-react";

const items = [
  { icon: Cpu, title: "Tecnologia embarcada", desc: "Hardware e software integrados para máxima eficiência." },
  { icon: Bot, title: "Operação autônoma", desc: "Funciona 24h sem necessidade de funcionários." },
  { icon: Palette, title: "Marca moderna", desc: "Design pensado para ambientes premium." },
  { icon: Expand, title: "Estrutura escalável", desc: "Cresça com facilidade, de 1 a 100 unidades." },
  { icon: Settings, title: "Gestão simplificada", desc: "Dashboard completo para acompanhar tudo." },
  { icon: Puzzle, title: "Ecossistema de soluções", desc: "Produtos que se complementam e crescem juntos." },
];

export default function Differentials() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diferenciais da ALMO
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O que nos torna a escolha certa para conveniência autônoma.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

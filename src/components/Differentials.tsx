import { motion } from "framer-motion";
import { Headphones, Cpu, ShieldCheck, Package, Camera, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Headphones,
    title: "Suporte completo",
    desc: "Time ALMO ao seu lado do contrato à operação. Você nunca fica sozinho.",
  },
  {
    icon: Cpu,
    title: "Sistema próprio",
    desc: "App de pagamento, controle de estoque e dashboard de vendas em um só lugar.",
  },
  {
    icon: ShieldCheck,
    title: "Modelo validado",
    desc: "+50 unidades operando. Processos testados, métricas comprovadas.",
  },
  {
    icon: Package,
    title: "Estrutura pronta",
    desc: "Equipamentos, layout e fornecedores entregues. Você foca em operar.",
  },
  {
    icon: Camera,
    title: "Segurança real",
    desc: "Câmeras, sensores e antifraude. Índice de perda controlado e dentro do esperado.",
  },
  {
    icon: GraduationCap,
    title: "Treinamento incluso",
    desc: "Aprenda a operar, abastecer e escalar. Materiais e mentorias em vídeo.",
  },
];

export default function Differentials() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Por que ALMO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Você não monta um negócio sozinho
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo o que você precisa pra começar e crescer — entregue pela ALMO.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-card transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

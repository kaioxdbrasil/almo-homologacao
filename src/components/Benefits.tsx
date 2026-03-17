import { motion } from "framer-motion";
import { Building2, Briefcase, TrendingUp, Home, Clock, Users, DollarSign, Layers, Rocket } from "lucide-react";

const audiences = [
  {
    title: "Para condomínios",
    icon: Building2,
    benefits: [
      { icon: Home, text: "Mais comodidade para moradores" },
      { icon: TrendingUp, text: "Valorização do empreendimento" },
      { icon: Layers, text: "Solução moderna e diferenciada" },
    ],
  },
  {
    title: "Para empresas",
    icon: Briefcase,
    benefits: [
      { icon: Users, text: "Conveniência interna para colaboradores" },
      { icon: Clock, text: "Atendimento 24h sem custos fixos" },
      { icon: Rocket, text: "Melhor experiência no ambiente de trabalho" },
    ],
  },
  {
    title: "Para investidores",
    icon: DollarSign,
    benefits: [
      { icon: DollarSign, text: "Renda recorrente com baixo esforço" },
      { icon: Layers, text: "Operação enxuta e escalável" },
      { icon: TrendingUp, text: "Modelo validado e pronto para crescer" },
    ],
  },
];

export default function Benefits() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefícios para cada público
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma solução, múltiplas vantagens — adaptada ao seu perfil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((aud, i) => (
            <motion.div
              key={aud.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl shadow-card p-8 hover:shadow-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <aud.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">{aud.title}</h3>
              <ul className="space-y-4">
                {aud.benefits.map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <b.icon className="text-primary" size={16} />
                    </div>
                    <span className="text-muted-foreground text-sm">{b.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Building2, Briefcase, ArrowRight } from "lucide-react";

const journeys = [
  {
    icon: TrendingUp,
    title: "Empreender",
    headline: "Ganhar dinheiro com um negócio validado",
    desc: "Modelo testado, suporte completo e faturamento de R$ 8k a R$ 19k por unidade.",
    cta: "Quero faturar com a ALMO",
    to: "/empreendedor",
    accent: "from-secondary to-secondary/70",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Condomínio",
    headline: "Valorizar e oferecer comodidade",
    desc: "Mercado 24h sem custo nenhum pro condomínio. Mais qualidade de vida pros moradores.",
    cta: "Quero no meu condomínio",
    to: "/condominio",
    accent: "from-primary to-primary/70",
    highlight: false,
  },
  {
    icon: Briefcase,
    title: "Empresa",
    headline: "Benefício real pros colaboradores",
    desc: "Conveniência durante o expediente. Mais produtividade, menos saídas, time mais feliz.",
    cta: "Quero na minha empresa",
    to: "/empresa",
    accent: "from-primary to-primary/70",
    highlight: false,
  },
];

export default function JourneySplit() {
  return (
    <section id="onde-aplicar" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Escolha sua jornada
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onde você quer aplicar a ALMO?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada perfil tem uma jornada própria. Escolha a sua e veja o caminho completo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journeys.map((j, i) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={j.to}
                className={`group relative block bg-background rounded-2xl p-7 border-2 shadow-card transition-all hover:shadow-soft hover:-translate-y-1 h-full ${
                  j.highlight ? "border-secondary" : "border-border hover:border-primary/40"
                }`}
              >
                {j.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Mais procurado
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${j.accent} flex items-center justify-center mb-5`}
                >
                  <j.icon className="text-primary-foreground" size={22} />
                </div>

                <div className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
                  {j.title}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 leading-tight">
                  {j.headline}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {j.desc}
                </p>

                <div
                  className={`inline-flex items-center gap-2 font-bold text-sm ${
                    j.highlight ? "text-secondary-foreground bg-secondary px-4 h-10 rounded-lg" : "text-primary"
                  } group-hover:gap-3 transition-all`}
                >
                  {j.cta}
                  <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

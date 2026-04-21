import { motion } from "framer-motion";
import { Building2, Briefcase, Hotel } from "lucide-react";

const segments = [
  {
    icon: Building2,
    title: "Condomínios residenciais",
    desc: "O modelo mais validado. Alto fluxo, ticket recorrente, moradores fiéis.",
    badge: "Mais popular",
    features: ["16+ unidades em moradores", "Faturamento previsível", "Suporte 24h"],
    highlight: true,
  },
  {
    icon: Briefcase,
    title: "Empresas e indústrias",
    desc: "Funcionários compram durante o expediente. Contrato direto com o RH.",
    badge: "Crescimento",
    features: ["100+ funcionários", "Convênio empresarial", "Cardápio customizado"],
    highlight: false,
  },
  {
    icon: Hotel,
    title: "Hotéis e pousadas",
    desc: "Conveniência 24h pros hóspedes. Substitui o frigobar tradicional.",
    badge: "Novo",
    features: ["30+ quartos", "Check-out rápido", "Margem premium"],
    highlight: false,
  },
];

export default function Segments() {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Onde você pode operar
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            3 modelos de implantação. Você escolhe.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A ALMO opera em diferentes segmentos. Comece por um e escale conforme cresce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-background rounded-2xl p-7 border-2 shadow-card transition-all hover:shadow-soft ${
                s.highlight ? "border-primary" : "border-border"
              }`}
            >
              {s.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {s.badge}
                </div>
              )}
              {!s.highlight && (
                <div className="absolute -top-3 right-5 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {s.badge}
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <s.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {s.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className={`w-full h-11 rounded-lg font-bold text-sm transition-colors ${
                  s.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card text-foreground border-2 border-border hover:border-primary/50"
                }`}
              >
                Quero esse modelo
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

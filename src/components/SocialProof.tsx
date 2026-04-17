import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "+50", label: "Unidades em operação" },
  { value: "+10 mil", label: "Compras realizadas" },
  { value: "98%", label: "Satisfação dos moradores" },
  { value: "+15", label: "Cidades atendidas" },
];

const testimonials = [
  {
    quote:
      "Em 4 meses já recuperei boa parte do investimento. O suporte da ALMO é o que faz a diferença — sempre que precisei, atenderam rápido.",
    author: "Carlos M.",
    role: "Licenciado ALMO • Manaus/AM",
    since: "Unidade aberta há 8 meses",
    color: "#425CC7",
  },
  {
    quote:
      "Operação muito mais simples do que eu imaginava. Faço a reposição 2x por semana e o sistema cuida do resto. Já estou planejando a 2ª unidade.",
    author: "Ana L.",
    role: "Licenciada ALMO • Belém/PA",
    since: "Unidade aberta há 11 meses",
    color: "#6FCFEB",
  },
  {
    quote:
      "Os moradores adoraram. Como síndico, foi a melhor decisão — zero custo pro condomínio e muita conveniência pros nossos moradores.",
    author: "Rafael S.",
    role: "Síndico • Porto Velho/RO",
    since: "Unidade aberta há 6 meses",
    color: "#22C55E",
  },
];

function getInitials(name: string) {
  return name
    .replace(/\./g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default function SocialProof() {
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
            Quem já está com a ALMO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados reais de quem já abriu
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl shadow-card p-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl shadow-card p-7 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="text-secondary fill-secondary" size={16} />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-white text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {getInitials(t.author)}
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-foreground leading-tight">
                    {t.author}
                  </div>
                  <div className="text-muted-foreground text-sm leading-tight">{t.role}</div>
                  <div className="text-xs text-primary font-semibold mt-0.5">{t.since}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import carlosPhoto from "@/assets/testimonial-carlos.jpg";
import anaPhoto from "@/assets/testimonial-ana.jpg";
import rafaelPhoto from "@/assets/testimonial-rafael.jpg";

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
    role: "Licenciado ALMO • Rio Branco/AC",
    since: "Unidade aberta há 8 meses",
    photo: carlosPhoto,
  },
  {
    quote:
      "Operação muito mais simples do que eu imaginava. Faço a reposição 2x por semana e o sistema cuida do resto. Já estou planejando a 2ª unidade.",
    author: "Ana L.",
    role: "Licenciada ALMO • Rio Branco/AC",
    since: "Unidade aberta há 11 meses",
    photo: anaPhoto,
  },
];

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
                <img
                  src={t.photo}
                  alt={`Foto de ${t.author}`}
                  loading="lazy"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover shrink-0 border-2 border-border"
                />
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

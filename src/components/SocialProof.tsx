import { motion } from "framer-motion";
import { Star } from "lucide-react";
import marcosPhoto from "@/assets/testimonial-marcos.jpg";
import carlaPhoto from "@/assets/testimonial-carla.jpg";

const stats = [
  { value: "+50", label: "Unidades em operação" },
  { value: "+10 mil", label: "Compras realizadas" },
  { value: "98%", label: "Satisfação dos moradores" },
  { value: "+15", label: "Cidades atendidas" },
];

const testimonials = [
  {
    quote:
      "Eu queria um negócio que não estivesse presente o tempo todo, conhecemos a ideia e fizemos negócio, um network muito bom, a ALMO Honest Market vem nos trazendo bons retornos, sempre gostei da área e foi um ótimo negócio.",
    author: "Marcos Santos",
    role: "Licenciado ALMO • Rio Branco/AC",
    since: "",
    photo: marcosPhoto,
  },
  {
    quote:
      "Fico extremamente feliz por fazer parte de uma empresa que oferece suporte aos licenciados. Por exemplo, nossos clientes possuem gostos específicos, eles nos orientam na escolha dos produtos que mais agradarão aos residentes. É ótimo contar com esse apoio para atender às preferências de nossos clientes.",
    author: "Carla Flores",
    role: "Licenciada ALMO • Rio Branco/AC",
    since: "",
    photo: carlaPhoto,
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

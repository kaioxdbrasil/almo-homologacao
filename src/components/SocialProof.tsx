import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Unidades instaladas" },
  { value: "10.000+", label: "Compras realizadas" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "15+", label: "Cidades atendidas" },
];

const testimonials = [
  { quote: "A ALMO transformou a experiência do nosso condomínio. Moradores adoram a conveniência.", author: "Carlos M.", role: "Síndico, SP" },
  { quote: "Operação simples, retorno rápido. O melhor investimento que fiz nos últimos anos.", author: "Ana L.", role: "Investidora" },
  { quote: "Nossos colaboradores agora têm acesso a lanches e bebidas 24h. Incrível praticidade.", author: "Rafael S.", role: "Diretor de RH" },
];

export default function SocialProof() {
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
            Resultados que falam por si
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl shadow-card p-8 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl shadow-card p-8"
            >
              <p className="text-foreground mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-display font-bold text-foreground">{t.author}</div>
                <div className="text-muted-foreground text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

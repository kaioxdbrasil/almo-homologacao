import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Refrigerator } from "lucide-react";
import honestImg from "@/assets/honest-market.jpg";
import fridgeImg from "@/assets/smart-fridge.jpg";

const solutions = [
  {
    title: "ALMO Honest Market",
    description: "Minimercado autônomo para condomínios. Abastecido, monitorado e pronto para funcionar 24h sem funcionários.",
    icon: Store,
    image: honestImg,
    link: "/almo-honest-market",
    alt: "ALMO Honest Market - minimercado autônomo para condomínios",
  },
  {
    title: "ALMO GO",
    description: "Geladeiras autônomas para empresas e ambientes de alto fluxo. Conveniência inteligente onde seus clientes estão.",
    icon: Refrigerator,
    image: fridgeImg,
    link: "/almo-go",
    alt: "ALMO GO - geladeira autônoma para empresas",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções ALMO
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dois formatos, uma filosofia: conveniência autônoma com tecnologia e inteligência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-hover transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <sol.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{sol.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{sol.description}</p>
                <Button asChild variant="outline">
                  <Link to={sol.link}>Saiba mais</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

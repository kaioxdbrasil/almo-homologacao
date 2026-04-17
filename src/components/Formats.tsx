import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Store, Refrigerator, Check, ArrowRight } from "lucide-react";
import honestImg from "@/assets/honest-market.jpg";
import fridgeImg from "@/assets/smart-fridge.jpg";

const formats = [
  {
    icon: Store,
    name: "ALMO Honest Market",
    tagline: "Minimercado autônomo completo",
    image: honestImg,
    ideal: "Ideal para condomínios e empreendedores",
    revenue: "Maior faturamento",
    features: [
      "Estrutura completa com prateleiras",
      "Funciona 24h sem funcionário",
      "Mix amplo de produtos",
      "Câmeras + sistema antifraude",
    ],
    link: "/almo-honest-market",
    highlight: true,
  },
  {
    icon: Refrigerator,
    name: "ALMO GO",
    tagline: "Geladeira inteligente",
    image: fridgeImg,
    ideal: "Ideal para empresas e espaços menores",
    revenue: "Modelo mais compacto",
    features: [
      "Ocupa pouco espaço",
      "Instalação rápida",
      "Foco em bebidas e snacks",
      "Pagamento por aproximação",
    ],
    link: "/almo-go",
    highlight: false,
  },
];

export default function Formats() {
  return (
    <section id="formatos" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Os formatos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o formato ideal para seu espaço
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dois formatos, uma filosofia: conveniência autônoma com tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {formats.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-card border-2 transition-all hover:shadow-soft ${
                f.highlight ? "border-primary" : "border-border"
              }`}
            >
              {f.highlight && (
                <div className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Mais popular
                </div>
              )}

              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={f.image}
                  alt={`${f.name} - ${f.tagline}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                      {f.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{f.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {f.ideal}
                  </span>
                  <span className="text-xs font-semibold bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full">
                    {f.revenue}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="text-primary mt-0.5 shrink-0" size={16} strokeWidth={3} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to={f.link}
                  className={`inline-flex items-center gap-2 font-bold text-sm transition-all hover:gap-3 ${
                    f.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  Ver detalhes do {f.name}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

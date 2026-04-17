import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Percent, Clock } from "lucide-react";

// ⚠️ PLACEHOLDERS — substituir pelos números reais da ALMO
const numbers = [
  {
    icon: Wallet,
    label: "Investimento médio",
    value: "R$ [XX] mil",
    sub: "Estrutura completa entregue",
  },
  {
    icon: TrendingUp,
    label: "Faturamento mensal",
    value: "R$ 8k a R$ 19k",
    sub: "Por unidade em operação",
  },
  {
    icon: Percent,
    label: "Margem estimada",
    value: "[XX]%",
    sub: "Após custos operacionais",
  },
  {
    icon: Clock,
    label: "Payback médio",
    value: "[XX] meses",
    sub: "Tempo de retorno do investimento",
  },
];

export default function BusinessNumbers() {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="numeros" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Os números do negócio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparência total. Sem promessas vazias.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que esperar de uma unidade ALMO em operação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {numbers.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <n.icon className="text-primary-foreground" size={20} />
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                {n.label}
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient mb-2">
                {n.value}
              </div>
              <div className="text-sm text-muted-foreground">{n.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" onClick={scrollToForm} className="font-bold h-12 px-8">
            Quero esses números pra mim
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            * Valores médios. Resultado pode variar conforme localização e perfil do condomínio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

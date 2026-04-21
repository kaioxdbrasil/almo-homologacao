import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Percent, Clock } from "lucide-react";

type NumberItem = {
  icon: typeof TrendingUp;
  label: string;
  prefix?: string;
  suffix?: string;
  // Para count-up: valor numérico final. Se null, exibe `staticValue` direto.
  target: number | null;
  staticValue?: string;
  formatter?: (n: number) => string;
  sub: string;
  highlight?: boolean;
};

const numbers: NumberItem[] = [
  {
    icon: TrendingUp,
    label: "Faturamento anual",
    prefix: "Até R$ ",
    suffix: " mil*",
    target: 180,
    sub: "Por unidade em operação",
    highlight: true,
  },
  {
    icon: Wallet,
    label: "Investimento inicial",
    prefix: "A partir de R$ ",
    suffix: " mil*",
    target: 32,
    sub: "Estrutura completa entregue",
  },
  {
    icon: Percent,
    label: "Margem estimada",
    prefix: "",
    suffix: "%*",
    target: 35,
    formatter: (n) => `25-${Math.round(n)}`,
    sub: "Após custos operacionais",
  },
  {
    icon: Clock,
    label: "Unidades no Brasil",
    prefix: "+",
    suffix: " unidades*",
    target: 16,
    sub: "Na região Norte e expandindo",
  },
];

function CountUp({
  to,
  formatter,
  duration = 1.6,
}: {
  to: number;
  formatter?: (n: number) => string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) =>
    formatter ? formatter(latest) : Math.round(latest).toString(),
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, duration, mv]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>{formatter ? formatter(0) : "0"}</span>;
}

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 items-stretch">
          {numbers.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={
                n.highlight
                  ? "relative bg-card border-2 border-[#425CC7] rounded-2xl p-7 shadow-lg ring-4 ring-[#425CC7]/10 lg:scale-105 lg:-my-1 transition-shadow"
                  : "bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
              }
            >
              {n.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#425CC7] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                  Destaque
                </span>
              )}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  n.highlight ? "bg-[#425CC7]" : "bg-gradient-primary"
                }`}
              >
                <n.icon className="text-primary-foreground" size={20} />
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                {n.label}
              </div>
              <div
                className={`font-display font-bold text-gradient mb-2 ${
                  n.highlight ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                }`}
              >
                {n.prefix}
                {n.target !== null ? (
                  <CountUp to={n.target} formatter={n.formatter} />
                ) : (
                  n.staticValue
                )}
                {n.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{n.sub}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          * Valores baseados em médias regionais de unidades ALMO em operação na região Norte.
          Resultados podem variar conforme localização, perfil do condomínio, mix de produtos e
          gestão da operação.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" onClick={scrollToForm} className="font-bold h-12 px-8">
            Quero esses números pra mim
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

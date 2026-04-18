import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Briefcase,
  Wrench,
  KeyRound,
  ShoppingBag,
  Cpu,
  LineChart,
  TrendingUp,
  Repeat,
  Package,
  PiggyBank,
} from "lucide-react";
import modeloImg from "@/assets/almo-modelo-negocio.jpg";

const audiences = [
  {
    icon: Building2,
    title: "Para o condomínio",
    items: ["Sem investimento", "Sem operação", "Valorização do imóvel"],
  },
  {
    icon: Users,
    title: "Para o morador",
    items: ["Compra 24h", "Sem filas", "Tudo no condomínio"],
  },
  {
    icon: Briefcase,
    title: "Para o empreendedor",
    items: ["Baixo custo inicial", "Operação simples", "Receita recorrente"],
  },
];

const steps = [
  { icon: Wrench, title: "Instalamos o mercado" },
  { icon: KeyRound, title: "Liberamos o acesso" },
  { icon: ShoppingBag, title: "Moradores compram" },
  { icon: Cpu, title: "Sistema controla tudo" },
  { icon: LineChart, title: "Você acompanha os resultados" },
];

const monetization = [
  { icon: Repeat, text: "Venda recorrente dentro do condomínio" },
  { icon: TrendingUp, text: "Alto giro de produtos essenciais" },
  { icon: Package, text: "Margem otimizada por mix inteligente" },
  { icon: PiggyBank, text: "Baixo custo operacional" },
];

const badges = [
  { label: "Acesso 24h", className: "top-6 left-6" },
  { label: "Sem funcionários", className: "top-6 right-6" },
  { label: "Compra rápida", className: "bottom-6 left-6" },
];

export default function BusinessModel() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-[#425CC7] uppercase mb-3">
            Modelo de negócio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como funciona o modelo Almo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simples de operar, automatizado e com receita recorrente.
          </p>
        </motion.div>

        {/* Top: image + audiences */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">
          {/* Image with badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={modeloImg}
                alt="Moradora utilizando minimercado autônomo Almo dentro de condomínio"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover aspect-square"
              />
              {/* gradient overlay para legibilidade dos badges */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"
              />

              {badges.map((b, i) => (
                <motion.span
                  key={b.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`absolute ${b.className} bg-white/95 backdrop-blur-sm text-[#425CC7] text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg ring-1 ring-black/5`}
                >
                  {b.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Audiences */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 grid gap-4"
          >
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#425CC7]/10 flex items-center justify-center">
                    <a.icon className="text-[#425CC7]" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {a.title}
                    </h3>
                    <ul className="grid sm:grid-cols-3 gap-x-4 gap-y-1.5">
                      {a.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6FCFEB] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Flow: Como funciona na prática */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Como funciona na prática
            </h3>
            <p className="text-muted-foreground">
              Cinco etapas. Do equipamento instalado à receita rodando.
            </p>
          </div>

          <div className="relative">
            {/* linha conectora desktop */}
            <div
              aria-hidden
              className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#425CC7] via-[#6FCFEB] to-[#425CC7] opacity-30"
            />

            <ol className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative">
              {steps.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#425CC7] to-[#6FCFEB] flex items-center justify-center shadow-lg mb-4">
                    <s.icon className="text-white" size={26} />
                  </div>
                  <div className="font-display text-xs font-bold text-[#425CC7] mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm font-semibold text-foreground max-w-[160px]">
                    {s.title}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Monetization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-[#425CC7] text-white p-8 md:p-12 overflow-hidden"
        >
          {/* dot pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-3">
                De onde vem o lucro?
              </h3>
              <p className="text-white/80 text-base md:text-lg">
                Modelo já validado, com receita recorrente e operação enxuta.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {monetization.map((m, i) => (
                <motion.li
                  key={m.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3.5"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[#6FCFEB] text-[#0F1B4D] flex items-center justify-center">
                    <m.icon size={18} />
                  </div>
                  <span className="text-sm md:text-base font-medium leading-snug pt-1.5">
                    {m.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Wrench, Package, ShoppingCart, BarChart3, ArrowRight, ArrowDown } from "lucide-react";

// Gradiente por etapa: azul → ciano → verde, criando sensação de jornada
const steps = [
  {
    icon: Wrench,
    title: "Instalação da estrutura",
    desc: "Montamos e configuramos tudo no local ideal para seu público.",
    bg: "bg-[#425CC7]",
  },
  {
    icon: Package,
    title: "Abastecimento e configuração",
    desc: "Produtos selecionados e sistema de pagamento automatizado.",
    bg: "bg-gradient-to-br from-[#425CC7] to-[#6FCFEB]",
  },
  {
    icon: ShoppingCart,
    title: "Compra automatizada",
    desc: "Usuários compram com autonomia, 24h por dia, sem filas.",
    bg: "bg-[#6FCFEB]",
  },
  {
    icon: BarChart3,
    title: "Gestão inteligente",
    desc: "Acompanhe vendas, estoque e performance em tempo real.",
    bg: "bg-gradient-to-br from-[#6FCFEB] to-[#22C55E]",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Da instalação à operação, simplificamos cada etapa para você.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha conectora horizontal (desktop) — fica atrás dos ícones */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-8 left-0 right-0 mx-auto"
            style={{ width: "75%" }}
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-[#425CC7] via-[#6FCFEB] to-[#22C55E] opacity-40" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center flex flex-col items-center"
                >
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-6 shadow-md`}
                  >
                    <step.icon className="text-white" size={28} />
                  </div>

                  {/* Seta conectora — para a direita no desktop, para baixo no mobile */}
                  {!isLast && (
                    <>
                      <ArrowRight
                        aria-hidden
                        className="hidden lg:block absolute top-4 -right-3 text-[#6FCFEB] z-20"
                        size={24}
                        strokeWidth={2.5}
                      />
                      <ArrowDown
                        aria-hidden
                        className="lg:hidden text-[#6FCFEB] mb-4 sm:hidden"
                        size={24}
                        strokeWidth={2.5}
                      />
                    </>
                  )}

                  <div className="font-display text-sm font-bold text-primary mb-2">
                    Etapa {i + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

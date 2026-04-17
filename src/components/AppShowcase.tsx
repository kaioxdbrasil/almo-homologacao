import { motion } from "framer-motion";
import { Smartphone, BarChart3, Lock, Bell, Package, CreditCard } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "App de compras pro morador",
    desc: "Pagamento por aproximação, sem cadastro complicado.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de vendas em tempo real",
    desc: "Acompanhe faturamento, produtos mais vendidos e horários de pico.",
  },
  {
    icon: Package,
    title: "Controle de estoque inteligente",
    desc: "Alertas automáticos de reposição. Nunca falte produto na gôndola.",
  },
  {
    icon: Lock,
    title: "Antifraude integrado",
    desc: "Sensores, câmeras e bloqueio remoto. Perda controlada.",
  },
  {
    icon: Bell,
    title: "Notificações automáticas",
    desc: "Avisos pro morador sobre promoções e novidades.",
  },
  {
    icon: CreditCard,
    title: "Múltiplas formas de pagamento",
    desc: "PIX, cartão, carteira digital. Tudo conciliado automaticamente.",
  },
];

export default function AppShowcase() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Tecnologia ALMO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sistema completo. Operação na palma da mão.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Você não compra só uma estrutura — leva uma plataforma tecnológica que sustenta o negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left features */}
          <div className="space-y-5 lg:order-1">
            {features.slice(0, 3).map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-background rounded-2xl border border-border shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <f.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-2 flex justify-center"
          >
            <div className="relative w-[280px] h-[560px] rounded-[44px] bg-gradient-hero p-3 shadow-soft">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary rounded-b-2xl z-10" />
              <div className="w-full h-full rounded-[36px] bg-background overflow-hidden flex flex-col">
                {/* Mock app header */}
                <div className="bg-gradient-primary p-5 pt-12 text-primary-foreground">
                  <p className="text-xs opacity-80">Olá, morador 👋</p>
                  <p className="font-display font-bold text-lg">Mercado ALMO</p>
                </div>
                {/* Mock dashboard cards */}
                <div className="p-4 space-y-3 flex-1">
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <p className="text-xs text-muted-foreground">Faturamento hoje</p>
                    <p className="font-display font-bold text-2xl text-gradient">R$ 487</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-card rounded-xl p-3 border border-border">
                      <p className="text-[10px] text-muted-foreground">Vendas</p>
                      <p className="font-bold text-foreground">23</p>
                    </div>
                    <div className="bg-card rounded-xl p-3 border border-border">
                      <p className="text-[10px] text-muted-foreground">Ticket médio</p>
                      <p className="font-bold text-foreground">R$ 21</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <p className="text-xs text-muted-foreground mb-2">Top produtos</p>
                    <div className="space-y-1.5 text-xs text-foreground">
                      <div className="flex justify-between"><span>🥤 Refri 350ml</span><span className="font-bold">12</span></div>
                      <div className="flex justify-between"><span>🍫 Chocolate</span><span className="font-bold">9</span></div>
                      <div className="flex justify-between"><span>🍪 Biscoito</span><span className="font-bold">7</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right features */}
          <div className="space-y-5 lg:order-3">
            {features.slice(3, 6).map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-background rounded-2xl border border-border shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <f.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  DoorOpen,
  ShoppingBasket,
  CreditCard,
  LogOut,
  ClipboardCheck,
} from "lucide-react";
import modeloImg from "@/assets/almo-modelo-negocio.jpg";

const steps = [
  {
    icon: DoorOpen,
    title: "Entre no mercado",
    desc: "Acesso pelo app ou liberação no local.",
  },
  {
    icon: ShoppingBasket,
    title: "Escolha os produtos",
    desc: "Pegue o que quiser nas prateleiras ou geladeiras.",
  },
  {
    icon: CreditCard,
    title: "Pague direto no sistema",
    desc: "Pagamento rápido e automatizado.",
  },
  {
    icon: LogOut,
    title: "Saia normalmente",
    desc: "Sem fila, sem espera.",
  },
  {
    icon: ClipboardCheck,
    title: "Tudo é registrado automaticamente",
    desc: "Controle total de compras e acessos.",
  },
];

const badges = [
  { label: "Aberto 24h", className: "top-6 left-6" },
  { label: "Autoatendimento", className: "top-6 right-6" },
  { label: "Sem filas", className: "bottom-6 left-6" },
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
            Como funciona
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como funciona o mercadinho da Almo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simples, rápido e sem complicação.
          </p>
        </motion.div>

        {/* 2 colunas: imagem + passos */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          {/* Imagem com badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={modeloImg}
                alt="Pessoa usando o mercadinho autônomo Almo dentro de condomínio"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover aspect-square"
              />
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

          {/* Passos */}
          <motion.ol
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 space-y-4"
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 group"
              >
                {/* Número grande */}
                <div className="shrink-0 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#425CC7] to-[#6FCFEB] flex items-center justify-center shadow-md">
                    <span className="font-display text-xl font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <s.icon className="text-[#425CC7] shrink-0" size={18} />
                    <h3 className="font-display text-base md:text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-snug">
                    {s.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

      </div>
    </section>
  );
}

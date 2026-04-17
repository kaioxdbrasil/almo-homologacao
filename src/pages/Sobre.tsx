import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Cpu, Eye, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const pilares = [
  {
    icon: Rocket,
    title: "Nossa história",
    desc: "Nascemos com uma missão simples: transformar espaços em pontos de venda autônomos. O que começou como um experimento em condomínios virou rede com +50 unidades em operação pelo Brasil.",
  },
  {
    icon: Cpu,
    title: "Nossa tecnologia",
    desc: "Construímos sistema próprio: app de pagamento, dashboard de gestão, controle de estoque, câmeras integradas e antifraude. Tudo desenhado pra funcionar 24h sem intervenção humana.",
  },
  {
    icon: Eye,
    title: "Nossa visão",
    desc: "Acreditamos que conveniência não precisa de funcionário, fila ou horário comercial. A ALMO existe pra colocar isso na palma da mão de quem opera e de quem compra.",
  },
];

export default function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre a ALMO | Tecnologia para mercado autônomo</title>
        <meta
          name="description"
          content="Conheça a ALMO: história, tecnologia própria e visão. Transformamos espaços em pontos de venda autônomos com +50 unidades em operação."
        />
        <link rel="canonical" href="/sobre" />
      </Helmet>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.04] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/[0.08] blur-3xl" />
          </div>
          <div className="container mx-auto relative z-10 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold tracking-widest text-secondary uppercase mb-4">
                Sobre a ALMO
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
                Tecnologia que transforma espaços em pontos de venda
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Somos uma empresa de tecnologia focada em conveniência autônoma. Operamos no Brasil desde 2021.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PILARES */}
        <section className="section-padding">
          <div className="container mx-auto max-w-4xl space-y-8">
            {pilares.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-card"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <p.icon className="text-primary-foreground" size={26} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">{p.title}</h2>
                    <p className="text-muted-foreground text-base leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10"
            >
              ALMO em números
            </motion.h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { v: "+50", l: "Unidades operando" },
                { v: "+15", l: "Cidades atendidas" },
                { v: "+10mil", l: "Compras realizadas" },
                { v: "98%", l: "Satisfação dos usuários" },
              ].map((n) => (
                <div key={n.l} className="bg-background border border-border rounded-2xl shadow-card p-6 text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{n.v}</div>
                  <div className="text-muted-foreground text-sm">{n.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

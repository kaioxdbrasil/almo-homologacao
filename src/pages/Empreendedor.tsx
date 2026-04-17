import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Wallet,
  Percent,
  Clock,
  CheckCircle2,
  ArrowRight,
  Store,
  Refrigerator,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import SocialProof from "@/components/SocialProof";
import Comparison from "@/components/Comparison";
import Objections from "@/components/Objections";
import heroImg from "@/assets/hero-market.jpg";

const numbers = [
  { icon: Wallet, label: "Investimento médio", value: "A partir de R$ 30k", sub: "Estrutura completa entregue" },
  { icon: TrendingUp, label: "Faturamento mensal", value: "R$ 8k a R$ 19k", sub: "Por unidade em operação" },
  { icon: Percent, label: "Margem estimada", value: "30% a 45%", sub: "Após custos operacionais" },
  { icon: Clock, label: "Payback médio", value: "12 a 18 meses", sub: "Tempo de retorno do investimento" },
];

const beneficios = [
  "Modelo validado com +50 unidades operando",
  "Faturamento recorrente sem precisar largar seu emprego",
  "Suporte completo do contrato à operação",
  "Sistema próprio (app + dashboard + antifraude)",
  "Sem royalty mensal nem taxa sobre faturamento",
  "Possibilidade de escalar para múltiplas unidades",
];

export default function Empreendedor() {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Empreender com a ALMO | Fature R$ 8k a R$ 19k por mês</title>
        <meta
          name="description"
          content="Abra um minimercado autônomo ALMO. Modelo validado, suporte completo, faturamento de R$ 8k a R$ 19k por unidade. Comece a empreender hoje."
        />
        <link rel="canonical" href="/empreendedor" />
      </Helmet>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-24 pb-12 overflow-hidden bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.04] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-secondary/[0.08] blur-3xl" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-semibold text-secondary">
                    Para empreendedores
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.15] mb-5">
                  Comece um negócio que fatura{" "}
                  <span className="text-secondary">R$ 8 mil a R$ 19 mil</span> por mês
                </h1>

                <p className="text-base md:text-lg text-primary-foreground/80 mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Modelo validado, suporte completo e tecnologia própria. Você opera, a ALMO escala com você.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5">
                  <div className="rounded-xl bg-gradient-to-r from-secondary to-primary-foreground p-[2px]">
                    <Button
                      size="lg"
                      onClick={scrollToForm}
                      className="px-6 h-12 rounded-[10px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold w-full sm:w-auto"
                    >
                      Quero começar agora
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="px-6 h-12 rounded-xl border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold"
                  >
                    <a
                      href="https://wa.me/5511999999999?text=Quero abrir um minimercado autônomo ALMO!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar com especialista
                    </a>
                  </Button>
                </div>

                <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start">
                  <li className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="text-secondary" size={18} /> Modelo validado
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="text-secondary" size={18} /> Suporte completo
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="text-secondary" size={18} /> Sem royalty
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-soft max-w-md lg:max-w-lg mx-auto aspect-[4/3]">
                  <img
                    src={heroImg}
                    alt="Minimercado autônomo ALMO em operação"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NÚMEROS DO NEGÓCIO */}
        <section className="section-padding">
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

            <p className="text-xs text-muted-foreground text-center">
              * Valores médios. Resultado pode variar conforme localização e perfil do espaço.
            </p>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por que empreender com a ALMO
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {beneficios.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-background rounded-xl p-5 shadow-sm"
                >
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={22} />
                  <span className="text-foreground font-medium">{b}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button size="lg" onClick={scrollToForm} className="font-bold h-12 px-8">
                Quero esses números pra mim
              </Button>
            </div>
          </div>
        </section>

        {/* FORMATOS RECOMENDADOS */}
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qual formato é ideal pra você
              </h2>
              <p className="text-muted-foreground text-lg">
                A ALMO tem 2 modelos. Empreendedores costumam começar pelo Honest Market.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/almo-honest-market"
                className="group bg-card border-2 border-primary rounded-2xl p-7 shadow-card hover:shadow-soft transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Store className="text-primary" size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                      Recomendado
                    </span>
                    <h3 className="font-display text-xl font-bold">ALMO Honest Market</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Minimercado autônomo completo. Maior faturamento, ideal pra começar a operar.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  Ver detalhes <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                to="/almo-go"
                className="group bg-card border-2 border-border rounded-2xl p-7 shadow-card hover:shadow-soft hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Refrigerator className="text-primary" size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Complementar
                    </span>
                    <h3 className="font-display text-xl font-bold">ALMO GO</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Geladeira inteligente. Modelo compacto pra escalar em empresas e espaços menores.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  Ver detalhes <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <SocialProof />
        <Comparison />
        <Objections />

        <LeadForm
          defaultPerfil="empreendedor"
          title="Quero faturar com a ALMO"
          subtitle="Em até 1 dia útil, um especialista entra em contato e te apresenta o modelo completo."
          bullets={[
            "Apresentação completa do modelo de negócio",
            "Projeção financeira da sua região",
            "Tira-dúvidas individual sobre investimento e payback",
          ]}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

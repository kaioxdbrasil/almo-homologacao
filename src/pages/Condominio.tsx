import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Heart,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import Objections from "@/components/Objections";
import honestImg from "@/assets/honest-market.jpg";

const beneficios = [
  {
    icon: Heart,
    title: "Comodidade pros moradores",
    desc: "Mercado 24h dentro do condomínio. Compra rápida sem sair de casa.",
  },
  {
    icon: Sparkles,
    title: "Valorização do imóvel",
    desc: "Mais um diferencial que torna seu condomínio mais atrativo no mercado.",
  },
  {
    icon: ShieldCheck,
    title: "Custo zero pro condomínio",
    desc: "A ALMO ou um licenciado opera. O condomínio só cede o espaço.",
  },
  {
    icon: Clock,
    title: "Funciona 24h, todos os dias",
    desc: "Sem horário comercial, sem funcionário, sem fila.",
  },
  {
    icon: Users,
    title: "Aprovação dos moradores",
    desc: "98% de satisfação em pesquisas. Adoção rápida nas primeiras semanas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança garantida",
    desc: "Câmeras 24h, sensores e sistema antifraude. Operação monitorada.",
  },
];

const passos = [
  "Conversamos com o síndico e o conselho",
  "Apresentação do modelo em assembleia (se necessário)",
  "Avaliação do espaço e adaptação do projeto",
  "Instalação em até 30 dias",
];

export default function Condominio() {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>ALMO para Condomínios | Mercado autônomo 24h sem custo</title>
        <meta
          name="description"
          content="Leve um minimercado autônomo pro seu condomínio. Custo zero, comodidade 24h pros moradores, valorização do imóvel. Saiba como instalar."
        />
        <link rel="canonical" href="/condominio" />
      </Helmet>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-24 pb-12 overflow-hidden bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.04] blur-3xl" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-5">
                  <Building2 size={14} className="text-secondary" />
                  <span className="text-xs font-semibold text-primary-foreground/90">
                    Para condomínios
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.15] mb-5">
                  Mercado autônomo 24h{" "}
                  <span className="text-secondary">sem custo nenhum</span> pro condomínio
                </h1>

                <p className="text-base md:text-lg text-primary-foreground/80 mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Comodidade pros moradores, valorização do imóvel, zero custo pra administração. A ALMO instala e opera.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <div className="rounded-xl bg-gradient-to-r from-secondary to-primary-foreground p-[2px]">
                    <Button
                      size="lg"
                      onClick={scrollToForm}
                      className="px-6 h-12 rounded-[10px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold w-full sm:w-auto"
                    >
                      Quero levar pro meu condomínio
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="px-6 h-12 rounded-xl border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold"
                  >
                    <a
                      href="https://wa.me/5511999999999?text=Sou síndico/morador e quero saber sobre a ALMO no meu condomínio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-soft max-w-md lg:max-w-lg mx-auto aspect-[4/3]">
                  <img
                    src={honestImg}
                    alt="Minimercado ALMO instalado em condomínio"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
                O que o condomínio ganha
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Vantagens reais pro condomínio e pros moradores
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {beneficios.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <b.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO IMPLANTAMOS */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Como funciona a implantação
              </h2>
              <p className="text-muted-foreground text-lg">Processo simples, sem dor de cabeça pro síndico.</p>
            </motion.div>
            <div className="space-y-3">
              {passos.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 bg-background rounded-xl p-5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-foreground font-medium">{p}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button size="lg" onClick={scrollToForm} className="font-bold h-12 px-8">
                Quero levar pro meu condomínio
              </Button>
            </div>
          </div>
        </section>

        <Objections />

        <LeadForm
          defaultPerfil="condominio"
          title="Leve a ALMO pro seu condomínio"
          subtitle="Sou síndico, morador ou conselheiro e quero entender como instalar."
          bullets={[
            "Apresentação para o conselho ou assembleia",
            "Avaliação do espaço sem compromisso",
            "Material institucional pra apresentar aos moradores",
          ]}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

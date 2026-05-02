import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Differentials from "@/components/Differentials";
import BusinessNumbers from "@/components/BusinessNumbers";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Boxes,
  Radio,
  BrainCircuit,
  Briefcase,
  Wallet,
  Bot,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const scrollToForm = () => {
  document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
};

const forWho = [
  { icon: Briefcase, text: "Quer empreender com um modelo já validado" },
  { icon: Wallet, text: "Busca uma renda extra escalável" },
  { icon: Bot, text: "Quer um negócio automatizado, sem funcionários" },
  { icon: Building2, text: "Tem acesso ou contato com condomínios" },
];

const tech = [
  { icon: Smartphone, title: "Pagamento via app e PIX", desc: "Compra rápida, sem caixa, sem fila." },
  { icon: Boxes, title: "Controle de estoque", desc: "Reposição inteligente e alertas em tempo real." },
  { icon: Radio, title: "Monitoramento remoto", desc: "Câmeras e sensores 24h conectados ao painel." },
  { icon: BrainCircuit, title: "Sistema próprio ALMO", desc: "Tecnologia desenvolvida pra performar." },
];

export default function LP() {
  return (
    <>
      <SEOMeta
        title="Tenha seu minimercado autônomo ALMO"
        description="Modelo de negócio validado: minimercados autônomos em condomínios. Sem funcionários, 24h, com tecnologia e suporte ALMO. Vagas limitadas por região."
        image="https://almobrasil.com.br/og-image.jpg"
      />
      <Header />
      <main>
        {/* Faixa de urgência */}
        <div className="bg-[#6FCFEB] text-[#0B1B5C] text-center text-xs md:text-sm font-semibold py-2 px-4 mt-20">
          <span className="inline-flex items-center gap-2">
            <Sparkles size={14} />
            Vagas limitadas por região — atendemos 1 licenciado por bairro
          </span>
        </div>

        {/* 1. HERO */}
        <Hero />

        {/* 2. PROVA SOCIAL / ESCALA */}
        <TrustBar />

        {/* 3. COMO FUNCIONA */}
        <HowItWorks />

        {/* 4. DIFERENCIAIS */}
        <Differentials />

        {/* CTA intermediário */}
        <section className="py-10 bg-card">
          <div className="container mx-auto text-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="font-bold h-12 px-8 bg-[#425CC7] hover:bg-[#425CC7]/90"
            >
              Quero ser um parceiro ALMO
            </Button>
          </div>
        </section>

        {/* 5. GANHO / OPORTUNIDADE */}
        <BusinessNumbers />

        {/* 6. PARA QUEM É */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#425CC7] uppercase mb-3">
                Pra quem é
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Esse modelo é pra você que…
              </h2>
              <p className="text-muted-foreground text-lg">
                Se você se identifica com pelo menos um destes, vamos conversar.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {forWho.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 bg-background border border-border rounded-2xl p-5 hover:border-[#425CC7]/40 hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <item.icon className="text-primary-foreground" size={22} />
                  </div>
                  <p className="font-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PARA CONDOMÍNIOS */}
        <section className="section-padding bg-[#425CC7] text-white relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Você é síndico ou morador?
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto">
              Leve um minimercado autônomo pro seu condomínio — sem custo de instalação e sem dor de cabeça pra administração.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                "Sem custo de instalação",
                "Mais comodidade pros moradores",
                "Valorização do condomínio",
              ].map((b) => (
                <div
                  key={b}
                  className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-3 text-left"
                >
                  <CheckCircle2 className="text-[#6FCFEB] shrink-0" size={20} />
                  <span className="text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="font-bold h-12 px-8 bg-white text-[#425CC7] hover:bg-white/90"
            >
              <Link to="/condominios">Quero no meu condomínio</Link>
            </Button>
          </div>
        </section>

        {/* 8. TECNOLOGIA */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#425CC7] uppercase mb-3">
                Tecnologia
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                A tecnologia que roda o negócio
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Sistema próprio, integrado e pensado pra operação autônoma do dia 1.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tech.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-[#425CC7]/40 hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <t.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {t.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prova social adicional */}
        <SocialProof />

        {/* 9. QUEBRA DE OBJEÇÕES */}
        <FAQ />

        {/* 10. CTA FINAL + FORMULÁRIO */}
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

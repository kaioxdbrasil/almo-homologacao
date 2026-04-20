import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HowItWorks from "@/components/HowItWorks";
import BusinessNumbers from "@/components/BusinessNumbers";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle, Store, Users, ShieldCheck, Clock } from "lucide-react";
import honestImg from "@/assets/honest-market.jpg";
import heroImg from "@/assets/hero-market.jpg";

const benefits = [
  "Funciona 24 horas, 7 dias por semana",
  "Sem necessidade de funcionários",
  "Produtos frescos e variados",
  "Sistema de pagamento automatizado",
  "Monitoramento remoto em tempo real",
  "Abastecimento gerenciado pela ALMO",
];

const features = [
  { icon: Store, title: "Instalação completa", desc: "Montamos e entregamos tudo pronto para operar no seu condomínio." },
  { icon: Users, title: "Para moradores", desc: "Comodidade sem sair de casa, com produtos do dia a dia." },
  { icon: ShieldCheck, title: "Segurança", desc: "Câmeras e sistema antifraude integrados." },
  { icon: Clock, title: "24/7", desc: "Disponível a qualquer hora, sem filas e sem espera." },
];

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero saber mais sobre o ALMO Honest Market!";

export default function HonestMarket() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-block bg-primary/10 text-primary font-display font-semibold text-sm px-4 py-2 rounded-full mb-6">
                  ALMO Honest Market
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  O minimercado autônomo ideal para{" "}
                  <span className="text-gradient">condomínios</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Um espaço completo de conveniência dentro do seu condomínio, funcionando 24h sem funcionários.
                  Praticidade para moradores, valorização para o empreendimento.
                </p>
                <Button size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Quero no meu condomínio
                  </a>
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <img src={honestImg} alt="ALMO Honest Market - minimercado autônomo em condomínio" className="rounded-2xl shadow-soft w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              Como funciona o Honest Market
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <f.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        {/* Benefits */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img src={heroImg} alt="Interior de um mercado autônomo ALMO" className="rounded-2xl shadow-soft" loading="lazy" />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Vantagens do Honest Market
                </h2>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <CheckCircle className="text-primary shrink-0" size={20} />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <BusinessNumbers />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

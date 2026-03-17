import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle, Refrigerator, Zap, BarChart3, MapPin } from "lucide-react";
import fridgeImg from "@/assets/smart-fridge.jpg";

const benefits = [
  "Formato compacto, ideal para espaços reduzidos",
  "Produtos refrigerados e à temperatura ambiente",
  "Pagamento por app ou cartão",
  "Reposição e manutenção incluídas",
  "Dashboard de gestão em tempo real",
  "Sem custos fixos com pessoal",
];

const features = [
  { icon: Refrigerator, title: "Design compacto", desc: "Geladeira inteligente que cabe em qualquer ambiente corporativo." },
  { icon: Zap, title: "Plug & Play", desc: "Instalação rápida, sem obras ou reformas complexas." },
  { icon: BarChart3, title: "Dados em tempo real", desc: "Acompanhe vendas e estoque pelo dashboard." },
  { icon: MapPin, title: "Onde instalar", desc: "Escritórios, coworkings, academias, hospitais e mais." },
];

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero saber mais sobre o ALMO GO!";

export default function AlmoGo() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-block bg-secondary/20 text-primary font-display font-semibold text-sm px-4 py-2 rounded-full mb-6">
                  ALMO GO
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Geladeiras autônomas para{" "}
                  <span className="text-gradient">empresas</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Conveniência inteligente onde seus colaboradores e clientes estão.
                  Compacta, eficiente e sem necessidade de operador.
                </p>
                <Button size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Quero na minha empresa
                  </a>
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <img src={fridgeImg} alt="ALMO GO - geladeira autônoma inteligente para empresas" className="rounded-2xl shadow-soft w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              Por que escolher o ALMO GO
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
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

        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Benefícios do ALMO GO
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-soft">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-muted-foreground text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

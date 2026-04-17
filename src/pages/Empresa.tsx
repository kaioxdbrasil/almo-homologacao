import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Clock, TrendingUp, Heart, Coffee, Users, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import Objections from "@/components/Objections";
import fridgeImg from "@/assets/smart-fridge.jpg";

const beneficios = [
  {
    icon: Clock,
    title: "Mais tempo produtivo",
    desc: "Time não precisa sair pra comprar lanche. Compras em segundos no próprio escritório.",
  },
  {
    icon: Heart,
    title: "Benefício real pros colaboradores",
    desc: "Conveniência valorizada no dia a dia. Diferencial de retenção de talentos.",
  },
  {
    icon: Coffee,
    title: "Cardápio personalizado",
    desc: "Selecionamos os produtos com base no perfil e preferências do seu time.",
  },
  {
    icon: TrendingUp,
    title: "Operação inteligente",
    desc: "Reposição automatizada, controle de estoque e dashboard pro RH/facilities.",
  },
  {
    icon: Users,
    title: "Adoção rápida",
    desc: "Pagamento por aproximação, app ou crédito pré-pago. Funciona pra todo perfil.",
  },
  {
    icon: Briefcase,
    title: "Custo controlado",
    desc: "Modelos de comodato, subsídio parcial ou autosserviço. Você escolhe.",
  },
];

export default function Empresa() {
  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>ALMO para Empresas | Conveniência autônoma pro seu time</title>
        <meta
          name="description"
          content="Geladeira inteligente ALMO GO para escritórios e indústrias. Benefício real pros colaboradores, mais produtividade e cardápio personalizado."
        />
        <link rel="canonical" href="/empresa" />
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
                  <Briefcase size={14} className="text-secondary" />
                  <span className="text-xs font-semibold text-primary-foreground/90">
                    Para empresas
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.15] mb-5">
                  Conveniência inteligente que{" "}
                  <span className="text-secondary">o seu time vai amar</span>
                </h1>

                <p className="text-base md:text-lg text-primary-foreground/80 mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Geladeira autônoma ALMO GO no escritório. Mais produtividade, benefício real, zero burocracia pra empresa.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <div className="rounded-xl bg-gradient-to-r from-secondary to-primary-foreground p-[2px]">
                    <Button
                      size="lg"
                      onClick={scrollToForm}
                      className="px-6 h-12 rounded-[10px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold w-full sm:w-auto"
                    >
                      Quero na minha empresa
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="px-6 h-12 rounded-xl border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold"
                  >
                    <a
                      href="https://wa.me/5511999999999?text=Quero a ALMO GO na minha empresa"
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
                    src={fridgeImg}
                    alt="ALMO GO geladeira autônoma para empresas"
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
                Vantagens pra sua empresa
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mais que um snack — um benefício corporativo
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

        {/* MODELOS */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                3 modelos de contratação
              </h2>
              <p className="text-muted-foreground text-lg">Você escolhe como quer oferecer pro time.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Comodato", desc: "ALMO instala e opera. Empresa cede o espaço. Custo zero." },
                { title: "Subsídio", desc: "Empresa cobre parte do valor dos produtos como benefício." },
                { title: "Autosserviço", desc: "Funcionário paga pelo app ou cartão. Empresa só hospeda." },
              ].map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background rounded-xl p-6 shadow-sm border border-border text-center"
                >
                  <div className="font-display text-lg font-bold text-primary mb-2">{m.title}</div>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" onClick={scrollToForm} className="font-bold h-12 px-8">
                Quero conversar sobre o melhor modelo
              </Button>
            </div>
          </div>
        </section>

        <Objections />

        <LeadForm
          defaultPerfil="empresa"
          title="Leve a ALMO pra sua empresa"
          subtitle="Vamos avaliar o melhor formato pro seu time e seu espaço."
          bullets={[
            "Avaliação do escritório sem compromisso",
            "Proposta personalizada por nº de colaboradores",
            "Cardápio adaptado ao perfil do seu time",
          ]}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

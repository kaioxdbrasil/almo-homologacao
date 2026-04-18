import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Target,
  Flag,
  ImageIcon,
  Lightbulb,
  Sparkles,
  TrendingUp,
  Handshake,
  Flame,
  Wand2,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CondoWhatsAppButton from "@/components/CondoWhatsAppButton";

const HERO_BG = "#0f1b4d";
const BRAND_BLUE = "#425CC7";
const CYAN = "#6FCFEB";
const SECTION_GRAY = "#f4f4f2";
const SOFT_GRAY = "#f8f8f8";
const DEEP_BLUE = "#1a2a6c";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center border border-border"
      style={{ aspectRatio: "4 / 3" }}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <ImageIcon size={48} strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide uppercase px-4 text-center">
          {label}
        </span>
      </div>
    </div>
  );
}

const timeline = [
  {
    year: "2022",
    title: "Fundação em Rio Branco/AC",
    text: "A Almo nasce com a primeira unidade instalada em condomínio residencial no Acre.",
  },
  {
    year: "2023",
    title: "Modelo validado",
    text: "Processos, tecnologia e operação testados e refinados. Primeiros licenciados parceiros.",
  },
  {
    year: "2024",
    title: "Expansão para a região Norte",
    text: "A rede cresce para novos estados com licenciados locais.",
  },
  {
    year: "2025",
    title: "Manual e tecnologia próprios",
    text: "Lançamento do Manual do Licenciado e sistema de gestão exclusivo da rede Almo.",
  },
  {
    year: "Hoje",
    title: "Crescendo com propósito",
    text: "16 unidades operando, expandindo para novas cidades.",
    isNow: true,
  },
];

const purposeCards = [
  {
    icon: Heart,
    title: "Propósito",
    text: "Facilitar a vida das pessoas e transformar o varejo em uma experiência prática, segura e acessível.",
  },
  {
    icon: Target,
    title: "Missão",
    text: "Entregar autonomia e eficiência a clientes e licenciados por meio de tecnologia acessível, design funcional e suporte contínuo.",
  },
  {
    icon: Flag,
    title: "Visão",
    text: "Ser reconhecida como a marca que revolucionou o varejo inteligente na região Norte e, quem sabe, no Brasil inteiro.",
  },
];

const values = [
  { icon: Wand2, title: "Praticidade", text: "Soluções simples que funcionam de verdade." },
  { icon: Lightbulb, title: "Inovação", text: "Tecnologia para melhorar a experiência." },
  { icon: Sparkles, title: "Experiência", text: "O cliente no centro de tudo." },
  { icon: TrendingUp, title: "Crescimento", text: "Evolução constante e sustentável." },
  { icon: Handshake, title: "Confiança", text: "Relações transparentes e duradouras." },
  { icon: Flame, title: "Paixão", text: "Entusiasmo em cada detalhe do que fazemos." },
];

const team = [
  { label: "Adicionar foto e nome real" },
  { label: "Adicionar foto e nome real" },
  { label: "Adicionar foto e nome real" },
];

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Raleway, sans-serif" }}>
      <Helmet>
        <title>Sobre a Almo | Honest Market | Nossa história, propósito e valores</title>
        <meta
          name="description"
          content="Conheça a história da Almo Honest Market: nascemos no Acre em 2022 e crescemos para o Brasil levando minimercados autônomos para condomínios e empresas."
        />
        <link rel="canonical" href="/sobre" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* SEÇÃO 1 — HERO */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32" style={{ backgroundColor: HERO_BG }}>
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeUp}
              className="max-w-3xl mx-auto text-center"
            >
              <span
                className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6"
                style={{ color: CYAN }}
              >
                Quem somos
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                Nascemos no Acre.
                <br />
                Crescemos para o Brasil.
              </h1>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed font-medium max-w-2xl mx-auto">
                A Almo surgiu em 2022, em Rio Branco, com uma convicção simples: o varejo
                precisava chegar onde as pessoas estão, não o contrário.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO 2 — HISTÓRIA */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div {...fadeUp} className="order-2 md:order-1 space-y-6">
                <p
                  className="text-base text-foreground/80"
                  style={{ lineHeight: 1.8 }}
                >
                  Em 2022, a equipe Almo observou algo que parecia óbvio mas era ignorado pelo
                  mercado: os condomínios da região Norte cresciam rápido, mas o comércio de
                  proximidade não acompanhava. Moradores precisavam sair de casa para comprar
                  um produto simples — às vezes de madrugada, às vezes debaixo de chuva.
                </p>
                <p
                  className="text-base text-foreground/80"
                  style={{ lineHeight: 1.8 }}
                >
                  A resposta foi criar um minimercado que funcionasse sem atendente, sem
                  horário e sem custo para o condomínio. Um mercado baseado na confiança — o
                  honest market. A ideia era simples. Executar bem era o desafio. Três anos
                  depois, a Almo opera em múltiplas unidades, tem tecnologia própria, manual
                  de operação e uma rede de licenciados que cresce todo mês.
                </p>
                <p
                  className="text-base text-foreground/80"
                  style={{ lineHeight: 1.8 }}
                >
                  O nome não é à toa. Almo significa "aquele que nutre, que alimenta". É o
                  que queremos ser para os nossos moradores, para os nossos licenciados e
                  para a região Norte — um negócio que alimenta pessoas, famílias e sonhos.
                </p>
              </motion.div>
              <motion.div {...fadeUp} className="order-1 md:order-2">
                <ImagePlaceholder label="Foto da equipe ou unidade Almo" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — LINHA DO TEMPO */}
        <section className="py-20 md:py-28" style={{ backgroundColor: SECTION_GRAY }}>
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-5xl font-black text-center text-foreground mb-16"
            >
              Nossa trajetória
            </motion.h2>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden max-w-md mx-auto relative">
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: BRAND_BLUE, opacity: 0.3 }}
              />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative pl-16"
                  >
                    <div
                      className={`absolute left-3 top-1 w-7 h-7 rounded-full border-4 border-white shadow-md ${
                        item.isNow ? "animate-pulse" : ""
                      }`}
                      style={{ backgroundColor: BRAND_BLUE }}
                    />
                    <div
                      className="text-2xl font-black mb-1"
                      style={{ color: BRAND_BLUE }}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block">
              <div className="relative">
                <div
                  className="absolute left-0 right-0 top-3 h-0.5"
                  style={{ backgroundColor: BRAND_BLUE, opacity: 0.3 }}
                />
                <div className="grid grid-cols-5 gap-4">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      {...fadeUp}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative pt-12 text-center"
                    >
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-0 w-7 h-7 rounded-full border-4 border-[#f4f4f2] shadow-md ${
                          item.isNow ? "animate-pulse" : ""
                        }`}
                        style={{ backgroundColor: BRAND_BLUE }}
                      />
                      <div
                        className="text-3xl font-black mb-2"
                        style={{ color: BRAND_BLUE }}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2 px-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed px-2">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — PROPÓSITO, MISSÃO E VISÃO */}
        <section className="py-20 md:py-28" style={{ backgroundColor: DEEP_BLUE }}>
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-5xl font-black text-center text-white mb-16"
            >
              O que nos move
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {purposeCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${BRAND_BLUE}15` }}
                    >
                      <Icon size={28} style={{ color: BRAND_BLUE }} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-3">{card.title}</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">{card.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO 5 — VALORES */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-5xl font-black text-center text-foreground mb-16"
            >
              Nossos valores
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="rounded-xl p-5 md:p-7"
                    style={{ backgroundColor: SOFT_GRAY }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${BRAND_BLUE}15` }}
                    >
                      <Icon size={20} style={{ color: BRAND_BLUE }} strokeWidth={2} />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{v.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 — EQUIPE */}
        <section className="py-20 md:py-28" style={{ backgroundColor: SECTION_GRAY }}>
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Por trás da Almo
              </h2>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Somos de cá, conhecemos as pessoas daqui e acreditamos que o Norte merece
                soluções tão boas quanto as de qualquer grande centro.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm"
                >
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center border border-border"
                    style={{ backgroundColor: SOFT_GRAY }}
                  >
                    <User size={40} className="text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {member.label}
                  </p>
                  <div className="h-5 w-32 mx-auto rounded bg-muted mb-2" />
                  <div className="h-3 w-24 mx-auto rounded bg-muted/60" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 7 — CTA FINAL */}
        <section
          className="relative py-20 md:py-24 overflow-hidden"
          style={{ backgroundColor: BRAND_BLUE }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="container mx-auto px-4 relative">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
                Faz parte da nossa história desde o início.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 font-bold rounded-xl px-8 h-12"
                  style={{ color: BRAND_BLUE }}
                >
                  <Link to="/#quero-comecar">Quero ser licenciado Almo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white font-bold rounded-xl px-8 h-12"
                >
                  <Link to="/condominios">Quero uma Almo no meu espaço</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <CondoWhatsAppButton />
    </div>
  );
}

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Building, Check, ChevronDown, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CondoWhatsAppButton from "@/components/CondoWhatsAppButton";
import CondoLeadForm from "@/components/CondoLeadForm";
import heroCondoImg from "@/assets/hero-condo.jpg";
import interiorMercadoImg from "@/assets/interior-mercado.jpg";
import { WA_COMERCIAL, waUrl } from "@/lib/constants";

const HERO_BG = "#0f1b4d";
const BRAND_BLUE = "#425CC7";
const CYAN = "#6FCFEB";
const SOFT_GRAY = "#f8f8f8";
const SECTION_GRAY = "#f4f4f2";
const WHATSAPP_GREEN = "#25D366";

const WHATSAPP_URL = waUrl(
  WA_COMERCIAL,
  "Olá! Tenho interesse em ter uma unidade Almo no meu condomínio/empresa.",
);

/** Bloco placeholder com aspect-ratio 4:3 */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center border border-border"
      style={{ aspectRatio: "4 / 3" }}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <ImageIcon size={48} strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
    </div>
  );
}

const checkpoints = [
  "Mais de 100 produtos disponíveis",
  "Pagamento por PIX, cartão ou voucher alimentação",
  "Monitoramento com câmeras 24h",
  "Reposição feita pelo operador Almo",
  "Sem custo, sem obra, sem funcionário do condomínio",
];

const cards = [
  {
    icon: Building,
    title: "Condomínios residenciais",
    desc: "Ofereça mais conveniência aos moradores sem aumentar a taxa condominial.",
    bullets: [
      "Atende moradores 24h, 7 dias por semana",
      "Valoriza o empreendimento e diferencia o prédio",
      "Zero custo de instalação ou manutenção",
      "Implantação em até 30 dias após aprovação",
    ],
  },
  {
    icon: Building2,
    title: "Empresas e indústrias",
    desc: "Mais bem-estar para colaboradores, sem precisar contratar copeira ou abrir cantina.",
    bullets: [
      "Reduz pausas longas para sair e comprar",
      "Ideal para fábricas, escritórios e CDs",
      "Aceita voucher alimentação (VR, Sodexo, Alelo)",
      "Sem investimento, sem contrato de longo prazo",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Solicitação",
    desc: "Você fala com nosso time pelo formulário ou WhatsApp.",
  },
  {
    n: "02",
    title: "Visita técnica",
    desc: "Avaliamos o espaço, energia e fluxo de pessoas — sem custo.",
  },
  {
    n: "03",
    title: "Aprovação",
    desc: "Apresentamos o projeto para o condomínio ou empresa decidir.",
  },
  {
    n: "04",
    title: "Inauguração",
    desc: "Em até 30 dias, sua unidade Almo está aberta e operando.",
  },
];

const faqs = [
  {
    q: "Quanto custa para o condomínio ter uma Almo?",
    a: "Zero. A Almo arca com 100% do investimento: equipamentos, instalação, abastecimento, manutenção e operação. O condomínio só cede o espaço.",
  },
  {
    q: "Quanto espaço é necessário?",
    a: "Trabalhamos com diferentes formatos. Para condomínios, normalmente entre 6 e 15 m² em uma área comum (hall, salão de festas, área gourmet). Na visita técnica avaliamos o melhor local.",
  },
  {
    q: "Quem cuida da reposição e da limpeza?",
    a: "100% por nossa conta. Um operador Almo visita a unidade periodicamente para repor produtos, organizar e higienizar o espaço. O condomínio não tem nenhum trabalho operacional.",
  },
  {
    q: "E se acontecer algum furto ou avaria?",
    a: "Toda unidade tem câmeras 24h e sistema de monitoramento. Eventuais perdas são absorvidas pela Almo — o condomínio nunca paga por isso.",
  },
  {
    q: "Precisa de obra ou instalação elétrica especial?",
    a: "Na grande maioria dos casos, não. Usamos a infraestrutura existente. Se algum ajuste mínimo for necessário, é feito pela nossa equipe.",
  },
  {
    q: "Os preços são justos para os moradores?",
    a: "Praticamos preços compatíveis com o varejo da região. Como não há intermediários nem funcionário no ponto, conseguimos manter conveniência sem cobrar caro pelo serviço.",
  },
  {
    q: "Como apresentamos a proposta para a assembleia?",
    a: "Nós cuidamos disso. Preparamos o material, podemos participar da reunião (presencial ou online) e respondemos a todas as dúvidas dos moradores ou colaboradores.",
  },
];

const formBullets = [
  "Visita técnica gratuita ao seu espaço",
  "Apresentação pronta para a assembleia",
  "Implantação em até 30 dias após o ok",
  "Operação 100% por conta da Almo",
];

export default function Condominios() {
  // Mantemos o controle do accordion aberto pra garantir que o primeiro abre por padrão
  const [openFaq, setOpenFaq] = useState<string>("faq-0");

  return (
    <>
      <Helmet>
        <title>Almo para condomínios e empresas | Mercado 24h sem custo</title>
        <meta
          name="description"
          content="A Almo instala, abastece e opera um minimercado 24h dentro do seu condomínio ou empresa, sem nenhum custo. Atendemos a região Norte."
        />
        <link rel="canonical" href="/condominios" />
      </Helmet>

      <Header />

      <main className="pt-16 md:pt-20">
        {/* ===== SEÇÃO 1 — HERO ===== */}
        <section
          id="hero"
          className="relative overflow-hidden text-white"
          style={{ backgroundColor: HERO_BG }}
        >
          {/* dot grid sutil */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-16 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span
                  className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
                  style={{ color: CYAN }}
                >
                  Para síndicos e gestores
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
                  Um mercado 24h dentro do seu condomínio.{" "}
                  <span style={{ color: CYAN }}>Custo zero.</span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/75 max-w-xl">
                  A Almo instala, abastece e opera um minimercado completo no seu
                  espaço — sem nenhum custo para o condomínio ou empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 px-6 font-bold rounded-xl bg-white hover:bg-white/90"
                    style={{ color: BRAND_BLUE }}
                  >
                    <a href="#cta-final">Quero uma Almo no meu espaço</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 font-bold rounded-xl border-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-white/60">
                  Respondemos em até 1 dia útil • Operamos na região Norte • Sem
                  compromisso
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full h-full flex items-center justify-center"
              >
                <img 
                  src={heroCondoImg} 
                  alt="Mercado Autônomo ALMO" 
                  className="w-full rounded-2xl shadow-xl border border-white/10"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 2 — PROVA SOCIAL ===== */}
        <section style={{ backgroundColor: SOFT_GRAY }} className="py-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              Condomínios e empresas que já têm a Almo na região Norte
            </p>
            <p className="text-sm md:text-base text-foreground/70 font-medium">
              Residencial Primavera • Torres Norte • [adicionar nomes reais depois]
            </p>
          </div>
        </section>

        {/* ===== SEÇÃO 3 — O QUE É A ALMO ===== */}
        <section id="o-que-e" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-1 lg:order-1">
                <img 
                  src={interiorMercadoImg} 
                  alt="Interior do Mercado Autônomo ALMO" 
                  className="w-full rounded-2xl shadow-lg border border-border"
                  style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
                />
              </div>
              <div className="order-2 lg:order-2">
                <span
                  className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-4"
                  style={{ color: BRAND_BLUE }}
                >
                  O modelo Almo
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-5 leading-tight">
                  Não é uma máquina de snack. É um mercado de verdade.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  A Almo monta um minimercado completo dentro do seu espaço, com
                  prateleiras, geladeira, congelados, bebidas e itens do dia a dia.
                  Tudo aberto 24h, sem funcionário no local, com pagamento totalmente
                  digital.
                </p>
                <ul className="space-y-3">
                  {checkpoints.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span
                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: BRAND_BLUE }}
                      >
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-foreground font-medium">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 4 — PARA QUEM É ===== */}
        <section style={{ backgroundColor: SECTION_GRAY }} className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground text-center mb-12 leading-tight">
              Condomínios e empresas na região Norte
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-white border border-border p-7 md:p-8"
                    style={{ borderRadius: 16 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${BRAND_BLUE}1a` }}
                    >
                      <Icon size={24} style={{ color: BRAND_BLUE }} />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground mb-5">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                          <Check size={16} style={{ color: BRAND_BLUE }} className="mt-1 shrink-0" strokeWidth={3} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 5 — COMO FUNCIONA (timeline) ===== */}
        <section id="como-funciona" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground text-center mb-14 leading-tight">
              Da solicitação à inauguração em 4 passos
            </h2>

            {/* Desktop: horizontal */}
            <div className="hidden md:block max-w-5xl mx-auto">
              <div className="relative">
                {/* linha conectora */}
                <div
                  className="absolute top-6 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: BRAND_BLUE, opacity: 0.25 }}
                />
                <div className="relative grid grid-cols-4 gap-6">
                  {steps.map((s) => (
                    <div key={s.n} className="flex flex-col items-center text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm mb-4 ring-4 ring-white"
                        style={{ backgroundColor: BRAND_BLUE }}
                      >
                        {s.n}
                      </div>
                      <h3 className="font-display font-extrabold text-lg text-foreground mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: vertical */}
            <div className="md:hidden max-w-md mx-auto">
              <div className="relative pl-14">
                <div
                  className="absolute top-3 bottom-3 left-6 w-[2px]"
                  style={{ backgroundColor: BRAND_BLUE, opacity: 0.25 }}
                />
                <div className="space-y-8">
                  {steps.map((s) => (
                    <div key={s.n} className="relative">
                      <div
                        className="absolute -left-14 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm ring-4 ring-white"
                        style={{ backgroundColor: BRAND_BLUE }}
                      >
                        {s.n}
                      </div>
                      <h3 className="font-display font-extrabold text-lg text-foreground mb-1">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 6 — FAQ ===== */}
        <section id="faq" style={{ backgroundColor: SECTION_GRAY }} className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground text-center mb-10 leading-tight">
              Perguntas que todo síndico faz
            </h2>
            <Accordion
              type="single"
              collapsible
              value={openFaq}
              onValueChange={(v) => setOpenFaq(v)}
              className="bg-white rounded-2xl px-2 md:px-4"
            >
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b last:border-b-0 border-border px-2 md:px-4"
                >
                  <AccordionTrigger className="text-left font-display font-extrabold text-foreground hover:no-underline py-5 text-base md:text-lg [&>svg]:hidden group">
                    <span>{f.q}</span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      style={{ color: BRAND_BLUE }}
                    />
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ===== SEÇÃO 7 — CTA FINAL + FORMULÁRIO ===== */}
        <section
          id="cta-final"
          className="py-16 md:py-24"
          style={{ backgroundColor: BRAND_BLUE }}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Coluna esquerda */}
              <div className="text-white">
                <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-white mb-4 bg-white/15 px-3 py-1 rounded-full">
                  Próximo passo
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
                  Leve a Almo para o seu espaço.
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-md leading-relaxed">
                  Preencha o formulário ao lado e nosso time entra em contato em até
                  1 dia útil para agendar uma visita técnica gratuita.
                </p>
                <ul className="space-y-3 mb-8">
                  {formBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-white font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 h-12 px-5 rounded-xl font-bold text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  style={{ backgroundColor: WHATSAPP_GREEN }}
                >
                  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.65.79 5.106 2.144 7.16L4 29l7.04-2.114a11.94 11.94 0 0 0 4.96 1.07h.003C22.63 27.956 28 22.58 28 15.953 28 9.328 22.628 3 16.003 3zm0 21.836a9.842 9.842 0 0 1-5.014-1.371l-.36-.214-4.18 1.255 1.276-4.073-.234-.376a9.83 9.83 0 0 1-1.51-5.054c0-5.43 4.42-9.85 9.852-9.85a9.792 9.792 0 0 1 6.974 2.886 9.78 9.78 0 0 1 2.881 6.97c0 5.43-4.42 9.827-9.685 9.827z" />
                  </svg>
                  Prefere falar no WhatsApp? Clique aqui
                </a>
              </div>

              {/* Coluna direita */}
              <CondoLeadForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CondoWhatsAppButton />
    </>
  );
}

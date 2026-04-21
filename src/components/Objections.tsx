import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Tenho dúvidas sobre o minimercado ALMO";

const faqs = [
  {
    q: "E se acontecer furto? Como vocês lidam com isso?",
    a: "Nossas unidades têm câmeras 24h e sistema antifraude integrado. O índice de perda é monitorado e fica dentro de uma faixa controlada — já contabilizada nas projeções de margem. Você não fica sozinho: o time ALMO acompanha métricas e age junto com você.",
  },
  {
    q: "Preciso ficar no local? Quanto tempo por dia preciso dedicar?",
    a: "Não. O mercado é autônomo e funciona 24h sem você presente. A operação exige em média algumas horas por semana para reposição e conferência — pode ser feita por você ou por alguém de confiança.",
  },
  {
    q: "Precisa de funcionário?",
    a: "Não obrigatoriamente. Muitos licenciados começam sozinhos, fazendo a reposição em horários flexíveis. Conforme você escala para mais unidades, pode contratar um repositor parcial.",
  },
  {
    q: "Quanto tempo até começar a faturar?",
    a: "A unidade começa a vender desde o primeiro dia em que é instalada e abastecida. O ramp-up de faturamento até a média acontece nos primeiros 60 a 90 dias, conforme os moradores adotam o hábito de uso.",
  },
  {
    q: "Como funciona o pagamento dos clientes finais?",
    a: "Os moradores pagam pelo app ALMO ou no terminal de autoatendimento — Pix, cartão ou crédito pré-pago. Tudo integrado ao seu dashboard, com repasse automático.",
  },
  {
    q: "Eu preciso ter um condomínio em mente para começar?",
    a: "Ajuda muito, mas não é obrigatório. Se você ainda não tem o condomínio, nossa equipe te orienta no processo de prospecção e apresentação para síndicos.",
  },
  {
    q: "E se o condomínio não aceitar?",
    a: "A ALMO te entrega material de apresentação, contrato modelo e suporte na conversa com o síndico. A taxa de aprovação em condomínios qualificados é alta — porque o modelo gera valor para os moradores sem custo pro condomínio.",
  },
];

export default function Objections() {
  return (
    <section id="duvidas" className="section-padding bg-card">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Tirando dúvidas reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            As perguntas que todo mundo faz
          </h2>
          <p className="text-muted-foreground text-lg">
            Respostas diretas, sem enrolação.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-xl px-6 border-none shadow-soft"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10 px-4">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="font-bold w-full sm:w-auto h-auto min-h-12 py-3 px-5 whitespace-normal text-sm sm:text-base leading-tight"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span className="sm:hidden">Falar com especialista no WhatsApp</span>
              <span className="hidden sm:inline">Falar com um especialista no WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

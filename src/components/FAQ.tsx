import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "O que é um mercado autônomo?", a: "Um mercado autônomo é um ponto de venda que funciona 24h sem a necessidade de funcionários. Os clientes acessam, escolhem os produtos e pagam de forma automatizada, com total autonomia." },
  { q: "Como funciona a compra no mercado autônomo ALMO?", a: "O cliente acessa o espaço, escolhe os produtos nas prateleiras ou geladeiras, e realiza o pagamento pelo app ou terminal de autoatendimento. Todo o processo é rápido, seguro e sem filas." },
  { q: "Precisa de funcionário para operar?", a: "Não. A operação é 100% autônoma. A ALMO cuida do abastecimento, manutenção e monitoramento remoto. Você acompanha tudo pelo dashboard." },
  { q: "Onde pode ser instalado um mercado ou geladeira ALMO?", a: "Em condomínios residenciais, prédios comerciais, coworkings, academias, hospitais, universidades e qualquer ambiente com fluxo de pessoas." },
  { q: "Qual a diferença entre ALMO GO e Honest Market?", a: "O ALMO Honest Market é um minimercado completo, ideal para condomínios. Já o ALMO GO são geladeiras autônomas compactas, perfeitas para empresas e espaços com menor área disponível." },
  { q: "Como investir na ALMO?", a: "Entre em contato conosco pelo WhatsApp ou formulário. Nossa equipe vai apresentar o modelo de negócio, investimento necessário e projeção de retorno." },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-xl px-6 border-none shadow-soft"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

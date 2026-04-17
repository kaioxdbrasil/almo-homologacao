import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "Quer renda recorrente sem largar seu emprego atual",
  "Tem perfil empreendedor e busca um negócio validado",
  "Está disposto(a) a dedicar algumas horas por semana",
  "Quer escalar para mais de uma unidade no futuro",
  "Valoriza modelos com suporte e operação simplificada",
];

const notForYou = [
  "Procura 'dinheiro fácil' sem nenhum envolvimento",
  "Não quer fazer reposição nem acompanhar a operação",
  "Não tem capital inicial disponível para o investimento",
  "Espera retorno imediato em 30 dias",
  "Não acredita em modelos com tecnologia e automação",
];

export default function ForWho() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Antes de continuar
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Esse modelo é (e não é) pra todo mundo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seja honesto consigo mesmo. Se você se identifica com a coluna da esquerda, vamos conversar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* É pra você */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border-2 border-primary/30 rounded-2xl p-7 shadow-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Check className="text-primary-foreground" size={22} strokeWidth={3} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                É pra você se...
              </h3>
            </div>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check className="text-primary mt-0.5 shrink-0" size={18} strokeWidth={3} />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NÃO é pra você */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border-2 border-destructive/20 rounded-2xl p-7 shadow-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-destructive/90 flex items-center justify-center">
                <X className="text-destructive-foreground" size={22} strokeWidth={3} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                NÃO é pra você se...
              </h3>
            </div>
            <ul className="space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="text-destructive/70 mt-0.5 shrink-0" size={18} strokeWidth={3} />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

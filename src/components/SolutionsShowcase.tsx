import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, UserX, Cpu, Building2, Zap, Briefcase, Wallet, CheckCircle2 } from "lucide-react";
import minimercadoImg from "@/assets/minimercado-autonomo.jpg";
import geladeiraImg from "@/assets/geladeira-autonoma.jpg";

const minimercadoBullets = [
  { icon: Clock, text: "Funciona 24 horas por dia" },
  { icon: UserX, text: "Sem funcionários" },
  { icon: Cpu, text: "Sistema automatizado de vendas" },
  { icon: Building2, text: "Ideal para condomínios e espaços privados" },
];

const geladeiraBullets = [
  { icon: Zap, text: "Instalação rápida e simples" },
  { icon: Briefcase, text: "Ideal para empresas, academias e clínicas" },
  { icon: Wallet, text: "Baixo investimento inicial" },
  { icon: CheckCircle2, text: "Operação 100% automatizada" },
];

export default function SolutionsShowcase() {
  return (
    <section id="solucoes" className="bg-background">
      {/* Seção 1 — Minimercado Autônomo */}
      <div className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Imagem (mobile primeiro) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={minimercadoImg}
                  alt="Interior de um minimercado autônomo Almo com prateleiras e geladeiras abastecidas"
                  className="w-full h-[320px] md:h-[480px] object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 md:order-2"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Solução 01
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Abra um minimercado autônomo
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Monte seu próprio ponto de venda 24h, com operação simples e automatizada.
              </p>

              <ul className="space-y-3 mb-8">
                {minimercadoBullets.map((b) => (
                  <li key={b.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon className="text-primary" size={18} />
                    </div>
                    <span className="text-foreground font-medium">{b.text}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="rounded-full">
                <Link to="/almo-honest-market">Quero abrir um minimercado</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seção 2 — Geladeira Autônoma */}
      <div className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Imagem aparece primeiro no mobile, à direita no desktop */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={geladeiraImg}
                  alt="Geladeira autônoma Almo instalada em recepção de empresa"
                  className="w-full h-[320px] md:h-[480px] object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            </motion.div>

            {/* Texto à esquerda no desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 md:order-1"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Solução 02
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Tenha uma geladeira autônoma
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Uma solução compacta e inteligente para vender sem precisar de espaço grande.
              </p>

              <ul className="space-y-3 mb-8">
                {geladeiraBullets.map((b) => (
                  <li key={b.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <b.icon className="text-primary" size={18} />
                    </div>
                    <span className="text-foreground font-medium">{b.text}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="rounded-full">
                <Link to="/almo-go">Quero uma geladeira autônoma</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

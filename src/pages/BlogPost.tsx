import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { WA_COMERCIAL, waUrl } from "@/lib/constants";

const postsData: Record<string, { title: string; meta: string; category: string; date: string; content: string }> = {
  "o-que-e-mercado-autonomo": {
    title: "O que é um mercado autônomo e como ele funciona?",
    meta: "Descubra o que é um mercado autônomo, como funciona e quais são as vantagens para condomínios e empresas.",
    category: "Varejo Autônomo",
    date: "2026-03-10",
    content: `Um mercado autônomo é um ponto de venda que opera sem a necessidade de funcionários presenciais. Utilizando tecnologia de ponta — como sensores, câmeras inteligentes e sistemas de pagamento automatizados — esses espaços permitem que os consumidores comprem produtos de forma independente, a qualquer hora do dia.\n\n## Como funciona na prática\n\nO funcionamento é simples: o cliente acessa o espaço (geralmente por app ou cartão), escolhe os produtos desejados nas prateleiras ou geladeiras, e realiza o pagamento de forma automatizada. Todo o processo é monitorado remotamente.\n\n## Onde pode ser instalado\n\nMercados autônomos podem ser instalados em condomínios residenciais, prédios comerciais, coworkings, academias, hospitais e qualquer ambiente com fluxo regular de pessoas.\n\n## Vantagens principais\n\n- Funcionamento 24 horas\n- Zero custo com funcionários\n- Conveniência para o consumidor final\n- Modelo escalável e replicável\n- Gestão simplificada por dashboard\n\nA ALMO é referência nesse segmento, oferecendo soluções completas de conveniência autônoma para diferentes perfis de negócio.`,
  },
  "vale-a-pena-minimercado-em-condominio": {
    title: "Vale a pena ter um minimercado no condomínio?",
    meta: "Análise completa sobre os benefícios de instalar um minimercado autônomo em condomínios residenciais.",
    category: "Condomínios",
    date: "2026-03-05",
    content: `Instalar um minimercado autônomo dentro de um condomínio é uma tendência que cresce a cada ano. Mas será que realmente vale a pena?\n\n## Benefícios para os moradores\n\nA principal vantagem é a conveniência. Moradores podem comprar itens do dia a dia sem precisar sair do condomínio — um diferencial especialmente valioso em horários noturnos ou nos finais de semana.\n\n## Valorização do empreendimento\n\nCondomínios com soluções de conveniência integradas tendem a se valorizar no mercado imobiliário, atraindo moradores que buscam praticidade no dia a dia.\n\n## Modelo de operação\n\nCom a ALMO, a operação é simplificada: a instalação, abastecimento e manutenção ficam por conta da equipe especializada. O condomínio apenas disponibiliza o espaço.\n\n## Conclusão\n\nSim, vale muito a pena. É uma solução moderna, sem custos operacionais para o condomínio e que agrega valor real para todos os moradores.`,
  },
  "geladeira-autonoma-para-empresa": {
    title: "Geladeira autônoma para empresas: tendência que veio para ficar",
    meta: "Entenda por que empresas estão adotando geladeiras inteligentes para oferecer conveniência aos colaboradores.",
    category: "Empresas",
    date: "2026-02-28",
    content: `As geladeiras autônomas estão revolucionando a forma como empresas oferecem benefícios aos seus colaboradores.\n\n## O que é uma geladeira autônoma\n\nÉ um equipamento refrigerado inteligente que permite a compra de bebidas e alimentos de forma automatizada, sem necessidade de operador.\n\n## Vantagens para empresas\n\n- Aumenta a satisfação dos colaboradores\n- Funciona 24/7\n- Sem custos com pessoal\n- Formato compacto\n- Dados de consumo em tempo real\n\nO ALMO GO é a solução perfeita para empresas que querem oferecer conveniência sem complexidade operacional.`,
  },
  "tendencia-varejo-autonomo-2026": {
    title: "Tendências do varejo autônomo para 2026",
    meta: "As principais tendências que estão moldando o futuro do varejo autônomo no Brasil e no mundo.",
    category: "Tendências",
    date: "2026-02-20",
    content: `O varejo autônomo é um dos segmentos que mais cresce no mercado global. Confira as principais tendências para 2026.\n\n## 1. Expansão em condomínios\n\nCada vez mais condomínios adotam minimercados autônomos como diferencial competitivo.\n\n## 2. Inteligência artificial\n\nIA está sendo utilizada para prever demanda, otimizar estoque e personalizar a experiência do consumidor.\n\n## 3. Pagamentos sem fricção\n\nSoluções de pagamento por aproximação, QR code e biometria tornam a experiência cada vez mais fluida.\n\n## 4. Sustentabilidade\n\nEquipamentos mais eficientes e embalagens sustentáveis são prioridade para marcas do setor.\n\nA ALMO está na vanguarda dessas tendências, oferecendo soluções que combinam tecnologia, praticidade e sustentabilidade.`,
  },
};

const WHATSAPP_URL = waUrl(WA_COMERCIAL, "Quero saber mais sobre a ALMO!");

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsData[slug] : null;

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-20 section-padding">
          <div className="container mx-auto text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
            <Button asChild variant="outline"><Link to="/blog">Voltar ao blog</Link></Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedSlugs = Object.keys(postsData).filter((s) => s !== slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <Link to="/blog" className="text-primary font-semibold text-sm flex items-center gap-1 mb-8 hover:gap-2 transition-all">
              <ArrowLeft size={14} /> Voltar ao blog
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">{post.title}</h1>

              <div className="h-64 bg-gradient-primary rounded-2xl flex items-center justify-center mb-10">
                <span className="font-display text-primary-foreground/30 text-8xl font-bold">A</span>
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("## ")) {
                    return <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
                  }
                  if (block.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-2 my-4">
                        {block.split("\n").map((line, j) => (
                          <li key={j} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {line.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i} className="text-muted-foreground mb-4 leading-relaxed">{block}</p>;
                })}
              </div>

              {/* CTA */}
              <div className="bg-gradient-primary rounded-2xl p-8 mt-12 text-center text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-4">Gostou do conteúdo?</h3>
                <p className="opacity-90 mb-6">Fale com a ALMO e descubra como transformar conveniência em oportunidade.</p>
                <Button size="lg" variant="secondary" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
                </Button>
              </div>

              {/* Related */}
              {relatedSlugs.length > 0 && (
                <div className="mt-16">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-8">Artigos relacionados</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relatedSlugs.map((s) => (
                      <Link key={s} to={`/blog/${s}`} className="bg-card rounded-xl shadow-card p-6 hover:shadow-hover transition-shadow group">
                        <h4 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {postsData[s].title}
                        </h4>
                        <span className="text-primary text-sm flex items-center gap-1">
                          Ler <ArrowRight size={12} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

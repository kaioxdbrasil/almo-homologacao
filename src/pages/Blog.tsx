import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOMeta from "@/components/SEOMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, ArrowRight } from "lucide-react";

// Static blog data (will be replaced with CMS later)
const posts = [
  {
    slug: "o-que-e-mercado-autonomo",
    title: "O que é um mercado autônomo e como ele funciona?",
    excerpt: "Descubra como os mercados autônomos estão revolucionando o varejo em condomínios e empresas, oferecendo conveniência 24h sem funcionários.",
    category: "Varejo Autônomo",
    date: "2026-03-10",
    image: null,
  },
  {
    slug: "vale-a-pena-minimercado-em-condominio",
    title: "Vale a pena ter um minimercado no condomínio?",
    excerpt: "Análise completa sobre os benefícios de instalar um minimercado autônomo em condomínios residenciais: comodidade, valorização e retorno.",
    category: "Condomínios",
    date: "2026-03-05",
    image: null,
  },
  {
    slug: "geladeira-autonoma-para-empresa",
    title: "Geladeira autônoma para empresas: tendência que veio para ficar",
    excerpt: "Entenda por que cada vez mais empresas estão adotando geladeiras inteligentes para oferecer conveniência aos colaboradores.",
    category: "Empresas",
    date: "2026-02-28",
    image: null,
  },
  {
    slug: "tendencia-varejo-autonomo-2026",
    title: "Tendências do varejo autônomo para 2026",
    excerpt: "As principais tendências que estão moldando o futuro do varejo autônomo no Brasil e no mundo.",
    category: "Tendências",
    date: "2026-02-20",
    image: null,
  },
];

export default function Blog() {
  return (
    <>
      <SEOMeta title="Blog" description="Conteúdos sobre varejo autônomo, conveniência inteligente e oportunidades de negócio com a ALMO." />
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Blog ALMO</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conteúdos sobre varejo autônomo, conveniência inteligente e oportunidades de negócio.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-hover transition-shadow group"
                >
                  <div className="h-48 bg-gradient-primary flex items-center justify-center">
                    <span className="font-display text-primary-foreground/40 text-6xl font-bold">A</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Ler artigo <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

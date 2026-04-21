import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-market.jpg";
import { WA_COMERCIAL, waUrl } from "@/lib/constants";

const WHATSAPP_URL = waUrl(WA_COMERCIAL, "Quero abrir um minimercado autônomo ALMO!");

const trustItems = [
  "Sem funcionário",
  "Funciona 24h",
  "Modelo validado",
];

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  const scrollToForm = () => {
    document.getElementById("quero-comecar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center pt-24 pb-6 overflow-hidden bg-[#425CC7]">
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Subtle brand pattern overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-10 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute -bottom-10 -left-20 w-[400px] h-[400px] rounded-full bg-[#6FCFEB]/[0.06] blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Tag de prova */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#6FCFEB] animate-pulse" />
              <span className="text-xs font-semibold text-white/90">
                +16 unidades operando na região Norte
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-5">
              Fature até{" "}
              <span className="text-[#6FCFEB]">R$ 180 mil</span>{" "}
              por ano com um minimercado autônomo
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-3 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Sem funcionário, sem ponto comercial. Funcionando 24h em condomínios — com a estrutura, sistema e suporte da ALMO.
            </p>

            <p className="text-xs text-white/55 italic mb-6 max-w-lg mx-auto lg:mx-0">
              * Estimativa anual por unidade em condomínio com 100+ unidades residenciais, em operação plena.
            </p>

            {/* Trust badges */}
            <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start mb-7">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="text-[#6FCFEB]" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToForm}
                className="px-6 h-12 rounded-xl bg-white text-[#425CC7] hover:bg-white/90 font-bold w-full sm:w-auto"
              >
                Quero ser licenciado
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-6 h-12 rounded-xl border-[1.5px] border-white bg-transparent text-white hover:bg-white/10 font-medium w-full sm:w-auto"
              >
                <Link to="/condominios">
                  Quero no meu condomínio
                </Link>
              </Button>
            </motion.div>

            <p className="text-xs text-white/60 mt-4">
              Resposta em até 1 dia útil • Sem compromisso
            </p>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft max-w-md lg:max-w-lg mx-auto aspect-video bg-black">
              {videoError ? (
                <img
                  src={heroImg}
                  alt="ALMO - Minimercado autônomo em condomínios"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/IMo28PIeAgQ?autoplay=1&mute=1&loop=1&playlist=IMo28PIeAgQ&controls=1&playsinline=1"
                  title="ALMO - Minimercado autônomo em condomínios"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  onError={() => setVideoError(true)}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Store,
  Refrigerator,
  Building2,
  HeadsetIcon,
  MessageCircle,
  ShoppingBag,
  Zap,
  Settings,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import almoLogo from "@/assets/almo-logo-white.png";
import honestMarketImg from "@/assets/honest-market.jpg";
import { WA_COMERCIAL, WA_SUPORTE, waUrl } from "@/lib/constants";

const WHATSAPP_URL = waUrl(WA_COMERCIAL, "Olá! Gostaria de saber mais sobre a ALMO.");
const WHATSAPP_SUPPORT = waUrl(WA_SUPORTE, "Olá! Preciso de suporte.");

interface LinkItem {
  label: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
  highlight?: boolean;
}

const primaryLinks: LinkItem[] = [
  { label: "Monte um minimercado", href: "/almo-honest-market", icon: Store },
  {
    label: "Novo: Refrigerador Autônomo",
    href: "/almo-go",
    icon: Refrigerator,
    highlight: true,
  },
  {
    label: "Quero no meu condomínio",
    href: WHATSAPP_URL,
    icon: Building2,
    external: true,
  },
  {
    label: "Preciso de suporte",
    href: WHATSAPP_SUPPORT,
    icon: HeadsetIcon,
    external: true,
  },
  {
    label: "Fale com a gente",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    external: true,
  },
];

const secondaryLinks: LinkItem[] = [
  {
    label: "Conhecer ALMO Honest Market",
    href: "/almo-honest-market",
    icon: ShoppingBag,
  },
  { label: "Conhecer ALMO GO", href: "/almo-go", icon: Zap },
  { label: "Como funciona", href: "/#como-funciona", icon: Settings },
  { label: "Acessar blog", href: "/blog", icon: BookOpen },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function LinkButton({
  item,
  variant = "primary",
}: {
  item: LinkItem;
  variant?: "primary" | "secondary";
}) {
  const Icon = item.icon;
  const isPrimary = variant === "primary";

  const className = `
    group relative flex items-center gap-4 w-full rounded-2xl px-6 py-4 text-left font-medium transition-all duration-200
    active:scale-[0.97]
    ${
      item.highlight
        ? "bg-gradient-primary text-primary-foreground shadow-hover hover:shadow-lg"
        : isPrimary
        ? "bg-card text-foreground shadow-card hover:shadow-hover border border-border"
        : "bg-muted/60 text-foreground hover:bg-muted border border-transparent"
    }
  `;

  const content = (
    <>
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${
          item.highlight
            ? "bg-primary-foreground/20"
            : isPrimary
            ? "bg-primary/10"
            : "bg-primary/10"
        }`}
      >
        <Icon
          size={20}
          className={item.highlight ? "text-primary-foreground" : "text-primary"}
        />
      </span>
      <span className="flex-1 text-sm md:text-base">{item.label}</span>
      {item.external && (
        <ExternalLink
          size={14}
          className={`opacity-40 group-hover:opacity-70 transition-opacity shrink-0 ${
            item.highlight ? "text-primary-foreground" : ""
          }`}
        />
      )}
    </>
  );

  if (item.external) {
    return (
      <motion.a
        variants={itemVariants}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div variants={itemVariants}>
      <Link to={item.href} className={className}>
        {content}
      </Link>
    </motion.div>
  );
}

export default function Links() {
  return (
    <>
      <Helmet>
        <title>ALMO | Links – Conveniência Autônoma</title>
        <meta
          name="description"
          content="Acesse os links da ALMO: minimercados autônomos, refrigeradores inteligentes, suporte e mais. Tecnologia que transforma conveniência em faturamento."
        />
        <meta property="og:title" content="ALMO | Links" />
        <meta
          property="og:description"
          content="Minimercados autônomos e refrigeradores inteligentes. Conheça a ALMO."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://almo.com.br/links" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center pt-12 pb-6 px-4"
        >
          <img src={almoLogo} alt="ALMO" className="h-12 mb-4" />
          <p className="text-primary-foreground/70 text-sm text-center max-w-xs font-medium">
            Tecnologia que transforma conveniência em faturamento
          </p>
        </motion.div>

        {/* Links */}
        <div className="flex-1 px-4 pb-8 w-full max-w-md mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3"
          >
            {primaryLinks.map((item) => (
              <LinkButton key={item.label} item={item} variant="primary" />
            ))}
          </motion.div>

          {/* Visual block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="my-6 rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={honestMarketImg}
              alt="Operação ALMO – mercado autônomo em funcionamento"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Site link */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2"
          >
            <LinkButton
              item={{ label: "Acessar o site", href: "/", icon: ExternalLink }}
              variant="secondary"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pb-8 px-4"
        >
          <p className="text-primary-foreground/40 text-xs mb-1">
            © ALMO BRASIL LTDA
          </p>
          <Link
            to="/"
            className="text-primary-foreground/50 text-xs hover:text-primary-foreground/80 transition-colors"
          >
            almo.com.br
          </Link>
        </motion.footer>
      </div>
    </>
  );
}

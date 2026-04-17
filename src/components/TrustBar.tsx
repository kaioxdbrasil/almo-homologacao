import { motion } from "framer-motion";

// TODO: Substituir por logos reais (PNG/SVG) quando recebidos.
// Sugestão: criar pasta src/assets/partners/ e importar como ES6 modules.
const partners = [
  { name: "Ambev", category: "Fornecedor" },
  { name: "Coca-Cola", category: "Fornecedor" },
  { name: "Nestlé", category: "Fornecedor" },
  { name: "PepsiCo", category: "Fornecedor" },
  { name: "PagSeguro", category: "Pagamento" },
  { name: "Mercado Pago", category: "Pagamento" },
];

export default function TrustBar() {
  return (
    <section className="bg-card border-y border-border py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-center text-xs font-bold tracking-widest text-muted-foreground uppercase mb-6">
          Parceiros e fornecedores oficiais
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-10 px-4 rounded-md bg-background border border-border opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="font-display font-bold text-sm md:text-base text-muted-foreground">
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

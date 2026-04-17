// Logos puxados via Google Favicon API (s=128 = alta resolução).
// Para substituir por arquivos próprios: salvar em src/assets/partners/ e trocar `logo` pelo import.
const partners = [
  { name: "Ambev", domain: "ambev.com.br" },
  { name: "Coca-Cola", domain: "cocacolabrasil.com.br" },
  { name: "Nestlé", domain: "nestle.com.br" },
  { name: "PepsiCo", domain: "pepsico.com.br" },
  { name: "PagSeguro", domain: "pagseguro.uol.com.br" },
  { name: "Mercado Pago", domain: "mercadopago.com.br" },
  { name: "Stone", domain: "stone.com.br" },
  { name: "Cielo", domain: "cielo.com.br" },
];

const getLogo = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export default function TrustBar() {
  // Duplicamos a lista para o efeito de loop infinito sem "salto"
  const loop = [...partners, ...partners];

  return (
    <section className="bg-card border-y border-border py-10 overflow-hidden">
      <div className="container mx-auto mb-6">
        <p className="text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
          Parceiros e fornecedores oficiais
        </p>
      </div>

      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-12 md:gap-16">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              aria-label={p.name}
              className="group flex h-16 w-32 shrink-0 items-center justify-center rounded-lg bg-background border border-border px-4"
            >
              <img
                src={getLogo(p.domain)}
                alt={`Logo ${p.name}`}
                loading="lazy"
                className="max-h-10 max-w-full object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                onError={(e) => {
                  // Fallback: placeholder cinza com nome se a API falhar
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".logo-fallback")) {
                    const fb = document.createElement("span");
                    fb.className =
                      "logo-fallback font-display font-bold text-sm text-muted-foreground";
                    fb.textContent = p.name;
                    parent.appendChild(fb);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

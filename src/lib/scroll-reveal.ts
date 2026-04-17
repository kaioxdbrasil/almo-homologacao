/**
 * Scroll reveal global usando IntersectionObserver.
 * - Adiciona a classe `.reveal` em todos os <section> que ainda não têm.
 * - Quando a seção entra na viewport, adiciona `.is-visible` (a transição CSS de fade-up
 *   está definida em src/index.css).
 * - Re-aplica em mudanças de DOM (rotas SPA) via MutationObserver.
 *
 * A animação não conflita com Framer Motion pois usamos opacity/transform como
 * transições CSS; quando um filho do <section> também usa whileInView, ele anima
 * seu próprio conteúdo após o container já estar visível.
 */

let io: IntersectionObserver | null = null;
let mo: MutationObserver | null = null;

function ensureObserver() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io?.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  return io;
}

function applyTo(root: ParentNode) {
  const sections = root.querySelectorAll<HTMLElement>("section:not(.reveal)");
  const observer = ensureObserver();
  sections.forEach((el) => {
    el.classList.add("reveal");
    // Se já está visível na primeira renderização (acima da dobra), revela imediatamente
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (inView) {
      // próximo frame pra garantir que a transição rode
      requestAnimationFrame(() => el.classList.add("is-visible"));
    } else {
      observer.observe(el);
    }
  });
}

export function initScrollReveal() {
  if (typeof window === "undefined") return;

  const run = () => applyTo(document.body);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  // Re-aplica quando o DOM muda (navegação SPA, novos componentes montados)
  if (!mo) {
    mo = new MutationObserver(() => applyTo(document.body));
    mo.observe(document.body, { childList: true, subtree: true });
  }
}

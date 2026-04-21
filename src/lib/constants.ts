export const WA_COMERCIAL = "5568992074158";
export const WA_SUPORTE   = "5568992044133";

export const waUrl = (number: string, text: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

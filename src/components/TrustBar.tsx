import { CheckCircle2 } from "lucide-react";

const seals = [
  "+16 unidades em operação",
  "Região Norte",
  "Modelo validado",
  "Suporte completo",
];

export default function TrustBar() {
  return (
    <section className="bg-muted py-6">
      <div className="container mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {seals.map((seal) => (
            <li
              key={seal}
              className="flex items-center gap-2 text-sm text-foreground/80"
            >
              <CheckCircle2 size={18} className="text-primary shrink-0" />
              <span className="font-medium">{seal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

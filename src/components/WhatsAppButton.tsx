import { useState } from "react";
import { Building2, Award, Refrigerator, LifeBuoy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CONTACT_NUMBER = "5568992074158";
const SUPPORT_NUMBER = "5568992044133";

type Option = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  number: string;
  message: string;
};

const options: Option[] = [
  {
    icon: Building2,
    title: "Quero no meu condomínio",
    desc: "Levar uma unidade ALMO para o meu prédio",
    number: CONTACT_NUMBER,
    message: "Olá! Tenho interesse em ter uma unidade ALMO no meu condomínio.",
  },
  {
    icon: Award,
    title: "Quero ser licenciado",
    desc: "Operar uma unidade ALMO Honest Market",
    number: CONTACT_NUMBER,
    message: "Olá! Tenho interesse em me tornar um licenciado ALMO Honest Market.",
  },
  {
    icon: Refrigerator,
    title: "Quero uma geladeira autônoma",
    desc: "Conhecer o ALMO GO para minha empresa",
    number: CONTACT_NUMBER,
    message: "Olá! Tenho interesse em uma geladeira autônoma ALMO GO.",
  },
  {
    icon: LifeBuoy,
    title: "Preciso de suporte",
    desc: "Atendimento técnico e operacional",
    number: SUPPORT_NUMBER,
    message: "Olá! Preciso de suporte ALMO.",
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const handleSelect = (opt: Option) => {
    const url = `https://wa.me/${opt.number}?text=${encodeURIComponent(opt.message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-200"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 text-white" fill="currentColor" aria-hidden="true">
          <path d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.65.79 5.106 2.144 7.16L4 29l7.04-2.114a11.94 11.94 0 0 0 4.96 1.07h.003C22.63 27.956 28 22.58 28 15.953 28 9.328 22.628 3 16.003 3zm0 21.836a9.842 9.842 0 0 1-5.014-1.371l-.36-.214-4.18 1.255 1.276-4.073-.234-.376a9.83 9.83 0 0 1-1.51-5.054c0-5.43 4.42-9.85 9.852-9.85a9.792 9.792 0 0 1 6.974 2.886 9.78 9.78 0 0 1 2.881 6.97c0 5.43-4.42 9.827-9.685 9.827zm5.397-7.353c-.296-.148-1.752-.866-2.024-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.94 1.163-.173.198-.346.223-.643.074-.296-.148-1.25-.46-2.38-1.467-.879-.784-1.473-1.752-1.646-2.05-.173-.296-.018-.456.13-.604.133-.133.296-.346.445-.52.148-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.148-.668-1.611-.916-2.205-.241-.58-.487-.5-.668-.51l-.57-.01a1.094 1.094 0 0 0-.792.371c-.272.297-1.04 1.015-1.04 2.477 0 1.461 1.064 2.873 1.213 3.07.148.198 2.094 3.196 5.073 4.484.71.306 1.262.488 1.694.624.712.226 1.36.194 1.872.118.571-.085 1.752-.715 2-1.406.247-.69.247-1.282.173-1.406-.074-.124-.272-.198-.568-.347z" />
        </svg>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Como podemos te ajudar?</DialogTitle>
            <DialogDescription>
              Escolha a opção que melhor descreve o que você precisa.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 mt-2">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.title}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left group"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-semibold text-foreground text-sm">
                      {opt.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

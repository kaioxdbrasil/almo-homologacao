import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, ShieldCheck, TrendingUp, Building2, Briefcase } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const PERFIS = [
  { value: "empreendedor", label: "Empreendedor", icon: TrendingUp },
  { value: "condominio", label: "Condomínio", icon: Building2 },
  { value: "empresa", label: "Empresa", icon: Briefcase },
] as const;

type PerfilValue = typeof PERFIS[number]["value"];

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido (com DDD)")
    .max(20, "WhatsApp inválido")
    .regex(/^[\d\s()+-]+$/, "Use apenas números"),
  cidade: z.string().trim().min(2, "Informe sua cidade").max(100, "Cidade muito longa"),
  perfil: z.enum(["empreendedor", "condominio", "empresa"], { message: "Selecione um perfil" }),
});

type LeadInput = z.infer<typeof leadSchema>;

interface LeadFormProps {
  defaultPerfil?: PerfilValue;
  title?: string;
  subtitle?: string;
  bullets?: string[];
}

const defaultBullets = [
  "Apresentação completa do modelo",
  "Tira-dúvidas individual com nosso time",
  "Próximos passos personalizados",
];

export default function LeadForm({
  defaultPerfil,
  title = "Receba a apresentação completa da ALMO",
  subtitle = "Em até 1 dia útil, um especialista entra em contato no seu WhatsApp.",
  bullets = defaultBullets,
}: LeadFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{
    nome: string;
    whatsapp: string;
    cidade: string;
    perfil: PerfilValue | "";
  }>({
    nome: "",
    whatsapp: "",
    cidade: "",
    perfil: defaultPerfil ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadInput, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof LeadInput, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof LeadInput;
        if (!fieldErrors[path]) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        whatsapp: parsed.data.whatsapp,
        cidade: parsed.data.cidade,
        tem_condominio: false,
        perfil: parsed.data.perfil,
        origem: defaultPerfil ? `pagina_${defaultPerfil}` : "landing_page",
      });

      if (error) throw error;

      toast({
        title: "Recebemos seus dados! 🎉",
        description: "Estamos te redirecionando para o WhatsApp...",
      });

      const perfilLabel = PERFIS.find((p) => p.value === parsed.data.perfil)?.label ?? parsed.data.perfil;
      const msg = encodeURIComponent(
        `Olá! Sou ${parsed.data.nome}, de ${parsed.data.cidade}. ` +
          `Tenho interesse na ALMO como ${perfilLabel.toLowerCase()}. ` +
          `Quero saber mais!`
      );
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      }, 800);

      setForm({ nome: "", whatsapp: "", cidade: "", perfil: defaultPerfil ?? "" });
    } catch (err) {
      console.error("Erro ao salvar lead:", err);
      toast({
        title: "Ops, algo deu errado",
        description: "Tente novamente em instantes ou fale direto pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quero-comecar" className="section-padding bg-primary">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground md:sticky md:top-24"
          >
            <span className="inline-block text-xs font-bold tracking-widest text-secondary uppercase mb-3">
              Próximo passo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">{subtitle}</p>
            <ul className="space-y-2 text-primary-foreground/90">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/70">
              <ShieldCheck size={18} className="text-secondary" />
              Seus dados estão seguros. Sem spam.
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-6 md:p-8 shadow-soft space-y-4"
          >
            <div>
              <Label htmlFor="nome" className="font-semibold">Nome completo</Label>
              <Input
                id="nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                className="mt-1.5 h-11"
                disabled={loading}
                maxLength={100}
              />
              {errors.nome && <p className="text-destructive text-xs mt-1">{errors.nome}</p>}
            </div>

            <div>
              <Label htmlFor="whatsapp" className="font-semibold">WhatsApp (com DDD)</Label>
              <Input
                id="whatsapp"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                placeholder="(11) 99999-9999"
                className="mt-1.5 h-11"
                disabled={loading}
                maxLength={20}
              />
              {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>}
            </div>

            <div>
              <Label htmlFor="cidade" className="font-semibold">Cidade / Estado</Label>
              <Input
                id="cidade"
                value={form.cidade}
                onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                placeholder="Ex: São Paulo / SP"
                className="mt-1.5 h-11"
                disabled={loading}
                maxLength={100}
              />
              {errors.cidade && <p className="text-destructive text-xs mt-1">{errors.cidade}</p>}
            </div>

            {/* Perfil */}
            <div>
              <Label className="font-semibold mb-2 block">Qual o seu perfil?</Label>
              <div className="grid grid-cols-3 gap-2">
                {PERFIS.map((p) => {
                  const active = form.perfil === p.value;
                  return (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setForm({ ...form, perfil: p.value })}
                      disabled={loading}
                      className={`flex flex-col items-center gap-1 h-20 rounded-md border-2 font-semibold text-xs transition-colors p-2 ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      <p.icon size={20} />
                      {p.label}
                    </button>
                  );
                })}
              </div>
              {errors.perfil && <p className="text-destructive text-xs mt-1">{errors.perfil}</p>}
            </div>

            <Button type="submit" size="lg" disabled={loading} className="w-full h-12 font-bold text-base">
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Enviando...
                </>
              ) : (
                "Falar com especialista"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Ao enviar, você concorda em receber contato da ALMO no WhatsApp informado.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

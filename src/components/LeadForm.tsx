import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, ShieldCheck } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const leadSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido (com DDD)")
    .max(20, "WhatsApp inválido")
    .regex(/^[\d\s()+-]+$/, "Use apenas números"),
  cidade: z
    .string()
    .trim()
    .min(2, "Informe sua cidade")
    .max(100, "Cidade muito longa"),
  tem_condominio: z.boolean(),
});

type LeadInput = z.infer<typeof leadSchema>;

export default function LeadForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<LeadInput>({
    nome: "",
    whatsapp: "",
    cidade: "",
    tem_condominio: false,
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
        tem_condominio: parsed.data.tem_condominio,
        origem: "landing_page",
      });

      if (error) throw error;

      toast({
        title: "Recebemos seus dados! 🎉",
        description: "Estamos te redirecionando para o WhatsApp...",
      });

      // Redireciona pro WhatsApp com mensagem pré-preenchida
      const msg = encodeURIComponent(
        `Olá! Sou ${parsed.data.nome}, de ${parsed.data.cidade}. ` +
          `${parsed.data.tem_condominio ? "Já tenho um condomínio em mente" : "Ainda não tenho um condomínio"}. ` +
          `Quero abrir um minimercado autônomo ALMO!`
      );
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      }, 800);

      setForm({ nome: "", whatsapp: "", cidade: "", tem_condominio: false });
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
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground"
          >
            <span className="inline-block text-xs font-bold tracking-widest text-secondary uppercase mb-3">
              Próximo passo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Receba a apresentação completa do modelo ALMO
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Em até 1 dia útil, um especialista entra em contato com você no WhatsApp e te envia:
            </p>
            <ul className="space-y-2 text-primary-foreground/90">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                Apresentação completa do modelo de negócio
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                Projeção financeira detalhada da sua região
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✓</span>
                Tira-dúvidas individual com nosso time
              </li>
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
              <Label htmlFor="nome" className="font-semibold">
                Nome completo
              </Label>
              <Input
                id="nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                className="mt-1.5 h-11"
                disabled={loading}
                maxLength={100}
              />
              {errors.nome && (
                <p className="text-destructive text-xs mt-1">{errors.nome}</p>
              )}
            </div>

            <div>
              <Label htmlFor="whatsapp" className="font-semibold">
                WhatsApp (com DDD)
              </Label>
              <Input
                id="whatsapp"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                placeholder="(11) 99999-9999"
                className="mt-1.5 h-11"
                disabled={loading}
                maxLength={20}
              />
              {errors.whatsapp && (
                <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>
              )}
            </div>

            <div>
              <Label htmlFor="cidade" className="font-semibold">
                Cidade / Estado
              </Label>
              <Input
                id="cidade"
                value={form.cidade}
                onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                placeholder="Ex: São Paulo / SP"
                className="mt-1.5 h-11"
                disabled={loading}
                maxLength={100}
              />
              {errors.cidade && (
                <p className="text-destructive text-xs mt-1">{errors.cidade}</p>
              )}
            </div>

            <div>
              <Label className="font-semibold mb-2 block">
                Já tem um condomínio em mente?
              </Label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, tem_condominio: true })}
                  disabled={loading}
                  className={`flex-1 h-11 rounded-md border-2 font-semibold text-sm transition-colors ${
                    form.tem_condominio
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  Sim
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, tem_condominio: false })}
                  disabled={loading}
                  className={`flex-1 h-11 rounded-md border-2 font-semibold text-sm transition-colors ${
                    !form.tem_condominio
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  Ainda não
                </button>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full h-12 font-bold text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Enviando...
                </>
              ) : (
                "Quero receber a apresentação"
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

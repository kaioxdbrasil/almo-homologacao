import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, ShieldCheck, Check, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const FAIXAS = ["Até R$ 30k", "R$ 30k a R$ 50k", "R$ 50k a R$ 80k", "Acima de R$ 80k"] as const;
const PRAZOS = ["Imediato", "1 a 3 meses", "3 a 6 meses", "Estou pesquisando"] as const;

const ESTADOS = [
  { uf: "AC", nome: "Acre" }, { uf: "AL", nome: "Alagoas" }, { uf: "AP", nome: "Amapá" },
  { uf: "AM", nome: "Amazonas" }, { uf: "BA", nome: "Bahia" }, { uf: "CE", nome: "Ceará" },
  { uf: "DF", nome: "Distrito Federal" }, { uf: "ES", nome: "Espírito Santo" },
  { uf: "GO", nome: "Goiás" }, { uf: "MA", nome: "Maranhão" }, { uf: "MT", nome: "Mato Grosso" },
  { uf: "MS", nome: "Mato Grosso do Sul" }, { uf: "MG", nome: "Minas Gerais" },
  { uf: "PA", nome: "Pará" }, { uf: "PB", nome: "Paraíba" }, { uf: "PR", nome: "Paraná" },
  { uf: "PE", nome: "Pernambuco" }, { uf: "PI", nome: "Piauí" }, { uf: "RJ", nome: "Rio de Janeiro" },
  { uf: "RN", nome: "Rio Grande do Norte" }, { uf: "RS", nome: "Rio Grande do Sul" },
  { uf: "RO", nome: "Rondônia" }, { uf: "RR", nome: "Roraima" }, { uf: "SC", nome: "Santa Catarina" },
  { uf: "SP", nome: "São Paulo" }, { uf: "SE", nome: "Sergipe" }, { uf: "TO", nome: "Tocantins" },
] as const;

const UFS = ESTADOS.map((e) => e.uf) as readonly string[];

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido (com DDD)")
    .max(20, "WhatsApp inválido")
    .regex(/^[\d\s()+-]+$/, "Use apenas números"),
  cidade: z.string().refine((v) => UFS.includes(v), { message: "Selecione seu estado" }),
  tem_condominio: z.boolean(),
  faixa_investimento: z.enum(FAIXAS, { message: "Selecione uma faixa" }),
  prazo_inicio: z.enum(PRAZOS, { message: "Selecione um prazo" }),
});

type LeadInput = z.infer<typeof leadSchema>;

const initialForm = {
  nome: "",
  whatsapp: "",
  cidade: "",
  tem_condominio: false,
  faixa_investimento: "" as typeof FAIXAS[number] | "",
  prazo_inicio: "" as typeof PRAZOS[number] | "",
};

export default function LeadForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState(initialForm);
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
        faixa_investimento: parsed.data.faixa_investimento,
        prazo_inicio: parsed.data.prazo_inicio,
        origem: "landing_page",
      });

      if (error) throw error;

      setSuccess(true);

      const estadoNome =
        ESTADOS.find((e) => e.uf === parsed.data.cidade)?.nome ?? parsed.data.cidade;
      const msg = encodeURIComponent(
        `Olá! Sou ${parsed.data.nome}, do estado de ${estadoNome}. ` +
          `${parsed.data.tem_condominio ? "Já tenho um condomínio em mente. " : "Ainda não tenho um condomínio. "}` +
          `Faixa de investimento: ${parsed.data.faixa_investimento}. ` +
          `Prazo: ${parsed.data.prazo_inicio}. ` +
          `Quero abrir um minimercado autônomo ALMO!`,
      );
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      }, 1200);

      setForm(initialForm);
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
            className="text-primary-foreground md:sticky md:top-24 text-center md:text-left"
          >
            <span className="inline-block text-xs font-bold tracking-widest text-secondary uppercase mb-3">
              Próximo passo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Receba a apresentação completa do modelo ALMO
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-6">
              Em até 1 dia útil, um especialista entra em contato no seu WhatsApp e te envia:
            </p>
            <ul className="space-y-4 text-primary-foreground inline-block text-left mx-auto md:mx-0">
              {[
                "Apresentação completa do modelo de negócio",
                "Projeção financeira detalhada da sua região",
                "Tira-dúvidas individual com nosso time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg font-medium">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center mt-0.5">
                    <Check className="text-primary" size={18} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-sm text-primary-foreground/80">
              <ShieldCheck size={18} className="text-secondary" />
              Seus dados estão seguros. Sem spam.
            </div>
          </motion.div>

          {/* Form / Success */}
          <div className="relative min-h-[520px]">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background rounded-2xl p-8 md:p-10 shadow-soft text-center flex flex-col items-center justify-center min-h-[520px]"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "hsl(142 76% 92%)" }}
                  >
                    <CheckCircle2 size={56} strokeWidth={2.5} style={{ color: "hsl(142 71% 35%)" }} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
                  >
                    Recebemos!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground text-base md:text-lg max-w-sm mb-6"
                  >
                    Em breve um especialista entra em contato no seu WhatsApp.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-muted-foreground"
                  >
                    Estamos te redirecionando para o WhatsApp...
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm text-primary font-semibold hover:underline"
                  >
                    Enviar outro contato
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
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
                    <Label htmlFor="estado" className="font-semibold">Estado</Label>
                    <Select
                      value={form.cidade}
                      onValueChange={(v) => setForm({ ...form, cidade: v })}
                      disabled={loading}
                    >
                      <SelectTrigger id="estado" className="mt-1.5 h-11">
                        <SelectValue placeholder="Selecione seu estado" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {ESTADOS.map((e) => (
                          <SelectItem key={e.uf} value={e.uf}>
                            {e.nome} ({e.uf})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.cidade && <p className="text-destructive text-xs mt-1">{errors.cidade}</p>}
                  </div>

                  {/* Faixa de investimento */}
                  <div>
                    <Label className="font-semibold mb-2 block">Quanto você pode investir?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {FAIXAS.map((faixa) => (
                        <button
                          key={faixa}
                          type="button"
                          onClick={() => setForm({ ...form, faixa_investimento: faixa })}
                          disabled={loading}
                          className={`h-11 rounded-md border-2 font-semibold text-xs transition-colors px-2 ${
                            form.faixa_investimento === faixa
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-input bg-background text-foreground hover:border-primary/50"
                          }`}
                        >
                          {faixa}
                        </button>
                      ))}
                    </div>
                    {errors.faixa_investimento && (
                      <p className="text-destructive text-xs mt-1">{errors.faixa_investimento}</p>
                    )}
                  </div>

                  {/* Prazo */}
                  <div>
                    <Label className="font-semibold mb-2 block">Quando pretende começar?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {PRAZOS.map((prazo) => (
                        <button
                          key={prazo}
                          type="button"
                          onClick={() => setForm({ ...form, prazo_inicio: prazo })}
                          disabled={loading}
                          className={`h-11 rounded-md border-2 font-semibold text-xs transition-colors px-2 ${
                            form.prazo_inicio === prazo
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-input bg-background text-foreground hover:border-primary/50"
                          }`}
                        >
                          {prazo}
                        </button>
                      ))}
                    </div>
                    {errors.prazo_inicio && (
                      <p className="text-destructive text-xs mt-1">{errors.prazo_inicio}</p>
                    )}
                  </div>

                  <div>
                    <Label className="font-semibold mb-2 block">Já tem um condomínio em mente?</Label>
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

                  <Button type="submit" size="lg" disabled={loading} className="w-full h-12 font-bold text-base">
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
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

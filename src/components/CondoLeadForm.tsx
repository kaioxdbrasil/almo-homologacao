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
import { Loader2, CheckCircle2 } from "lucide-react";

const PERFIS = [
  "Síndico(a)",
  "Administrador(a) de condomínio",
  "Gestor(a) de empresa / RH",
  "Outro",
] as const;

const TAMANHOS = [
  "Pequeno (até 50 unidades / pessoas)",
  "Médio (50 a 200 unidades / pessoas)",
  "Grande (mais de 200 unidades / pessoas)",
] as const;

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

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(100),
  whatsapp: z
    .string()
    .trim()
    .min(10, "WhatsApp inválido")
    .max(20)
    .regex(/^[\d\s()+-]+$/, "Use apenas números"),
  email: z.string().trim().email("E-mail inválido").max(120),
  perfil: z.enum(PERFIS, { message: "Selecione uma opção" }),
  cidade: z.string().refine((v) => UFS.includes(v), { message: "Selecione seu estado" }),
  municipio: z.string().trim().min(2, "Informe a cidade").max(100),
  tamanho: z.enum(TAMANHOS, { message: "Selecione o tamanho do espaço" }),
});

type Input = z.infer<typeof schema>;

const initial = {
  nome: "",
  whatsapp: "",
  email: "",
  perfil: "" as typeof PERFIS[number] | "",
  cidade: "",
  municipio: "",
  tamanho: "" as typeof TAMANHOS[number] | "",
};

export default function CondoLeadForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Input, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Partial<Record<keyof Input, string>> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Input;
        if (!fe[k]) fe[k] = i.message;
      });
      setErrors(fe);
      return;
    }

    setLoading(true);
    try {
      // Salva como lead com origem 'condominios'. O e-mail vai concatenado em 'origem'
      // pra preservar a info sem alterar o schema da tabela.
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        whatsapp: parsed.data.whatsapp,
        cidade: parsed.data.cidade,
        municipio: parsed.data.municipio,
        tem_condominio: true,
        perfil: parsed.data.perfil,
        faixa_investimento: parsed.data.tamanho,
        origem: `condominios | ${parsed.data.email}`,
      });
      if (error) throw error;
      setSuccess(true);
      setForm(initial);
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
    <div className="relative">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-soft text-center flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "hsl(142 76% 92%)" }}
            >
              <CheckCircle2 size={44} strokeWidth={2.5} style={{ color: "hsl(142 71% 35%)" }} />
            </motion.div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
              Recebemos!
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-sm">
              Em breve um especialista entra em contato no WhatsApp informado.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 text-sm text-primary font-semibold hover:underline"
            >
              Enviar outro contato
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-5 md:p-6 shadow-soft space-y-3"
          >
            <div>
              <Label htmlFor="c-nome" className="text-sm font-semibold">Nome completo</Label>
              <Input
                id="c-nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                className="mt-1 h-9 text-sm"
                disabled={loading}
                maxLength={100}
              />
              {errors.nome && <p className="text-destructive text-xs mt-1">{errors.nome}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="c-whats" className="text-sm font-semibold">WhatsApp</Label>
                <Input
                  id="c-whats"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="(11) 99999-9999"
                  className="mt-1 h-9 text-sm"
                  disabled={loading}
                  maxLength={20}
                />
                {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>}
              </div>

              <div>
                <Label htmlFor="c-email" className="text-sm font-semibold">E-mail</Label>
                <Input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                  className="mt-1 h-9 text-sm"
                  disabled={loading}
                  maxLength={120}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="c-perfil" className="text-sm font-semibold">Você é...</Label>
              <Select
                value={form.perfil}
                onValueChange={(v) => setForm({ ...form, perfil: v as typeof PERFIS[number] })}
                disabled={loading}
              >
                <SelectTrigger id="c-perfil" className="mt-1 h-9 text-sm">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {PERFIS.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.perfil && <p className="text-destructive text-xs mt-1">{errors.perfil}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="c-estado" className="text-sm font-semibold">Estado</Label>
                <Select
                  value={form.cidade}
                  onValueChange={(v) => setForm({ ...form, cidade: v })}
                  disabled={loading}
                >
                  <SelectTrigger id="c-estado" className="mt-1 h-9 text-sm">
                    <SelectValue placeholder="UF" />
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

              <div>
                <Label htmlFor="c-mun" className="text-sm font-semibold">Município</Label>
                <Input
                  id="c-mun"
                  value={form.municipio}
                  onChange={(e) => setForm({ ...form, municipio: e.target.value })}
                  placeholder="Sua cidade"
                  className="mt-1 h-9 text-sm"
                  disabled={loading}
                  maxLength={100}
                />
                {errors.municipio && <p className="text-destructive text-xs mt-1">{errors.municipio}</p>}
              </div>

              <div>
                <Label htmlFor="c-tam" className="text-sm font-semibold">Tamanho</Label>
                <Select
                  value={form.tamanho}
                  onValueChange={(v) => setForm({ ...form, tamanho: v as typeof TAMANHOS[number] })}
                  disabled={loading}
                >
                  <SelectTrigger id="c-tam" className="mt-1 h-9 text-sm">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {TAMANHOS.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.tamanho && <p className="text-destructive text-xs mt-1">{errors.tamanho}</p>}
              </div>
            </div>

            <Button
              type="submit"
              size="default"
              disabled={loading}
              className="w-full h-10 font-bold text-sm mt-1"
              style={{ backgroundColor: "#0f1b4d" }}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Enviando...
                </>
              ) : (
                "Quero uma Almo no meu espaço"
              )}
            </Button>

            <p className="text-[11px] text-muted-foreground text-center leading-snug">
              Seus dados estão seguros. Usamos apenas para entrar em contato.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

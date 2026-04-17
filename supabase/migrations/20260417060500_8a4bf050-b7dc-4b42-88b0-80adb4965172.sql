ALTER TABLE public.leads
ADD COLUMN IF NOT EXISTS faixa_investimento text,
ADD COLUMN IF NOT EXISTS prazo_inicio text;
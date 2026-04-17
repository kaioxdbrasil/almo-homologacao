-- Defense in depth: enforce length limits at database level
-- to prevent abuse via the public lead form
ALTER TABLE public.leads
  ADD CONSTRAINT leads_nome_length CHECK (char_length(nome) BETWEEN 2 AND 100),
  ADD CONSTRAINT leads_whatsapp_length CHECK (char_length(whatsapp) BETWEEN 8 AND 20),
  ADD CONSTRAINT leads_cidade_length CHECK (char_length(cidade) BETWEEN 2 AND 100),
  ADD CONSTRAINT leads_origem_length CHECK (origem IS NULL OR char_length(origem) <= 50);

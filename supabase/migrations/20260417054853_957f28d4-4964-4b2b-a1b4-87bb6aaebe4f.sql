-- Create leads table for landing page lead capture
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  cidade TEXT NOT NULL,
  tem_condominio BOOLEAN NOT NULL DEFAULT false,
  origem TEXT DEFAULT 'landing_page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a lead via the public form
CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No SELECT policy is created on purpose: leads can only be read from the
-- Lovable Cloud admin dashboard (service role), never from the client.

-- Index for sorting by recent
CREATE INDEX idx_leads_created_at ON public.leads (created_at DESC);

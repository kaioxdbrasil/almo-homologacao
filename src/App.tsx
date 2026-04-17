import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import HonestMarket from "./pages/HonestMarket";
import AlmoGo from "./pages/AlmoGo";
import Empreendedor from "./pages/Empreendedor";
import Condominio from "./pages/Condominio";
import Empresa from "./pages/Empresa";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";
import AccessibilityWidget from "./components/AccessibilityWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AccessibilityWidget />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/empreendedor" element={<Empreendedor />} />
            <Route path="/condominio" element={<Condominio />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/almo-honest-market" element={<HonestMarket />} />
            <Route path="/almo-go" element={<AlmoGo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/links" element={<Links />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import HonestMarket from "./pages/HonestMarket";
import AlmoGo from "./pages/AlmoGo";
import Condominios from "./pages/Condominios";
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
            <Route path="/almo-honest-market" element={<HonestMarket />} />
            <Route path="/almo-go" element={<AlmoGo />} />
            <Route path="/condominios" element={<Condominios />} />
            <Route path="/sobre" element={<Sobre />} />
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

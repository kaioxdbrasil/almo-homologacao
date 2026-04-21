import Header from "@/components/Header";
import SEOMeta from "@/components/SEOMeta";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BusinessModel from "@/components/BusinessModel";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import SocialProof from "@/components/SocialProof";
import Differentials from "@/components/Differentials";
import Objections from "@/components/Objections";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <>
      <SEOMeta
        title="Abra seu minimercado autônomo"
        description="Fature até R$180k/ano com um minimercado autônomo em condomínios. Sem funcionários, funcionando 24h."
        image="https://almobrasil.com.br/og-image.jpg"
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <BusinessModel />
        <SolutionsShowcase />
        <Differentials />
        <SocialProof />
        <Objections />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

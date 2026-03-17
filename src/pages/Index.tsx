import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Differentials from "@/components/Differentials";
import SocialProof from "@/components/SocialProof";
import InvestorSection from "@/components/InvestorSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <HowItWorks />
        <Benefits />
        <Differentials />
        <SocialProof />
        <InvestorSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

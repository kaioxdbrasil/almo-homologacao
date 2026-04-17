import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import BusinessNumbers from "@/components/BusinessNumbers";
import SocialProof from "@/components/SocialProof";
import Segments from "@/components/Segments";
import ForWho from "@/components/ForWho";
import Differentials from "@/components/Differentials";
import Comparison from "@/components/Comparison";
import Objections from "@/components/Objections";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <BusinessNumbers />
        <SocialProof />
        <Segments />
        <ForWho />
        <Differentials />
        <Comparison />
        <Objections />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

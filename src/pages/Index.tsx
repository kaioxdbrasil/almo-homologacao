import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Formats from "@/components/Formats";
import JourneySplit from "@/components/JourneySplit";
import SocialProof from "@/components/SocialProof";
import Differentials from "@/components/Differentials";
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
        <HowItWorks />
        <Formats />
        <JourneySplit />
        <SocialProof />
        <Differentials />
        <Objections />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessModel from "@/components/BusinessModel";
import SocialProof from "@/components/SocialProof";
import Differentials from "@/components/Differentials";
import Objections from "@/components/Objections";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BusinessModel />
        <SocialProof />
        <Differentials />
        <Objections />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

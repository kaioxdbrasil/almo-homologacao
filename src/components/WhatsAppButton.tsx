import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a ALMO.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 active:scale-95 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="text-card" size={28} />
    </a>
  );
}

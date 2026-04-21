import { Link } from "react-router-dom";
import almoLogoWhite from "@/assets/almo-logo-white.png";
import { WA_COMERCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-card section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src={almoLogoWhite} alt="ALMO" className="h-8" />
            </div>
            <p className="text-sm opacity-70">
              Tecnologia que transforma conveniência em faturamento.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/almo-honest-market" className="hover:opacity-100 transition-opacity">ALMO Honest Market</Link></li>
              <li><Link to="/almo-go" className="hover:opacity-100 transition-opacity">ALMO GO</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><a href="/#contato" className="hover:opacity-100 transition-opacity">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a
                  href="mailto:comercial@almobrasil.com.br"
                  className="hover:opacity-100 transition-opacity"
                >
                  comercial@almobrasil.com.br
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WA_COMERCIAL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  WhatsApp: (68) 99207-4158
                </a>
              </li>
              <li>Rio Branco — AC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} ALMO. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

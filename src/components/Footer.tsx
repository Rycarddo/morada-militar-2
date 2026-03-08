import Image from "next/image";
import logoImg from "@/img/logo.png";

const navLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Apartamento", href: "#apartamento" },
  { label: "Como Funciona", href: "#como-funciona" },
];

const contactInfo = [
  {
    label: "WhatsApp",
    value: "(92) 98547-8571",
    href: "https://wa.me/5592985478571",
  },
  {
    label: "Instagram",
    value: "@moradadomilitar",
    href: "https://instagram.com/moradadomilitar",
  },
  {
    label: "Facebook  ",
    value: "Morada do Militar",
    href: "https://www.facebook.com/MoradadoMilitar/",
  },
  {
    label: "E-mail",
    value: "contato@moradadomilitar.com.br",
    href: "mailto:contato@moradadomilitar.com.br",
  },
];

const addressInfo = ["Rua 55, 189 — Japiim", "Manaus — AM", "CEP 69077-560"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-deep border-t border-border-wood">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <Image
                src={logoImg}
                alt="Morada do Militar"
                width={140}
                height={56}
                className="object-contain h-36 w-auto"
              />
            </a>
            <p
              className="text-text-muted text-sm leading-relaxed mb-6 max-w-[220px]"
              style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
            >
              Residência premium para militares em Manaus. Conforto, localização
              e comunidade.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/moradadomilitar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-xs hover:text-text-primary transition-colors duration-200 tracking-wide"
                style={{
                  fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                }}
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5592985478571"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-xs hover:text-text-primary transition-colors duration-200 tracking-wide"
                style={{
                  fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                }}
              >
                WhatsApp
              </a>
              <a
                href="https://facebook.com/MoradadoMilitar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-xs hover:text-text-primary transition-colors duration-200 tracking-wide"
                style={{
                  fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                }}
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p
              className="text-text-secondary font-semibold text-xs mb-6 uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
            >
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p
              className="text-text-secondary font-semibold text-xs mb-6 uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
            >
              Contato
            </p>
            <ul className="space-y-4">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                  <div>
                    <span
                      className="block text-text-muted text-[10px] uppercase tracking-wider mb-0.5"
                      style={{
                        fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                      }}
                    >
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                      }}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {c.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Address */}
          <div>
            <p
              className="text-text-secondary font-semibold text-xs mb-6 uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
            >
              Endereço
            </p>
            <address
              className="not-italic"
              style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
            >
              {addressInfo.map((line) => (
                <p key={line} className="text-text-muted text-sm mb-1.5">
                  {line}
                </p>
              ))}
            </address>
            <a
              href="https://maps.app.goo.gl/q7KcX4mJhCF3osha9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gold text-xs mt-4 hover:text-text-primary transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
            >
              → Ver no Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-subtle py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-text-muted text-xs"
            style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
          >
            &copy; {currentYear} Morada do Militar. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

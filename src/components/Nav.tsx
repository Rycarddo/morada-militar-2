"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoImg from "@/img/logo.png";

const links = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Apartamento", href: "#apartamento" },
  { label: "Como Funciona", href: "#como-funciona" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-surface-elevated backdrop-blur-md shadow-nav border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-[1fr_auto_1fr] md:flex md:items-center md:justify-between items-center">
          {/* Mobile left spacer / desktop: nothing (logo is first flex child) */}
          <div className="md:hidden" />

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 select-none justify-self-center md:justify-self-auto" onClick={close}>
            <Image
              src={logoImg}
              alt="Logo Morada do Militar"
              width={36}
              height={36}
              className="object-contain"
            />
            <div className="flex flex-col items-center leading-[1.1]">
              <span
                className="font-bold text-text-primary uppercase tracking-widest text-sm"
                style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
              >
                Morada
              </span>
              <span
                className="font-bold text-gold uppercase tracking-widest text-sm italic"
                style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
              >
                Do
              </span>
              <span
                className="font-bold text-text-primary uppercase tracking-widest text-sm"
                style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
              >
                Militar
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide relative group"
                  style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-1/2 h-px bg-accent transition-all duration-300 -translate-x-1/2 w-0 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-button text-sm font-semibold bg-accent text-text-on-accent hover:bg-accent-hover transition-colors duration-200 tracking-wide"
            style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
          >
            Agendar Visita
          </a>

          {/* Mobile hamburger / close */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 w-10 h-10 justify-self-end"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6 text-text-primary">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-text-primary" />
                <span className="block w-6 h-0.5 bg-text-primary" />
                <span className="block w-4 h-0.5 bg-text-primary" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ background: "rgba(13,15,15,0.98)" }}
        >
          <nav className="flex flex-col gap-2 px-6 pt-10 pb-8 flex-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={close}
                className="text-2xl font-bold text-text-primary py-4 border-b border-border-subtle tracking-wide"
                style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={close}
              className="mt-8 inline-flex items-center justify-center px-7 py-4 rounded-button font-semibold text-text-on-accent bg-accent border border-wood/50 text-base tracking-wide"
              style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
            >
              Agendar Visita
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

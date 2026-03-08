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
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-surface-elevated backdrop-blur-md shadow-nav border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 select-none">
          <Image
            src={logoImg}
            alt="Logo Morada do Militar"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col items-center leading-[1.1]">
            <span
              className="font-bold text-text-primary uppercase tracking-widest text-sm"
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              }}
            >
              Morada
            </span>
            <span
              className="font-bold text-gold uppercase tracking-widest text-sm italic"
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              }}
            >
              Do
            </span>
            <span
              className="font-bold text-text-primary uppercase tracking-widest text-sm"
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              }}
            >
              Militar
            </span>
          </div>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide relative group"
                style={{
                  fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-1/2 h-px bg-accent transition-all duration-300 -translate-x-1/2 w-0 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-button text-sm font-semibold bg-accent text-text-on-accent hover:bg-accent-hover transition-colors duration-200 tracking-wide"
          style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
        >
          Agendar Visita
        </a>

        {/* Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-text-primary" />
          <span className="block w-6 h-0.5 bg-text-primary" />
          <span className="block w-4 h-0.5 bg-text-primary" />
        </button>
      </div>
    </nav>
  );
}

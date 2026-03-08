"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import heroImg from "@/img/sala-1.webp";
import logoImg from "@/img/logo.png";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-surface-page flex items-center overflow-hidden"
    >
      {/* Warm ambient glow — like a hearth in the distance */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 75% 60%, rgba(123,79,46,0.08) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(232,160,32,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] gap-8 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow — Logo */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={variants}
              className="flex justify-center"
            >
              <Image
                src={logoImg}
                alt="Morada do Militar"
                width={720}
                height={288}
                style={{ height: "16rem", width: "auto", objectFit: "contain" }}
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={variants}
              className="font-display font-bold leading-[0.9] tracking-[-0.02em] text-text-primary"
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
                fontSize: "clamp(52px, 7.5vw, 88px)",
              }}
            >
              Sua próxima
              <br />
              <span
                className="text-gold italic"
                style={{ letterSpacing: "-0.03em" }}
              >
                morada.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={variants}
              className="text-text-secondary leading-relaxed max-w-[440px]"
              style={{
                fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                fontSize: "clamp(15px, 1.4vw, 18px)",
              }}
            >
              Residência de alto padrão exclusiva para militares em Manaus.
              Conforto, segurança e comunidade — como deve ser.
            </motion.p>

            {/* Divider line */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={variants}
              className="flex items-center gap-4"
            >
              <div className="h-px w-16 bg-wood-border" />
            </motion.div>

            {/* Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={variants}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contato"
                onClick={() => track("agendar_visita", { origem: "hero" })}
                className="inline-flex items-center px-7 py-3.5 rounded-button font-semibold text-text-on-accent bg-accent hover:bg-accent-hover border border-wood/50 transition-all duration-200 text-sm tracking-wide"
                style={{
                  fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                }}
              >
                Agendar Visita
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo with wood frame */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={variants}
            className="relative h-75 sm:h-100 lg:h-155"
          >
            {/* Outer wood frame */}
            <div
              className="absolute inset-0 rounded-card border border-wood-border"
              style={{ margin: "-6px" }}
            />
            {/* Photo container */}
            <div className="relative h-full rounded-card overflow-hidden bg-surface-mid">
              <Image
                src={heroImg}
                alt="Sala de estar — Morada do Militar"
                fill
                className="object-cover"
                priority
              />
              {/* Dark vignette overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                }}
              />
              {/* Floating info card */}
              <div
                className="absolute bottom-5 left-5 right-5 backdrop-blur-sm rounded-card p-5"
                style={{
                  background: "rgba(13,15,15,0.90)",
                  border: "1px solid rgba(123,79,46,0.40)",
                }}
              >
                <div
                  style={{
                    color: "rgba(255,255,255,0.50)",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 6,
                    fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                  }}
                >
                  Disponível agora
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 4,
                    fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                  }}
                >
                  Rua 55, 189 — Japiim, Manaus
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 12,
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  }}
                >
                  100% mobiliado · 1 quarto · excelente localização
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="relative bg-accent overflow-hidden py-20 md:py-28 lg:py-40"
    >
      {/* Noise grain in white */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1' fill='white'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }} />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Gold ornamental line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8">
          <div className="w-24 h-px bg-gold opacity-40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold tracking-[0.25em] uppercase text-text-on-accent/60 mb-6"
          style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
        >
          Sua Próxima Morada
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display font-bold text-text-on-accent leading-tight mb-6"
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
            fontSize: "clamp(40px, 6vw, 64px)",
          }}
        >
          Agende sua visita
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-text-on-accent/85 leading-relaxed mb-12 max-w-xl mx-auto"
          style={{
            fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
            fontSize: "clamp(16px, 1.5vw, 20px)",
          }}
        >
          Visite sem compromisso e conheça pessoalmente o apartamento que pode ser
          a sua próxima morada em Manaus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <a
            href="https://wa.me/5592985478571?text=Ol%C3%A1!%20Quero%20agendar%20uma%20visita."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("agendar_visita", { origem: "cta_final" })}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-button bg-text-primary text-accent font-bold text-base hover:scale-[1.03] transition-transform duration-200 shadow-float"
            style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
          >
            <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 7h4M8 10h4M8 13h2M5 5h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Agendar Visita Gratuita
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-text-on-accent/50 text-sm mt-8"
          style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
        >
          Respondemos em até 30 minutos · Sem compromisso
        </motion.p>
      </div>
    </section>
  );
}

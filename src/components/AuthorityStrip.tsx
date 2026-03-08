"use client";
import { motion } from "framer-motion";

const logos = [
  { abbr: "FAB", full: "Força Aérea Brasileira" },
  { abbr: "EB", full: "Exército Brasileiro" },
  { abbr: "MB", full: "Marinha do Brasil" },
];

export default function AuthorityStrip() {
  return (
    <section className="relative bg-surface-alt py-14 border-t border-border-wood overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, #7B4F2E 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-6">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-muted"
          style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
          Confiado por famílias de
        </p>
        <div className="flex items-center gap-8 flex-wrap justify-center">
          {logos.map((l, i) => (
            <motion.div key={l.abbr}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-1.5"
              title={l.full}>
              <span className="border border-border-default rounded-badge px-5 py-2 font-bold text-stone-light tracking-widest text-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
                {l.abbr}
              </span>
              <span className="text-[9px] text-text-muted tracking-wide"
                style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
                {l.full}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

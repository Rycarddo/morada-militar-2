"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Encontrei exatamente o que procurava: um lugar seguro, bem localizado e com uma vizinhança que entende a nossa rotina militar. A equipe foi extremamente profissional durante todo o processo.",
    name: "Ten. Coronel Ricardo Farias",
    rank: "Tenente-Coronel · COMAR VII — Manaus/AM",
  },
  {
    quote: "Depois de três transferências em cinco anos, a Morada do Militar foi a primeira vez que me senti em casa de verdade. A comunidade aqui é diferente — todos se entendem.",
    name: "Sgt. Ana Paula Mendes",
    rank: "Sargento · Exército Brasileiro — 7ª Região",
  },
  {
    quote: "O acabamento do apartamento superou nossas expectativas. Para quem passa anos em alojamentos, morar aqui é um privilégio real. Recomendo sem hesitar.",
    name: "1º Ten. Carlos Oliveira",
    rank: "Primeiro-Tenente · Marinha do Brasil",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section id="depoimentos" className="bg-surface-page py-28 border-t border-border-wood overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-[11px] tracking-[0.25em] uppercase text-text-muted mb-20 flex items-center justify-center gap-3"
          style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
          <span className="h-px w-8 inline-block bg-wood-border" />
          Depoimentos
          <span className="h-px w-8 inline-block bg-wood-border" />
        </motion.p>

        <div className="relative">
          {/* Decorative large quote — gold */}
          <span aria-hidden className="absolute -top-10 -left-4 text-[180px] leading-none select-none pointer-events-none text-gold"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", opacity: 0.06, lineHeight: 1 }}>
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}>
              {/* Quote */}
              <blockquote className="text-text-primary italic leading-relaxed text-center mb-10 relative z-10"
                style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: "clamp(18px, 2.2vw, 28px)", lineHeight: 1.6 }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Wood bar */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-0.5 bg-wood" />
              </div>

              {/* Author */}
              <div className="text-center">
                <p className="font-semibold text-text-primary text-base mb-1"
                  style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
                  {t.name}
                </p>
                <p className="text-text-muted text-sm"
                  style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
                  {t.rank}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <button onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-button border border-border-default flex items-center justify-center text-text-muted hover:border-wood hover:text-text-primary transition-all duration-200"
            aria-label="Anterior">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-gold" : "w-2 bg-border-default"}`}
                aria-label={`Depoimento ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => setCurrent(c => (c + 1) % testimonials.length)}
            className="w-10 h-10 rounded-button border border-border-default flex items-center justify-center text-text-muted hover:border-wood hover:text-text-primary transition-all duration-200"
            aria-label="Próximo">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

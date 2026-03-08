"use client";
import { motion } from "framer-motion";


function IconDoor() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
      <rect x="10" y="5" width="20" height="30" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 35h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="27" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
      <path d="M10 4h14l8 8v24H10V4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M24 4v8h8" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M15 20h10M15 25h7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
      {/* Roof */}
      <path d="M5 19L20 7l15 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {/* Walls */}
      <path d="M9 16v16h22V16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {/* Heart inside */}
      <path d="M20 28c0 0-6-4-6-8a4 4 0 018 0 4 4 0 018 0c0 4-6 8-10 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const steps = [
  {
    roman: "I",
    title: "Visite",
    desc: "Agende uma visita presencial sem compromisso. Conheça os ambientes, a vizinhança e tire todas as suas dúvidas.",
    Icon: IconDoor,
  },
  {
    roman: "II",
    title: "Formalize",
    desc: "Documentação simplificada para militares. Processo desburocratizado com suporte completo da nossa equipe.",
    Icon: IconDocument,
  },
  {
    roman: "III",
    title: "More",
    desc: "Receba as chaves e comece a escrever um novo capítulo. Sua família merece esse lar.",
    Icon: IconHome,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface-deep py-16 md:py-28 border-t border-border-wood overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-20 max-w-xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-text-muted mb-4 font-medium flex items-center gap-3"
            style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
            <span className="h-px w-6 inline-block bg-wood-border" />
            O Processo
          </p>
          <h2 className="font-display font-bold text-text-primary leading-tight"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: "clamp(32px, 4vw, 52px)" }}>
            Como Funciona
          </h2>
        </motion.div>

        {/* 3-column grid of steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-t-[3px] border-wood p-10 bg-transparent hover:bg-surface-page/50 transition-colors duration-300 group"
              style={{
                borderRight: i < steps.length - 1 ? "1px solid rgba(123,79,46,0.20)" : "none",
              }}>
              {/* Roman numeral */}
              <div className="text-gold font-bold mb-6 leading-none opacity-80"
                style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 52 }}>
                {step.roman}
              </div>
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-text-muted group-hover:text-gold transition-colors duration-200">
                  <step.Icon />
                </div>
                <h3 className="font-display font-bold text-text-primary text-xl"
                  style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}>
                  {step.title}
                </h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

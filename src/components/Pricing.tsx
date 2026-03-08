"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Loft Compacto",
    description: "Perfeito para militares solteiros ou em trânsito.",
    price: "1.500",
    period: "/mês",
    features: [
      "1 quarto",
      "45 m² totais",
      "Mobiliado completo",
      "Vaga de garagem",
    ],
    cta: "Quero este plano",
    popular: false,
    ctaHref: "#contato",
  },
  {
    name: "Apartamento Família",
    description: "Espaço ideal para a família acompanhar o militar.",
    price: "2.200",
    period: "/mês",
    features: [
      "2 quartos",
      "72 m² totais",
      "Mobiliado premium",
      "2 vagas de garagem",
      "Condomínio incluso",
      "Localização estratégica",
    ],
    cta: "Quero este plano",
    popular: true,
    badge: "Mais Procurado",
    ctaHref: "#contato",
  },
  {
    name: "Cobertura Premium",
    description: "Para quem busca o máximo em conforto e privacidade.",
    price: "3.800",
    period: "/mês",
    features: [
      "3 quartos",
      "120 m² totais",
      "Acabamento exclusivo",
      "3 vagas de garagem",
      "Terraço privativo",
      "Segurança reforçada",
      "Portaria 24h",
      "Área de lazer",
    ],
    cta: "Saiba mais",
    popular: false,
    ctaHref: "#contato",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Pricing() {
  return (
    <section id="condicoes" className="bg-surface-mid py-28 border-t border-border-wood overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-text-muted mb-4 font-medium flex items-center justify-center gap-3"
            style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
            <span className="h-px w-8 bg-wood-border inline-block" />
            Condições
            <span className="h-px w-8 bg-wood-border inline-block" />
          </p>
          <h2 className="font-display font-bold text-text-primary"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: "clamp(30px, 4vw, 48px)" }}>
            Escolha o seu Plano
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative flex flex-col rounded-card overflow-hidden ${
                plan.popular
                  ? "bg-surface-page border border-border-gold shadow-gold"
                  : "bg-surface-page border border-border-subtle"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && plan.badge && (
                <div className="absolute top-4 right-4">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-badge text-[10px] font-bold tracking-wider uppercase bg-gold-subtle text-gold border border-border-gold"
                    style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Top wood border on featured */}
              {plan.popular && <div className="h-[3px] bg-gold w-full" />}

              <div className="p-7 flex-1 flex flex-col">
                {/* Plan name */}
                <p
                  className="font-semibold text-text-primary text-lg mb-1"
                  style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
                >
                  {plan.name}
                </p>
                <p
                  className="text-text-muted text-sm mb-6 leading-snug"
                  style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-8">
                  <span
                    className="text-text-muted text-sm mb-1.5"
                    style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                  >
                    R$
                  </span>
                  <span
                    className="font-bold text-gold leading-none"
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: "clamp(36px, 3.5vw, 44px)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-text-muted text-sm mb-1.5"
                    style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-sm">→</span>
                      <span
                        className="text-text-secondary text-sm"
                        style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={`inline-flex items-center justify-center w-full py-3.5 rounded-button font-semibold text-sm transition-colors duration-200 tracking-wide ${
                    plan.popular
                      ? "bg-accent text-text-on-accent hover:bg-accent-hover"
                      : "border border-border-wood text-text-primary hover:bg-wood-subtle"
                  }`}
                  style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-text-muted text-xs mt-10"
          style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
        >
          * Preços sujeitos à disponibilidade. Condições especiais para pagamento adiantado.
          Entre em contato para uma proposta personalizada.
        </motion.p>
      </div>
    </section>
  );
}

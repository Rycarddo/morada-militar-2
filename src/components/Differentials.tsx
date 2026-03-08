"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import mobiliado from "@/img/quarto-1.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ── SVG: Mapa tático abstrato de Manaus ── */
function MapSVG() {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background — warm parchment */}
      <rect width="480" height="400" fill="#F2EFEB" />

      {/* Street grid - horizontal */}
      <line
        x1="0"
        y1="120"
        x2="480"
        y2="120"
        stroke="#C4BFB8"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="200"
        x2="480"
        y2="200"
        stroke="#C4BFB8"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="280"
        x2="480"
        y2="280"
        stroke="#B8B3AB"
        strokeWidth="1.5"
      />
      <line
        x1="0"
        y1="340"
        x2="480"
        y2="340"
        stroke="#C4BFB8"
        strokeWidth="1"
      />

      {/* Street grid - vertical */}
      <line
        x1="100"
        y1="0"
        x2="100"
        y2="400"
        stroke="#C4BFB8"
        strokeWidth="1"
      />
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="400"
        stroke="#B8B3AB"
        strokeWidth="1.5"
      />
      <line
        x1="300"
        y1="0"
        x2="300"
        y2="400"
        stroke="#C4BFB8"
        strokeWidth="1"
      />
      <line
        x1="380"
        y1="0"
        x2="380"
        y2="400"
        stroke="#C4BFB8"
        strokeWidth="1"
      />

      {/* Blocks */}
      <rect x="110" y="130" width="80" height="60" rx="2" fill="#E3DDD6" />
      <rect x="210" y="130" width="80" height="60" rx="2" fill="#E3DDD6" />
      <rect x="110" y="210" width="80" height="60" rx="2" fill="#E3DDD6" />
      <rect x="310" y="130" width="60" height="60" rx="2" fill="#E3DDD6" />
      <rect x="210" y="210" width="80" height="60" rx="2" fill="#E3DDD6" />
      <rect x="310" y="210" width="60" height="60" rx="2" fill="#E3DDD6" />
      <rect x="110" y="290" width="80" height="40" rx="2" fill="#E3DDD6" />
      <rect x="210" y="290" width="80" height="40" rx="2" fill="#E3DDD6" />
      <rect x="20" y="130" width="70" height="140" rx="2" fill="#E3DDD6" />
      <rect x="390" y="130" width="80" height="140" rx="2" fill="#E3DDD6" />

      {/* Dashed lines to landmarks */}
      <line
        x1="240"
        y1="200"
        x2="80"
        y2="100"
        stroke="#E8A020"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        strokeOpacity="0.7"
      />
      <line
        x1="240"
        y1="200"
        x2="400"
        y2="100"
        stroke="#E8A020"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        strokeOpacity="0.7"
      />
      <line
        x1="240"
        y1="200"
        x2="80"
        y2="330"
        stroke="#E8A020"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        strokeOpacity="0.7"
      />
      <line
        x1="240"
        y1="200"
        x2="420"
        y2="340"
        stroke="#E8A020"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        strokeOpacity="0.7"
      />

      {/* Landmark labels */}
      <rect
        x="22"
        y="60"
        width="110"
        height="30"
        rx="2"
        fill="#D4CEBF"
        stroke="#A09890"
        strokeWidth="1"
      />
      <text
        x="77"
        y="80"
        textAnchor="middle"
        fill="#1E1A16"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="800"
      >
        BAMN · 11 min
      </text>

      <rect
        x="345"
        y="60"
        width="110"
        height="30"
        rx="2"
        fill="#D4CEBF"
        stroke="#A09890"
        strokeWidth="1"
      />
      <text
        x="400"
        y="80"
        textAnchor="middle"
        fill="#1E1A16"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="800"
      >
        4° BAvEx · 13 min
      </text>

      <rect
        x="22"
        y="310"
        width="110"
        height="30"
        rx="2"
        fill="#D4CEBF"
        stroke="#A09890"
        strokeWidth="1"
      />
      <text
        x="77"
        y="330"
        textAnchor="middle"
        fill="#1E1A16"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="800"
      >
        Hospital · 13 min
      </text>

      <rect
        x="348"
        y="320"
        width="105"
        height="30"
        rx="2"
        fill="#D4CEBF"
        stroke="#A09890"
        strokeWidth="1"
      />
      <text
        x="400"
        y="340"
        textAnchor="middle"
        fill="#1E1A16"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="800"
      >
        Centro · 15 min
      </text>

      {/* Property marker - pulsing dot */}
      <circle cx="240" cy="200" r="18" fill="#E8A020" fillOpacity="0.20">
        <animate
          attributeName="r"
          values="14;22;14"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.20;0.06;0.20"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="240" cy="200" r="8" fill="#E8A020" fillOpacity="0.9" />
      <circle cx="240" cy="200" r="4" fill="#3A2800" />
    </svg>
  );
}

/* ── SVG: Rede comunitária / constelação ── */
function CommunityNetworkSVG() {
  const nodes = [
    { cx: 240, cy: 190, r: 14, primary: true },
    { cx: 120, cy: 120, r: 7, primary: false },
    { cx: 360, cy: 120, r: 7, primary: false },
    { cx: 80, cy: 240, r: 7, primary: false },
    { cx: 400, cy: 250, r: 7, primary: false },
    { cx: 155, cy: 300, r: 7, primary: false },
    { cx: 325, cy: 300, r: 7, primary: false },
    { cx: 200, cy: 80, r: 6, primary: false },
    { cx: 300, cy: 70, r: 6, primary: false },
    { cx: 430, cy: 170, r: 6, primary: false },
    { cx: 50, cy: 160, r: 6, primary: false },
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 7],
    [2, 8],
    [2, 9],
    [1, 10],
    [3, 10],
    [4, 9],
    [5, 3],
    [6, 4],
    [1, 2],
    [5, 6],
  ];

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background — warm dark slate */}
      <rect width="480" height="400" fill="#F2EFEB" />

      {/* Connections */}
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="#7B4F2E"
          strokeWidth="1"
          strokeOpacity="0.30"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r * 2.2}
            fill={n.primary ? "#E8A020" : "#7B4F2E"}
            fillOpacity={n.primary ? 0.2 : 0.12}
          >
            <animate
              attributeName="r"
              values={`${n.r * 1.8};${n.r * 2.8};${n.r * 1.8}`}
              dur={`${2 + ((i * 0.31) % 2)}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              values={n.primary ? "0.20;0.07;0.20" : "0.12;0.04;0.12"}
              dur={`${2 + ((i * 0.31) % 2)}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill={n.primary ? "#E8A020" : "#7B4F2E"}
            fillOpacity={n.primary ? 0.9 : 0.55}
          />
          {n.primary && (
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r * 0.45}
              fill="#3A2800"
              fillOpacity="0.9"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

/* ── Differentials data ── */
interface Differential {
  id: number;
  roman: string;
  romanLabel: string;
  title: string;
  text: string;
  bgSection: string;
  reverse: boolean;
  visual: string;
  distances?: { label: string; dist: string }[];
  bullets?: string[];
  testimonial?: { quote: string; name: string; unit: string };
  finishes?: { label: string; detail: string }[];
}

const differentials: Differential[] = [
  {
    id: 1,
    roman: "I",
    romanLabel: "Localização",
    title: "Localização Estratégica",
    text: "No coração do Japiim — a 1 min de mercadinhos, 2 min da Lagoa, com acesso rápido à BAMN, 4° BAvEx, Hospital 28 de Agosto e ao Centro de Manaus.",
    distances: [
      { label: "Mercadinhos", dist: "1 min" },
      { label: "Lagoa do Japiim", dist: "2 min" },
      { label: "UFAM", dist: "5 min" },
      { label: "Atacadão / Baratão da Carne", dist: "5 min" },
      { label: "BAMN", dist: "11 min" },
      { label: "4° BAvEx", dist: "13 min" },
      { label: "Hospital 28 de Agosto", dist: "13 min" },
      { label: "Centro de Manaus", dist: "15 min" },
    ],
    bgSection: "bg-surface-page",
    reverse: false,
    visual: "map",
  },
  {
    id: 3,
    roman: "II",
    romanLabel: "Comunidade",
    title: "Comunidade Militar",
    text: "Um ambiente pensado exclusivamente para famílias militares — vizinhança de confiança, respeito mútuo e rede de apoio genuína.",
    bgSection: "bg-surface-alt",
    reverse: true,
    visual: "network",
  },
  {
    id: 4,
    roman: "III",
    romanLabel: "Mobiliado",
    title: "100% Mobiliado",
    text: "Apartamento entregue com tudo o que você precisa desde o primeiro dia. Móveis, eletrodomésticos e cama — é só chegar e morar.",
    finishes: [
      { label: "Sala", detail: "Sofá + rack + mesa" },
      { label: "Quarto", detail: "Cama + Arara + AC + Gaveteiro" },
      { label: "Cozinha", detail: "Fogão + geladeira" },
      { label: "Lavanderia", detail: "Máquina de lavar + Secadora" },
    ],
    bgSection: "bg-surface-mid",
    reverse: true,
    visual: "photo",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="overflow-hidden">
      {differentials.map((diff) => (
        <motion.div
          key={diff.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className={`relative ${diff.bgSection} border-t border-border-wood`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 ${diff.reverse ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Visual side */}
              <div
                className={`relative overflow-hidden ${diff.reverse ? "lg:[direction:ltr]" : ""}`}
                style={{ minHeight: 260 }}
              >
                {diff.visual === "map" && <MapSVG />}
                {diff.visual === "network" && <CommunityNetworkSVG />}
                {diff.visual === "photo" && (
                  <div className="relative w-full h-full min-h-[400px]">
                    <div className="absolute inset-0 bg-surface-mid">
                      <Image
                        src={mobiliado}
                        alt="Apartamento mobiliado — Quarto"
                        fill
                        className="object-cover rounded-card"
                      />
                    </div>
                    {/* Badge */}
                    <div
                      className="absolute top-6 left-6 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-badge tracking-wide"
                      style={{
                        background: "rgba(139,26,26,0.90)",
                        color: "#ffffff",
                      }}
                    >
                      100% Mobiliado
                    </div>
                  </div>
                )}
              </div>

              {/* Text side */}
              <div
                className={`flex flex-col justify-center py-10 lg:py-16 ${
                  diff.reverse ? "lg:[direction:ltr] lg:pr-16" : "lg:pl-16"
                }`}
              >
                {/* Wood-bordered text column */}
                <div className="border-l-[3px] border-wood pl-8 flex flex-col gap-6">
                  <p
                    className="text-[11px] tracking-[0.25em] uppercase text-text-muted font-medium"
                    style={{
                      fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                    }}
                  >
                    <span className="text-gold mr-2">{diff.roman}</span>—{" "}
                    {diff.romanLabel}
                  </p>

                  <h2
                    className="font-display font-bold text-text-primary leading-tight"
                    style={{
                      fontFamily:
                        "var(--font-playfair, 'Playfair Display', serif)",
                      fontSize: "clamp(28px, 3vw, 42px)",
                    }}
                  >
                    {diff.title}
                  </h2>

                  <p
                    className="text-text-secondary leading-relaxed max-w-md"
                    style={{
                      fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                      fontSize: "clamp(15px, 1.2vw, 17px)",
                    }}
                  >
                    {diff.text}
                  </p>

                  {/* Distances */}
                  {diff.distances && (
                    <ul className="space-y-2">
                      {diff.distances.map((d) => (
                        <li
                          key={d.label}
                          className="flex items-center gap-3 text-sm text-text-secondary"
                        >
                          <span className="text-gold">→</span>
                          <span
                            className="font-mono text-gold text-xs"
                            style={{
                              fontFamily:
                                "var(--font-mono, 'JetBrains Mono', monospace)",
                            }}
                          >
                            {d.dist}
                          </span>
                          {d.label}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Bullets */}
                  {diff.bullets && (
                    <ul className="space-y-2">
                      {diff.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-gold mt-0.5 flex-shrink-0">
                            →
                          </span>
                          <span
                            className="text-text-secondary text-sm leading-relaxed"
                            style={{
                              fontFamily:
                                "var(--font-sans, 'DM Sans', sans-serif)",
                            }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Testimonial inline */}
                  {diff.testimonial && (
                    <div className="border-l-2 border-wood pl-4 mt-2">
                      <p
                        className="text-text-primary italic text-base leading-relaxed mb-2"
                        style={{
                          fontFamily:
                            "var(--font-playfair, 'Playfair Display', serif)",
                        }}
                      >
                        &ldquo;{diff.testimonial.quote}&rdquo;
                      </p>
                      <p
                        className="text-text-muted text-sm"
                        style={{
                          fontFamily: "var(--font-sans, 'DM Sans', sans-serif)",
                        }}
                      >
                        {diff.testimonial.name} · {diff.testimonial.unit}
                      </p>
                    </div>
                  )}

                  {/* Finishes grid */}
                  {diff.finishes && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {diff.finishes.map((f) => (
                        <div
                          key={f.label}
                          className="bg-surface-deep border border-border-subtle rounded-card p-4"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 mb-2"
                            fill="none"
                            stroke="#E8A020"
                            strokeWidth="1.5"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="1" />
                            <path
                              d="M9 9h6M9 12h6M9 15h4"
                              strokeLinecap="round"
                            />
                          </svg>
                          <p
                            className="text-text-muted text-xs mb-0.5 uppercase tracking-wide"
                            style={{
                              fontFamily:
                                "var(--font-sans, 'DM Sans', sans-serif)",
                            }}
                          >
                            {f.label}
                          </p>
                          <p
                            className="text-text-primary text-sm font-medium"
                            style={{
                              fontFamily:
                                "var(--font-mono, 'JetBrains Mono', monospace)",
                            }}
                          >
                            {f.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

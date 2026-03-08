"use client";

import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

import sala1 from "@/img/sala-1.webp";
import sala2 from "@/img/sala-2.webp";
import sala3 from "@/img/sala-3.webp";
import quarto1 from "@/img/quarto-1.webp";
import quarto2 from "@/img/quarto-2.webp";
import quarto3 from "@/img/quarto-3.webp";
import cozinha1 from "@/img/cozinha-1.webp";
import cozinha2 from "@/img/cozinha-2.webp";
import cozinha3 from "@/img/cozinha-3.webp";
import banheiro1 from "@/img/banheiro-1.webp";
import banheiro2 from "@/img/banheiro-2.webp";
import areaServico1 from "@/img/area-servico-1.webp";
import areaServico2 from "@/img/area-servico-2.webp";

interface GalleryItem {
  src: StaticImageData;
  alt: string;
  label: string;
}

const items: GalleryItem[] = [
  { src: sala1,        alt: "Sala de estar",    label: "Sala de Estar" },
  { src: quarto1,      alt: "Quarto principal", label: "Quarto" },
  { src: cozinha1,     alt: "Cozinha integrada",label: "Cozinha" },
  { src: sala2,        alt: "Sala de estar",    label: "Sala de Estar" },
  { src: banheiro2,    alt: "Banheiro",         label: "Banheiro" },
  { src: quarto2,      alt: "Quarto",           label: "Quarto" },
  { src: cozinha2,     alt: "Cozinha",          label: "Cozinha" },
  { src: sala3,        alt: "Sala",             label: "Sala" },
  { src: quarto3,      alt: "Quarto",           label: "Quarto" },
  { src: cozinha3,     alt: "Cozinha",          label: "Cozinha" },
  { src: areaServico1, alt: "Área de serviço",  label: "Área de Serviço" },
  { src: areaServico2, alt: "Área de serviço",  label: "Área de Serviço" },
];

const tabs = ["Todos", "Sala", "Quarto", "Cozinha", "Banheiro", "Área de Serviço"];

function filterItems(tab: string): GalleryItem[] {
  if (tab === "Todos") return items;
  return items.filter((i) => i.label.startsWith(tab));
}

/* ── Lightbox ── */
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.88)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Fechar"
        style={{
          position: "absolute", top: 20, right: 20, zIndex: 10,
          width: 44, height: 44, borderRadius: "50%",
          background: "rgba(0,0,0,0.70)", border: "1px solid rgba(255,255,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "#ffffff",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" width="20" height="20">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div style={{ position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.6)", fontSize: 12, fontFamily: "monospace", letterSpacing: "0.15em" }}>
        {index + 1} / {items.length}
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
        style={{
          position: "absolute", left: 16, zIndex: 10,
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(0,0,0,0.70)", border: "1px solid rgba(255,255,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" width="22" height="22">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Image container */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.22 }}
        style={{ position: "relative", width: "90vw", maxWidth: 900, height: "80vh", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(123,79,46,0.40)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="90vw"
          priority
        />
        {/* Label */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)", padding: "20px 20px 16px" }}>
          <span style={{ color: "#ffffff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}>
            {item.label}
          </span>
        </div>
      </motion.div>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Próxima"
        style={{
          position: "absolute", right: 16, zIndex: 10,
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(0,0,0,0.70)", border: "1px solid rgba(255,255,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" width="22" height="22">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = filterItems(active);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const gotoPrev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const gotoNext = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") gotoPrev();
      if (e.key === "ArrowRight") gotoNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, gotoPrev, gotoNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section
        id="apartamento"
        className="bg-surface-alt py-16 md:py-28 border-t border-border-wood overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p
              className="text-[11px] tracking-[0.25em] uppercase text-text-muted mb-4 font-medium flex items-center gap-3"
              style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
            >
              <span className="h-px w-6 inline-block bg-wood-border" />
              O Apartamento
            </p>
            <h2
              className="font-display font-bold text-text-primary leading-tight"
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
                fontSize: "clamp(30px, 4vw, 48px)",
              }}
            >
              Cada detalhe, pensado para você.
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-4 py-2 rounded-button text-sm font-medium transition-all duration-200 tracking-wide ${
                  active === tab
                    ? "bg-wood text-text-on-accent"
                    : "border border-border-default text-text-muted hover:border-border-wood hover:text-text-primary"
                }`}
                style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.alt}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`relative overflow-hidden rounded-card group cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "auto" : "4/3", minHeight: i === 0 ? 400 : 180 }}
                onClick={() => setLightboxIndex(i)}
              >
                {/* Wood frame on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-border-wood transition-colors duration-300 rounded-card z-10 pointer-events-none" />

                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />

                {/* Label overlay — white text on dark gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)", padding: "16px 12px 10px" }}
                >
                  <span style={{ color: "#ffffff", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={gotoPrev}
            onNext={gotoNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}

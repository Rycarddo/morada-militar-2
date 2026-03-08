import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-page": "#1A1C1C",
        "surface-alt": "#212424",
        "surface-mid": "#2D3030",
        "surface-deep": "#0D0F0F",
        "surface-elevated": "rgba(13,15,15,0.96)",
        "text-primary": "#FAF8F5",
        "text-secondary": "#C8C8C8",
        "text-muted": "#6A6E6E",
        "text-on-accent": "#FFFFFF",
        "accent": "#8B1A1A",
        "accent-hover": "#6E1515",
        "accent-subtle": "rgba(139,26,26,0.12)",
        "wood": "#7B4F2E",
        "wood-subtle": "rgba(123,79,46,0.12)",
        "wood-border": "rgba(123,79,46,0.40)",
        "gold": "#E8A020",
        "gold-subtle": "rgba(232,160,32,0.10)",
        "stone": "#3D4040",
        "stone-light": "#C8C8C8",
        "border-default": "#3D4040",
        "border-subtle": "#272A2A",
        "border-wood": "rgba(123,79,46,0.40)",
        "border-gold": "rgba(232,160,32,0.30)",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        card: "4px",
        button: "4px",
        badge: "3px",
        input: "4px",
      },
      boxShadow: {
        card: "0 4px 32px rgba(0,0,0,0.30)",
        nav: "0 1px 24px rgba(0,0,0,0.40)",
        float: "0 8px 48px rgba(0,0,0,0.50)",
        gold: "0 0 20px rgba(232,160,32,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

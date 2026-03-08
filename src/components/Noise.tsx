// Adds noise grain texture overlay to a section
export default function Noise({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden z-[1]"
    >
      <svg
        className="absolute inset-0 w-[200%] h-[200%] opacity-[0.035]"
        style={{ animation: "noiseAnim 8s steps(1) infinite" }}
      >
        <filter id={dark ? "noise-dark" : "noise-light"}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${dark ? "noise-dark" : "noise-light"})`}
          opacity={dark ? "0.04" : "0.03"}
        />
      </svg>
    </div>
  );
}

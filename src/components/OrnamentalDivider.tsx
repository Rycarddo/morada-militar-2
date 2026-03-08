// Ornamental medieval section divider: ——◆——
export default function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-0 py-2 ${className}`} aria-hidden>
      <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(to right, transparent, rgba(123,79,46,0.40))" }} />
      <svg width="14" height="14" viewBox="0 0 14 14" className="mx-3 flex-shrink-0" style={{ color: "rgba(123,79,46,0.60)" }}>
        <path d="M7 0L14 7L7 14L0 7Z" fill="currentColor" />
      </svg>
      <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(to left, transparent, rgba(123,79,46,0.40))" }} />
    </div>
  );
}

import { SPONSORS } from "@/lib/site-shared";

export function SponsorTicker() {
  const items = SPONSORS.map((s) => ({
    name: s.name,
    image: s.image,
    url: s.url,
  }));

  const track = [...items, ...items, ...items, ...items];

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-[#d4af37]/30 bg-black/95 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="pointer-events-auto flex shrink-0 items-center gap-2 border-r border-[#d4af37]/30 bg-[#0b0b0b] px-4 py-3 sm:px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37] sm:text-[11px]">
            Powered By
          </span>
        </div>
        <div className="sponsor-ticker pointer-events-auto flex min-w-0 flex-1 items-center overflow-hidden py-3">
          <div className="sponsor-ticker-track flex items-center gap-8 sm:gap-12">
            {track.map((s, i) => (
              <a
                key={`${s.name}-${i}`}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex shrink-0 items-center gap-3"
                aria-label={s.name}
              >
                <span className="font-[Orbitron] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f5f5]/70 transition-colors group-hover:text-[#d4af37] sm:text-xs">
                  {s.name}
                </span>
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-5 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100 sm:h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

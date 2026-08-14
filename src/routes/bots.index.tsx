import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { BOTS, PageHero, PageShell } from "@/lib/site-shared";

export const Route = createFileRoute("/bots/")({
  head: () => ({
    meta: [
      { title: "Our Bots — Team Black Diamond Robotics" },
      { name: "description", content: "Explore Hyperion, Scarlet, Polaris and Lucian — the combat robots built by Team Black Diamond Robotics across the 8 kg and 15 kg classes." },
      { property: "og:title", content: "Our Combat Robots — Black Diamond Robotics" },
      { property: "og:description", content: "Specifications, drive systems and competition history for every machine in our fleet." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://black-diamond-robotics.lovable.app/bots" }],
  }),
  component: BotsPage,
});

function BotsPage() {
  const [activeClass, setActiveClass] = useState<"all" | "8" | "15">("all");

  const filters = [
    { value: "all" as const, label: "All" },
    { value: "8" as const, label: "8 kg" },
    { value: "15" as const, label: "15 kg" },
  ];

  const filteredBots = activeClass === "all"
    ? BOTS
    : BOTS.filter((b) => b.weightClass === Number(activeClass));

  return (
    <PageShell>
      <PageHero
        eyebrow="Our Arsenal"
        title={<>Our <span className="gold-gradient">Bots</span></>}
        subtitle="Four competition-ready machines across the 8 kg and 15 kg classes. Filter by weight class and select a robot for full specifications and competition history."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-10 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#f5f5f5]/50">
            <Filter className="h-3.5 w-3.5" /> Filter by class
          </span>
          {filters.map((f) => {
            const isActive = activeClass === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveClass(f.value)}
                className={[
                  "rounded-full border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] transition-all",
                  isActive
                    ? "border-transparent bg-[#d4af37] text-[#0b0b0b]"
                    : "border-[#d4af37]/40 text-[#d4af37] hover:border-[#d4af37] hover:bg-[#d4af37]/10",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBots.map((b) => (
            <Link
              key={b.slug}
              to="/bots/$slug"
              params={{ slug: b.slug }}
              className="reveal group flex flex-col overflow-hidden rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] transition-colors hover:border-[#d4af37]/60"
            >
              <img src={b.image} alt={b.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-[Orbitron] text-base font-bold uppercase tracking-widest">{b.name}</h2>
                <div className="mt-3 space-y-1 text-[11px] uppercase tracking-widest">
                  <div><span className="text-[#f5f5f5]/45">Weight</span> <span className="text-[#d4af37]">{b.weight}</span></div>
                  <div><span className="text-[#f5f5f5]/45">Weapon</span> <span className="text-[#d4af37]">{b.weapon}</span></div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#f5f5f5]/65">{b.desc}</p>
                <span className="mt-auto pt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  View robot <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredBots.length === 0 && (
          <div className="reveal py-16 text-center text-sm text-[#f5f5f5]/60">
            No robots found in this weight class.
          </div>
        )}

        <div className="reveal mt-10 rounded-sm border border-dashed border-[#d4af37]/25 bg-[#0e0e0e] p-8 text-center">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Future Bots</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#f5f5f5]/65">
            New machines are currently in design and fabrication. Details will be published here
            once they are competition-ready.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

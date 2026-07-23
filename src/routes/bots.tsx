import { createFileRoute } from "@tanstack/react-router";
import { BOTS, PageShell, SectionHeader } from "@/lib/site-shared";

export const Route = createFileRoute("/bots")({
  head: () => ({
    meta: [
      { title: "Our Bots — Black Diamond Robotics" },
      { name: "description", content: "Meet HYPERION, SCARLET, POLARIS and LUCIAN — the combat robots built by Team Black Diamond for RoboWar competitions." },
      { property: "og:title", content: "Our Bots — Black Diamond Robotics" },
      { property: "og:description", content: "HYPERION, SCARLET, POLARIS and LUCIAN — our combat robot arsenal." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BotsPage,
});

function BotsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Our Arsenal" title={<>Our <span className="gold-gradient">Bots</span></>} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BOTS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="reveal group metallic-border flex h-full flex-col rounded-md p-7 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.4)]"
              >
                <div className="mb-6 relative aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-[#1a1a1a] to-black gold-border">
                  {b.image ? (
                    <img
                      src={b.image}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon className="h-16 w-16 text-[#d4af37]/70" strokeWidth={1} />
                    </div>
                  )}
                </div>
                <h3 className="font-[Orbitron] text-lg font-bold uppercase tracking-wider text-[#f5f5f5]">
                  {b.name}
                </h3>
                <div className="mt-3 space-y-1 text-xs uppercase tracking-widest">
                  <div><span className="text-[#f5f5f5]/50">Weight</span> <span className="text-[#d4af37]">{b.weight}</span></div>
                  <div><span className="text-[#f5f5f5]/50">Weapon</span> <span className="text-[#d4af37]">{b.weapon}</span></div>
                </div>
                <p className="mt-4 text-sm text-[#f5f5f5]/70">{b.desc}</p>
                {b.specs.length > 0 && (
                  <ul className="mt-auto space-y-2 pt-5 text-xs text-[#f5f5f5]/70">
                    {b.specs.map((s, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#d4af37]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
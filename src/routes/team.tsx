import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { PageHero, PageShell, TEAM } from "@/lib/site-shared";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Team Black Diamond Robotics" },
      { name: "description", content: "Meet the 15 students behind Team Black Diamond Robotics — the designers, builders, drivers and strategists who make the bots battle-ready." },
      { property: "og:title", content: "Our Team — Team Black Diamond Robotics" },
      { property: "og:description", content: "Meet the 15 students behind Team Black Diamond Robotics — the designers, builders, drivers and strategists who make the bots battle-ready." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://diamond-force-forge.lovable.app/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Crew"
        title={<>Our <span className="gold-gradient">Team</span></>}
        subtitle="The students behind the machines. Mechanical, electronics, fabrication, drive, media and strategy — every role matters inside the arena."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <section className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="reveal group rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-5 text-center transition-colors hover:border-[#d4af37]/50"
            >
              <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-[#d4af37]/40 bg-black">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Users className="h-8 w-8 text-[#d4af37]/70" strokeWidth={1} />
                )}
              </div>
              <h3 className="mt-5 font-[Orbitron] text-xs font-bold uppercase tracking-widest">
                {m.name}
              </h3>
              {m.role && (
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                  {m.role}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="reveal mt-24 border-t border-[#d4af37]/15 pt-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[Orbitron] text-xl font-black uppercase tracking-widest text-[#d4af37]">
              Join the Team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/70">
              We are always looking for driven students who love engineering, competition and the
              thrill of making machines fight. If you want to build robots with us, apply for the
              next recruitment cycle.
            </p>
            <a
              href="/join"
              className="mt-6 inline-flex items-center gap-2 border border-[#d4af37]/60 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
            >
              Apply Now
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

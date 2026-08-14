import { createFileRoute } from "@tanstack/react-router";
import galleryYroboAsset from "@/assets/gallery-yrobo.jpg.asset.json";
import galleryTeamArenaAsset from "@/assets/gallery-team-arena.jpg.asset.json";
import { ACHIEVEMENTS, PageHero, PageShell } from "@/lib/site-shared";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Team Black Diamond Robotics" },
      { name: "description", content: "Competition record of Team Black Diamond Robotics including wins at BITS Quark, AXIS VNIT, NIT Karnataka, MINDBEND SVNIT and a podium at Y ROBO C Malaysia." },
      { property: "og:title", content: "Achievements — Black Diamond Robotics" },
      { property: "og:description", content: "National and international podiums earned by our combat robots." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://black-diamond-robotics.lovable.app/achievements" }],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Track Record"
        title={<>Our <span className="gold-gradient">Achievements</span></>}
        subtitle="Results earned across national tech festivals and international robot combat events."
      />
      <div className="mx-auto max-w-5xl space-y-16 px-4 sm:px-6">
        <ol className="border-l border-[#d4af37]/25 pl-6">
          {ACHIEVEMENTS.map((a, i) => (
            <li key={i} className="reveal relative pb-8 last:pb-0">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-[#d4af37]" />
              <div className="rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{a.icon}</span>
                  {a.year && <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">{a.year}</span>}
                </div>
                <h2 className="mt-3 font-[Orbitron] text-sm font-bold uppercase tracking-widest">{a.title}</h2>
              </div>
            </li>
          ))}
        </ol>

        <section className="reveal">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Competition Photos</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <img src={galleryYroboAsset.url} alt="Team at Y ROBO C Malaysia" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-sm border border-[#d4af37]/20 object-cover" />
            <img src={galleryTeamArenaAsset.url} alt="Team at the competition arena" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-sm border border-[#d4af37]/20 object-cover" />
          </div>
          <p className="mt-6 text-sm text-[#f5f5f5]/60">
            Award certificates and event videos are added after each competition season.
          </p>
        </section>
      </div>
    </PageShell>
  );
}

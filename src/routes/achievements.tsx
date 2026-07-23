import { createFileRoute } from "@tanstack/react-router";
import { ACHIEVEMENTS, PageShell, SectionHeader } from "@/lib/site-shared";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Black Diamond Robotics" },
      { name: "description", content: "Wins and podiums from Y ROBO C Malaysia, BITS Quark, AXIS VNIT, NIT Karnataka, MINDBEND SVNIT, IIT Bombay and more." },
      { property: "og:title", content: "Achievements — Black Diamond Robotics" },
      { property: "og:description", content: "Trophies, wins and podium finishes from India's top combat robotics arenas." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader eyebrow="Legacy" title={<><span className="gold-gradient">Achievements</span></>} />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className={`reveal relative mb-12 flex items-start gap-6 sm:mb-16 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"}`}
            >
              <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_20px_#d4af37] sm:left-auto sm:right-0 sm:top-4 sm:translate-x-1/2" />
              <div className="ml-10 flex-1 metallic-border rounded-md p-6 sm:ml-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-xs uppercase tracking-widest text-[#d4af37]">{a.year}</span>
                </div>
                <h3 className="mt-2 font-[Orbitron] text-base font-bold uppercase text-[#f5f5f5]">{a.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

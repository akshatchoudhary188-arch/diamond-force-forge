import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { TEAM, PageShell, SectionHeader } from "@/lib/site-shared";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Black Diamond Robotics" },
      { name: "description", content: "The 15-member crew behind Team Black Diamond Robotics — engineers, builders and drivers pushing combat robotics forward." },
      { property: "og:title", content: "Our Team — Black Diamond Robotics" },
      { property: "og:description", content: "Meet the crew forging Black Diamond's combat robots." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="The Crew" title={<>Our <span className="gold-gradient">Team</span></>} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <div
              key={i}
              className="reveal group glass-card rounded-md p-7 text-center transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
            >
              <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1a1a1a] to-black gold-border">
                {m.image ? (
                  <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                ) : (
                  <Users className="h-10 w-10 text-[#d4af37]/70" strokeWidth={1} />
                )}
              </div>
              <h3 className="mt-5 font-[Orbitron] text-base font-bold uppercase tracking-widest text-[#f5f5f5]">
                {m.name}
              </h3>
              {m.role && (
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#d4af37]">{m.role}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

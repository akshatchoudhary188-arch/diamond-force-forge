import { createFileRoute } from "@tanstack/react-router";
import galleryTeamBotsAsset from "@/assets/gallery-team-bots.png.asset.json";
import galleryTeamArenaAsset from "@/assets/gallery-team-arena.jpg.asset.json";
import { PageHero, PageShell, TIMELINE, VALUES } from "@/lib/site-shared";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Team Black Diamond Robotics" },
      { name: "description", content: "Our story, mission, vision, core values, team members and the timeline of Team Black Diamond Robotics." },
      { property: "og:title", content: "About Team Black Diamond Robotics" },
      { property: "og:description", content: "Story, mission, vision, values and the people behind the machines." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://diamond-force-forge.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title={<>Who We <span className="gold-gradient">Are</span></>}
        subtitle="A student-led combat robotics team from Government Engineering College, Chandrapur, building competitive machines from the ground up."
      />

      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6">
        <section className="reveal grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-[Orbitron] text-xl font-black uppercase tracking-widest text-[#d4af37]">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/75">
              Black Diamond Robotics started as a handful of engineering students with a workshop
              corner and a single ambition — to build a combat robot that could survive a national
              arena. Over the following seasons the team grew into a full crew covering mechanical
              design, electronics, fabrication, drive training and media, with a fleet of machines
              across the 8 kg and 15 kg classes.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/75">
              Today the team competes at leading national tech festivals and has represented India
              internationally, while training every new batch of members in-house.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={galleryTeamBotsAsset.url} alt="Team with their combat robots in the workshop" loading="lazy" className="aspect-[4/3] w-full rounded-sm border border-[#d4af37]/20 object-cover" />
            <img src={galleryTeamArenaAsset.url} alt="Team at the competition arena" loading="lazy" className="aspect-[4/3] w-full rounded-sm border border-[#d4af37]/20 object-cover" />
          </div>
        </section>

        <section className="reveal grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-7">
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/75">
              To build reliable, competitive combat robots while giving students genuine hands-on
              engineering experience across design, manufacturing and testing.
            </p>
          </div>
          <div className="rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-7">
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/75">
              To be recognised among India's strongest student combat robotics teams and a
              consistent presence on international podiums.
            </p>
          </div>
        </section>

        <section>
          <h2 className="reveal font-[Orbitron] text-xl font-black uppercase tracking-widest text-[#d4af37]">Core Values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="reveal rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-6">
                <h3 className="font-[Orbitron] text-sm font-bold uppercase tracking-widest">{v.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#f5f5f5]/65">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="reveal font-[Orbitron] text-xl font-black uppercase tracking-widest text-[#d4af37]">Timeline</h2>
          <ol className="mt-8 border-l border-[#d4af37]/25 pl-6">
            {TIMELINE.map((t) => (
              <li key={t.year} className="reveal relative pb-8 last:pb-0">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#d4af37]" />
                <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">{t.year}</div>
                <h3 className="mt-2 font-[Orbitron] text-sm font-bold uppercase tracking-widest">{t.title}</h3>
                <p className="mt-2 text-sm text-[#f5f5f5]/65">{t.desc}</p>
              </li>
            ))}
          </ol>
        </section>

      </div>
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero.jpeg.asset.json";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { ACHIEVEMENTS, BOTS, SPONSORS, STATS, StatItem, useReveal } from "@/lib/site-shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team Black Diamond Robotics — Combat Robotics Team, India" },
      { name: "description", content: "Team Black Diamond Robotics designs, builds and competes with world-class combat robots. Explore our bots, achievements and how to join the team." },
      { property: "og:title", content: "Team Black Diamond Robotics — Combat Robotics Team" },
      { property: "og:description", content: "We design, build and battle world-class combat robots across national and international arenas." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();

  return (
    <>
      <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
        <video
          src={heroVideo.url}
          poster={heroAsset.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      <section className="border-y border-[#d4af37]/15 bg-[#0e0e0e] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
          {STATS.map((s) => <StatItem key={s.label} {...s} />)}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="reveal">
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">About Us</div>
            <h2 className="mt-4 font-[Orbitron] text-2xl font-black uppercase tracking-widest text-[#f5f5f5] sm:text-3xl">
              Engineering built for the arena
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#f5f5f5]/70">
              Based at Government Engineering College, Chandrapur, our members handle mechanical
              design, electronics, fabrication and drive strategy in-house. Every machine is
              designed, simulated, machined and tested by students before it enters competition.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37] hover:underline">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {BOTS.slice(0, 4).map((b) => (
              <img key={b.slug} src={b.image} alt={b.name} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-sm border border-[#d4af37]/20 object-cover" />
            ))}
          </div>
        </div>
      </section>


      <section className="border-t border-[#d4af37]/10 bg-[#0e0e0e] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="reveal text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Latest Achievement</div>
          <h2 className="reveal mt-4 font-[Orbitron] text-2xl font-black uppercase tracking-widest sm:text-3xl">
            {ACHIEVEMENTS[0].title}
          </h2>
          <p className="reveal mt-4 text-sm text-[#f5f5f5]/70">
            Our first international podium, competing against teams from across Asia.
          </p>
          <Link to="/achievements" className="reveal mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37] hover:underline">
            See full record <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal text-center text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Our Sponsors</div>
          <div className="reveal mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {SPONSORS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="flex h-32 items-center justify-center rounded-sm border border-[#d4af37]/20 bg-black p-6 transition-colors hover:border-[#d4af37]/60">
                <img src={s.image} alt={s.name} loading="lazy" decoding="async" className="max-h-full max-w-[80%] object-contain" />
              </a>
            ))}
          </div>
          <div className="reveal mt-8 text-center">
            <Link to="/sponsors" className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37] hover:underline">Partnership details</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d4af37]/15 bg-[#0e0e0e] py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <h2 className="font-[Orbitron] text-xl font-black uppercase tracking-widest sm:text-2xl">
            Sponsorships, collaborations or questions?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-[#d4af37] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#f0cf5a]">
            Contact the team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

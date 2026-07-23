import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/hero.jpeg.asset.json";
import { ArrowRight, Cpu, Users, Trophy, Image as ImageIcon, Handshake, MapPin, Mail, HelpCircle, ClipboardList } from "lucide-react";
import { STATS, StatItem, useReveal } from "@/lib/site-shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Diamond Robotics — Forging Machines That Refuse To Lose" },
      { name: "description", content: "Team Black Diamond Robotics — India's premier student combat robotics team. Explore our bots, team, achievements, gallery and more." },
      { property: "og:title", content: "Black Diamond Robotics — Forging Machines That Refuse To Lose" },
      { property: "og:description", content: "India's premier student combat robotics team. We design, build and battle world-class combat robots." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: HomePage,
});

const TILES = [
  { to: "/bots", label: "Our Bots", eyebrow: "01", icon: Cpu },
  { to: "/team", label: "Our Team", eyebrow: "02", icon: Users },
  { to: "/achievements", label: "Achievements", eyebrow: "03", icon: Trophy },
  { to: "/gallery", label: "Gallery", eyebrow: "04", icon: ImageIcon },
  { to: "/sponsors", label: "Sponsors", eyebrow: "05", icon: Handshake },
  { to: "/enroll", label: "Enroll", eyebrow: "06", icon: ClipboardList },
  { to: "/find-us", label: "Find Us", eyebrow: "07", icon: MapPin },
  { to: "/contact", label: "Contact", eyebrow: "08", icon: Mail },
  { to: "/help", label: "Ask Us", eyebrow: "09", icon: HelpCircle },
] as const;

function HomePage() {
  useReveal();
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAsset.url}
            alt="Black Diamond Robotics combat arena"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: "inset 0 0 140px rgba(212, 175, 55, 0.12), inset 0 0 50px rgba(212, 175, 55, 0.18)",
          }}
        />
      </section>

      {/* Intro */}
      <section className="relative bg-[#0b0b0b] py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="reveal text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Who We Are</div>
          <p className="reveal mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#f5f5f5]/80 sm:text-lg">
            Black Diamond Robotics is a student-led combat robotics team designing,
            building and battling world-class machines. Innovate, compete, inspire.
          </p>
          <div className="reveal mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Pages tile grid — the "list of pages near the home" */}
      <section className="relative bg-[#0b0b0b] pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mb-12 text-center">
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Explore</div>
            <h2 className="mt-4 font-[Orbitron] text-3xl font-black uppercase tracking-widest text-[#f5f5f5] sm:text-5xl">
              All <span className="gold-gradient">Pages</span>
            </h2>
            <div className="mx-auto mt-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TILES.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className="reveal group metallic-border relative flex items-center justify-between rounded-md p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.4)]"
                >
                  <div>
                    <div className="font-[Orbitron] text-[10px] tracking-[0.3em] text-[#d4af37]/70">
                      {t.eyebrow}
                    </div>
                    <div className="mt-2 font-[Orbitron] text-xl font-black uppercase tracking-widest text-[#f5f5f5] group-hover:text-[#d4af37] sm:text-2xl">
                      {t.label}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-[#d4af37]/70 transition group-hover:text-[#d4af37]" strokeWidth={1.4} />
                    <ArrowRight className="h-5 w-5 text-[#d4af37] opacity-0 -translate-x-2 transition group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
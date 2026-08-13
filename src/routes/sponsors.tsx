import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PageShell, SPONSORS } from "@/lib/site-shared";

const BENEFITS = [
  { title: "Brand Visibility", desc: "Your logo on our robots, team apparel, pit banners and every event livestream appearance." },
  { title: "Digital Reach", desc: "Featured placement across our website and social channels throughout the season." },
  { title: "Talent Access", desc: "Direct connection to engineering students with hands-on design and fabrication skill." },
  { title: "Community Impact", desc: "Support practical STEM education and student-led innovation in central India." },
];

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partnerships — Team Black Diamond Robotics" },
      { name: "description", content: "Meet the partners backing Team Black Diamond Robotics and learn about the benefits of sponsoring a competitive student combat robotics team." },
      { property: "og:title", content: "Sponsors & Partnerships — Black Diamond Robotics" },
      { property: "og:description", content: "Partner with a competitive student combat robotics team." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://diamond-force-forge.lovable.app/sponsors" }],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  const [featured, ...rest] = SPONSORS;

  return (
    <PageShell>
      {/* Featured Sponsor — Full Page Logo */}
      <section className="relative flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center px-6 py-20 text-center">
        <div className="reveal mx-auto max-w-4xl">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Title Partner</span>
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-block"
          >
            <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-sm border border-[#d4af37]/30 bg-black p-8 transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_80px_rgba(212,175,55,0.12)] sm:h-80 sm:w-80">
              <img
                src={featured.image}
                alt={featured.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h1 className="mt-10 font-[Orbitron] text-3xl font-black uppercase tracking-[0.15em] text-[#f5f5f5] sm:text-5xl">
              {featured.name}
            </h1>
          </a>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#f5f5f5]/60">
            A valued partner supporting our engineering, fabrication and competition programme.
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#f5f5f5]/40">Scroll down</span>
          <ChevronDown className="h-5 w-5 animate-bounce text-[#d4af37]" />
        </div>
      </section>

      {/* Other Sponsors — Scroll Down */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Proudly Supported By</span>
            <h2 className="mt-4 font-[Orbitron] text-2xl font-black uppercase tracking-widest text-[#f5f5f5] sm:text-4xl">
              Our Partners
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="reveal flex flex-col rounded-sm border border-[#d4af37]/20 bg-black transition-colors hover:border-[#d4af37]/60"
              >
                <div className="flex h-52 items-center justify-center p-8 sm:h-60">
                  <img src={s.image} alt={s.name} loading="lazy" className="max-h-full max-w-[85%] object-contain" />
                </div>
                <div className="border-t border-[#d4af37]/15 p-5">
                  <h3 className="font-[Orbitron] text-xs font-bold uppercase tracking-[0.25em] text-[#f5f5f5]">{s.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#f5f5f5]/60">
                    A valued partner supporting our engineering, fabrication and competition programme.
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Us */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 text-center">
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Partnership</span>
            <h2 className="mt-4 font-[Orbitron] text-2xl font-black uppercase tracking-widest text-[#f5f5f5] sm:text-4xl">
              Why <span className="gold-gradient">Sponsor</span> Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#f5f5f5]/65">
              Partner with a team that turns engineering passion into podium results.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="reveal rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-6">
                <h3 className="font-[Orbitron] text-sm font-bold uppercase tracking-widest">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="px-4 py-24 sm:px-6">
        <div className="reveal mx-auto max-w-3xl rounded-sm border border-[#d4af37]/25 bg-[#0e0e0e] p-10 text-center">
          <h2 className="font-[Orbitron] text-lg font-black uppercase tracking-widest">Become a Sponsor</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#f5f5f5]/65">
            We build tailored partnership packages for equipment, material and financial support.
          </p>
          <Link to="/contact" className="mt-7 inline-block rounded-sm bg-[#d4af37] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#f0cf5a]">
            Become a Sponsor
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

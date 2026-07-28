import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell, SPONSORS } from "@/lib/site-shared";

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
  return (
    <PageShell>
      <PageHero
        eyebrow="Backed By"
        title={<>Our <span className="gold-gradient">Sponsors</span></>}
        subtitle="Our partners make every build season possible — from raw material and machining to travel and competition entry."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
        <section className="grid gap-8 sm:grid-cols-3">
          {SPONSORS.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="reveal flex flex-col rounded-sm border border-[#d4af37]/20 bg-black transition-colors hover:border-[#d4af37]/60">
              <div className="flex h-44 items-center justify-center p-8">
                <img src={s.image} alt={s.name} loading="lazy" className="max-h-full max-w-[85%] object-contain" />
              </div>
              <div className="border-t border-[#d4af37]/15 p-5">
                <h2 className="font-[Orbitron] text-xs font-bold uppercase tracking-[0.25em] text-[#f5f5f5]">{s.name}</h2>
                <p className="mt-2 text-xs leading-relaxed text-[#f5f5f5]/60">
                  A valued partner supporting our engineering, fabrication and competition programme.
                </p>
              </div>
            </a>
          ))}
        </section>

        <section>
          <h2 className="reveal font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Why Sponsor Us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="reveal rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-6">
                <h3 className="font-[Orbitron] text-sm font-bold uppercase tracking-widest">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal rounded-sm border border-[#d4af37]/25 bg-[#0e0e0e] p-10 text-center">
          <h2 className="font-[Orbitron] text-lg font-black uppercase tracking-widest">Become a Sponsor</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#f5f5f5]/65">
            We build tailored partnership packages for equipment, material and financial support.
          </p>
          <Link to="/contact" className="mt-7 inline-block rounded-sm bg-[#d4af37] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#f0cf5a]">
            Become a Sponsor
          </Link>
        </section>
      </div>
    </PageShell>
  );
}

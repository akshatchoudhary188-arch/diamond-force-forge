import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SPONSORS, PageShell, SectionHeader } from "@/lib/site-shared";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — Black Diamond Robotics" },
      { name: "description", content: "Virtual Simutech, Roll n Drive and RAVYO AUTOTECH — the partners powering Team Black Diamond Robotics." },
      { property: "og:title", content: "Sponsors — Black Diamond Robotics" },
      { property: "og:description", content: "The partners powering Team Black Diamond Robotics." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Backed By" title={<><span className="gold-gradient">Sponsors</span></>} />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {SPONSORS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex aspect-square flex-col items-center justify-center metallic-border rounded-md bg-black p-6 transition hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <img src={s.image} alt={s.name} className="max-h-[78%] max-w-[92%] object-contain" />
              <div className="mt-4 text-[10px] uppercase tracking-widest text-[#f5f5f5]/60">{s.name}</div>
            </a>
          ))}
        </div>
        <div className="reveal mt-16 text-center">
          <p className="text-sm uppercase tracking-widest text-[#f5f5f5]/70">
            Interested in sponsoring Team Black Diamond Robotics?
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#d4af37] px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a]"
          >
            Become a Sponsor <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { STEPS, PageShell, SectionHeader } from "@/lib/site-shared";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll — Black Diamond Robotics" },
      { name: "description", content: "Join Team Black Diamond Robotics. Fill the form, meet the team, prove your engineering fundamentals and start building." },
      { property: "og:title", content: "Enroll — Black Diamond Robotics" },
      { property: "og:description", content: "Join the forge. Start building combat robots with Team Black Diamond." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EnrollPage,
});

function EnrollPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Recruitment" title={<>How To <span className="gold-gradient">Enroll</span></>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="reveal metallic-border rounded-md p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/10 gold-border">
                  <Icon className="h-7 w-7 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <div className="mt-4 font-[Orbitron] text-xs uppercase tracking-widest text-[#d4af37]">Step {i + 1}</div>
                <h3 className="mt-2 font-[Orbitron] text-sm font-bold uppercase tracking-wider text-[#f5f5f5]">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-[#f5f5f5]/60">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="reveal mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[#d4af37] px-10 py-4 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

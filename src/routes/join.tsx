import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CONTACT, FAQS, PageHero, PageShell, STEPS } from "@/lib/site-shared";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Team — Team Black Diamond Robotics" },
      { name: "description", content: "Recruitment information, eligibility, application process and FAQs for students who want to join Team Black Diamond Robotics." },
      { property: "og:title", content: "Join Team Black Diamond Robotics" },
      { property: "og:description", content: "Eligibility, application process and FAQs for prospective members." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://black-diamond-robotics.lovable.app/join" }],
  }),
  component: JoinPage,
});

function JoinPage() {
  const [form, setForm] = useState({ name: "", branch: "", year: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Team Black Diamond — Membership Application\n\nName: ${form.name}\nBranch: ${form.branch}\nYear: ${form.year}\nArea of interest: ${form.interest}\n\n${form.message}`,
    );
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setForm({ name: "", branch: "", year: "", interest: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const input = "w-full rounded-sm border border-[#d4af37]/25 bg-black px-4 py-3 text-sm text-[#f5f5f5] outline-none transition-colors focus:border-[#d4af37]";

  return (
    <PageShell>
      <PageHero
        eyebrow="Recruitment"
        title={<>Join The <span className="gold-gradient">Team</span></>}
        subtitle="We recruit students across mechanical design, electronics, fabrication, drive operations, media and management."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
        <section className="reveal grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-7">
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Eligibility</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#f5f5f5]/70">
              <li>• Currently enrolled engineering / diploma student</li>
              <li>• Interest in design, electronics, fabrication, media or management</li>
              <li>• Willingness to commit time during build and competition season</li>
              <li>• No prior robotics experience required</li>
            </ul>
          </div>
          <div className="rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-7">
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">What You Get</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#f5f5f5]/70">
              <li>• Hands-on CAD, machining and assembly experience</li>
              <li>• Training from senior members across every sub-team</li>
              <li>• Travel and participation at national competitions</li>
              <li>• A portfolio of real engineering work</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="reveal font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Application Process</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="reveal rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-6">
                  <Icon className="h-6 w-6 text-[#d4af37]" strokeWidth={1.5} />
                  <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Step {i + 1}</div>
                  <h3 className="mt-2 font-[Orbitron] text-sm font-bold uppercase tracking-wider">{s.title}</h3>
                  <p className="mt-2 text-xs text-[#f5f5f5]/60">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="reveal font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">FAQ</h2>
          <div className="mt-6 divide-y divide-[#d4af37]/15 border-y border-[#d4af37]/15">
            {FAQS.map((f) => (
              <details key={f.q} className="reveal group py-5">
                <summary className="cursor-pointer list-none font-[Orbitron] text-sm font-bold uppercase tracking-wider text-[#f5f5f5] transition-colors hover:text-[#d4af37]">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-[#f5f5f5]/65">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="reveal rounded-sm border border-[#d4af37]/25 bg-[#0e0e0e] p-8">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Application Form</h2>
          <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required className={input} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required className={input} placeholder="Branch" value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} />
            <input required className={input} placeholder="Year of study" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
            <input required className={input} placeholder="Area of interest" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} />
            <textarea className={`${input} sm:col-span-2`} rows={4} placeholder="Why do you want to join?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-sm bg-[#d4af37] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#f0cf5a]">
                Submit Application
              </button>
              {sent && <span className="ml-4 text-xs uppercase tracking-widest text-[#d4af37]">Opening WhatsApp…</span>}
            </div>
          </form>
        </section>
      </div>
    </PageShell>
  );
}

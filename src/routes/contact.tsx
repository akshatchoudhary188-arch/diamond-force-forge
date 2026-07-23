import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { PageShell, SectionHeader } from "@/lib/site-shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Black Diamond Robotics" },
      { name: "description", content: "Reach Team Black Diamond Robotics for sponsorships, collaborations, workshops or to join the team. Direct WhatsApp reply." },
      { property: "og:title", content: "Contact — Black Diamond Robotics" },
      { property: "og:description", content: "Let's build together — sponsorships, collaborations, or join the team." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Team Black Diamond!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/919595507035?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const fields: Array<{ key: "name" | "email" | "phone"; label: string; type: string }> = [
    { key: "name", label: "Name", type: "text" },
    { key: "email", label: "Email", type: "email" },
    { key: "phone", label: "Phone", type: "tel" },
  ];

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Get In Touch" title={<><span className="gold-gradient">Contact</span></>} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal metallic-border rounded-md p-8 flex flex-col justify-center">
            <div className="mb-6">
              <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Direct Line</div>
              <h3 className="mt-2 font-[Orbitron] text-2xl font-bold uppercase tracking-widest text-[#f5f5f5]">Let's Build Together</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">
                Reach out for sponsorships, collaborations, or to join the team. We're always forging ahead.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#f5f5f5]/80"><Mail className="h-4 w-4 text-[#d4af37]" /> Teamblackdiamond034@gmail.com</div>
              <div className="flex items-center gap-3 text-[#f5f5f5]/80"><Phone className="h-4 w-4 text-[#d4af37]" /> +91 95955 07035</div>
              <div className="flex items-center gap-3 text-[#f5f5f5]/80"><MapPin className="h-4 w-4 text-[#d4af37]" /> GEC, Chandrapur, Maharashtra, India</div>
              <div className="flex items-center gap-4 pt-3">
                <a href="https://www.instagram.com/teamblack_diamond/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#d4af37] hover:scale-110 transition"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="reveal metallic-border rounded-md p-8 space-y-5">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">{f.label}</label>
                <input
                  required
                  type={f.type}
                  value={form[f.key]}
                  onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))}
                  className="mt-2 w-full rounded-sm border border-[#d4af37]/20 bg-black/60 px-4 py-3 text-sm text-[#f5f5f5] outline-none focus:border-[#d4af37]"
                />
              </div>
            ))}
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Message</label>
              <textarea
                required rows={5}
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                className="mt-2 w-full rounded-sm border border-[#d4af37]/20 bg-black/60 px-4 py-3 text-sm text-[#f5f5f5] outline-none focus:border-[#d4af37]"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#d4af37] px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a]"
            >
              {sent ? "Opening WhatsApp" : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}

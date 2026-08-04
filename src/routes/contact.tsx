import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, PageHero, PageShell } from "@/lib/site-shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Team Black Diamond Robotics" },
      { name: "description", content: "Contact Team Black Diamond Robotics for sponsorships, collaborations or team enquiries. Based at GEC Chandrapur, Maharashtra, India." },
      { property: "og:title", content: "Contact Team Black Diamond Robotics" },
      { property: "og:description", content: "Reach the team for sponsorships, collaborations and enquiries." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://diamond-force-forge.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Team Black Diamond Robotics",
          email: CONTACT.email,
          telephone: CONTACT.phone,
          url: "https://diamond-force-forge.lovable.app/",
          address: { "@type": "PostalAddress", addressLocality: "Chandrapur", addressRegion: "Maharashtra", addressCountry: "IN" },
          sameAs: [CONTACT.instagram],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const INBOX = "akshatchoudhary188@gmail.com";
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Hi Team Black Diamond!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`;
    const mailto = `mailto:${INBOX}?subject=${encodeURIComponent(
      `Website enquiry from ${form.name || "visitor"}`,
    )}&body=${encodeURIComponent(body)}`;

    // WhatsApp opens first, in the same user gesture, so it is not treated as a pop-up.
    const win = window.open(wa, "_blank", "noopener,noreferrer");
    setWaUrl(win ? null : wa);

    // Email copy is deferred so the two navigations do not cancel each other.
    window.setTimeout(() => {
      const mail = document.createElement("a");
      mail.href = mailto;
      mail.target = "_blank";
      mail.rel = "noopener noreferrer";
      mail.style.display = "none";
      document.body.appendChild(mail);
      mail.click();
      document.body.removeChild(mail);
    }, 600);

    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    window.setTimeout(() => setSent(false), 8000);
  };

  const input = "w-full rounded-sm border border-[#d4af37]/25 bg-black px-4 py-3 text-sm text-[#f5f5f5] outline-none transition-colors focus:border-[#d4af37]";

  return (
    <PageShell>
      <PageHero
        eyebrow="Get In Touch"
        title={<><span className="gold-gradient">Contact</span> Us</>}
        subtitle="Sponsorships, collaborations, media or general questions — we reply quickly."
      />
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="reveal rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-8">
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Send a Message</h2>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <input required className={input} placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" className={input} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input className={input} placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <textarea required rows={5} className={input} placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button type="submit" className="rounded-sm bg-[#d4af37] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#f0cf5a]">
                Send Message
              </button>
              {sent && (
                <div className="mt-3 space-y-2 text-xs uppercase tracking-widest text-[#d4af37]">
                  <p>Sending via WhatsApp &amp; email…</p>
                  {waUrl && (
                    <p className="normal-case tracking-normal text-[#f5f5f5]/70">
                      Pop-up blocked?{" "}
                      <a href={waUrl} target="_blank" rel="noreferrer" className="underline hover:text-[#d4af37]">
                        Open WhatsApp manually
                      </a>
                    </p>
                  )}
                </div>
              )}
            </form>
          </section>

          <section className="reveal rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-8">
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Details</h2>
            <ul className="mt-6 space-y-5 text-sm text-[#f5f5f5]/80">
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#d4af37]">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-4">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" />
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-[#d4af37]">@teamblack_diamond</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </section>
        </div>

        <section className="reveal">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Find Us</h2>
          <div className="mt-6 overflow-hidden rounded-sm border border-[#d4af37]/20">
            <iframe
              title="Team Black Diamond Robotics location"
              src={CONTACT.mapEmbed}
              className="h-80 w-full border-0 sm:h-[26rem]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </PageShell>
  );
}

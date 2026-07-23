import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Instagram, Mail, MapPin, Maximize2, Phone, Users } from "lucide-react";
import heroAsset from "@/assets/hero.jpeg.asset.json";
import teamVideoAsset from "@/assets/team-video.mp4.asset.json";
import galleryTeamArenaAsset from "@/assets/gallery-team-arena.jpg.asset.json";
import galleryTeamBotsAsset from "@/assets/gallery-team-bots.png.asset.json";
import galleryYroboAsset from "@/assets/gallery-yrobo.jpg.asset.json";
import {
  ACHIEVEMENTS, BOTS, SPONSORS, STATS, STEPS, StatItem, SectionHeader, TEAM, useReveal,
} from "@/lib/site-shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Diamond Robotics — Forging Machines That Refuse To Lose" },
      { name: "description", content: "Team Black Diamond Robotics — India's premier student combat robotics team. We design, build and battle world-class combat robots." },
      { property: "og:title", content: "Black Diamond Robotics — Forging Machines That Refuse To Lose" },
      { property: "og:description", content: "India's premier student combat robotics team." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();

  // Smooth scroll for hash links
  useEffect(() => {
    const scrollToHash = () => {
      const h = window.location.hash.replace("#", "");
      if (!h) return;
      const el = document.getElementById(h);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAsset.url} alt="Black Diamond Robotics combat arena" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: "inset 0 0 140px rgba(212, 175, 55, 0.12), inset 0 0 50px rgba(212, 175, 55, 0.18)" }}
        />
      </section>

      {/* ABOUT / STATS */}
      <section className="relative bg-[#0b0b0b] py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="reveal text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Who We Are</div>
          <p className="reveal mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#f5f5f5]/80 sm:text-lg">
            Black Diamond Robotics is a student-led combat robotics team designing, building and battling
            world-class machines. Innovate, compete, inspire.
          </p>
          <div className="reveal mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* BOTS */}
      <section id="bots" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="Our Arsenal" title={<>Our <span className="gold-gradient">Bots</span></>} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BOTS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.name} className="reveal group metallic-border flex h-full flex-col rounded-md p-7 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.4)]">
                  <div className="mb-6 relative aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-[#1a1a1a] to-black gold-border">
                    {b.image ? (
                      <img src={b.image} alt={b.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center"><Icon className="h-16 w-16 text-[#d4af37]/70" strokeWidth={1} /></div>
                    )}
                  </div>
                  <h3 className="font-[Orbitron] text-lg font-bold uppercase tracking-wider text-[#f5f5f5]">{b.name}</h3>
                  <div className="mt-3 space-y-1 text-xs uppercase tracking-widest">
                    <div><span className="text-[#f5f5f5]/50">Weight</span> <span className="text-[#d4af37]">{b.weight}</span></div>
                    <div><span className="text-[#f5f5f5]/50">Weapon</span> <span className="text-[#d4af37]">{b.weapon}</span></div>
                  </div>
                  <p className="mt-4 text-sm text-[#f5f5f5]/70">{b.desc}</p>
                  {b.specs.length > 0 && (
                    <ul className="mt-auto space-y-2 pt-5 text-xs text-[#f5f5f5]/70">
                      {b.specs.map((s, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#d4af37]" /><span>{s}</span></li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="The Crew" title={<>Our <span className="gold-gradient">Team</span></>} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <div key={i} className="reveal group glass-card rounded-md p-7 text-center transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]">
                <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1a1a1a] to-black gold-border">
                  {m.image ? (
                    <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  ) : (<Users className="h-10 w-10 text-[#d4af37]/70" strokeWidth={1} />)}
                </div>
                <h3 className="mt-5 font-[Orbitron] text-base font-bold uppercase tracking-widest text-[#f5f5f5]">{m.name}</h3>
                {m.role && <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#d4af37]">{m.role}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeader eyebrow="Legacy" title={<><span className="gold-gradient">Achievements</span></>} />
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className={`reveal relative mb-12 flex items-start gap-6 sm:mb-16 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"}`}>
                <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_20px_#d4af37] sm:left-auto sm:right-0 sm:top-4 sm:translate-x-1/2" />
                <div className="ml-10 flex-1 metallic-border rounded-md p-6 sm:ml-0">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{a.icon}</span>
                    {a.year && <span className="text-xs uppercase tracking-widest text-[#d4af37]">{a.year}</span>}
                  </div>
                  <h3 className="mt-2 font-[Orbitron] text-base font-bold uppercase text-[#f5f5f5]">{a.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <GallerySection />

      {/* SPONSORS */}
      <section id="sponsors" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow="Backed By" title={<><span className="gold-gradient">Sponsors</span></>} />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {SPONSORS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="reveal group flex aspect-square flex-col items-center justify-center metallic-border rounded-md bg-black p-6 transition hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
                <img src={s.image} alt={s.name} className="max-h-[78%] max-w-[92%] object-contain" />
                <div className="mt-4 text-[10px] uppercase tracking-widest text-[#f5f5f5]/60">{s.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLL */}
      <section id="enroll" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
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
                  <h3 className="mt-2 font-[Orbitron] text-sm font-bold uppercase tracking-wider text-[#f5f5f5]">{s.title}</h3>
                  <p className="mt-2 text-xs text-[#f5f5f5]/60">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section id="find-us" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="Visit The Forge" title={<>Find <span className="gold-gradient">Us</span></>} />
          <div className="reveal grid gap-8 lg:grid-cols-5">
            <div className="metallic-border rounded-md overflow-hidden lg:col-span-3">
              <iframe
                title="Team Black Diamond Robotics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d79.319513!3d19.9217856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d4719e5cbe07%3A0xb8c55b177f1c18f2!2sGEC!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-80 sm:h-96 lg:h-[28rem] border-0"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="metallic-border rounded-md p-8 lg:col-span-2 flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 gold-border"><MapPin className="h-5 w-5 text-[#d4af37]" /></div>
                <div>
                  <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Address</div>
                  <p className="mt-1 text-sm leading-relaxed text-[#f5f5f5]/80">Government Engineering College,<br />Ballarpur Road, Chandrapur,<br />Maharashtra 442404, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 gold-border"><Phone className="h-5 w-5 text-[#d4af37]" /></div>
                <div>
                  <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Phone</div>
                  <p className="mt-1 text-sm text-[#f5f5f5]/80">+91 95955 07035</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 gold-border"><Mail className="h-5 w-5 text-[#d4af37]" /></div>
                <div>
                  <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Email</div>
                  <p className="mt-1 text-sm text-[#f5f5f5]/80">Teamblackdiamond034@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}

function GallerySection() {
  const [fullscreen, setFullscreen] = useState(false);
  const videoUrl = teamVideoAsset.url;
  const items = [
    { type: "video" as const, label: "Team Video" },
    { type: "image" as const, label: "Team & Bots", src: galleryTeamBotsAsset.url },
    { type: "image" as const, label: "Y Robo C", src: galleryYroboAsset.url },
    { type: "image" as const, label: "Competition Arena", src: galleryTeamArenaAsset.url },
  ];
  return (
    <section id="gallery" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Behind The Machines" title={<><span className="gold-gradient">Gallery</span></>} />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="reveal group relative aspect-[4/3] overflow-hidden metallic-border rounded-md bg-gradient-to-br from-[#1a1a1a] to-black transition hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              {it.type === "video" ? (
                <>
                  <video src={videoUrl} controls playsInline className="h-full w-full object-cover" aria-label="Team video" />
                  <button onClick={() => setFullscreen(true)} className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-[#d4af37] opacity-0 transition hover:bg-[#d4af37] hover:text-black group-hover:opacity-100" aria-label="Maximize video">
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              )}
            </div>
          ))}
        </div>
      </div>
      {fullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setFullscreen(false)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <video src={videoUrl} controls autoPlay playsInline className="h-full max-h-[80vh] w-full rounded-md" />
            <button onClick={() => setFullscreen(false)} className="absolute -top-10 right-0 text-xs uppercase tracking-widest text-[#f5f5f5]/70 hover:text-[#d4af37]">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Team Black Diamond!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
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
    <section id="contact" className="relative bg-[#0b0b0b] py-24 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Get In Touch" title={<><span className="gold-gradient">Contact</span></>} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal metallic-border rounded-md p-8 flex flex-col justify-center">
            <div className="mb-6">
              <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Direct Line</div>
              <h3 className="mt-2 font-[Orbitron] text-2xl font-bold uppercase tracking-widest text-[#f5f5f5]">Let's Build Together</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60">Reach out for sponsorships, collaborations, or to join the team. We're always forging ahead.</p>
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
                <input required type={f.type} value={form[f.key]} onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))} className="mt-2 w-full rounded-sm border border-[#d4af37]/20 bg-black/60 px-4 py-3 text-sm text-[#f5f5f5] outline-none focus:border-[#d4af37]" />
              </div>
            ))}
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Message</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} className="mt-2 w-full rounded-sm border border-[#d4af37]/20 bg-black/60 px-4 py-3 text-sm text-[#f5f5f5] outline-none focus:border-[#d4af37]" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#d4af37] px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a]">
              {sent ? "Opening WhatsApp" : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

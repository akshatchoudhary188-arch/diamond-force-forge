import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroAsset from "@/assets/hero.jpeg.asset.json";
import logoAsset from "@/assets/logo.jpeg.asset.json";
import hyperionAsset from "@/assets/hyperion.jpeg.asset.json";
import scarletAsset from "@/assets/scarlet.png.asset.json";
import polarisAsset from "@/assets/polaris.jpeg.asset.json";
import lucianAsset from "@/assets/lucian.jpeg.asset.json";
import founderAsset from "@/assets/founder.jpeg.asset.json";
import auroAsset from "@/assets/auro.jpeg.asset.json";
import prathameshAsset from "@/assets/prathamesh.jpeg.asset.json";
import arjunAsset from "@/assets/arjun.jpeg.asset.json";
import sanketAsset from "@/assets/sanket.jpeg.asset.json";
import prayasAsset from "@/assets/prayas.jpeg.asset.json";
import chetanAsset from "@/assets/chetan.jpeg.asset.json";
import narayaniAsset from "@/assets/narayni.jpeg.asset.json";
import yashAsset from "@/assets/yash_pardhi.jpeg.asset.json";
import tusharAsset from "@/assets/tushar.jpeg.asset.json";
import harshAsset from "@/assets/harsh.jpeg.asset.json";
import aryanAsset from "@/assets/aryan.jpeg.asset.json";
import akshatAsset from "@/assets/akshat.jpeg.asset.json";
import khushiAsset from "@/assets/khushi.jpeg.asset.json";
import rollndriveAsset from "@/assets/rollndrive.png.asset.json";
import ravvoAsset from "@/assets/ravvo.jpeg.asset.json";
import virtualSimutechAsset from "@/assets/virtual-simutech.jpeg.asset.json";
import {
  Menu, X, Cpu, Wrench, Users, Trophy, Zap, Shield, Cog, Award,
  Instagram, Linkedin, Github, Mail, Phone, MapPin, ArrowRight,
  ClipboardList, MessageSquare, FlaskConical, CheckCircle2, ChevronUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: BlackDiamondSite,
});

/* ---------- Data (easily editable) ---------- */

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Our Bots", href: "#bots" },
  { label: "Our Team", href: "#team" },
  { label: "Achievements", href: "#achievements" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Enroll", href: "#enroll" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { label: "Robots Built", value: 4 },
  { label: "Competitions", value: 29 },
  { label: "Team Members", value: 15 },
  { label: "Years Active", value: 5 },
];

const BOTS = [
  {
    name: "HYPERION",
    weight: "15 kg",
    weapon: "Vertical Spinner",
    desc: "A powerful 15 kg combat robot designed for RoboWar competitions.",
    specs: [
      "Strong metal chassis for durability and stability during intense battles.",
      "High-impact vertical spinner weapon to damage and disable opponent robots.",
      "Fast brushless drive system with solid wheels for quick movement and excellent arena control.",
      "Boxy design engineered for high power, precision attacks, and strong defense in combat situations.",
    ],
    icon: Zap,
    image: hyperionAsset.url,
  },
  {
    name: "SCARLET",
    weight: "8 kg",
    weapon: "Drum Spinner",
    desc: "A powerful 8 kg combat robot built for RoboWar competitions.",
    specs: [
      "Strong metal chassis designed to withstand heavy impacts during battles.",
      "High-speed drum spinner weapon that delivers strong attacks to damage opponent robots.",
      "Low-profile design and sturdy wheels provide stability, fast movement, and precise control in the arena.",
      "Curved unibody built for aggressive performance, durability, and high-impact combat power.",
    ],
    icon: Cog,
    image: scarletAsset.url,
  },
  {
    name: "POLARIS",
    weight: "8 kg",
    weapon: "Vertical Spinner",
    desc: "A powerful 8 kg combat robot engineered for RoboWar competitions.",
    specs: [
      "Reinforced metal chassis designed to absorb heavy impacts while maintaining structural strength during intense battles.",
      "High-speed vertical spinner weapon capable of delivering devastating upward strikes to flip, damage, and destabilize opponent robots.",
      "Compact, low-profile design with high-traction wheels for rapid acceleration, agile maneuverability, and precise arena control.",
      "Built for aggressive performance, exceptional durability, and consistent high-impact combat power in the arena.",
    ],
    icon: Shield,
    image: polarisAsset.url,
  },
  {
    name: "LUCIAN",
    weight: "15 kg",
    weapon: "Drum Spinner",
    desc: "A powerful 15 kg RoboWar combat robot built for intense robot battles.",
    specs: [
      "Strong and durable metal chassis designed to handle heavy impacts in the arena.",
      "High-speed drum spinner weapon that delivers powerful strikes to damage and disable opponent robots.",
      "Curvy design with a strong brushless drive system for excellent stability, fast movement, and precise control.",
      "Curvy body engineered to absorb damage for durability and competitive performance in RoboWar events.",
    ],
    icon: Cpu,
    image: lucianAsset.url,
  },
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Winner — Competition Name", year: "2025" },
  { icon: "🥈", title: "Runner-Up — Competition Name", year: "2024" },
  { icon: "🏅", title: "Best Design Award", year: "2024" },
  { icon: "⚙", title: "Innovation Award", year: "2023" },
  { icon: "🏆", title: "Winner — Regional Championship", year: "2023" },
  { icon: "🥈", title: "Runner-Up — National Robowars", year: "2022" },
];

const SPONSORS = [
  { name: "Virtual Simutech", image: virtualSimutechAsset.url, url: "https://virtualsimutech.com/" },
  { name: "Roll n Drive", image: rollndriveAsset.url, url: "https://www.rollndrive.com/" },
  { name: "RAVYO AUTOTECH", image: ravvoAsset.url, url: "https://www.ravyostore.com/" },
];

const TEAM = [
  { name: "Akshay Khanke", role: "Founder", image: founderAsset.url },
  { name: "Aurobinda Maharana", role: "", image: auroAsset.url },
  { name: "Prathamesh Wadaskar", role: "", image: prathameshAsset.url },
  { name: "Arjun Sathewad", role: "", image: arjunAsset.url },
  { name: "Prayas", role: "", image: prayasAsset.url },
  { name: "Chetan", role: "", image: chetanAsset.url },
  { name: "Narayani", role: "", image: narayaniAsset.url },
  { name: "Aryan", role: "", image: aryanAsset.url },
  { name: "Yash Pardhi", role: "", image: yashAsset.url },
  { name: "Tushar Waghmare", role: "", image: tusharAsset.url },
  { name: "Harsh Channe", role: "", image: harshAsset.url },
  { name: "Sanket Giripunje", role: "", image: sanketAsset.url },
  { name: "Sumeet Pal", role: "" },
  { name: "Akshat", role: "", image: akshatAsset.url },
  { name: "Khushi Khade", role: "", image: khushiAsset.url },
];

const STEPS = [
  { icon: ClipboardList, title: "Fill Registration Form", desc: "Submit your details and areas of interest." },
  { icon: MessageSquare, title: "Attend Interview", desc: "Meet the team, share your passion." },
  { icon: FlaskConical, title: "Technical Test", desc: "Prove your engineering fundamentals." },
  { icon: CheckCircle2, title: "Become a Team Member", desc: "Join the forge. Start building." },
];

/* ---------- Hooks ---------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(target: number, start: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setV(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return v;
}

/* ---------- Components ---------- */

function Logo({ size = 48 }: { size?: number }) {
  return (
    <img
      src={logoAsset.url}
      alt="Black Diamond Robotics logo"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded-md object-cover gold-border"
    />
  );
}


function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0b0b0b]/95 backdrop-blur-md border-b border-[#d4af37]/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" aria-label="Home" className="flex items-center gap-3 shrink-0">
          <Logo size={50} />
          <span className="hidden sm:block font-[Orbitron] text-sm font-bold tracking-widest text-[#f5f5f5]">
            BLACK <span className="text-[#d4af37]">DIAMOND</span>
          </span>
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5]/80 transition hover:text-[#d4af37]"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#enroll"
          className="hidden lg:inline-flex items-center gap-2 rounded-sm border border-[#d4af37]/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          Join <ArrowRight className="h-3 w-3" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#d4af37]"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0b0b0b] border-t border-[#d4af37]/20">
          <ul className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-widest text-[#f5f5f5] hover:text-[#d4af37]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Black Diamond Robotics combat arena"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 140px rgba(212, 175, 55, 0.12), inset 0 0 50px rgba(212, 175, 55, 0.18)",
        }}
      />
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="reveal mb-14 text-center">
      <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37]">{eyebrow}</div>
      <h2 className="mt-3 font-[Orbitron] text-3xl font-black uppercase tracking-widest text-[#f5f5f5] sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const v = useCounter(value, start);
  return (
    <div ref={ref} className="text-center">
      <div className="font-[Orbitron] text-4xl font-black gold-gradient sm:text-6xl">{v}+</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.35em] text-[#f5f5f5]/70">{label}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Who We Are" title={<>The <span className="gold-gradient">Forge</span></>} />
        <div className="reveal mx-auto max-w-3xl text-center text-base leading-relaxed text-[#f5f5f5]/75 sm:text-lg">
          Black Diamond Robotics is a student-led robotics team passionate about designing and building
          world-class combat robots. Our mission is to innovate, compete, and inspire the next generation
          of engineers through robotics competitions, research, and teamwork.
        </div>
        <div className="reveal mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bots() {
  return (
    <section id="bots" className="relative bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Our Arsenal" title={<>Our <span className="gold-gradient">Bots</span></>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BOTS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="reveal group metallic-border rounded-md p-6 transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.4)]"
              >
                <div className="mb-6 relative aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-[#1a1a1a] to-black gold-border">
                  {b.image ? (
                    <img
                      src={b.image}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon className="h-16 w-16 text-[#d4af37]/70 transition group-hover:text-[#d4af37] group-hover:scale-110" strokeWidth={1} />
                    </div>
                  )}
                </div>
                <h3 className="font-[Orbitron] text-lg font-bold uppercase tracking-wider text-[#f5f5f5]">
                  {b.name}
                </h3>
                <div className="mt-3 space-y-1 text-xs uppercase tracking-widest">
                  <div><span className="text-[#f5f5f5]/50">Weight</span> <span className="text-[#d4af37]">{b.weight}</span></div>
                  <div><span className="text-[#f5f5f5]/50">Weapon</span> <span className="text-[#d4af37]">{b.weapon}</span></div>
                </div>
                <p className="mt-4 text-sm text-[#f5f5f5]/70">{b.desc}</p>
                {b.specs.length > 0 && (
                  <ul className="mt-4 space-y-2 text-xs text-[#f5f5f5]/70">
                    {b.specs.map((s, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#d4af37]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="relative bg-[#0f0f0f] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader eyebrow="Legacy" title={<><span className="gold-gradient">Achievements</span></>} />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className={`reveal relative mb-10 flex items-start gap-6 sm:mb-14 sm:w-1/2 ${
                i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"
              }`}
            >
              <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_20px_#d4af37] sm:left-auto sm:right-0 sm:top-4 sm:translate-x-1/2"
                style={i % 2 === 1 ? { left: 0, right: "auto", transform: "translateX(-50%)" } : {}}
              />
              <div className="ml-10 flex-1 metallic-border rounded-md p-5 sm:ml-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-xs uppercase tracking-widest text-[#d4af37]">{a.year}</span>
                </div>
                <h3 className="mt-2 font-[Orbitron] text-base font-bold uppercase text-[#f5f5f5]">{a.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section id="sponsors" className="relative bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Backed By" title={<><span className="gold-gradient">Sponsors</span></>} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#d4af37] px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a]"
          >
            Become a Sponsor <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="relative bg-[#0f0f0f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="The Crew" title={<>Our <span className="gold-gradient">Team</span></>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <div
              key={i}
              className="reveal group glass-card rounded-md p-6 text-center transition duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
            >
              <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1a1a1a] to-black gold-border">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <Users className="h-10 w-10 text-[#d4af37]/70" strokeWidth={1} />
                )}
              </div>
              <h3 className="mt-5 font-[Orbitron] text-base font-bold uppercase tracking-widest text-[#f5f5f5]">
                {m.name}
              </h3>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#d4af37]">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Enroll() {
  return (
    <section id="enroll" className="relative bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Recruitment" title={<>How To <span className="gold-gradient">Enroll</span></>} />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[#d4af37] px-10 py-4 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { label: "Competition", h: 260 },
    { label: "Robots", h: 340 },
    { label: "Manufacturing", h: 220 },
    { label: "CAD Design", h: 300 },
    { label: "Testing", h: 260 },
    { label: "Workshop", h: 320 },
    { label: "Team Photo", h: 240 },
    { label: "Arena", h: 280 },
  ];
  return (
    <section id="gallery" className="relative bg-[#0f0f0f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Behind The Machines" title={<><span className="gold-gradient">Gallery</span></>} />
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
          {items.map((it, i) => (
            <div
              key={i}
              style={{ height: it.h }}
              className="reveal group mb-4 flex items-center justify-center break-inside-avoid metallic-border rounded-md bg-gradient-to-br from-[#1a1a1a] to-black transition hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <div className="text-center">
                <Wrench className="mx-auto h-8 w-8 text-[#d4af37]/60 transition group-hover:text-[#d4af37]" strokeWidth={1} />
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#f5f5f5]/50">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact" className="relative bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Get In Touch" title={<><span className="gold-gradient">Contact</span></>} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal metallic-border rounded-md overflow-hidden">
            <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-[#d4af37]" strokeWidth={1} />
                <div className="mt-3 font-[Orbitron] text-sm uppercase tracking-widest text-[#f5f5f5]">Find Us</div>
                <div className="mt-1 text-xs text-[#f5f5f5]/60">Map placeholder</div>
              </div>
            </div>
            <div className="border-t border-[#d4af37]/20 p-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[#f5f5f5]/80"><Mail className="h-4 w-4 text-[#d4af37]" /> contact@blackdiamondrobotics.in</div>
              <div className="flex items-center gap-3 text-[#f5f5f5]/80"><Phone className="h-4 w-4 text-[#d4af37]" /> +91 00000 00000</div>
              <div className="flex items-center gap-3 text-[#f5f5f5]/80"><MapPin className="h-4 w-4 text-[#d4af37]" /> India</div>
              <div className="flex items-center gap-4 pt-3">
                <a href="#" aria-label="Instagram" className="text-[#d4af37] hover:scale-110 transition"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="text-[#d4af37] hover:scale-110 transition"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="GitHub" className="text-[#d4af37] hover:scale-110 transition"><Github className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="reveal metallic-border rounded-md p-8 space-y-4">
            {["Name", "Email", "Phone"].map((f) => (
              <div key={f}>
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">{f}</label>
                <input
                  required
                  type={f === "Email" ? "email" : "text"}
                  className="mt-2 w-full rounded-sm border border-[#d4af37]/20 bg-black/60 px-4 py-3 text-sm text-[#f5f5f5] outline-none focus:border-[#d4af37]"
                />
              </div>
            ))}
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Message</label>
              <textarea
                required rows={5}
                className="mt-2 w-full rounded-sm border border-[#d4af37]/20 bg-black/60 px-4 py-3 text-sm text-[#f5f5f5] outline-none focus:border-[#d4af37]"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#d4af37] px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a]"
            >
              {sent ? "Message Sent" : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-12" />
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={44} />
              <span className="font-[Orbitron] text-sm font-bold tracking-widest text-[#f5f5f5]">
                BLACK <span className="text-[#d4af37]">DIAMOND</span>
              </span>
            </div>
            <p className="mt-4 text-xs text-[#f5f5f5]/60">Forging machines that refuse to lose.</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-[#f5f5f5]/70">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-[#d4af37] transition">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-4">Sponsors</div>
            <ul className="space-y-2 text-sm text-[#f5f5f5]/70">
              <li><a href="#sponsors" className="hover:text-[#d4af37] transition">Our Partners</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition">Become a Sponsor</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-4">Social</div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-[#d4af37] hover:scale-110 transition"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-[#d4af37] hover:scale-110 transition"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="text-[#d4af37] hover:scale-110 transition"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#d4af37]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f5f5f5]/50">
          <div>© {new Date().getFullYear()} Black Diamond Robotics. All rights reserved.</div>
          <div>Made with <span className="text-[#d4af37]">♦</span> by Team Black Diamond Robotics</div>
        </div>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-[#d4af37] via-[#f0cf5a] to-[#d4af37] transition-[width]"
      style={{ width: `${p}%` }}
    />
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:bg-[#f0cf5a] transition"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

function Loader({ done }: { done: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="animate-fade-up">
          <Logo size={110} />
        </div>
        <div className="mt-6 font-[Orbitron] text-xs uppercase tracking-[0.5em] text-[#d4af37]">
          Igniting Arena
        </div>
        <div className="mx-auto mt-4 h-[2px] w-40 overflow-hidden bg-[#d4af37]/20">
          <div className="h-full w-1/3 bg-[#d4af37] animate-[bd-shimmer_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

function BlackDiamondSite() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <Loader done={loaded} />
      <ScrollProgress />
      <Nav open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Bots />
        <Achievements />
        <Sponsors />
        <Team />
        <Enroll />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

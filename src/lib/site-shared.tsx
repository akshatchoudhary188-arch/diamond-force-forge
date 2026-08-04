import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Cpu, Zap, Shield, Cog,
  ClipboardList, MessageSquare, FlaskConical, CheckCircle2,
} from "lucide-react";

import logoAsset from "@/assets/logo.jpeg.asset.json";
import hyperionAsset from "@/assets/hyperion.jpeg.asset.json";
import scarletAsset from "@/assets/scarlet.png.asset.json";
import polarisAsset from "@/assets/polaris.jpg.asset.json";
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
import sumeetAsset from "@/assets/sumeet.jpg.asset.json";
import rollndriveAsset from "@/assets/rollndrive.png.asset.json";
import ravvoAsset from "@/assets/ravvo.jpeg.asset.json";
import virtualSimutechAsset from "@/assets/virtual-simutech.jpeg.asset.json";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Our Bots", href: "/bots" },
  { label: "Achievements", href: "/achievements" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Join Team", href: "/join" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Ask Us", href: "/help" },
] as const;

export const STATS = [
  { label: "Robots Built", value: 4 },
  { label: "Competitions", value: 29 },
  { label: "Team Members", value: 15 },
  { label: "Years Active", value: 5 },
];

export const BOTS = [
  {
    name: "HYPERION",
    slug: "hyperion",
    weight: "15 kg",
    weightClass: 15,
    weapon: "Vertical Spinner",
    drive: "4WD brushless direct drive",
    materials: "HARDOX weapon, mild-steel frame, HDPE armour panels",
    performance: "High-impact vertical strikes with strong arena control",
    history: ["AXIS VNIT — Winner (15 kg)", "MINDBEND SVNIT — Winner (15 kg)", "IIT Bombay — Runner Up (15 kg)"],
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
    slug: "scarlet",
    weight: "8 kg",
    weapon: "Vertical Spinner",
    drive: "2WD brushless drive with high-traction wheels",
    materials: "Hardened steel drum, metal chassis, polycarbonate covers",
    performance: "Fast, low-profile aggression with sustained drum energy",
    history: ["AXIS VNIT — Winner (8 kg)", "BITS Quark — Winner"],
    desc: "A powerful 8 kg combat robot built for RoboWar competitions.",
    specs: [
      "Strong metal chassis designed to withstand heavy impacts during battles.",
      "High-speed vertical spinner weapon that delivers strong attacks to damage opponent robots.",
      "Low-profile design and sturdy wheels provide stability, fast movement, and precise control in the arena.",
      "Curved unibody built for aggressive performance, durability, and high-impact combat power.",
    ],
    icon: Cog,
    image: scarletAsset.url,
  },
  {
    name: "POLARIS",
    slug: "polaris",
    weight: "8 kg",
    weapon: "Drum Spinner",
    drive: "Brushless drive, high-traction wheels, rapid acceleration",
    materials: "Reinforced metal chassis with impact-absorbing armour",
    performance: "Devastating upward strikes that flip and destabilise rivals",
    history: ["NIT Karnataka — Winner", "Y ROBO C Malaysia — Runner Up"],
    desc: "A powerful 8 kg combat robot engineered for RoboWar competitions.",
    specs: [
      "Reinforced metal chassis designed to absorb heavy impacts while maintaining structural strength during intense battles.",
      "High-speed drum spinner weapon capable of delivering devastating upward strikes to flip, damage, and destabilize opponent robots.",
      "Compact, low-profile design with high-traction wheels for rapid acceleration, agile maneuverability, and precise arena control.",
      "Built for aggressive performance, exceptional durability, and consistent high-impact combat power in the arena.",
    ],
    icon: Shield,
    image: polarisAsset.url,
  },
  {
    name: "LUCIAN",
    slug: "lucian",
    weight: "15 kg",
    weapon: "Drum Spinner",
    drive: "Brushless drive system tuned for stability and control",
    materials: "Curved unibody metal shell built to absorb damage",
    performance: "Heavy drum energy with consistent uptime across matches",
    history: ["BITS Quark — Winner", "AXIS VNIT — Winner (15 kg)"],
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

export const ACHIEVEMENTS = [
  { icon: "🥈", title: "Runner Up — Y ROBO C, Malaysia", year: "" },
  { icon: "🏆", title: "Winner — BITS Quark", year: "" },
  { icon: "🏆", title: "Winner — AXIS VNIT (15 KG & 8 KG)", year: "" },
  { icon: "🏆", title: "Winner — NIT Karnataka", year: "" },
  { icon: "🏆", title: "Winner — MINDBEND SVNIT (15 KG)", year: "" },
  { icon: "🏆", title: "First — REC Chennai (Titanium), 15 KG", year: "2026" },
  { icon: "🏆", title: "First — Symbiosis Pune (Kurukshetra), 15 KG & 8 KG", year: "2026" },
  { icon: "🥈", title: "Second — IIT Madras (Shastra), 15 KG", year: "2025" },
  { icon: "🏆", title: "First — Geetanjali, Telangana, 15 KG & 8 KG", year: "2025" },
  { icon: "🏆", title: "First — IIIT Nagpur (TantraFiesta), 15 KG & 8 KG", year: "2025" },
  { icon: "🏆", title: "First — SRM Chennai (Robofest), 8 KG", year: "2025" },
  { icon: "🥈", title: "Second — VIT Vellore (Robotica), 15 KG", year: "2025" },
  { icon: "🥈", title: "Second — SGGS Nanded (Rmageddon), 15 KG & 8 KG", year: "2025" },
  { icon: "🥈", title: "Second — IIT Bombay (Techfest), 15 KG", year: "2024" },
  { icon: "🥈", title: "Second — COEP Pune (MindSpark), 15 KG", year: "2024" },
  { icon: "🏆", title: "First — VNIT Nagpur (Axis), 15 KG & 8 KG · Second, 15 KG", year: "2024" },
  { icon: "🏆", title: "First — BIT Goa (Quark), 8 KG", year: "2024" },
  { icon: "🥉", title: "Third — IIT Gandhinagar, 15 KG", year: "2023" },
  { icon: "🥈", title: "Second — IIT Bombay (Techfest), 30 KG", year: "2023" },
  { icon: "🥈", title: "Second — TechnoXian Delhi, 60 KG", year: "2023" },
  { icon: "🥈", title: "Second — NIT Surat (Engineering), 15 KG", year: "2023" },
  { icon: "🥈", title: "Second — VNIT Nagpur (Axis), 15 KG", year: "2023" },
  { icon: "🏆", title: "First — SVNIT Surat (Mindspark), 15 KG", year: "2023" },
  { icon: "🏆", title: "First — BIT Goa (Quark), 15 KG", year: "2023" },
  { icon: "🏆", title: "First — COEP Pune (Mindspark), 15 KG · Second, 15 KG", year: "2023" },
  { icon: "🥈", title: "Second — IIT Bombay (Techfest), 15 KG", year: "2022" },
  { icon: "🏆", title: "First — SNIST Hyderabad (Roboveda), 15 KG", year: "2022" },
  { icon: "🏆", title: "First — BIT Hyderabad (Atmos), 15 KG · Second, 8 KG", year: "2022" },
  { icon: "🥈", title: "Second — NIT Calicut (Tatva), 15 KG", year: "2022" },
  { icon: "🏆", title: "First — Parul University (Projections), 15 KG", year: "2022" },
];

export const SPONSORS = [
  { name: "Virtual Simutech", image: virtualSimutechAsset.url, url: "https://virtualsimutech.com/" },
  { name: "Roll n Drive", image: rollndriveAsset.url, url: "https://www.rollndrive.com/" },
  { name: "RAVYO AUTOTECH", image: ravvoAsset.url, url: "https://www.ravyostore.com/" },
];

export const TEAM = [
  { name: "Akshay Khanke", role: "", image: founderAsset.url },
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
  { name: "Sumeet Pal", role: "", image: sumeetAsset.url },
  { name: "Akshat", role: "", image: akshatAsset.url },
  { name: "Khushi Khade", role: "", image: khushiAsset.url },
];

export const STEPS = [
  { icon: ClipboardList, title: "Fill Registration Form", desc: "Submit your details and areas of interest." },
  { icon: MessageSquare, title: "Attend Interview", desc: "Meet the team, share your passion." },
  { icon: FlaskConical, title: "Technical Test", desc: "Prove your engineering fundamentals." },
  { icon: CheckCircle2, title: "Become a Team Member", desc: "Join the forge. Start building." },
];

export const LOGO_URL = logoAsset.url;

export const CONTACT = {
  email: "Teamblackdiamond034@gmail.com",
  phone: "+91 95955 07035",
  whatsapp: "919595507035",
  instagram: "https://www.instagram.com/teamblack_diamond/",
  address: "Government Engineering College, Ballarpur Road, Chandrapur, Maharashtra 442404, India",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d79.319513!3d19.9217856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d4719e5cbe07%3A0xb8c55b177f1c18f2!2sGEC!5e0!3m2!1sen!2sin!4v1",
};

export const VALUES = [
  { title: "Engineering First", desc: "Every design decision is backed by analysis, testing and iteration." },
  { title: "Reliability", desc: "A bot that survives the full event beats a bot that peaks once." },
  { title: "Teamwork", desc: "Mechanical, electronics and drive crews work as one unit." },
  { title: "Mentorship", desc: "Senior members train juniors so knowledge stays in the team." },
];

export const TIMELINE = [
  { year: "2021", title: "Team Founded", desc: "A small group of GEC Chandrapur students started building their first combat robot." },
  { year: "2022", title: "First National Podium", desc: "Runner Up at IIT Bombay in the 15 kg category." },
  { year: "2023", title: "Fleet Expansion", desc: "Two new machines join the roster across 8 kg and 15 kg classes." },
  { year: "2024", title: "Multi-Title Season", desc: "Wins at AXIS VNIT, NIT Karnataka and MINDBEND SVNIT." },
  { year: "2025", title: "International Debut", desc: "Runner Up at Y ROBO C, Malaysia." },
];

export const FAQS = [
  { q: "Who can apply?", a: "Any enrolled student with genuine interest in mechanical design, electronics, fabrication, media or management." },
  { q: "Do I need prior robotics experience?", a: "No. We train fundamentals — what we look for is commitment and willingness to learn." },
  { q: "How much time does it take?", a: "Expect a few hours a week, increasing during build season and competition weeks." },
  { q: "Is there a fee?", a: "No membership fee. Build costs are covered by the team and our sponsors." },
];

/* ---------- Shared UI ---------- */

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Black Diamond Robotics logo"
      className={`object-contain ${className}`}
    />
  );
}

export function useReveal() {
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

export function useCounter(target: number, start: boolean, duration = 1600) {
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

export function StatItem({ label, value }: { label: string; value: number }) {
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

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="reveal mb-16 text-center">
      <div className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">{eyebrow}</div>
      <h1 className="mt-4 font-[Orbitron] text-3xl font-black uppercase tracking-widest text-[#f5f5f5] sm:text-5xl">
        {title}
      </h1>
      <div className="mx-auto mt-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen bg-[#0b0b0b] pt-28 pb-24 text-[#f5f5f5] sm:pt-32">
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
      <div className="reveal">
        <div className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">{eyebrow}</div>
        <h1 className="mt-4 font-[Orbitron] text-3xl font-black uppercase tracking-widest text-[#f5f5f5] sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#f5f5f5]/70 sm:text-base">{subtitle}</p>
        )}
        <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-[#d4af37] to-transparent" />
      </div>
    </header>
  );
}

export { Link };
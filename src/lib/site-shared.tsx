import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Cpu, Zap, Shield, Cog,
  ClipboardList, MessageSquare, FlaskConical, CheckCircle2,
} from "lucide-react";

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
import sumeetAsset from "@/assets/sumeet.jpg.asset.json";
import rollndriveAsset from "@/assets/rollndrive.png.asset.json";
import ravvoAsset from "@/assets/ravvo.jpeg.asset.json";
import virtualSimutechAsset from "@/assets/virtual-simutech.jpeg.asset.json";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Our Bots", href: "/bots" },
  { label: "Our Team", href: "/team" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Enroll", href: "/enroll" },
  { label: "Find Us", href: "/find-us" },
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

export const ACHIEVEMENTS = [
  { icon: "🥈", title: "Runner Up — Y ROBO C, Malaysia", year: "" },
  { icon: "🏆", title: "Winner — BITS Quark", year: "" },
  { icon: "🏆", title: "Winner — AXIS VNIT (15 KG & 8 KG)", year: "" },
  { icon: "🏆", title: "Winner — NIT Karnataka", year: "" },
  { icon: "🏆", title: "Winner — MINDBEND SVNIT (15 KG)", year: "" },
  { icon: "🥈", title: "Runner Up — IIT Bombay (15 KG)", year: "2022" },
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
    <div className="min-h-screen bg-[#0b0b0b] pt-24 pb-24 text-[#f5f5f5] sm:pt-28">
      {children}
    </div>
  );
}

export { Link };
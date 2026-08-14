import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import teamVideoAsset from "@/assets/team-video.mp4.asset.json";
import galleryTeamArenaAsset from "@/assets/gallery-team-arena.jpg.asset.json";
import galleryTeamBotsAsset from "@/assets/gallery-team-bots.png.asset.json";
import galleryYroboAsset from "@/assets/gallery-yrobo.jpg.asset.json";
import g1Asset from "@/assets/g1.jpeg.asset.json";
import g2Asset from "@/assets/g2.jpeg.asset.json";
import g5Asset from "@/assets/g5.jpeg.asset.json";
import g6Asset from "@/assets/g6.jpeg.asset.json";
import gg1Asset from "@/assets/gg1.jpeg.asset.json";
import d1Asset from "@/assets/d1.jpeg.asset.json";
import d2Asset from "@/assets/d2.jpeg.asset.json";
import d3Asset from "@/assets/d3.jpeg.asset.json";
import d4Asset from "@/assets/d4.jpeg.asset.json";
import { BOTS, PageHero, PageShell } from "@/lib/site-shared";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Team Black Diamond Robotics" },
      { name: "description", content: "Photos and videos from competitions, the workshop and the robot build process at Team Black Diamond Robotics." },
      { property: "og:title", content: "Gallery — Black Diamond Robotics" },
      { property: "og:description", content: "Competition, workshop and build photos plus team videos." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: galleryTeamBotsAsset.url },
      { name: "twitter:image", content: galleryTeamBotsAsset.url },
    ],
    links: [{ rel: "canonical", href: "https://black-diamond-robotics.lovable.app/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [fullscreen, setFullscreen] = useState(false);
  const photos = [
    { src: galleryTeamBotsAsset.url, label: "Team & Bots" },
    { src: d3Asset.url, label: "Titanium 2025 — 15 kg Winner" },
    { src: d2Asset.url, label: "Team On Arena Stage" },
    { src: d4Asset.url, label: "Flag Walk-In, Robowars" },
    { src: d1Asset.url, label: "Driver Focus In The Pit" },
    { src: g1Asset.url, label: "Trophy Wall & Bots" },
    { src: g6Asset.url, label: "Arena Celebration" },
    { src: g5Asset.url, label: "Hyperion In The Arena" },
    { src: gg1Asset.url, label: "Build & Pit Work" },
    { src: g2Asset.url, label: "Medals & Drones Display" },
    { src: galleryYroboAsset.url, label: "Y ROBO C, Malaysia" },
    { src: galleryTeamArenaAsset.url, label: "Competition Arena" },
    ...BOTS.map((b) => ({ src: b.image, label: b.name })),
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Behind The Machines"
        title={<><span className="gold-gradient">Gallery</span></>}
        subtitle="Competition days, workshop hours and the machines in between."
      />
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6">
        <section className="reveal">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Video</h2>
          <div className="group relative mt-6 overflow-hidden rounded-sm border border-[#d4af37]/20">
            <video src={teamVideoAsset.url} controls playsInline className="max-h-[70vh] w-full bg-black object-contain" aria-label="Team video" />
            <button
              onClick={() => setFullscreen(true)}
              aria-label="Maximize video"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-sm bg-black/70 text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section className="reveal">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Photos</h2>
          <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((p, i) => (
              <figure key={i} className="group overflow-hidden rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e]">
                <img src={p.src} alt={p.label} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <figcaption className="px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-[#f5f5f5]/55">{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      {fullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setFullscreen(false)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <video src={teamVideoAsset.url} controls autoPlay playsInline className="max-h-[80vh] w-full rounded-sm" />
            <button onClick={() => setFullscreen(false)} className="absolute -top-9 right-0 text-xs uppercase tracking-widest text-[#f5f5f5]/70 hover:text-[#d4af37]">Close</button>
          </div>
        </div>
      )}
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { PageShell, SectionHeader } from "@/lib/site-shared";
import teamVideoAsset from "@/assets/team-video.mp4.asset.json";
import galleryTeamArenaAsset from "@/assets/gallery-team-arena.jpg.asset.json";
import galleryTeamBotsAsset from "@/assets/gallery-team-bots.png.asset.json";
import galleryYroboAsset from "@/assets/gallery-yrobo.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Black Diamond Robotics" },
      { name: "description", content: "Photos and video from Y Robo C, arena matches and the workshop — behind the machines of Team Black Diamond Robotics." },
      { property: "og:title", content: "Gallery — Black Diamond Robotics" },
      { property: "og:description", content: "Behind the machines of Team Black Diamond Robotics." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: galleryTeamBotsAsset.url },
      { name: "twitter:image", content: galleryTeamBotsAsset.url },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [fullscreen, setFullscreen] = useState(false);
  const videoUrl = teamVideoAsset.url;
  const items = [
    { type: "video" as const, label: "Team Video" },
    { type: "image" as const, label: "Team & Bots", src: galleryTeamBotsAsset.url },
    { type: "image" as const, label: "Y Robo C", src: galleryYroboAsset.url },
    { type: "image" as const, label: "Competition Arena", src: galleryTeamArenaAsset.url },
  ];
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Behind The Machines" title={<><span className="gold-gradient">Gallery</span></>} />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="reveal group relative aspect-[4/3] overflow-hidden metallic-border rounded-md bg-gradient-to-br from-[#1a1a1a] to-black transition hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              {it.type === "video" ? (
                <>
                  <video src={videoUrl} controls playsInline className="h-full w-full object-cover" aria-label="Team video" />
                  <button
                    onClick={() => setFullscreen(true)}
                    className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-[#d4af37] opacity-0 transition hover:bg-[#d4af37] hover:text-black group-hover:opacity-100"
                    aria-label="Maximize video"
                  >
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
            <video src={videoUrl} controls autoPlay playsInline className="h-full max-h-[80vh] w-full rounded-md" aria-label="Team video fullscreen" />
            <button onClick={() => setFullscreen(false)} className="absolute -top-10 right-0 text-xs uppercase tracking-widest text-[#f5f5f5]/70 hover:text-[#d4af37]">
              Close
            </button>
          </div>
        </div>
      )}
    </PageShell>
  );
}

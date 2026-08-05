import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell, CONTACT } from "@/lib/site-shared";

const SERVICES = [
  { title: "FDM Printing", desc: "PLA, PLA+, PETG, ABS and TPU parts printed at 0.1–0.3 mm layer heights on calibrated machines." },
  { title: "Functional Prototypes", desc: "Fit-check and load-bearing prototypes for student projects, startups and workshop tooling." },
  { title: "Combat-Grade Parts", desc: "Bot covers, mounts, wheel hubs and jigs engineered from real arena experience." },
  { title: "CAD & Design", desc: "Model from a sketch, photo or idea — we design the part before we print it." },
  { title: "Reverse Engineering", desc: "Recreate broken or discontinued components as printable 3D models." },
  { title: "Bulk & Batch Runs", desc: "Repeat production of small parts with consistent tolerances and pricing." },
];

const MATERIALS = [
  { name: "PLA / PLA+", use: "Display models, jigs, light-duty parts" },
  { name: "PETG", use: "Tough, weather-resistant functional parts" },
  { name: "ABS", use: "Heat-resistant mechanical components" },
  { name: "TPU", use: "Flexible bumpers, grips and gaskets" },
];

const PROCESS = [
  { step: "01", title: "Share Your Idea", desc: "Send an STL file, CAD model, sketch or reference photo on WhatsApp." },
  { step: "02", title: "Quote & Review", desc: "We confirm material, infill, finish, lead time and cost before printing." },
  { step: "03", title: "Print & Inspect", desc: "Parts are printed, cleaned, supported-removed and dimensionally checked." },
  { step: "04", title: "Delivery", desc: "Local pickup in Chandrapur or shipped anywhere in India." },
];

const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hi Black Diamond 3D Creates — I'd like a quote for a 3D printing job.",
)}`;

export const Route = createFileRoute("/3d-printing")({
  head: () => ({
    meta: [
      { title: "Black Diamond 3D Creates — 3D Printing Services" },
      { name: "description", content: "Black Diamond 3D Creates offers FDM 3D printing, CAD design, rapid prototyping and batch production in PLA, PETG, ABS and TPU." },
      { property: "og:title", content: "Black Diamond 3D Creates — 3D Printing Services" },
      { property: "og:description", content: "FDM 3D printing, CAD design and rapid prototyping by Team Black Diamond Robotics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://diamond-force-forge.lovable.app/3d-printing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Black Diamond 3D Creates — 3D Printing Services" },
      { name: "twitter:description", content: "FDM 3D printing, CAD design and rapid prototyping by Team Black Diamond Robotics." },
    ],
    links: [{ rel: "canonical", href: "https://diamond-force-forge.lovable.app/3d-printing" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Black Diamond 3D Creates",
        description: "3D printing, CAD design and rapid prototyping services.",
        telephone: CONTACT.phone,
        address: { "@type": "PostalAddress", streetAddress: CONTACT.address },
        url: "https://diamond-force-forge.lovable.app/3d-printing",
      }),
    }],
  }),
  component: PrintingPage,
});

function PrintingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Black Diamond 3D Creates"
        title={<>3D <span className="gold-gradient">Printing</span> Services</>}
        subtitle="Our in-house 3D printing venture — precision FDM parts, CAD design and rapid prototyping, built by the same crew that fabricates our combat robots."
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-4 sm:px-6">
        <section>
          <h2 className="reveal font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">What We Print</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="reveal rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-6">
                <h3 className="font-[Orbitron] text-sm font-bold uppercase tracking-widest">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="reveal font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Materials</h2>
          <div className="mt-8 overflow-hidden rounded-sm border border-[#d4af37]/15">
            {MATERIALS.map((m) => (
              <div key={m.name} className="flex flex-col gap-1 border-b border-[#d4af37]/10 bg-[#0e0e0e] p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-[Orbitron] text-xs font-bold uppercase tracking-[0.2em] text-[#f5f5f5]">{m.name}</span>
                <span className="text-sm text-[#f5f5f5]/60">{m.use}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="reveal font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">How It Works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="reveal rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-6">
                <span className="font-[Orbitron] text-2xl font-black text-[#d4af37]/40">{p.step}</span>
                <h3 className="mt-3 font-[Orbitron] text-sm font-bold uppercase tracking-widest">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#f5f5f5]/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal rounded-sm border border-[#d4af37]/25 bg-[#0e0e0e] p-10 text-center">
          <h2 className="font-[Orbitron] text-lg font-black uppercase tracking-widest">Get a Print Quote</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#f5f5f5]/65">
            Send us your file or idea and we'll come back with material options, lead time and pricing.
          </p>
          <a href={waLink} target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-sm bg-[#d4af37] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#f0cf5a]">
            Request a Quote
          </a>
        </section>
      </div>
    </PageShell>
  );
}

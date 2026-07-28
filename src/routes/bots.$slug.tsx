import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BOTS, PageHero, PageShell } from "@/lib/site-shared";

export const Route = createFileRoute("/bots/$slug")({
  loader: ({ params }) => {
    const bot = BOTS.find((b) => b.slug === params.slug);
    if (!bot) throw notFound();
    return { name: bot.name, desc: bot.desc, slug: bot.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Robot not found — Black Diamond Robotics" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name} — Combat Robot | Black Diamond Robotics`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.desc },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `https://diamond-force-forge.lovable.app/bots/${loaderData.slug}` }],
    };
  },
  component: BotDetail,
  notFoundComponent: BotNotFound,
});

function BotNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="font-[Orbitron] text-2xl font-black uppercase tracking-widest">Robot not found</h1>
        <Link to="/bots" className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-[#d4af37] hover:underline">
          Back to all bots
        </Link>
      </div>
    </PageShell>
  );
}

function BotDetail() {
  const { slug } = Route.useParams();
  const bot = BOTS.find((b) => b.slug === slug)!;

  const specs = [
    { label: "Weight", value: bot.weight },
    { label: "Weapon", value: bot.weapon },
    { label: "Drive", value: bot.drive },
    { label: "Materials", value: bot.materials },
    { label: "Performance", value: bot.performance },
  ];

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Link to="/bots" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#d4af37] hover:underline">
          <ArrowLeft className="h-4 w-4" /> All bots
        </Link>
      </div>
      <PageHero eyebrow={`${bot.weight} · ${bot.weapon}`} title={bot.name} subtitle={bot.desc} />

      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6">
        <section className="reveal grid gap-10 lg:grid-cols-2">
          <img src={bot.image} alt={`${bot.name} combat robot`} className="w-full rounded-sm border border-[#d4af37]/25 object-cover" />
          <div>
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Specifications</h2>
            <dl className="mt-6 divide-y divide-[#d4af37]/15 border-y border-[#d4af37]/15">
              {specs.map((s) => (
                <div key={s.label} className="grid grid-cols-3 gap-4 py-4">
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-[#f5f5f5]/50">{s.label}</dt>
                  <dd className="col-span-2 text-sm text-[#f5f5f5]/80">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="reveal">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Design Highlights</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {bot.specs.map((s, i) => (
              <li key={i} className="flex gap-3 rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-5 text-sm text-[#f5f5f5]/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="reveal">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Competition History</h2>
          <ul className="mt-6 space-y-3">
            {bot.history.map((h) => (
              <li key={h} className="rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] px-5 py-4 text-sm text-[#f5f5f5]/80">{h}</li>
            ))}
          </ul>
        </section>

        <section className="reveal">
          <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {BOTS.filter((b) => b.slug !== bot.slug).map((b) => (
              <Link key={b.slug} to="/bots/$slug" params={{ slug: b.slug }} className="group overflow-hidden rounded-sm border border-[#d4af37]/15">
                <img src={b.image} alt={b.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="bg-[#0e0e0e] px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-[#f5f5f5]/60">{b.name}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

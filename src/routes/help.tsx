import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  MessageCircle,
  Send,
  HelpCircle,
  Bot,
  Wrench,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { CONTACT, PageHero, PageShell } from "@/lib/site-shared";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Ask Us — Team Black Diamond Robotics" },
      {
        name: "description",
        content:
          "Ask Team Black Diamond Robotics anything about combat robots, components, events, or workshops. We reply on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Ask Us — Team Black Diamond Robotics",
      },
      {
        property: "og:description",
        content:
          "Ask Team Black Diamond Robotics anything about combat robots, components, events, or workshops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://diamond-force-forge.lovable.app/help" }],
  }),
  component: HelpPage,
});

const helpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .max(100, { message: "Email must be less than 100 characters" })
    .email({ message: "Please enter a valid email address" }),
  details: z
    .string()
    .trim()
    .min(10, { message: "Please write at least 10 characters" })
    .max(2000, { message: "Details must be less than 2000 characters" }),
});

const TOPICS = [
  {
    icon: Bot,
    title: "Robot Design",
    desc: "Questions about weapon selection, drive systems, chassis layout, or combat strategy.",
  },
  {
    icon: Wrench,
    title: "Components",
    desc: "Motors, ESCs, batteries, transmitters, receivers, or where to source parts.",
  },
  {
    icon: MessageCircle,
    title: "General Enquiry",
    desc: "Events, workshops, team visits, media requests, sponsorships, or collaboration.",
  },
];

function HelpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = helpSchema.safeParse({ name, email, details });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const text = `Hi Team Black Diamond,\n\nName: ${result.data.name}\nEmail: ${result.data.email}\nQuery: ${result.data.details}`;
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const input =
    "w-full rounded-sm border border-[#d4af37]/25 bg-black px-4 py-3 text-sm text-[#f5f5f5] outline-none transition-colors focus:border-[#d4af37]";

  return (
    <PageShell>
      <PageHero
        eyebrow="Support"
        title={<>Ask <span className="gold-gradient">Us</span></>}
        subtitle="Have a question about combat robotics, need a component, or want to collaborate? Send us a message and we will respond as soon as possible."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Topics */}
          <section className="reveal space-y-4 lg:col-span-2">
            <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">
              What We Can Help With
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {TOPICS.map((topic) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={topic.title}
                    className="rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-5 transition-colors hover:border-[#d4af37]/35"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#d4af37]/20 bg-[#0a0a0a]">
                        <Icon className="h-5 w-5 text-[#d4af37]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-[Orbitron] text-sm font-bold uppercase tracking-wider text-[#f5f5f5]">
                          {topic.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#f5f5f5]/60">
                          {topic.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-sm border border-[#d4af37]/15 bg-[#0e0e0e] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#d4af37]/20 bg-[#0a0a0a]">
                  <Clock className="h-5 w-5 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-[Orbitron] text-sm font-bold uppercase tracking-wider text-[#f5f5f5]">
                    Response Time
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#f5f5f5]/60">
                    We usually reply within 24–48 hours. For urgent queries during events, we respond faster on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Form */}
          <section className="reveal lg:col-span-3">
            <div className="rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#d4af37]/20 bg-[#0a0a0a]">
                  <HelpCircle className="h-5 w-5 text-[#d4af37]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-[Orbitron] text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                    Send a Message
                  </h2>
                  <p className="text-xs text-[#f5f5f5]/50">
                    All fields are required. Your message will be sent via WhatsApp.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    maxLength={100}
                    className={input}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    maxLength={100}
                    className={input}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="details" className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Query / Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your question, the robotic component you need, or anything you want to ask..."
                    maxLength={2000}
                    rows={6}
                    className={`${input} resize-none`}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    {errors.details ? (
                      <p className="text-xs text-red-400">{errors.details}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-[10px] text-[#f5f5f5]/40">
                      {details.length}/2000
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#d4af37] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#f0cf5a]"
                >
                  <Send className="h-4 w-4" />
                  Send on WhatsApp
                </button>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 rounded-sm border border-[#d4af37]/20 bg-[#d4af37]/10 p-3 text-xs text-[#d4af37]">
                    <CheckCircle2 className="h-4 w-4" />
                    WhatsApp opened. If the chat did not appear, check your pop-up blocker.
                  </div>
                )}
              </form>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  MessageCircle,
  Send,
  HelpCircle,
  Bot,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Get Help — Black Diamond Robotics" },
      {
        name: "description",
        content:
          "Ask Team Black Diamond Robotics anything about combat robots, components, events, or workshops. We reply on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Get Help — Black Diamond Robotics",
      },
      {
        property: "og:description",
        content:
          "Ask Team Black Diamond Robotics anything about combat robots, components, events, or workshops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HelpPage,
});

const helpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  details: z
    .string()
    .trim()
    .min(10, { message: "Please write at least 10 characters" })
    .max(2000, { message: "Details must be less than 2000 characters" }),
});

function HelpPage() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = helpSchema.safeParse({ name, details });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const text = `Hi Team Black Diamond,\n\nName: ${result.data.name}\nQuery: ${result.data.details}`;
    const url = `https://wa.me/919595507035?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        {/* Title */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">
            <HelpCircle className="h-3.5 w-3.5" />
            Ask the Team
          </div>
          <h1 className="font-[Orbitron] text-3xl font-bold leading-tight md:text-4xl gold-gradient">
            How Can We Help You?
          </h1>
          <p className="mt-3 text-sm text-[#f5f5f5]/70 md:text-base">
            Have a question about combat robotics, need a component, or want to
            collaborate? Drop your query and we will get back on WhatsApp.
          </p>
        </div>

        {/* Help topics */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="glass-card rounded-lg p-4 text-center">
            <Bot className="mx-auto mb-2 h-6 w-6 text-[#d4af37]" />
            <div className="text-sm font-semibold text-[#f5f5f5]">Robot Design</div>
            <div className="text-xs text-[#f5f5f5]/60">Weapon, drive, chassis</div>
          </div>
          <div className="glass-card rounded-lg p-4 text-center">
            <Wrench className="mx-auto mb-2 h-6 w-6 text-[#d4af37]" />
            <div className="text-sm font-semibold text-[#f5f5f5]">Components</div>
            <div className="text-xs text-[#f5f5f5]/60">Motors, ESCs, batteries</div>
          </div>
          <div className="glass-card rounded-lg p-4 text-center">
            <MessageCircle className="mx-auto mb-2 h-6 w-6 text-[#d4af37]" />
            <div className="text-sm font-semibold text-[#f5f5f5]">General Query</div>
            <div className="text-xs text-[#f5f5f5]/60">Events, workshops, team</div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card gold-glow rounded-xl border border-[#d4af37]/10 p-8 md:p-10"
          noValidate
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#d4af37]"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              maxLength={100}
              className="w-full rounded-lg border border-[#d4af37]/20 bg-[#0a0a0a]/60 px-4 py-3 text-sm text-[#f5f5f5] placeholder:text-[#f5f5f5]/30 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/50"
            />
            {errors.name && (
              <p className="mt-2 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="details"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#d4af37]"
            >
              Details / Query
            </label>
            <textarea
              id="details"
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe your question, the robotic component you need, or anything you want to ask..."
              maxLength={2000}
              rows={6}
              className="w-full resize-none rounded-lg border border-[#d4af37]/20 bg-[#0a0a0a]/60 px-4 py-3 text-sm text-[#f5f5f5] placeholder:text-[#f5f5f5]/30 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/50"
            />
            {errors.details && (
              <p className="mt-2 text-xs text-red-400">{errors.details}</p>
            )}
            <div className="mt-1 text-right text-[10px] text-[#f5f5f5]/40">
              {details.length}/2000
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#b8912d] via-[#f0cf5a] to-[#b8912d] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0a0a0a] shadow-[0_0_24px_-4px_rgba(212,175,55,0.5)] transition-transform hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" />
            Send on WhatsApp
          </button>

          {submitted && (
            <p className="mt-4 text-center text-xs text-[#d4af37]">
              WhatsApp chat opened. If it did not open, check your pop-up blocker.
            </p>
          )}
        </form>

        {/* Direct contact — number is embedded in the WhatsApp send link only */}
        <div className="mt-10 text-center text-xs text-[#f5f5f5]/50">
          Prefer direct contact?{" "}
          <a
            href="https://wa.me/919595507035"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] hover:text-[#f0cf5a]"
          >
            Open WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

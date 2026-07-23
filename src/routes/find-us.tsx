import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { PageShell, SectionHeader } from "@/lib/site-shared";

export const Route = createFileRoute("/find-us")({
  head: () => ({
    meta: [
      { title: "Find Us — Black Diamond Robotics" },
      { name: "description", content: "Team Black Diamond Robotics — Government Engineering College, Chandrapur, Maharashtra, India. Directions, phone and email." },
      { property: "og:title", content: "Find Us — Black Diamond Robotics" },
      { property: "og:description", content: "Visit the forge — GEC Chandrapur, Maharashtra, India." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FindUsPage,
});

function FindUsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Visit The Forge" title={<>Find <span className="gold-gradient">Us</span></>} />
        <div className="reveal grid gap-8 lg:grid-cols-5">
          <div className="metallic-border rounded-md overflow-hidden lg:col-span-3">
            <iframe
              title="Team Black Diamond Robotics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d79.319513!3d19.9217856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d4719e5cbe07%3A0xb8c55b177f1c18f2!2sGEC!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-80 sm:h-96 lg:h-[28rem] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="metallic-border rounded-md p-8 lg:col-span-2 flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 gold-border">
                <MapPin className="h-5 w-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Address</div>
                <p className="mt-1 text-sm leading-relaxed text-[#f5f5f5]/80">
                  Government Engineering College,<br />
                  Ballarpur Road, Chandrapur,<br />
                  Maharashtra 442404, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 gold-border">
                <Phone className="h-5 w-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Phone</div>
                <p className="mt-1 text-sm text-[#f5f5f5]/80">+91 95955 07035</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 gold-border">
                <Mail className="h-5 w-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="font-[Orbitron] text-xs uppercase tracking-[0.3em] text-[#d4af37]">Email</div>
                <p className="mt-1 text-sm text-[#f5f5f5]/80">Teamblackdiamond034@gmail.com</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/GEC/@19.9217906,79.3169382,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd2d4719e5cbe07:0xb8c55b177f1c18f2!8m2!3d19.9217856!4d79.319513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-sm bg-[#d4af37] px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#f0cf5a]"
            >
              Open in Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronUp, ChevronDown, Instagram, Calendar, ExternalLink } from "lucide-react";
import { BOTS, CONTACT, Logo, NAV, SPONSORS } from "@/lib/site-shared";
import { SponsorTicker } from "@/components/sponsor-ticker";
import robowarsAsset from "@/assets/robowars-logo.webp.asset.json";
import robofestVideoAsset from "@/assets/robofest-promo.mp4.asset.json";

function NavLinks({ onNavigate, vertical = false }: { onNavigate?: () => void; vertical?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [botsOpen, setBotsOpen] = useState(false);

  return (
    <ul className={vertical ? "space-y-1" : "flex items-center gap-1"}>
      {NAV.map((n) => {
        const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
        const base = vertical
          ? "block border-b border-[#d4af37]/10 py-3 font-[Orbitron] text-sm font-bold uppercase tracking-[0.2em]"
          : "relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]";
        const color = active ? "text-[#d4af37]" : "text-[#f5f5f5]/75 hover:text-[#d4af37]";

        if (n.href === "/bots") {
          return (
            <li
              key={n.href}
              className={vertical ? "" : "relative"}
              onMouseEnter={() => !vertical && setBotsOpen(true)}
              onMouseLeave={() => !vertical && setBotsOpen(false)}
            >
              <div className={vertical ? "" : "flex items-center"}>
                <Link to="/bots" onClick={onNavigate} className={`${base} ${color} transition-colors`}>
                  {n.label}
                </Link>
                {!vertical && <ChevronDown className="h-3 w-3 text-[#d4af37]/70" />}
                {active && !vertical && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-[#d4af37]" />
                )}
              </div>
              {vertical ? (
                <ul className="mb-2 space-y-1 pl-4">
                  {BOTS.map((b) => (
                    <li key={b.slug}>
                      <Link
                        to="/bots/$slug"
                        params={{ slug: b.slug }}
                        onClick={onNavigate}
                        className="block py-1.5 text-xs uppercase tracking-[0.2em] text-[#f5f5f5]/60 transition-colors hover:text-[#d4af37]"
                      >
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                botsOpen && (
                  <div className="absolute left-0 top-full z-50 w-52 border border-[#d4af37]/25 bg-[#0b0b0b]/98 p-2 shadow-xl">
                    {BOTS.map((b) => (
                      <Link
                        key={b.slug}
                        to="/bots/$slug"
                        params={{ slug: b.slug }}
                        onClick={onNavigate}
                        className="block px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[#f5f5f5]/75 transition-colors hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                      >
                        {b.name}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </li>
          );
        }

        return (
          <li key={n.href} className={vertical ? "" : "relative"}>
            <Link to={n.href as never} onClick={onNavigate} className={`${base} ${color} transition-colors`}>
              {n.label}
            </Link>
            {active && !vertical && <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-[#d4af37]" />}
          </li>
        );
      })}
    </ul>
  );
}

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-[#d4af37]/20 bg-[#0b0b0b]/95 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Home" className="flex shrink-0 items-center gap-3">
          <Logo className="h-10 w-auto rounded-sm gold-border" />
          <span className="font-[Orbitron] text-sm font-bold tracking-widest text-[#f5f5f5]">
            BLACK <span className="text-[#d4af37]">DIAMOND</span>
          </span>
        </Link>

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center gap-2 border border-[#d4af37]/60 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>
      </div>

      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-[#d4af37]/15 bg-[#0b0b0b] px-4 pb-6 sm:px-6 lg:hidden">
          <NavLinks vertical onNavigate={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-16 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-sm border border-[#d4af37]/50 bg-[#0b0b0b] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

export function UpcomingEvent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-16 left-6 z-50 flex flex-col items-start gap-3">
      {open && (
        <div className="w-72 rounded-sm border border-[#d4af37]/30 bg-[#0b0b0b] p-4">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">
            <Calendar className="h-3.5 w-3.5" /> Upcoming Event
          </div>
          <a
            href="https://robofest.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#f5f5f5] transition-colors hover:text-[#d4af37]"
          >
            ROBOFEST 2026
            <ExternalLink className="h-3.5 w-3.5 text-[#d4af37]" />
          </a>
          <div className="mt-3 overflow-hidden rounded-sm border border-[#d4af37]/20">
            <video
              src={robofestVideoAsset.url}
              controls
              playsInline
              muted
              preload="none"
              className="w-full bg-black"
              aria-label="Robofest 2026 promo video"
            />
          </div>
          <a
            href="https://robofest.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37] transition-colors hover:text-[#f0cf5a]"
          >
            Visit robofest.in
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-sm border border-[#d4af37]/50 bg-[#0b0b0b] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
      >
        <Calendar className="h-4 w-4" />
        {open ? "Close" : "Upcoming Event"}
      </button>
    </div>
  );
}

function RobowarsBadge() {
  return (
    <a
      href="https://robowars.co.in/"
      target="_blank"
      rel="noopener noreferrer"
      title="Robowars India"
      aria-label="Visit Robowars India"
      className="fixed bottom-[7.25rem] right-6 z-50 flex h-11 w-11 items-center justify-center overflow-hidden rounded-sm border border-[#d4af37]/50 bg-[#0b0b0b] p-1.5 transition-colors hover:border-[#d4af37]"
    >
      <img src={robowarsAsset.url} alt="Robowars India logo" className="h-full w-full object-contain" />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[#d4af37]/15 bg-black pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-auto rounded-sm gold-border" />
              <span className="font-[Orbitron] text-sm font-bold tracking-widest text-[#f5f5f5]">
                BLACK <span className="text-[#d4af37]">DIAMOND</span>
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#f5f5f5]/60">
              Student-led combat robotics team from GEC Chandrapur. Designing, building and
              competing with world-class machines.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Quick Links</div>
            <ul className="space-y-2 text-sm text-[#f5f5f5]/70">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link to={n.href as never} className="transition-colors hover:text-[#d4af37]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Our Sponsors</div>
            <div className="flex flex-wrap items-center gap-3">
              {SPONSORS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-20 items-center justify-center rounded-sm border border-[#d4af37]/20 bg-[#0e0e0e] p-2 transition-colors hover:border-[#d4af37]/60"
                >
                  <img src={s.image} alt={s.name} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                </a>
              ))}
            </div>
            <Link
              to="/sponsors"
              className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-[#d4af37] hover:underline"
            >
              Become a Sponsor
            </Link>
          </div>

          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">Connect</div>
            <ul className="space-y-2 text-sm text-[#f5f5f5]/70">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-[#d4af37]">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.phone}</li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#d4af37] transition-colors hover:text-[#f0cf5a]"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#d4af37]/15 pt-6 text-xs text-[#f5f5f5]/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Team Black Diamond Robotics. All rights reserved.</div>
          <div>GEC Chandrapur, Maharashtra, India</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0b0b] pb-16 text-[#f5f5f5]">
      <TopBar />
      <main>{children}</main>
      <SiteFooter />
      <ScrollTop />
      <UpcomingEvent />
      <RobowarsBadge />
      <SponsorTicker />
    </div>
  );
}

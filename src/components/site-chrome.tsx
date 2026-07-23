import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, ChevronUp, Instagram, MessageSquare, Calendar,
} from "lucide-react";
import { Logo, NAV } from "@/lib/site-shared";

export function TopBar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0b0b]/95 backdrop-blur-md border-b border-[#d4af37]/20"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Home" className="flex items-center gap-3 shrink-0">
          <Logo className="h-10 w-auto rounded-sm gold-border" />
          <span className="font-[Orbitron] text-sm font-bold tracking-widest text-[#f5f5f5]">
            BLACK <span className="text-[#d4af37]">DIAMOND</span>
          </span>
        </Link>
        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="group flex items-center gap-2 rounded-sm border border-[#d4af37]/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          <Menu className="h-4 w-4" />
          Menu
        </button>
      </div>
    </nav>
  );
}

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[80] flex flex-col bg-[#0a0a0a]/98 backdrop-blur-md animate-fade-up"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-auto rounded-sm gold-border" />
          <span className="font-[Orbitron] text-sm font-bold tracking-widest text-[#f5f5f5]">
            BLACK <span className="text-[#d4af37]">DIAMOND</span>
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center gap-2 rounded-sm border border-[#d4af37]/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          <X className="h-4 w-4" />
          Close
        </button>
      </div>

      <div className="flex flex-1 items-center overflow-y-auto">
        <ul className="mx-auto w-full max-w-3xl px-6 py-8 space-y-1">
          {NAV.map((n, i) => {
            const isHash = n.href.startsWith("/#");
            const active = !isHash && pathname === n.href;
            return (
              <li key={n.href} className="border-b border-[#d4af37]/10">
                {isHash ? (
                  <a
                    href={n.href}
                    onClick={onClose}
                    className={`group flex items-baseline gap-6 py-4 sm:py-5 transition text-[#f5f5f5]/80 hover:text-[#d4af37]`}
                  >
                    <span className="w-10 font-[Orbitron] text-xs tracking-widest text-[#d4af37]/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[Orbitron] text-3xl font-black uppercase tracking-widest sm:text-5xl">
                      {n.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    to={n.href as never}
                    onClick={onClose}
                    className={`group flex items-baseline gap-6 py-4 sm:py-5 transition ${
                      active ? "text-[#d4af37]" : "text-[#f5f5f5]/80 hover:text-[#d4af37]"
                    }`}
                  >
                  <span className="w-10 font-[Orbitron] text-xs tracking-widest text-[#d4af37]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[Orbitron] text-3xl font-black uppercase tracking-widest sm:text-5xl">
                    {n.label}
                  </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 text-[10px] uppercase tracking-[0.3em] text-[#f5f5f5]/50 sm:px-6">
        <span>© {new Date().getFullYear()} Black Diamond Robotics</span>
        <a
          href="https://www.instagram.com/teamblack_diamond/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-[#d4af37] transition hover:scale-110"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-[#d4af37] via-[#f0cf5a] to-[#d4af37] transition-[width]"
      style={{ width: `${p}%` }}
    />
  );
}

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:bg-[#f0cf5a] transition"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

export function FloatingAskUs() {
  return (
    <Link
      to="/help"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#d4af37] shadow-[0_0_24px_-4px_rgba(212,175,55,0.4)] ring-1 ring-[#d4af37]/40 transition-transform hover:scale-105 hover:ring-[#d4af37]/70"
      aria-label="Ask us a question"
    >
      <MessageSquare className="h-4 w-4" />
      Ask Us
    </Link>
  );
}

export function UpcomingEvent() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);
  if (dismissed) return null;
  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-3">
      {open && (
        <div className="glass-card gold-glow relative w-64 rounded-lg p-4 animate-fade-up">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-2 top-2 text-[#d4af37]/70 hover:text-[#f0cf5a]"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">
            <Calendar className="h-3.5 w-3.5" />
            Upcoming Event
          </div>
          <div className="mt-3 text-xs text-[#f5f5f5]/70">
            Event details will be updated soon.
          </div>
        </div>
      )}
      <button
        onClick={() => (open ? setDismissed(true) : setOpen(true))}
        className="group relative flex items-center gap-2 rounded-full bg-gradient-to-br from-[#b8912d] via-[#f0cf5a] to-[#b8912d] px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#0b0b0b] shadow-[0_0_24px_-4px_rgba(212,175,55,0.6)] transition-transform hover:scale-105"
        aria-label={open ? "Dismiss upcoming event" : "Show upcoming event"}
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#d4af37]/40" />
        <Calendar className="h-4 w-4" />
        {open ? "Dismiss" : "Upcoming Event"}
      </button>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative bg-black pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-10" />
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-auto rounded-sm gold-border" />
              <span className="font-[Orbitron] text-sm font-bold tracking-widest text-[#f5f5f5]">
                BLACK <span className="text-[#d4af37]">DIAMOND</span>
              </span>
            </div>
            <p className="mt-4 text-xs text-[#f5f5f5]/60">Forging machines that refuse to lose.</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-[#f5f5f5]/70">
              {NAV.map((n) => (
                <li key={n.href}>
                  {n.href.startsWith("/#") ? (
                    <a href={n.href} className="hover:text-[#d4af37] transition">{n.label}</a>
                  ) : (
                    <Link to={n.href as never} className="hover:text-[#d4af37] transition">{n.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-4">Sponsors</div>
            <ul className="space-y-2 text-sm text-[#f5f5f5]/70">
              <li><a href="/#sponsors" className="hover:text-[#d4af37] transition">Our Partners</a></li>
              <li><a href="/#contact" className="hover:text-[#d4af37] transition">Become a Sponsor</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-4">Social</div>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/teamblack_diamond/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#d4af37] hover:scale-110 transition"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#d4af37]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f5f5f5]/50">
          <div>© {new Date().getFullYear()} Black Diamond Robotics. All rights reserved.</div>
          <div>Made with <span className="text-[#d4af37]">♦</span> by Team Black Diamond Robotics</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f5]">
      <ScrollProgress />
      <TopBar onOpenMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <SiteFooter />
      <ScrollTop />
      <UpcomingEvent />
      <FloatingAskUs />
    </div>
  );
}
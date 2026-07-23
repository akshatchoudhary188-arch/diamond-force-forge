## Goal
Turn the current single-page site into a real multi-page site (like goodway.fr), with a **MENU** button in the top-right that opens a full-screen list of every page.

## New route structure
Each current section becomes its own route with its own SEO metadata (title, description, og:title, og:description):

```text
/                → Home (hero + short intro + quick stats)
/bots            → Our Bots
/team            → Our Team
/achievements    → Achievements
/gallery         → Gallery
/sponsors        → Sponsors
/enroll          → Enroll / Join The Team
/find-us         → Find Us (map)
/contact         → Contact
/help            → Ask Us (already exists — keep)
```

## Navigation UX (goodway-inspired)
- Top bar on every page: **logo (left)** + **MENU button (top-right)**.
- Clicking MENU opens a full-screen overlay listing all pages as large, tappable items with hover accent (gold on black).
- Overlay closes on selection, `Esc`, or the close (✕) button.
- Small footer link row on each page as a secondary nav for accessibility.
- Floating **Upcoming Event** and **Ask Us** buttons stay on every page.

## Shared layout
- Move the header, MENU overlay, floating buttons, scroll progress, and footer into `src/routes/__root.tsx` so every route inherits them around `<Outlet />`.
- Extract each current section from `src/routes/index.tsx` into its own route file. Shared data (BOTS, TEAM, ACHIEVEMENTS, SPONSORS, STATS) moves to `src/lib/site-data.ts`; shared UI helpers (SectionHeader, useReveal) move to `src/components/site/`.

## Home page (`/`)
- Keep the glowing hero image.
- Add a compact stats strip and a grid of large tiles that link to each page (Bots, Team, Achievements, Gallery, Sponsors, Contact) — so the home screen itself doubles as the "list of pages".

## Technical notes
- TanStack file-based routing: one file per route under `src/routes/`.
- Each route exports `head()` with unique title + description + og tags.
- Old in-page hash anchors (`#bots`, `#team`, …) removed; MENU links use `<Link to="/bots">` etc.
- No backend/data changes.

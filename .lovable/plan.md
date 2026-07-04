# Quattro Enhancement Plan

Design tokens, colors, typography and the existing Quattro/Nexus iframe stay **exactly** as they are. Everything below is additive — new routes and overlay components layered on top.

## 1. Case-study routes
- `src/routes/work.$slug.tsx` — dynamic detail page (Problem → Process → Outcome + metrics).
- `src/routes/work.index.tsx` — grid index of all case studies.
- Content in `src/content/case-studies.ts` (typed array, 3 seed entries).
- Each route sets its own `head()` with title/description/og.

## 2. ⌘K Command Palette
- `src/components/CommandPalette.tsx` using existing shadcn `command` + `dialog`.
- Global keybind (⌘K / Ctrl+K) via a hook in `__root.tsx`.
- Actions: jump to Home / Work / About / Contact / each case study / copy email.

## 3. Custom cursor
- `src/components/CustomCursor.tsx` — dot + trailing ring, `mix-blend-mode: difference`.
- Magnetic effect on `[data-magnetic]` (links, CTAs).
- Disabled on touch devices (`pointer: coarse`).

## 4. Scroll reveals
- `src/hooks/useReveal.ts` — IntersectionObserver-based.
- `.reveal` utility in `src/styles.css`: opacity/translate → animates in when visible.
- Applied to case-study sections and future routes; iframe home page untouched.

## 5. Copy-email footer
- `src/components/SiteFooter.tsx` — oversized name + email; click copies to clipboard with toast (existing `sonner`).
- Mounted in `__root.tsx` below `<Outlet />` so it appears on non-iframe pages.

## 6. Contact form on Lovable Cloud
- Enable Lovable Cloud.
- Migration: `contact_messages` table (id, name, email, message, created_at) with RLS + GRANTs.
  - Policy: anyone (anon) can INSERT; only service_role reads.
- `src/routes/contact.tsx` with form → server function `submitContact` (`.inputValidator` Zod → insert via server publishable client).
- Success toast; error surface via `errorComponent`.

## Technical notes
- No edits to `public/quattro/**` — Nexus runtime stays.
- No edits to color tokens in `src/styles.css` (only add `.reveal` + cursor utility).
- All new routes use shared `SiteFooter` + palette; `/` remains the iframe view.
- Navigation via `<Link to=...>`, never `<a href>`.

## Files to create
```
src/routes/work.index.tsx
src/routes/work.$slug.tsx
src/routes/contact.tsx
src/content/case-studies.ts
src/components/CommandPalette.tsx
src/components/CustomCursor.tsx
src/components/SiteFooter.tsx
src/hooks/useReveal.ts
src/lib/contact.functions.ts
supabase/migrations/<ts>_contact_messages.sql
```

## Files to edit
- `src/routes/__root.tsx` — mount CustomCursor, CommandPalette, SiteFooter (SiteFooter only on non-`/` routes).
- `src/styles.css` — add `.reveal` keyframes/utility only.

Shall I proceed with all six, or trim any?

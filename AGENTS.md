<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Design System — QUATTRO

This project uses the **QUATTRO** design language, extracted from
`https://quattro.framer.website`. When building or editing UI, follow it:

- **Theme:** Dark. Background `#000000`, foreground `#ffffff`.
- **Accent (primary):** `#0099ff` (electric blue) — use only for CTAs, links, focus rings.
- **Secondary accent:** `#41ba90` (green) — sparingly for highlights/success.
- **Font:** Inter (loaded in `src/styles.css`). Use `font-sans` everywhere.
- **Spacing:** 8px grid. Generous vertical rhythm between sections.
- **Radius:** base `--radius: 0.75rem` (md ~10px, lg ~12px, xl ~16px).
- **Tokens:** All semantic colors live in `src/styles.css` (`:root` / `.dark`) in oklch.
  Use Tailwind tokens (`bg-background`, `text-foreground`, `bg-primary`, `border-border`)
  — never hard-code hex values.

Full reference: `design/QUATTRO_DESIGN_DNA.md`, prompts in `design/QUATTRO_PROMPT_PACK.md`,
visual anchor `design/quattro_reference.png`.

# Design DNA — Quattro

> Paste this file into your Lovable project's **Knowledge** (Project Settings → Knowledge).
> Every page Lovable generates will inherit this visual system.

- **Source:** https://quattro.framer.website
- **Extracted:** 2026-07-05
- **Real design tokens found:** Yes
- **Theme:** Dark

## Color System

- **Background:** `#000000`
- **Foreground / Text:** `#ffffff`
- **Primary accent:** `#0099ff`
- **Accents:** `#0099ff`, `#41ba90`
- **Surfaces / Cards:** `#a8a8a8`
- **Muted / Secondary text:** `#2e2e2e`, `#363636`, `#545454`, `#7a7a7a`

**Rule:** Use the background and foreground for all base surfaces and body text. Reserve the primary accent strictly for CTAs, links, and key highlights — do not overuse it.

## Typography

- **Primary font:** Inter
- **Mono font:** Space Mono
- **Font stack:** Inter, Space Mono
- **Type scale:**
  - `display`: 48px
  - `h1`: 36px
  - `h2`: 28px
  - `h3`: 22px
  - `body`: 16px
  - `caption`: 13px
  - _derived (source type scale was inconsistent)_
- **Weights in use:** regular, medium, semibold, bold

## Spacing & Layout

- **Base spacing unit:** 8px (all spacing should be multiples of this)
- **Spacing scale:** space-1=8px, space-2=16px, space-3=24px, space-4=32px, space-5=40px, space-6=48px, space-7=64px, space-8=80px
- **Breakpoints:** 809px, 810px, 959px, 960px, 1364px

## Shape & Elevation

- **Border radius scale:** md=8px, lg=15px, xl=24px
- **Shadows:**
  - `sm`: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px

## Assets

- Load fonts via Google Fonts / @font-face: Inter, Space Mono
- Ripped images available: 7 | icons: 22

## Visual Reference

Upload these screenshots to the Lovable chat as visual anchors:
- `screenshot_1.png`

## How To Build In This Style

1. Default to a **dark theme** with `#000000` backgrounds and `#ffffff` text.
2. Use **Inter** for all text; keep the type scale above.
3. Space everything on an **8px grid**. Generous vertical rhythm between sections.
4. Use `#0099ff` **only** for primary CTAs and interactive highlights.
5. Round corners consistently (base radius ~8px).
6. Match the source's density and whitespace — do not crowd sections.

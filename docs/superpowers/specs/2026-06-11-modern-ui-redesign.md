# Modern UI Redesign — AB-900 Study Hub

**Date:** 2026-06-11
**Status:** Approved design, pending implementation

## Overview

Evolutionary visual refresh of the AB-900 Study Hub across all pages (index, study-guide, flashcards, key-pointers, key-concepts). Neutral + accent color system, elevated frosted hero card, refined typography and spacing, improved dark mode.

---

## 1. Color System & Typography

### Light Theme

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#f8fafc` | Page background |
| `--bg-card` | `#ffffff` | Cards, dropdowns, header |
| `--bg-elevated` | `#f1f5f9` | Secondary surfaces, hover |
| `--text` | `#0f172a` | Body text |
| `--text-secondary` | `#475569` | Secondary text |
| `--text-tertiary` | `#94a3b8` | Placeholder, captions |
| `--border` | `#e2e8f0` | Borders |
| `--accent` | `#3b82f6` | Links, CTAs, active states |
| `--accent-soft` | `rgba(59,130,246,0.08)` | Hover backgrounds |
| `--shadow` | `0 1px 3px rgba(15,23,42,0.08)` | Card shadow |
| `--shadow-lg` | `0 4px 24px rgba(15,23,42,0.10)` | Dropdown shadow |
| `--radius` | `8px` | Default |
| `--radius-lg` | `12px` | Cards |

### Dark Theme

| Token | Value |
|-------|-------|
| `--bg` | `#0f172a` |
| `--bg-card` | `#1e293b` |
| `--bg-elevated` | `#334155` |
| `--text` | `#f1f5f9` |
| `--text-secondary` | `#94a3b8` |
| `--text-tertiary` | `#64748b` |
| `--border` | `#334155` |
| `--accent` | `#60a5fa` |
| `--accent-soft` | `rgba(96,165,250,0.12)` |

### Domain Colors (domain-specific contexts only)

| Domain | Light | Dark |
|--------|-------|------|
| D1 | `#2563eb` | `#60a5fa` |
| D2 | `#d97706` | `#fbbf24` |
| D3 | `#16a34a` | `#4ade80` |

### Typography

- Base: `16px`, `line-height: 1.55`
- Headings: `h1: 2rem → h2: 1.5rem → h3: 1.15rem → h4: 1rem`
- Font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", sans-serif`
- Links: `font-weight: 500`

---

## 2. Layout & Spacing

- `--max-width: 1120px` (was 1200px)
- Container: `padding: 2rem 1.5rem`
- Section gap: `2.5rem`
- Card padding: `1.25rem`
- Grid gaps: `1.5rem` (domain), `1rem` (section, module)

---

## 3. Header & Navigation

- Sticky header, thinner: `padding: 0.6rem 1.5rem`
- Nav: pill-style items, active state = underline indicator (not filled bg)
  ```css
  .nav a.active { background: transparent; color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }
  ```
- Search: pill-radius (`20px`), refined border
- Theme toggle: keep current style, icon-only on mobile
- Mobile: hamburger at 768px, nav slides down, search collapses to icon

---

## 4. Hero Section (index)

Elevated frosted glass card:
- Centered, max-width ~700px
- Light: `background: rgba(255,255,255,0.7)`, `backdrop-filter: blur(16px)`
- Dark: `background: rgba(15,23,42,0.6)`, `backdrop-filter: blur(16px)`
- `border: 1px solid rgba(255,255,255,0.2)` (light)
- `box-shadow: 0 8px 32px rgba(15,23,42,0.08)`
- Title: `font-size: 2.25rem`, `letter-spacing: -0.03em`

---

## 5. Components

### Domain Cards
- `box-shadow: 0 1px 2px rgba(0,0,0,0.05)` → hover: `0 4px 16px rgba(0,0,0,0.08) + translateY(-3px)`
- Icon: `2.5rem`
- Color border: `4px` top

### Section Cards (Study Material)
- Icon left-aligned with text (not centered above)
- CTA arrow: `translateX(0) → translateX(4px)` on hover
- `transition: all 0.2s`

### Pill Links
- Refined hover: `background: var(--bg-elevated)`, `border-color: var(--accent)`

### Module Cards
- Keep structure, refined shadows
- Badge colors use domain colors

### Study Guide Content
- Breadcrumb: `0.8rem`, `color: var(--text-tertiary)`
- Content: `line-height: 1.65`
- Exam tips: colored left border
- Table header: cleaner, row stripes on hover+

### Flashcards
- Card: `border-radius: 16px`, softer shadow
- Controls: pill-shaped buttons
- Keep flip animation

---

## 6. Dark Mode

- `slate-950` background, `slate-900` cards, `slate-700` borders
- Glass hero: `rgba(15,23,42,0.6)` backdrop
- All accent colors: lighter variants (blue-400, amber-400, green-400)
- Proper contrast across all text levels

---

## 7. Mobile (≤428px)

- All existing mobile rules preserved
- Search: icon-toggle (current behavior)
- Cards: full-width single column
- Consistent touch targets (`min 44px`)
- Table: `word-break: break-word`, horizontal scroll

---

## Implementation Order

1. `style.css` — update all CSS variables, typography, layout, component styles
2. `index.html` — hero card restyle, section card layout tweak
3. `study-guide.html` — minor breadcrumb/content style refinements
4. `flashcards.html` — pill controls
5. `key-pointers.html`, `key-concepts.html` — minor margin/padding alignment

Estimated impact: CSS file only (no structural HTML changes except hero).

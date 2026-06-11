# Modern UI Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolutionary visual refresh of AB-900 Study Hub across all pages — neutral color system, frosted glass hero, refined typography/spacing, improved dark mode.

**Architecture:** Single CSS file (`style.css`), all 5 HTML pages. No structural changes except the hero section on `index.html`. CSS variables drive theming. Domain colors shift to lighter variants in dark mode.

**Tech Stack:** CSS custom properties, vanilla HTML/CSS/JS, `backdrop-filter` for glass effect.

---

### Task 1: Update CSS Variables — Colors & Shadows

**Files:** Modify `style.css:2-27`

- [ ] **Update light theme variables**

Replace the current `:root` block:

```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --accent-soft: rgba(59,130,246,0.08);
  --bg: #f8fafc;
  --bg-card: #ffffff;
  --bg-elevated: #f1f5f9;
  --text: #0f172a;
  --text-secondary: #475569;
  --text-tertiary: #94a3b8;
  --border: #e2e8f0;
  --accent-green: #16a34a;
  --accent-red: #ef4444;
  --accent-orange: #d97706;
  --shadow: 0 1px 3px rgba(15,23,42,0.08);
  --shadow-lg: 0 4px 24px rgba(15,23,42,0.10);
  --radius: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Helvetica, Arial, sans-serif;
  --max-width: 1120px;
}
```

- [ ] **Update dark theme variables**

Replace the current `[data-theme="dark"]` block:

```css
[data-theme="dark"] {
  --bg: #0f172a;
  --bg-card: #1e293b;
  --bg-elevated: #334155;
  --text: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-tertiary: #64748b;
  --border: #334155;
  --shadow: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-lg: 0 4px 24px rgba(0,0,0,0.4);
  --accent-soft: rgba(96,165,250,0.12);
}
```

- [ ] **Replace `--primary` references that should stay `#2563eb`**

The `--primary` variable was `#2563eb`. Now it's `#3b82f6`. For any code that needs the old deeper blue (domain D1 color), use `#2563eb` explicitly.

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): update color system and shadow variables"
```

---

### Task 2: Typography & Base Refinements

**Files:** Modify `style.css:30-31`, `59-66`, `31`

- [ ] **Update body typography**

```css
html { scroll-behavior: smooth; }
body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.55; min-height: 100vh; }
```

- [ ] **Update heading sizes**

```css
h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3; letter-spacing: -0.02em; }
h2 { font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 0.75rem; line-height: 1.3; }
h3 { font-size: 1.15rem; font-weight: 600; margin: 1rem 0 0.5rem; line-height: 1.4; }
h4 { font-size: 1rem; font-weight: 600; margin: 0.75rem 0 0.4rem; }
```

- [ ] **Add `a { font-weight: 500; }`**

Add `font-weight: 500` to the existing `a` rule at line 33.

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): update typography sizes and weights"
```

---

### Task 3: Layout & Container Refinements

**Files:** Modify `style.css:53`, headers

- [ ] **Update container max-width**

```css
.container { max-width: var(--max-width); margin: 0 auto; padding: 2rem 1.5rem; }
```

- [ ] **Update section spacing**

```css
.domains-section, .materials-section, .quicklinks-section, .modules-section { margin-bottom: 2.5rem; }
```

- [ ] **Add card refined styles**

Update `.card`:

```css
.card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem; box-shadow: var(--shadow); }
```

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): update container and card spacing"
```

---

### Task 4: Header & Navigation

**Files:** Modify `style.css:37-50`

- [ ] **Update header padding**

```css
.header-inner { max-width: var(--max-width); margin: 0 auto; padding: 0.6rem 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
```

- [ ] **Update nav link styles — active state underline instead of filled bg**

```css
.nav a { padding: 0.4rem 0.75rem; border-radius: var(--radius); text-decoration: none; color: var(--text-secondary); font-size: 0.85rem; font-weight: 500; transition: background 0.15s, color 0.15s; }
.nav a:hover { background: var(--accent-soft); color: var(--accent); text-decoration: none; }
.nav a.active { background: transparent; color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }
```

- [ ] **Update search box — pill style**

```css
.search-box { display: flex; align-items: center; gap: 0.4rem; background: var(--bg); border: 1px solid var(--border); border-radius: 20px; padding: 0.25rem 0.75rem; transition: border-color 0.15s; }
.search-box:focus-within { border-color: var(--accent); }
.search-box input { border: none; background: transparent; outline: none; color: var(--text); font-size: 0.85rem; width: 150px; }
```

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): modernize header, nav, and search styles"
```

---

### Task 5: Hero Section — Frosted Glass Card

**Files:** Modify `style.css:89-96` (hero), Modify `index.html:31-40` (hero HTML)

- [ ] **Update hero CSS**

```css
.hero { padding: 3rem 1rem; display: flex; justify-content: center; }
.hero-card { max-width: 700px; width: 100%; background: rgba(255,255,255,0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.2); border-radius: var(--radius-xl); padding: 2.5rem 2rem; text-align: center; box-shadow: 0 8px 32px rgba(15,23,42,0.08); }
[data-theme="dark"] .hero-card { background: rgba(15,23,42,0.6); border-color: rgba(255,255,255,0.08); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
.hero-card h1 { font-size: 2.25rem; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
.hero-sub { font-size: 1.05rem; max-width: 550px; margin: 0.5rem auto 0; color: var(--text-secondary); }
.hero-tags { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem; }
.tag { display: inline-block; padding: 0.25rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 500; color: #fff; }
```

- [ ] **Update index.html hero section**

Wrap existing hero content in the card div:

```html
<section class="hero">
  <div class="hero-card">
    <h1>AB-900 Study Hub</h1>
    <p class="hero-sub">Microsoft 365 Copilot &amp; Agent Administration <span style="opacity:0.5;">Fundamentals</span></p>
    <div class="hero-tags">
      <span class="tag tag-blue">Passing score: 700</span>
      <span class="tag tag-orange">MCQ &middot; Multi-select &middot; Scenario &middot; Drag &amp; drop</span>
      <span class="tag tag-green">No labs, no case studies</span>
    </div>
  </div>
</section>
```

- [ ] **Commit**

```bash
git add style.css index.html
git commit -m "feat(hero): add frosted glass card hero design"
```

---

### Task 6: Domain Cards Refinements

**Files:** Modify `style.css:267-276`

- [ ] **Update domain card styles**

```css
.domain-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
.domain-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 1.5rem; display: flex; flex-direction: column; align-items: center; text-align: center; box-shadow: var(--shadow); transition: transform 0.2s, box-shadow 0.2s; }
.domain-card:hover { transform: translateY(-3px); box-shadow: 0 4px 16px rgba(15,23,42,0.08); }
[data-theme="dark"] .domain-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.3); }
.domain-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
.domain-card h3 { margin: 0 0 0.35rem; font-size: 1.25rem; }
.domain-title { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem; }
.domain-bar { height: 5px; width: 100%; max-width: 200px; background: var(--bg); border-radius: 4px; overflow: hidden; margin: 0.5rem 0 0.35rem; }
```

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): refine domain cards with improved shadows"
```

---

### Task 7: Section Cards (Study Material) Refinements

**Files:** Modify `style.css:105`, with section card styles

- [ ] **Update section card styles**

```css
.section-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
.section-card { display: flex; flex-direction: column; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem; text-decoration: none; color: var(--text); transition: all 0.2s; box-shadow: var(--shadow); }
.section-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(15,23,42,0.08); text-decoration: none; }
[data-theme="dark"] .section-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
.section-card .icon { font-size: 1.75rem; margin-bottom: 0.5rem; }
.section-card h3 { margin: 0 0 0.35rem; font-size: 1.05rem; color: var(--text); }
.section-card p { font-size: 0.85rem; color: var(--text-secondary); flex: 1; margin: 0; }
.section-card .card-cta { display: inline-block; margin-top: 0.75rem; font-size: 0.82rem; font-weight: 600; color: var(--accent); transition: transform 0.2s; }
.section-card:hover .card-cta { transform: translateX(4px); }
```

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): refine section cards with hover lift and CTA animation"
```

---

### Task 8: Pill Links Refinements

**Files:** Modify `style.css:284-285`

- [ ] **Update pill link styles**

```css
.pill-group { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 0.75rem; }
.pill-link { display: inline-block; padding: 0.4rem 1rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; font-size: 0.85rem; color: var(--text-secondary); transition: all 0.15s; text-decoration: none; font-weight: 500; }
.pill-link:hover { background: var(--bg-elevated); border-color: var(--accent); color: var(--accent); text-decoration: none; }
```

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): refine pill link hover states"
```

---

### Task 9: Module Cards — Domain Colors

**Files:** Modify `style.css:287-294`, Modify `index.html:117-129` (JS that builds module cards)

- [ ] **Update module card styles**

```css
.modules-section .section-grid { display: flex; flex-wrap: wrap; }
.modules-section .section-grid > * { flex: 1; min-width: 240px; }
.domain-module-group { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem; display: flex; flex-direction: column; justify-content: flex-start; }
.domain-module-header { margin: 0 0 0.75rem; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem; }
.module-card { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.65rem; border-radius: var(--radius); text-decoration: none; color: var(--text); font-size: 0.85rem; transition: background 0.15s; }
.module-card:hover { background: var(--accent-soft); text-decoration: none; }
.module-card .module-count { margin-left: auto; font-size: 0.75rem; color: var(--text-tertiary); white-space: nowrap; }
```

- [ ] **Update index.html module badge colors to use domain colors**

In the inline script at `index.html:117-129`, update `getModuleBadgeHtml` calls. The module badge colors should use domain colors:
- m1,m2 → D1 color (#2563eb)
- m3 → D2 color (#d97706)
- m4,m5,m6 → D3 color (#16a34a)

Update `data/modules.js:149-156` badge color map:

```javascript
const moduleBadgeColors = {
  m1: '#2563eb',
  m2: '#2563eb',
  m3: '#d97706',
  m4: '#16a34a',
  m5: '#16a34a',
  m6: '#16a34a'
};
```

- [ ] **Commit**

```bash
git add style.css data/modules.js index.html
git commit -m "refactor(css+modules): module cards use domain colors"
```

---

### Task 10: Study Guide Content Area

**Files:** Modify `style.css` — breadcrumb and content styles

- [ ] **Update breadcrumb style**

```css
.breadcrumb { font-size: 0.8rem; color: var(--text-tertiary); margin-bottom: 0.5rem; }
```

- [ ] **Update content area typography**

```css
.content-area { line-height: 1.65; }
```

- [ ] **Update exam tips box**

```css
.exam-tips { border-left: 3px solid var(--accent-green); padding: 0.75rem 1rem; margin: 1rem 0; border-radius: 0 var(--radius) var(--radius) 0; background: var(--accent-soft); }
```

- [ ] **Update table header**

```css
th { background: var(--bg-elevated); font-weight: 600; }
```

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): refine study guide content styles"
```

---

### Task 11: Flashcard Refinements

**Files:** Modify `style.css:150-179`

- [ ] **Update flashcard styles — softer shadow, larger radius**

```css
.flashcard-wrap { max-width: 640px; margin: 0 auto; perspective: 1200px; }
.flashcard-3d { position: relative; width: 100%; min-height: 320px; cursor: pointer; transform-style: preserve-3d; transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1); }
.flashcard-3d.flipped { transform: rotateY(180deg); }
.flashcard-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: var(--radius-xl); padding: 2rem; display: flex; flex-direction: column; border: 1px solid var(--border); background: var(--bg-card); box-shadow: var(--shadow-lg); }
```

- [ ] **Update flashcard controls — pill shapes**

```css
.flashcard-controls select, .flashcard-controls button { padding: 0.4rem 0.8rem; border: 1px solid var(--border); border-radius: 20px; background: var(--bg-card); color: var(--text); font-size: 0.85rem; cursor: pointer; transition: background 0.15s; }
.flashcard-controls button:hover { background: var(--accent-soft); }
```

- [ ] **Update flashcard nav buttons**

```css
.flashcard-nav button { min-width: 120px; padding: 0.5rem 1.25rem; border: 1px solid var(--border); border-radius: 20px; background: var(--bg-card); color: var(--text); font-size: 0.9rem; cursor: pointer; transition: all 0.15s; }
.flashcard-nav button:hover { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); }
.flashcard-nav button:disabled { opacity: 0.4; cursor: default; }
```

- [ ] **Commit**

```bash
git add style.css
git commit -m "refactor(css): refine flashcard styles with pill controls"
```

---

### Task 12: Dark Mode Domain Colors & Contrast

**Files:** Modify `style.css` — add dark mode domain color overrides

- [ ] **Add domain color dark mode overrides**

Dark mode domain colors need to be lighter. Add after the `[data-theme="dark"]` block:

```css
[data-theme="dark"] .tag-blue { background: #60a5fa; }
[data-theme="dark"] .tag-orange { background: #fbbf24; }
[data-theme="dark"] .tag-green { background: #4ade80; }
```

The `getModuleBadgeHtml` function in `modules.js` already uses inline styles with explicit colors — these will look fine on dark bg since the colors are bright enough. If needed, update the `moduleBadgeColors` to dark variants.

- [ ] **Commit**

```bash
git add style.css
git commit -m "fix(dark-mode): adjust domain colors for dark theme contrast"
```

---

### Task 13: Verify & Touch Up

- [ ] **Visually verify all pages**
  Check index.html hero card, nav active state, domain cards, section cards, pills, module cards on light and dark themes.

- [ ] **Verify mobile breakpoints**
  Check iPhone 12 Pro Max (428px) on all pages — search toggle, nav, cards, flashcards, tables.

- [ ] **Fix any issues found**

- [ ] **Commit final adjustments**

```bash
git add .
git commit -m "fix: visual polish and mobile adjustments after redesign"
```

---

### Task 14: Push

- [ ] **Push to remote**

```bash
git push
```

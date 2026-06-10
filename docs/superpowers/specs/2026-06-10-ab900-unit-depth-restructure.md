# AB-900 Study Hub — Unit-Level Depth Restructure

## Goal

Restructure the AB-900 Study Hub from a flat domain/module-level organization to a hierarchical Learning Path → Module → Unit structure, and expand content to cover all 53 official Microsoft Learn units in depth.

## Architecture

### Navigation tree (3 levels)

```
Learning Path 1 — Explore Microsoft 365 administration
├── Module 1: Explore M365 security foundations (10 units)
├── Module 2: Intro to M365 core services & admin controls (8 units)
└── Module 3: Protect and govern M365 data (8 units)

Learning Path 2 — Explore M365 Copilot and Agent Administration
├── Module 4: Explore M365 Copilot and agents (9 units)
├── Module 5: Basic admin tasks for M365 Copilot (8 units)
└── Module 6: Basic admin tasks for agents (10 units)
```

Total: 2 Learning Paths, 6 Modules, 53 Units.

### New file: `data/modules.js`

Declares the LP → Module → Unit tree structure. Consumed by navigation on all pages.

```js
const moduleTree = [
  {
    id: "lp1",
    title: "Explore Microsoft 365 administration",
    modules: [
      {
        id: "m1",
        title: "Explore M365 security foundations",
        units: [
          { id: "m1-u1", title: "Introduction" },
          { id: "m1-u2", title: "Analyze the Zero Trust security model" },
          // ... all 53 units
        ]
      }
    ]
  }
];
```

### `study-guide.js` — restructured

- Replaced flat `studyGuideSections` array with `studyGuideData` object containing `learningPaths`
- Each unit has: `id`, `title`, `objectives`, `content` (HTML), `examTips` (array), `keyConcepts` (array)
- Content extracted and split from existing `AB-900T00-Study-Guide.md`, then expanded to unit-level depth

### `flashcards.js` — metadata added

Each card gets:
- `learningPath`: "lp1" | "lp2"
- `module`: "m1" through "m6"
- `unit`: unit id (optional, for cards that map to a specific unit)

### `key-pointers.js` — metadata added

Each pointer gets: `learningPath`, `module`, `unit` (same scheme).

### Target card counts

| Category | Current | Target |
|---|---|---|
| Microsoft Purview | 13 | ~25 |
| Defender XDR | 14 | ~20 |
| M365 Copilot | 10 | ~18 |
| Agents | 12 | ~18 |
| Licensing | 10 | ~15 |
| M365 core services | 10 | ~15 |
| Conditional Access | 7 | ~12 |
| SharePoint governance | 8 | ~12 |
| Zero Trust & identity | 9 | ~12 |
| RBAC, PIM, JEA, JIT | 8 | ~10 |
| Other (remaining 11 categories) | 50 | ~93 |
| **Total** | **151** | **~250** |

## UI Changes

### Study Guide page (`study-guide.html`)

- Split into two panels: left sidebar (tree nav) + right content panel
- Left sidebar: collapsible tree with expand/collapse all
- Click unit → loads content into main panel (no page reload, pure JS)
- Content panel shows: unit title, objectives, detailed HTML content, exam tips box, key concepts box, link to relevant flashcards
- Mobile: tree becomes a drawer overlay toggled by "☰ Modules" button

### Flashcards page (`flashcards.html`)

- Additional hierarchical filter: "All Modules" → "LP1 / M1" → "LP1 / M1 / Unit 2"
- Works alongside existing category filter (AND logic)
- Each card shown with a module/unit badge: `M3 · Unit 4`

### Key Pointers page (`key-pointers.html`)

- Same hierarchical filter as Flashcards
- Pointer text prefixed (or badged) with module/unit reference

### Index page (`index.html`)

- Updated to show module tree summary with progress indicators per module
- Direct links to per-module filtered views on Flashcards and Key Pointers

### `style.css` — new components

- `.tree-nav` — the collapsible tree
- `.tree-nav-item` — individual node
- `.tree-nav-toggle` — expand/collapse arrow (▶/▼ or +/−)
- `.tree-nav-active` — highlighted active unit
- `.unit-badge` — small pill showing M3 · Unit 2
- `.drawer-overlay` — mobile drawer backdrop

### `script.js` — new modules

- `initTreeNav()` — builds tree from `moduleTree` data
- `loadUnit(id)` — renders unit content into main panel
- `filterByModule(moduleId)` — filters flashcards/keypointers by module
- Mobile drawer toggle logic

## Content Expansion Strategy

### Per-unit content template

Each unit includes:
1. **Objectives** — extracted from MS Learn unit descriptions
2. **Content** — 3–15 sentences or table, covering the unit's key learning objective
3. **Exam Tips** — 1–3 bullet points with test-taking advice
4. **Key Concepts** — 3–5 terms with brief definitions
5. **Cross-references** — links to relevant flashcards

### Priority order

1. Module 3 (Protect and govern M365 data) — highest exam weight, 8 units
2. Module 1 (M365 security foundations) — broad coverage, 10 units
3. Module 4 (Copilot and agents overview) — foundational for Domain 3, 9 units
4. Module 5 (Copilot admin tasks) — 8 units
5. Module 2 (Core services & admin controls) — 8 units
6. Module 6 (Agent admin tasks) — 10 units

### Source material

- `AB-900T00-Study-Guide.md` — primary source, already has content at domain level, needs to be split per unit and expanded
- Microsoft Learn module pages — for official unit objectives
- Flashcards.md — existing card content reused and expanded

## Implementation Order

1. Create `data/modules.js` with the LP/Module/Unit tree
2. Restructure `data/study-guide.js` — new object shape, content split per unit and expanded
3. Update `study-guide.html` — tree navigation + content panel layout
4. Update `study-guide.html` JS — tree interaction and content loading
5. Update `style.css` — tree nav, unit badge, drawer styles
6. Add `module`/`unit` metadata to `data/flashcards.js`
7. Add hierarchical filter to `flashcards.html`
8. Add `module`/`unit` metadata to `data/key-pointers.js`
9. Add hierarchical filter to `key-pointers.html`
10. Update `index.html` with module tree and progress indicators
11. Expand flashcard count from 151 to ~250
12. Polish mobile responsiveness

## Files Changed

- `data/modules.js` — NEW
- `data/study-guide.js` — MAJOR rewrite
- `data/flashcards.js` — ADD metadata
- `data/key-pointers.js` — ADD metadata
- `study-guide.html` — MAJOR rewrite
- `flashcards.html` — ADD filter + badges
- `key-pointers.html` — ADD filter + badges
- `index.html` — UPDATE
- `style.css` — ADD new components
- `script.js` — ADD tree nav + filter logic

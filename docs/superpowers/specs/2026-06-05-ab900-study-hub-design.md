# AB-900 Study Hub — Design Spec

## Overview
A static multi-page study website for the **AB-900 (Microsoft 365 Copilot and Agent Administration Fundamentals)** exam. All content from the existing Markdown files (Study Guide, Flashcards, Key Pointers) is rendered as a browsable, interactive web experience optimized for studying.

## Pages

### 1. `index.html` (Home / Dashboard)
- Hero section: exam title, passing score, format summary
- Domain weighting chart (visual bar chart: 30-35%, 35-40%, 25-30%)
- Quick-links to the three content sections
- Dark mode toggle
- Global search bar

### 2. `study-guide.html` (Study Guide)
- Full content of `AB-900T00-Study-Guide.md` rendered as HTML
- Collapsible sections per domain and sub-topic
- Domain 1, 2, 3 headings with expand/collapse on subsections
- "Key Concepts" boxes at domain ends
- Inline code/command formatting preserved
- Global search highlights matching sections

### 3. `flashcards.html` (Interactive Flashcards)
- All 20+ categories from `Flashcards.md`
- **Two interaction modes per card:**
  - **Multiple choice**: Click on correct answer(s) from generated options. Immediate feedback (green/red highlighting).
  - **Drag to reveal**: A blur/curtain overlay over the answer. User drags (mouse or touch) to wipe it away and see the answer.
- **"Show Answers" toggle**: Reveals all answers at once with explanations.
- **Category filter**: Dropdown to select specific category (Zero Trust, Licensing, etc.)
- **Shuffle button**: Randomize card order
- **Progress indicator**: How many cards completed in current session
- Cards are auto-generated from Q&A pairs in `Flashcards.md`

### 4. `key-pointers.html` (Key Pointers)
- Full content of `Key-Pointers.md` rendered as a compact quick-reference
- Categorized by section (0-20)
- Single-page scroll with section anchors
- Minimal, dense layout optimized for quick scanning
- Print-friendly view

## Shared Features
- **Dark mode**: Toggle button in header, preference persisted in `localStorage`
- **Global search**: Search input on all pages; filters visible content in real-time
- **Responsive design**: Minimum target iPhone 12 Pro Max (428×926px). Scales up to desktop.
- **Mobile navigation**: Hamburger menu on small screens
- **Print CSS**: Dedicated `@media print` styles for clean printed output
- **Zero dependencies**: No frameworks, no build tools. Pure HTML5 + CSS3 + vanilla JS.

## Tech Stack
- **Hosting**: GitHub Pages (deploy from `main` branch root)
- **Languages**: HTML5, CSS3, JavaScript (vanilla, ES6+)
- **External resources**: None (Google Fonts or system fonts only)
- **File structure**: All files in repo root for GitHub Pages compatibility

## File Structure
```
AB-900/
├── index.html              # Home / dashboard
├── study-guide.html        # Study guide
├── flashcards.html         # Interactive flashcards
├── key-pointers.html       # Key pointers
├── style.css               # Shared styles
├── script.js               # Shared utilities (search, dark mode, nav)
├── data/
│   ├── study-guide.js      # Study guide content as JS object
│   ├── flashcards.js       # Flashcard Q&A pairs as JS array
│   └── key-pointers.js     # Key pointers as JS object
├── AB-900T00-Study-Guide.md  # Original source (unchanged)
├── Flashcards.md             # Original source (unchanged)
└── Key-Pointers.md           # Original source (unchanged)
```

## Design System
- **Colors**: Blue-primary (#2563eb), dark bg (#1a1a2e), light bg (#f8fafc)
- **Typography**: System font stack (-apple-system, Segoe UI, etc.)
- **Spacing**: 8px unit grid
- **Components**: Cards, collapsible panels, search input, filter dropdown, toggle switches

## Implementation Order
1. Write `data/*.js` content files (parsed from Markdown sources)
2. Build `style.css` (responsive + print + dark mode)
3. Build `script.js` (search, dark mode, mobile nav)
4. Build `index.html`
5. Build `study-guide.html`
6. Build `key-pointers.html`
7. Build `flashcards.html` (most complex)
8. Test on mobile viewport (428px width)
9. Commit to git

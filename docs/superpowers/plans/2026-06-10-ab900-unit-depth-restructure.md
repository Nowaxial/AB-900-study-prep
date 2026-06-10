# AB-900 Unit-Depth Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure study hub from flat domain/module to Learning Path → Module → Unit hierarchy with tree navigation.

**Architecture:** New `data/modules.js` defines the 3-level tree. `study-guide.js` restructured to LP/Module/Unit nesting. Flashcards and key-pointers gain module/unit metadata. Tree nav component in left sidebar.

**Tech Stack:** Pure HTML/CSS/JS, no frameworks, GitHub Pages.

**Phases:** Phase 1 (data + navigation) | Phase 2 (metadata + filters) | Phase 3 (content expansion)

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `data/modules.js` | CREATE | LP → Module → Unit tree + helper functions |
| `data/study-guide.js` | REWRITE | Content reorganized into LP/Module/Unit hierarchy |
| `data/flashcards.js` | MODIFY | Add `learningPath`, `module`, `unit` fields per card |
| `data/key-pointers.js` | MODIFY | Add `learningPath`, `module`, `unit` fields per pointer |
| `study-guide.html` | REWRITE | Tree nav sidebar + content panel layout |
| `flashcards.html` | MODIFY | Add module/unit hierarchical filter + badges |
| `key-pointers.html` | MODIFY | Add module/unit filter + badges |
| `index.html` | MODIFY | Module tree summary with per-module links |
| `style.css` | MODIFY | Tree nav, unit badge, drawer overlay, sidebar styles |
| `script.js` | MODIFY | `initTreeNav()`, `loadUnit()`, modular filter helpers |

---

### Phase 1: Data & Navigation Foundation

---

### Task 1.1: Create `data/modules.js`

**Files:**
- Create: `data/modules.js`

**Description:** Declares the LP → Module → Unit tree consumed by navigation on all pages.

- [ ] **Step 1: Write the tree data structure**

```js
const learningPaths = [
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
          { id: "m1-u3", title: "Implement Zero Trust in Microsoft 365" },
          { id: "m1-u4", title: "Examine threat protection and intelligence in Microsoft 365" },
          { id: "m1-u5", title: "Explore identity and authentication in Microsoft 365" },
          { id: "m1-u6", title: "Manage access and permissions in Microsoft 365" },
          { id: "m1-u7", title: "Explore identity and access management in Microsoft Entra" },
          { id: "m1-u8", title: "Troubleshoot and monitor identity security" },
          { id: "m1-u9", title: "Module assessment" },
          { id: "m1-u10", title: "Summary" }
        ]
      },
      {
        id: "m2",
        title: "Introduction to M365 core services and admin controls",
        units: [
          { id: "m2-u1", title: "Introduction" },
          { id: "m2-u2", title: "Explore the Microsoft 365 ecosystem and core service components" },
          { id: "m2-u3", title: "Explore the Microsoft 365 admin center and key admin tools" },
          { id: "m2-u4", title: "Examine Microsoft Exchange, Teams, and SharePoint" },
          { id: "m2-u5", title: "Establish security, identity, and compliance foundations" },
          { id: "m2-u6", title: "Assign admin roles using RBAC" },
          { id: "m2-u7", title: "Module assessment" },
          { id: "m2-u8", title: "Summary" }
        ]
      },
      {
        id: "m3",
        title: "Protect and govern Microsoft 365 data",
        units: [
          { id: "m3-u1", title: "Introduction" },
          { id: "m3-u2", title: "Introduction to Microsoft Purview and data governance" },
          { id: "m3-u3", title: "Identify and respond to data risks with Microsoft Purview" },
          { id: "m3-u4", title: "Examine compliance, AI data discovery, and eDiscovery" },
          { id: "m3-u5", title: "Explore oversharing and data access governance in SharePoint" },
          { id: "m3-u6", title: "Explore data protection in Microsoft 365 Copilot" },
          { id: "m3-u7", title: "Module assessment" },
          { id: "m3-u8", title: "Summary" }
        ]
      }
    ]
  },
  {
    id: "lp2",
    title: "Explore Microsoft 365 Copilot and Agent Administration",
    modules: [
      {
        id: "m4",
        title: "Explore Microsoft 365 Copilot and agents",
        units: [
          { id: "m4-u1", title: "Introduction" },
          { id: "m4-u2", title: "Introduction to Microsoft 365 Copilot" },
          { id: "m4-u3", title: "What are agents?" },
          { id: "m4-u4", title: "Compare Microsoft 365 Copilot and agents" },
          { id: "m4-u5", title: "Compare Microsoft 365 Copilot licensing models" },
          { id: "m4-u6", title: "Plan and deploy Microsoft 365 Copilot and agents" },
          { id: "m4-u7", title: "Explore real-world use cases for Copilot and agents" },
          { id: "m4-u8", title: "Module assessment" },
          { id: "m4-u9", title: "Summary" }
        ]
      },
      {
        id: "m5",
        title: "Perform basic administrative tasks for M365 Copilot",
        units: [
          { id: "m5-u1", title: "Introduction" },
          { id: "m5-u2", title: "Manage Copilot licenses and pay-as-you-go billing" },
          { id: "m5-u3", title: "Monitor and adjust pay-as-you-go Copilot usage" },
          { id: "m5-u4", title: "Monitor Microsoft 365 Copilot usage and adoption" },
          { id: "m5-u5", title: "Manage and govern Microsoft 365 Copilot prompts" },
          { id: "m5-u6", title: "Apply operational best practices for Microsoft 365 Copilot" },
          { id: "m5-u7", title: "Module assessment" },
          { id: "m5-u8", title: "Summary" }
        ]
      },
      {
        id: "m6",
        title: "Perform basic administrative tasks for M365 Copilot agents",
        units: [
          { id: "m6-u1", title: "Introduction" },
          { id: "m6-u2", title: "Create a Microsoft 365 Copilot Chat agent — Part 1" },
          { id: "m6-u3", title: "Create a Microsoft 365 Copilot Chat agent — Part 2" },
          { id: "m6-u4", title: "Create a SharePoint agent" },
          { id: "m6-u5", title: "Test and edit your agents" },
          { id: "m6-u6", title: "Manage user access and permissions for agents" },
          { id: "m6-u7", title: "Examine agent approval and governance" },
          { id: "m6-u8", title: "Monitor and manage the agent lifecycle" },
          { id: "m6-u9", title: "Module assessment" },
          { id: "m6-u10", title: "Summary" }
        ]
      }
    ]
  }
];
```

- [ ] **Step 2: Add helper functions**

```js
function findUnit(unitId) {
  for (const lp of learningPaths) {
    for (const mod of lp.modules) {
      for (const unit of mod.units) {
        if (unit.id === unitId) return unit;
      }
    }
  }
  return null;
}

function getModule(moduleId) {
  for (const lp of learningPaths) {
    for (const mod of lp.modules) {
      if (mod.id === moduleId) return mod;
    }
  }
  return null;
}

function getLearningPath(moduleId) {
  for (const lp of learningPaths) {
    for (const mod of lp.modules) {
      if (mod.id === moduleId) return lp;
    }
  }
  return null;
}
```

- [ ] **Step 3: Commit**

```bash
rtk git add data/modules.js
rtk git commit -m "feat: add LP/Module/Unit tree data (modules.js)"
```

---

### Task 1.2: Restructure `data/study-guide.js` — container shape

**Files:**
- Rewrite: `data/study-guide.js`

**Description:** Change from flat `studyGuideSections` array to hierarchical `studyGuideData` with LP/Module/Unit nesting. Keep existing HTML content, just reorganize. The preamble, supplements, and checklist sections remain as top-level sections outside the LP tree.

- [ ] **Step 1: Create the new top-level structure**

Replace the file header and preamble. The new file begins:

```js
const studyGuideData = {
  preamble: [
    {
      id: "exam-basics",
      title: "Exam Basics",
      content: `<p>Passing score: <strong>700</strong></p>
<ul>
  <li>Format: Multiple-choice, multi-select, scenario-based, drag-and-drop</li>
  <li>Most questions cover features in <strong>General Availability (GA)</strong>; some Preview features may appear</li>
  <li>30 extra minutes available on request for non-English speakers</li>
</ul>`
    },
    {
      id: "exam-weightings",
      title: "Exam Weightings (Skills at a Glance)",
      content: `<table>...</table>`
    },
    {
      id: "learning-path-roadmap",
      title: "Official Learning Path Roadmap (6 modules, 53 units)",
      content: `<p>...</p>`
    },
    {
      id: "how-to-use",
      title: "How to Use This Guide",
      content: `<p>...</p>`
    }
  ],
  learningPaths: [
    {
      lpId: "lp1",
      lpTitle: "Explore Microsoft 365 administration",
      modules: [
        {
          moduleId: "m1",
          moduleTitle: "Explore M365 security foundations",
          units: [
            {
              unitId: "m1-u1",
              unitTitle: "Introduction",
              content: `<p>Overview of Microsoft 365 security foundations module.</p>`,
              examTips: [],
              keyConcepts: []
            },
            {
              unitId: "m1-u2",
              unitTitle: "Analyze the Zero Trust security model",
              content: `<p>...</p>`,
              examTips: [],
              keyConcepts: []
            }
            // ... all units for this module
          ]
        }
        // ... all modules
      ]
    }
    // ... all learning paths
  ],
  supplements: {
    savill: [ /* existing S.1-S.8 content */ ],
    classmate: [ /* existing C.1-C.25 content */ ]
  },
  checklists: {
    domain1: [ /* existing checklist items */ ],
    domain2: [ /* existing checklist items */ ],
    domain3: [ /* existing checklist items */ ]
  }
};
```

Note: The existing content HTML for sections like 1.1, 1.2, 2.1 etc. needs to be split across the units that make up that section. For example, content from "1.2 Understand the Microsoft 365 security principles" spanning Module 1 Units 2-8 gets distributed across `m1-u2` through `m1-u8`. Each unit gets the content relevant to its learning objective.

- [ ] **Step 2: Run validations**

The file must:
- Begin with `const studyGuideData = {`
- End with `;` 
- Have no syntax errors (can't run Node.js require on a browser JS file, but use JSON.parse trick or check with a basic syntax validator)
- Reference only `studyGuideData` (not the old `studyGuideSections`)

- [ ] **Step 3: Commit**

```bash
rtk git add data/study-guide.js
rtk git commit -m "feat: restructure studyGuideData to LP/Module/Unit hierarchy"
```

---

### Task 1.3: Update `script.js` — tree navigation engine

**Files:**
- Modify: `script.js`

**Description:** Add `initTreeNav()` and `loadUnit()` functions used by study-guide.html.

- [ ] **Step 1: Add tree rendering function**

```js
function initTreeNav(containerId, onSelectUnit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  function renderLP(lp) {
    const lpEl = document.createElement('div');
    lpEl.className = 'tree-nav-lp';
    const lpHeader = document.createElement('div');
    lpHeader.className = 'tree-nav-lp-header';
    lpHeader.innerHTML = `<span class="tree-toggle">▶</span> ${lp.title}`;
    const lpBody = document.createElement('div');
    lpBody.className = 'tree-nav-lp-body';

    lpHeader.addEventListener('click', () => {
      const open = lpBody.classList.toggle('open');
      lpHeader.querySelector('.tree-toggle').textContent = open ? '▼' : '▶';
    });

    lp.modules.forEach(mod => {
      const modEl = document.createElement('div');
      modEl.className = 'tree-nav-module';
      const modHeader = document.createElement('div');
      modHeader.className = 'tree-nav-module-header';
      modHeader.innerHTML = `<span class="tree-toggle">▶</span> ${mod.title} <span class="tree-count">${mod.units.length}</span>`;
      const modBody = document.createElement('div');
      modBody.className = 'tree-nav-module-body';

      modHeader.addEventListener('click', () => {
        const open = modBody.classList.toggle('open');
        modHeader.querySelector('.tree-toggle').textContent = open ? '▼' : '▶';
      });

      mod.units.forEach(unit => {
        const unitEl = document.createElement('div');
        unitEl.className = 'tree-nav-unit';
        unitEl.textContent = unit.title;
        unitEl.dataset.unitId = unit.id;
        unitEl.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('.tree-nav-unit.active').forEach(el => el.classList.remove('active'));
          unitEl.classList.add('active');
          if (onSelectUnit) onSelectUnit(unit.id);
        });
        modBody.appendChild(unitEl);
      });

      modEl.appendChild(modHeader);
      modEl.appendChild(modBody);
      lpBody.appendChild(modEl);
    });

    lpEl.appendChild(lpHeader);
    lpEl.appendChild(lpBody);
    container.appendChild(lpEl);
  }

  learningPaths.forEach(renderLP);
}
```

- [ ] **Step 2: Add unit content renderer**

```js
function renderUnit(unitId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let found = null;
  let modTitle = '';
  for (const lp of learningPaths) {
    for (const mod of lp.modules) {
      for (const unit of mod.units) {
        if (unit.id === unitId) {
          found = unit;
          // Look up content in studyGuideData
          for (const lp2 of studyGuideData.learningPaths) {
            for (const mod2 of lp2.modules) {
              if (mod2.moduleId === mod.id) {
                modTitle = mod2.moduleTitle;
                for (const u of mod2.units) {
                  if (u.unitId === unitId) {
                    found.content = u.content;
                    found.examTips = u.examTips || [];
                    found.keyConcepts = u.keyConcepts || [];
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (!found) {
    container.innerHTML = '<p>Unit not found.</p>';
    return;
  }

  let html = `<div class="unit-content">`;
  html += `<h2>${found.title}</h2>`;
  html += `<p class="unit-module-label">${modTitle}</p>`;
  html += `<div class="unit-body">${found.content || '<p>Content coming soon.</p>'}</div>`;
  if (found.examTips && found.examTips.length > 0) {
    html += `<div class="exam-tips-box"><h3>Exam Tips</h3><ul>${found.examTips.map(t => `<li>${t}</li>`).join('')}</ul></div>`;
  }
  if (found.keyConcepts && found.keyConcepts.length > 0) {
    html += `<div class="key-concepts-box"><h3>Key Concepts</h3>${found.keyConcepts.map(k => `<span class="concept-tag">${k}</span>`).join('')}</div>`;
  }
  html += `</div>`;
  container.innerHTML = html;
}
```

- [ ] **Step 3: Commit**

```bash
rtk git add script.js
rtk git commit -m "feat: add treeNav and renderUnit functions"
```

---

### Task 1.4: Rewrite `study-guide.html` — tree nav layout

**Files:**
- Rewrite: `study-guide.html`

**Description:** Split into left sidebar (tree nav) + right content panel. Mobile gets a drawer toggle.

- [ ] **Step 1: Rewrite HTML structure**

```html
<!DOCTYPE html>
<html lang="sv" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Study Guide — AB-900 Study Hub</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📖</text></svg>">
</head>
<body>
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="header-logo">AB-900 Study Hub</a>
      <button id="hamburger" class="hamburger" aria-label="Menu">☰</button>
      <nav id="nav" class="nav">
        <a href="index.html">Home</a>
        <a href="study-guide.html" class="active">Study Guide</a>
        <a href="flashcards.html">Flashcards</a>
        <a href="key-pointers.html">Key Pointers</a>
      </nav>
      <div class="search-box">
        <span>🔍</span>
        <input id="searchInput" type="text" placeholder="Search...">
      </div>
      <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">🌙 Dark</button>
    </div>
  </header>

  <div class="study-layout">
    <aside class="study-sidebar" id="studySidebar">
      <div class="sidebar-header">
        <h3>Modules</h3>
        <button id="sidebarToggle" class="sidebar-close" aria-label="Close sidebar">✕</button>
      </div>
      <div id="treeNav" class="tree-nav"></div>
    </aside>

    <button id="sidebarOpenBtn" class="sidebar-open-btn">☰ Modules</button>

    <main class="study-content" id="studyContent">
      <div class="welcome-message">
        <h2>Welcome to the Study Guide</h2>
        <p>Select a unit from the module tree to start studying.</p>
        <p class="searchable">Complete study material for the AB-900 exam. Study priority: <strong>Domain 2</strong> (35&ndash;40%) is the largest.</p>
      </div>
    </main>
  </div>

  <!-- Overlay for mobile sidebar -->
  <div id="sidebarOverlay" class="sidebar-overlay"></div>

  <script src="data/modules.js"></script>
  <script src="data/study-guide.js"></script>
  <script>
    function onSelectUnit(unitId) {
      renderUnit(unitId, 'studyContent');
      // Close sidebar on mobile
      document.getElementById('studySidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('visible');
    }

    initTreeNav('treeNav', onSelectUnit);

    // Sidebar open/close (mobile)
    document.getElementById('sidebarOpenBtn').addEventListener('click', () => {
      document.getElementById('studySidebar').classList.add('open');
      document.getElementById('sidebarOverlay').classList.add('visible');
    });

    function closeSidebar() {
      document.getElementById('studySidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('visible');
    }

    document.getElementById('sidebarToggle').addEventListener('click', closeSidebar);
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

    // Preamble / checklist sections at bottom
    // Render after tree nav since they're also part of the guide
  </script>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Add preamble sections below main content**

Append after `</main>` in the study layout but before sidebar close:

```js
    // Render preamble sections below tree
    const preambleContainer = document.createElement('div');
    preambleContainer.className = 'tree-nav-preamble';
    if (studyGuideData.preamble) {
      studyGuideData.preamble.forEach(section => {
        const sec = document.createElement('div');
        sec.className = 'tree-nav-preamble-item';
        sec.textContent = section.title;
        sec.addEventListener('click', () => {
          document.getElementById('studyContent').innerHTML = `<h2>${section.title}</h2><div>${section.content}</div>`;
          document.querySelectorAll('.tree-nav-unit.active').forEach(el => el.classList.remove('active'));
          closeSidebar();
        });
        preambleContainer.appendChild(sec);
      });
    }
    document.getElementById('treeNav').appendChild(preambleContainer);
```

- [ ] **Step 3: Commit**

```bash
rtk git add study-guide.html
rtk git commit -m "feat: tree nav sidebar layout for study guide"
```

---

### Task 1.5: Update `style.css` — tree nav, sidebar, unit content

**Files:**
- Modify: `style.css`

**Description:** Add all new styles for the tree navigation sidebar, unit content panel, mobile drawer.

- [ ] **Step 1: Add tree nav and sidebar styles to the end of style.css**

```css
/* ===== Tree Navigation Sidebar ===== */
.study-layout {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
}

.study-sidebar {
  width: 300px;
  min-width: 300px;
  background: var(--card-bg);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
  padding: 1rem 0;
}

.sidebar-header {
  display: none;
  padding: 0 1rem 0.5rem;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 1rem;
}

.sidebar-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text);
}

.sidebar-open-btn {
  display: none;
  margin: 0.75rem auto;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 99;
}

.study-content {
  flex: 1;
  padding: 1.5rem 2rem;
  min-width: 0;
}

/* Tree nav */
.tree-nav-lp-header,
.tree-nav-module-header {
  cursor: pointer;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  user-select: none;
}

.tree-nav-lp-header {
  font-weight: 700;
  color: var(--primary);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.tree-nav-module-header {
  font-weight: 600;
  padding-left: 1.8rem;
}

.tree-nav-module-header:hover {
  background: var(--hover-bg);
}

.tree-nav-lp-body,
.tree-nav-module-body {
  display: none;
}

.tree-nav-lp-body.open,
.tree-nav-module-body.open {
  display: block;
}

.tree-toggle {
  font-size: 0.65rem;
  width: 1em;
  transition: transform 0.15s;
}

.tree-count {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--text-secondary);
  background: var(--hover-bg);
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
}

.tree-nav-unit {
  cursor: pointer;
  padding: 0.35rem 1rem 0.35rem 2.8rem;
  font-size: 0.85rem;
  color: var(--text);
  border-left: 2px solid transparent;
  transition: all 0.12s;
}

.tree-nav-unit:hover {
  background: var(--hover-bg);
}

.tree-nav-unit.active {
  color: var(--primary);
  border-left-color: var(--primary);
  background: rgba(var(--primary-rgb), 0.08);
}

.tree-nav-preamble {
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border);
}

.tree-nav-preamble-item {
  cursor: pointer;
  padding: 0.35rem 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.tree-nav-preamble-item:hover {
  color: var(--primary);
  background: var(--hover-bg);
}

/* Unit content */
.unit-content h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.unit-module-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.unit-body {
  line-height: 1.7;
}

.welcome-message {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-secondary);
}

.welcome-message h2 {
  margin-bottom: 0.5rem;
  color: var(--text);
}

/* Responsive */
@media (max-width: 768px) {
  .study-layout {
    flex-direction: column;
  }

  .study-sidebar {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 300px;
    max-width: 85vw;
    z-index: 100;
    height: auto;
    border-right: none;
    box-shadow: 2px 0 12px rgba(0,0,0,0.15);
  }

  .study-sidebar.open {
    display: block;
  }

  .sidebar-header {
    display: flex;
  }

  .sidebar-open-btn {
    display: inline-block;
  }

  .sidebar-overlay.visible {
    display: block;
  }

  .study-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .study-sidebar {
    width: 100%;
    max-width: none;
  }
}
```

- [ ] **Step 2: Commit**

```bash
rtk git add style.css
rtk git commit -m "feat: tree nav, sidebar, unit content styles"
```

---

### Phase 2: Metadata & Filters

---

### Task 2.1: Add module/unit metadata to `data/flashcards.js`

**Files:**
- Modify: `data/flashcards.js`

**Description:** Each card gets `learningPath`, `module`, and optionally `unit` fields. Map existing cards to their source module/unit based on content.

- [ ] **Step 1: Add metadata to all 151 cards**

For each card in the array, add:
```js
learningPath: "lp1",  // or "lp2"
module: "m1",          // through "m6"
unit: "m1-u2",         // optional, which unit this maps to
```

Example mapping for existing cards:
- Exam basics cards → no module (use `module: null`)
- Zero Trust & identity → `m1-u2` through `m1-u8`
- Identity types in Entra → `m1-u7`
- MFA & sign-in methods → `m1-u5`
- Conditional Access → `m1-u5`, `m1-u7`
- RBAC, PIM, JEA, JIT → `m1-u6`, `m1-u7`
- Identity Secure Score & audit → `m1-u8`
- Defender XDR → `m1-u4`
- M365 core services → `m2-u2`, `m2-u4`
- Microsoft 365 admin center → `m2-u3`
- Microsoft Purview → `m3-u2`, `m3-u3`, `m3-u4`
- SharePoint governance → `m3-u5`
- Microsoft 365 Copilot → `m4-u2`, `m5-u2`
- Agents → `m4-u3`, `m6-u2`, `m6-u3`
- Work IQ, content safety, groundedness → `m4-u2`
- Licensing → `m4-u5`, `m5-u2`
- Adoption & rollout → `m4-u6`, `m5-u4`
- Responsible AI → `m4-u2`
- Hybrid identity → `m1-u7`
- Intune → `m1-u3`
- Numbers to remember → `null` (spans all)

- [ ] **Step 2: Commit**

```bash
rtk git add data/flashcards.js
rtk git commit -m "feat: add module/unit metadata to flashcards"
```

---

### Task 2.2: Add module/unit filter to `flashcards.html`

**Files:**
- Modify: `flashcards.html`

**Description:** Add a filter dropdown that shows modules and units hierarchically. Show unit badge on each card.

- [ ] **Step 1: Add module filter UI**

Insert after the category filter dropdown:
```html
<select id="moduleFilter">
  <option value="all">All Modules</option>
</select>
```

- [ ] **Step 2: Populate module filter**

```js
const moduleFilter = document.getElementById('moduleFilter');
learningPaths.forEach(lp => {
  lp.modules.forEach(mod => {
    const opt = document.createElement('option');
    opt.value = mod.id;
    opt.textContent = `${lp.id === 'lp1' ? 'LP1' : 'LP2'} / ${mod.id.toUpperCase()}: ${mod.title}`;
    moduleFilter.appendChild(opt);
    // Add unit options indent
    mod.units.forEach(unit => {
      const uopt = document.createElement('option');
      uopt.value = unit.id;
      uopt.textContent = `  └ ${unit.title}`;
      uopt.style.fontSize = '0.85rem';
      moduleFilter.appendChild(uopt);
    });
  });
});
```

- [ ] **Step 3: Update `applyFilters()` to include module filter**

```js
function applyFilters() {
  const cat = categoryFilter.value;
  const mod = moduleFilter.value;
  let cards = [...flashcards];

  if (cat !== 'all') cards = cards.filter(c => c.category === cat);
  if (mod !== 'all') {
    cards = cards.filter(c => c.module === mod || c.unit === mod);
  }
  if (shuffled) cards.sort(() => 0.5 - Math.random());
  if (searchQuery) {
    cards = cards.filter(c =>
      c.question.toLowerCase().includes(searchQuery) ||
      c.answer.toLowerCase().includes(searchQuery) ||
      c.category.toLowerCase().includes(searchQuery) ||
      (c.reference && c.reference.toLowerCase().includes(searchQuery))
    );
  }
  filteredCards = cards;
  currentIndex = 0;
  renderCard();
}
```

- [ ] **Step 4: Add module badge to card rendering**

In `renderCard()`, after the category display:
```js
let badgeHtml = '';
if (card.module) {
  const modObj = getModule(card.module);
  const modLabel = modObj ? modObj.id.toUpperCase() : card.module.toUpperCase();
  badgeHtml = `<span class="unit-badge">${modLabel}`;
  if (card.unit) badgeHtml += ` · ${card.unit.replace(/^m[1-6]-u/, 'Unit ')}`;
  badgeHtml += `</span>`;
}
cardCategory.innerHTML = `${card.category} ${badgeHtml}`;
```

- [ ] **Step 5: Commit**

```bash
rtk git add flashcards.html data/flashcards.js
rtk git commit -m "feat: module/unit filter + badges on flashcards"
```

---

### Task 2.3: Add module/unit metadata + filter to `key-pointers.html`

**Files:**
- Modify: `data/key-pointers.js`
- Modify: `key-pointers.html`

**Description:** Same pattern as flashcards — metadata on each pointer, module filter dropdown, unit badge on each item.

- [ ] **Step 1: Add metadata to `data/key-pointers.js`**

Each pointer entry in `keyPointerCategories` gets:
```js
module: "m1",  // through "m6" or null
unit: "m1-u2"  // optional
```

Mapping follows the same scheme as flashcards.

- [ ] **Step 2: Add module filter + badges to `key-pointers.html`**

Add module filter dropdown after the h1, then add filter logic and per-pointer badge rendering following the same pattern as flashcards.

- [ ] **Step 3: Commit**

```bash
rtk git add data/key-pointers.js key-pointers.html
rtk git commit -m "feat: module/unit filter + badges on key pointers"
```

---

### Task 2.4: Update `index.html` — module tree summary

**Files:**
- Modify: `index.html`

**Description:** Replace flat domain cards with module-level overview. Each module shows its name, unit count, and a link to the filtered study guide.

- [ ] **Step 1: Replace domain grid with module grid**

```html
<script src="data/modules.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('moduleGrid');
    learningPaths.forEach(lp => {
      lp.modules.forEach(mod => {
        const card = document.createElement('a');
        card.href = `study-guide.html?module=${mod.id}`;
        card.className = 'section-card';
        card.innerHTML = `
          <h3>${mod.id.toUpperCase()}: ${mod.title}</h3>
          <p>${mod.units.length} units</p>
          <span class="tag tag-blue">${lp.id === 'lp1' ? 'LP1' : 'LP2'}</span>
        `;
        grid.appendChild(card);
      });
    });
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
rtk git add index.html
rtk git commit -m "feat: module tree summary on index page"
```

---

### Phase 3: Content Expansion (Deferred)

### Task 3.1: Expand Domain 2 unit content (M3)

**Note:** This task and subsequent content expansion tasks are deferred. They involve writing expanded HTML content for each unit based on the source `AB-900T00-Study-Guide.md`. Each unit in Module 3 (8 units) gets dedicated objectives, content, exam tips, and key concepts.

Content expansion is deferred because the structural changes (Phases 1-2) must be complete and verified first.

- [ ] **Step 1: Expand Module 3 units** (8 units, ~50 lines content each)

- [ ] **Step 2: Commit**

---

## Self-Review Checklist

- [ ] **Spec coverage:** Every spec section has at least one task:
  - Navigation tree → Task 1.1 (modules.js)
  - study-guide.js restructure → Task 1.2
  - Tree nav UI → Tasks 1.3, 1.4, 1.5
  - Flashcards metadata + filter → Tasks 2.1, 2.2
  - Key pointers metadata + filter → Task 2.3
  - Index page update → Task 2.4
  - Content expansion → Task 3.1 (deferred)
- [ ] **No placeholders:** All code blocks are complete
- [ ] **Type consistency:** Functions and variable names are consistent across tasks
- [ ] **Scope:** Focused on the spec requirements only

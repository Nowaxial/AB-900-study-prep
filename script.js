document.addEventListener('DOMContentLoaded', () => {
  // Dark mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.textContent = savedTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggleBtn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
    });
  }

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) nav.classList.remove('open');
    });
  }

  // Global search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (window.pageSearch) {
        window.pageSearch(q);
      } else {
        document.querySelectorAll('.searchable').forEach(el => {
          if (!q) { el.style.display = ''; return; }
          el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
      }
    });
  }

  // "What If" tool simulation for study guide
  document.querySelectorAll('[data-search]').forEach(el => {
    el.addEventListener('click', () => {
      const q = el.dataset.search;
      const input = document.getElementById('searchInput');
      if (input) { input.value = q; input.dispatchEvent(new Event('input')); }
    });
  });

  // Load unit from URL hash on page load
  if (location.hash.startsWith('#unit-')) {
    const unitId = location.hash.slice(6);
    setTimeout(() => renderUnit(unitId), 100);
  }
});

// ============================================================
// Tree Navigation
// ============================================================
function initTreeNav(containerId, selectedUnitId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '<div class="tree-nav">';

  // Preamble
  html += '<div class="tree-section">';
  html += '<div class="tree-section-title" data-section="preamble">Getting Started</div>';
  html += '<div class="tree-children">';
  studyGuideData.preamble.forEach(p => {
    const isSelected = p.id === selectedUnitId;
    html += `<div class="tree-item${isSelected ? ' selected' : ''}" data-id="${p.id}">${p.title}</div>`;
  });
  html += '</div></div>';

  // Learning Paths
  studyGuideData.learningPaths.forEach(lp => {
    html += '<div class="tree-section">';
    html += `<div class="tree-section-title">${lp.lpTitle}</div>`;
    html += '<div class="tree-children">';
    lp.modules.forEach(mod => {
      html += '<div class="tree-module">';
      html += `<div class="tree-module-title">${mod.moduleTitle}</div>`;
      html += '<div class="tree-children">';
      mod.units.forEach(unit => {
        const isSelected = unit.unitId === selectedUnitId;
        html += `<div class="tree-item${isSelected ? ' selected' : ''}" data-id="${unit.unitId}">${unit.unitTitle}</div>`;
      });
      html += '</div></div>';
    });
    html += '</div></div>';
  });

  html += '</div>';
  container.innerHTML = html;

  // Collapse modules by default
  container.querySelectorAll('.tree-module > .tree-children').forEach(el => {
    el.classList.add('collapsed');
    const title = el.previousElementSibling;
    if (title) title.classList.add('collapsed');
  });

  // Collapsible sections
  container.querySelectorAll('.tree-section-title, .tree-module-title').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('collapsed');
      const children = el.nextElementSibling;
      if (children) children.classList.toggle('collapsed');
    });
  });

  // Unit click
  container.querySelectorAll('.tree-item[data-id]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id;
      if (window.loadUnit) window.loadUnit(id);
    });
  });
}

// ============================================================
// Render Unit Content
// ============================================================
function renderUnit(unitId, containerId) {
  const container = containerId ? document.getElementById(containerId) : document.getElementById('content-area');
  if (!container) return;

  // Check preamble
  const preambleItem = studyGuideData.preamble.find(p => p.id === unitId);
  if (preambleItem) {
    container.innerHTML = `<h2>${preambleItem.title}</h2>${preambleItem.content}`;
    updateTreeSelection(unitId);
    window.scrollTo(0, 0);
    return;
  }

  // Find unit in hierarchy
  let foundUnit = null, foundModule = null, foundLp = null;
  for (const lp of studyGuideData.learningPaths) {
    for (const mod of lp.modules) {
      for (const unit of mod.units) {
        if (unit.unitId === unitId) { foundUnit = unit; foundModule = mod; foundLp = lp; break; }
      }
      if (foundUnit) break;
    }
    if (foundUnit) break;
  }

  if (!foundUnit) {
    container.innerHTML = '<p>Content not found.</p>';
    return;
  }

  const breadcrumb = `${foundLp.lpTitle} &rarr; ${foundModule.moduleTitle}`;
  let html = `<p class="breadcrumb">${breadcrumb}</p>`;
  html += `<h2>${foundUnit.unitTitle}</h2>`;
  html += foundUnit.content || '<p>Content coming soon.</p>';

  if (foundUnit.examTips && foundUnit.examTips.length) {
    html += '<div class="exam-tips"><h3>Exam Tips</h3><ul>';
    foundUnit.examTips.forEach(t => { html += `<li>${t}</li>`; });
    html += '</ul></div>';
  }
  if (foundUnit.keyConcepts && foundUnit.keyConcepts.length) {
    html += '<div class="key-concepts"><h3>Key Concepts</h3><ul>';
    foundUnit.keyConcepts.forEach(k => { html += `<li>${k}</li>`; });
    html += '</ul></div>';
  }

  container.innerHTML = html;
  updateTreeSelection(unitId);
  window.scrollTo(0, 0);
}

function updateTreeSelection(unitId) {
  document.querySelectorAll('.tree-item').forEach(el => el.classList.remove('selected'));
  const sel = document.querySelector(`.tree-item[data-id="${unitId}"]`);
  if (sel) sel.classList.add('selected');
}

// Exposed for tree nav click
window.loadUnit = function (unitId) {
  history.pushState(null, '', '#unit-' + unitId);
  renderUnit(unitId);
};

// ============================================================
// Study Guide Page Search
// ============================================================
window.pageSearch = function (q) {
  const contentArea = document.getElementById('content-area');
  if (!contentArea) return;

  if (!q) {
    // Reset — show all tree sections
    document.querySelectorAll('.tree-children.collapsed').forEach(el => el.classList.remove('collapsed'));
    document.querySelectorAll('.tree-section-title.collapsed, .tree-module-title.collapsed').forEach(el => el.classList.remove('collapsed'));
    // Re-render current unit if was in search mode
    if (contentArea.dataset.lastUnitId) renderUnit(contentArea.dataset.lastUnitId);
    contentArea.dataset.lastUnitId = '';
    return;
  }

  // Search all units, find matches
  const matches = [];
  studyGuideData.preamble.forEach(p => {
    if (p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q)) {
      matches.push(p.id);
    }
  });
  studyGuideData.learningPaths.forEach(lp => {
    lp.modules.forEach(mod => {
      mod.units.forEach(unit => {
        const text = (unit.unitTitle + ' ' + (unit.content || '') + ' ' + (unit.examTips || []).join(' ') + ' ' + (unit.keyConcepts || []).join(' ')).toLowerCase();
        if (text.includes(q)) matches.push(unit.unitId);
      });
    });
  });

  if (matches.length === 0) {
    contentArea.innerHTML = '<p class="search-no-results">No results found for your search.</p>';
    contentArea.dataset.lastUnitId = '';
    return;
  }

  // Navigate to first match
  const firstMatch = matches[0];
  contentArea.dataset.lastUnitId = firstMatch;
  renderUnit(firstMatch);

  // Highlight matches in content
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  contentArea.querySelectorAll('p, li, td, th, dt, dd').forEach(el => {
    if (el.children.length === 0) {
      el.innerHTML = el.innerHTML.replace(re, '<mark class="search-highlight">$1</mark>');
    }
  });

  // Expand tree nav to show all matching units
  document.querySelectorAll('.tree-item').forEach(el => {
    el.style.display = matches.includes(el.dataset.id) ? '' : 'none';
  });
  // Expand all parent sections
  document.querySelectorAll('.tree-section, .tree-module').forEach(el => {
    const children = el.querySelector('.tree-children');
    if (children && Array.from(children.querySelectorAll('.tree-item')).some(item => item.style.display !== 'none')) {
      const title = el.querySelector('.tree-section-title, .tree-module-title');
      if (title) { title.classList.remove('collapsed'); children.classList.remove('collapsed'); }
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
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

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) nav.classList.remove('open');
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    // On pages with pageSearch (study-guide, flashcards, key-pointers), use their built-in search
    // On all pages, also show the cross-page dropdown with results from all data sources
    var searchTimer;
    searchInput.addEventListener('input', function() {
      var q = this.value;
      if (window.pageSearch) window.pageSearch(q.toLowerCase().trim());

      clearTimeout(searchTimer);
      searchTimer = setTimeout(function() {
        if (!window.pageSearch) {
          // Fallback for pages without pageSearch: filter .searchable elements
          var sq = q.toLowerCase().trim();
          document.querySelectorAll('.searchable').forEach(function(el) {
            if (!sq) { el.style.display = ''; return; }
            el.style.display = el.textContent.toLowerCase().indexOf(sq) !== -1 ? '' : 'none';
          });
        }
        doGlobalSearch(q);
      }, window.pageSearch ? 200 : 0);
    });
    searchInput.addEventListener('focus', function() {
      if (this.value.trim()) doGlobalSearch(this.value);
    });
    document.addEventListener('click', function(e) {
      var dd = document.getElementById('searchResults');
      if (dd && !searchInput.contains(e.target) && !dd.contains(e.target)) dd.classList.remove('open');
    });
  }

  function doGlobalSearch(q) {
    var dd = document.getElementById('searchResults');
    if (!dd) return;
    q = q.toLowerCase().trim();
    if (q.length < 2) { dd.classList.remove('open'); return; }
    var results = [];

    // Search study guide data
    if (typeof studyGuideData !== 'undefined' && studyGuideData && studyGuideData.learningPaths) {
      studyGuideData.preamble.forEach(function(p) {
        if (p.title.toLowerCase().indexOf(q) !== -1 || (p.content && p.content.toLowerCase().indexOf(q) !== -1)) {
          results.push({ title: p.title, source: 'Study Guide', url: 'study-guide.html#unit-' + p.id, text: p.content ? p.content.replace(/<[^>]+>/g,'').substring(0,80) : '' });
        }
      });
      studyGuideData.learningPaths.forEach(function(lp) {
        lp.modules.forEach(function(mod) {
          mod.units.forEach(function(unit) {
            var txt = (unit.unitTitle + ' ' + (unit.content || '') + ' ' + (unit.examTips || []).join(' ') + ' ' + (unit.keyConcepts || []).join(' ')).toLowerCase();
            if (txt.indexOf(q) !== -1) {
              if (unit.unitId && !unit.unitId.match(/assessment|summary/)) {
                results.push({ title: unit.unitTitle, source: 'Study Guide', url: 'study-guide.html#unit-' + unit.unitId, text: (unit.content || '').replace(/<[^>]+>/g,'').substring(0,80) });
              }
            }
          });
        });
      });
    }

    // Search flashcards
    if (typeof flashcards !== 'undefined' && flashcards) {
      flashcards.forEach(function(card) {
        var txt = (card.question + ' ' + card.answer + ' ' + card.category).toLowerCase();
        if (txt.indexOf(q) !== -1) {
          results.push({ title: card.question, source: 'Flashcards', url: 'flashcards.html', text: card.answer.substring(0,80) });
        }
      });
    }

    // Search key pointers
    if (typeof keyPointerCategories !== 'undefined' && keyPointerCategories) {
      keyPointerCategories.forEach(function(cat) {
        cat.pointers.forEach(function(p) {
          if (p.toLowerCase().indexOf(q) !== -1) {
            results.push({ title: p.replace(/<[^>]+>/g,''), source: 'Key Pointers', url: 'key-pointers.html#' + cat.id, text: cat.title });
          }
        });
      });
    }

    // Deduplicate (limit to 8 per source, 20 total)
    var seen = {}, filtered = [];
    results.forEach(function(r) {
      var key = r.url + r.title;
      if (!seen[key] && filtered.length < 20) {
        seen[key] = true;
        filtered.push(r);
      }
    });
    results = filtered.slice(0, 20);

    if (results.length === 0) {
      dd.innerHTML = '<div class="search-dropdown-empty">No results found.</div>';
      dd.classList.add('open');
      return;
    }

    var html = '';
    var groups = { 'Study Guide': [], 'Flashcards': [], 'Key Pointers': [] };
    results.forEach(function(r) {
      if (groups[r.source]) groups[r.source].push(r);
    });
    Object.keys(groups).forEach(function(src) {
      var items = groups[src];
      if (items.length === 0) return;
      html += '<div class="search-dropdown-group">';
      html += '<div class="search-dropdown-label">' + src + '</div>';
      items.forEach(function(r) {
        html += '<a href="' + r.url + '" class="search-dropdown-item">';
        html += '<span class="match-text">' + escapeHtml(r.title) + '</span>';
        html += '<span class="match-source">' + src + '</span>';
        html += '</a>';
      });
      html += '</div>';
    });
    dd.innerHTML = html;
    dd.classList.add('open');
  }

  function escapeHtml(s) {
    if (!s) return '';
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  document.querySelectorAll('[data-search]').forEach(el => {
    el.addEventListener('click', () => {
      const q = el.dataset.search;
      const input = document.getElementById('searchInput');
      if (input) { input.value = q; input.dispatchEvent(new Event('input')); }
    });
  });

  if (location.hash.startsWith('#unit-')) {
    const unitId = location.hash.slice(6);
    setTimeout(() => renderUnit(unitId), 100);
  }
});

// ============================================================
// Helpers
// ============================================================
function findSgUnit(unitId) {
  if (typeof studyGuideData === 'undefined') return null;
  for (const lp of studyGuideData.learningPaths) {
    for (const mod of lp.modules) {
      for (const unit of mod.units) {
        if (unit.unitId === unitId) return unit;
      }
    }
  }
  return null;
}

function getModId(unitId) {
  const m = unitId.match(/^(m\d+)/);
  return m ? m[1] : null;
}

// ============================================================
// Tree Navigation
// ============================================================
function initTreeNav(containerId, selectedUnitId) {
  if (typeof studyGuideData === 'undefined') return;
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

  // Exam Domains
  examDomains.forEach(domain => {
    html += '<div class="tree-section">';
    html += `<div class="tree-section-title">${domain.shortTitle} <span class="weight-badge">${domain.weight}</span></div>`;
    html += '<div class="tree-children">';
    domain.modules.forEach(mod => {
      html += '<div class="tree-module">';
      const modTitle = mod.title;
      html += `<div class="tree-module-title">${modTitle}</div>`;
      html += '<div class="tree-children">';
      mod.units.forEach(unit => {
        if (unit.id.endsWith('-assessment') || unit.id.endsWith('-summary')) return;
        const sgUnit = findSgUnit(unit.id);
        const displayTitle = sgUnit ? sgUnit.unitTitle : unit.title;
        const isSelected = unit.id === selectedUnitId;
        html += `<div class="tree-item${isSelected ? ' selected' : ''}" data-id="${unit.id}">${displayTitle}</div>`;
      });
      html += '</div></div>';
    });
    html += '</div></div>';
  });

  html += '</div>';
  container.innerHTML = html;

  container.querySelectorAll('.tree-module > .tree-children').forEach(el => {
    el.classList.add('collapsed');
    const title = el.previousElementSibling;
    if (title) title.classList.add('collapsed');
  });

  container.querySelectorAll('.tree-section-title, .tree-module-title').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('collapsed');
      const children = el.nextElementSibling;
      if (children) children.classList.toggle('collapsed');
    });
  });

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
  if (typeof studyGuideData === 'undefined') return;
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

  // Look up domain/module context from modules.js, content from study-guide.js
  const modId = typeof findModule !== 'undefined' ? getModId(unitId) : null;
  const moduleData = modId ? findModule(modId) : null;
  const domainData = modId ? getDomainForModule(modId) : null;
  const sgUnit = findSgUnit(unitId);

  if (!sgUnit && !moduleData) {
    // fallback: search in studyGuideData.learningPaths directly
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
    return;
  }

  const domainTitle = domainData ? domainData.shortTitle : '';
  const modTitle = moduleData ? moduleData.title : (sgUnit ? 'Module' : '');

  let breadcrumbParts = [];
  if (domainTitle) breadcrumbParts.push(domainTitle);
  if (modTitle) breadcrumbParts.push(modTitle);
  const breadcrumb = breadcrumbParts.length ? breadcrumbParts.join(' &rarr; ') : '';
  const unitTitle = sgUnit ? sgUnit.unitTitle : unitId;

  let html = breadcrumb ? `<p class="breadcrumb">${breadcrumb}</p>` : '';
  html += `<h2>${unitTitle}</h2>`;
  html += sgUnit ? (sgUnit.content || '<p>Content coming soon.</p>') : '<p>Content coming soon.</p>';

  if (sgUnit && sgUnit.examTips && sgUnit.examTips.length) {
    html += '<div class="exam-tips"><h3>Exam Tips</h3><ul>';
    sgUnit.examTips.forEach(t => { html += `<li>${t}</li>`; });
    html += '</ul></div>';
  }
  if (sgUnit && sgUnit.keyConcepts && sgUnit.keyConcepts.length) {
    html += '<div class="key-concepts"><h3>Key Concepts</h3><ul>';
    sgUnit.keyConcepts.forEach(k => { html += `<li>${k}</li>`; });
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

window.loadUnit = function (unitId) {
  document.querySelectorAll('.tree-item').forEach(el => el.style.display = '');
  history.pushState(null, '', '#unit-' + unitId);
  renderUnit(unitId);
};

// ============================================================
// Study Guide Page Search
// ============================================================
if (!window.pageSearch) window.pageSearch = function (q) {
  const contentArea = document.getElementById('content-area');
  if (!contentArea) return;

  q = q.toLowerCase().trim();

  if (!q) {
    document.querySelectorAll('.tree-children.collapsed').forEach(el => el.classList.remove('collapsed'));
    document.querySelectorAll('.tree-section-title.collapsed, .tree-module-title.collapsed').forEach(el => el.classList.remove('collapsed'));
    if (contentArea.dataset.lastUnitId) renderUnit(contentArea.dataset.lastUnitId);
    contentArea.dataset.lastUnitId = '';
    return;
  }

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

  const firstMatch = matches[0];
  renderUnit(firstMatch);
  contentArea.dataset.lastUnitId = firstMatch;

  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  contentArea.querySelectorAll('p, li, td, th, dt, dd').forEach(el => {
    if (el.children.length === 0) {
      el.innerHTML = el.innerHTML.replace(re, '<mark class="search-highlight">$1</mark>');
    }
  });

  document.querySelectorAll('.tree-item').forEach(el => {
    el.style.display = matches.includes(el.dataset.id) ? '' : 'none';
  });
  document.querySelectorAll('.tree-section, .tree-module').forEach(el => {
    const children = el.querySelector('.tree-children');
    if (children && Array.from(children.querySelectorAll('.tree-item')).some(item => item.style.display !== 'none')) {
      const title = el.querySelector('.tree-section-title, .tree-module-title');
      if (title) { title.classList.remove('collapsed'); children.classList.remove('collapsed'); }
    }
  });
};

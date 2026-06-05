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
      document.querySelectorAll('.searchable').forEach(el => {
        if (!q) { el.style.display = ''; return; }
        el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
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
});

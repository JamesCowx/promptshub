/* ============================================================
   PromptsHub v2 — Interaction Engine
   ============================================================ */

/* --- Category Metadata --- */
const CATEGORY_META = {
  'all':                { label: 'All Prompts',      icon: '&#x2728;', color: '#cfb06e', order: 0 },
  'web-development':    { label: 'Web Development',  icon: '&#x1F310;', color: '#6C9BCF', order: 1 },
  'professional-communication': { label: 'Professional Comms', icon: '&#x2709;', color: '#E8A87C', order: 2 },
  'career-resume':      { label: 'Career & Resume',  icon: '&#x1F4C4;', color: '#C9A96E', order: 3 },
  'database-backend':   { label: 'Database & Backend', icon: '&#x1F5C4;', color: '#7EC8A0', order: 4 },
  'cloud-devops':       { label: 'Cloud & DevOps',   icon: '&#x2601;', color: '#8BB8E8', order: 5 },
  'app-development':    { label: 'App Development',  icon: '&#x1F4F1;', color: '#A78BFA', order: 6 },
  'content-creation':   { label: 'Content Creation', icon: '&#x270D;', color: '#F472B6', order: 7 },
  'design-ux':          { label: 'Design & UX',      icon: '&#x1F3A8;', color: '#F59E0B', order: 8 },
  'data-analytics':     { label: 'Data & Analytics', icon: '&#x1F4CA;', color: '#34D399', order: 9 },
  'productivity-automation': { label: 'Productivity & Automation', icon: '&#x26A1;', color: '#FB923C', order: 10 },
  'ai-prompt-engineering': { label: 'AI Prompt Engineering', icon: '&#x1F9E0;', color: '#C084FC', order: 11 },
  'security-compliance': { label: 'Security & Compliance', icon: '&#x1F6E1;', color: '#F87171', order: 12 },
  'marketing-growth':   { label: 'Marketing & Growth', icon: '&#x1F4C8;', color: '#FBBF24', order: 14 },
  'finance-business':   { label: 'Finance & Business', icon: '&#x1F4BC;', color: '#38BDF8', order: 15 },
  'miscellaneous':      { label: 'Miscellaneous',    icon: '&#x1F4CB;', color: '#94A3B8', order: 16 },
};

let activeCategory = 'all';
let searchQuery = '';

/* --- DOM --- */
const gridEl       = document.getElementById('promptsGrid');
const searchInput  = document.getElementById('searchInput');
const searchClear  = document.getElementById('searchClear');
const categoriesEl = document.getElementById('categories');
const resultsCountEl = document.getElementById('resultsCount');
const noResultsEl  = document.getElementById('noResults');
const modalOverlay = document.getElementById('modalOverlay');
const modalDetail  = document.getElementById('modalDetail');
const toastContainer = document.getElementById('toastContainer');
const promptCountEl = document.getElementById('promptCount');
const categoryCountEl = document.getElementById('categoryCount');
const kbHintEl     = document.getElementById('kbHint');

/* --- Utils --- */
function debounce(fn, ms) {
  let t;
  return function(...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); };
}

function escapeHTML(s) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(s));
  return d.innerHTML;
}

function lerp(a,b,t){return a+(b-a)*t}

/* --- Animated Counter --- */
function animateCounter(el, target, duration = 1200) {
  const start = 0;
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(lerp(start, target, eased));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* --- Init --- */
function init() {
  renderCategories();
  renderPrompts();
  bindEvents();
  animateCounter(promptCountEl, promptData.length, 1500);
  animateCounter(categoryCountEl, Object.keys(CATEGORY_META).filter(k => k !== 'all').length, 1200);
  const statPrompts = document.getElementById('statPrompts');
  const statCategories = document.getElementById('statCategories');
  if (statPrompts) animateCounter(statPrompts, promptData.length, 1600);
  if (statCategories) animateCounter(statCategories, Object.keys(CATEGORY_META).filter(k => k !== 'all').length, 1300);

  /* Reveal cards sequentially */
  requestAnimationFrame(() => {
    document.querySelectorAll('.prompt-card').forEach((c, i) => {
      setTimeout(() => c.classList.add('revealed'), i * 55);
    });
  });
}

/* --- Category Chips --- */
function renderCategories() {
  const sorted = Object.entries(CATEGORY_META)
    .filter(([,m]) => m.order >= 0)
    .sort((a,b) => a[1].order - b[1].order);

  categoriesEl.innerHTML = sorted.map(([key, meta]) => {
    const count = key === 'all'
      ? promptData.length
      : promptData.filter(p => p.category === key).length;
    return `
      <button class="cat-chip${key === activeCategory ? ' active' : ''}"
              data-category="${key}"
              style="${key !== 'all' ? '--cat-color:' + meta.color : ''}">
        ${meta.icon} ${meta.label}
        <span class="cat-count">${count}</span>
      </button>`;
  }).join('');
}

/* --- Filter --- */
function getFiltered() {
  let r = [...promptData];
  if (activeCategory !== 'all') r = r.filter(p => p.category === activeCategory);
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    r = r.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.prompt.toLowerCase().includes(q)
    );
  }
  return r;
}

/* --- Render --- */
function renderPrompts() {
  const results = getFiltered();

  if (!results.length) {
    gridEl.innerHTML = '';
    noResultsEl.style.display = 'block';
    resultsCountEl.innerHTML = 'No prompts found';
    return;
  }

  noResultsEl.style.display = 'none';
  resultsCountEl.innerHTML = `Showing <strong>${results.length}</strong> prompt${results.length !== 1 ? 's' : ''}`;

  const catColor = activeCategory !== 'all'
    ? CATEGORY_META[activeCategory]?.color || 'var(--accent)'
    : null;

  gridEl.innerHTML = results.map((prompt, i) => {
    const color = catColor || CATEGORY_META[prompt.category]?.color || 'var(--accent)';
    return `
      <article class="prompt-card" data-id="${prompt.id}" style="--cat-color:${color};transition-delay:${i * 0.03}s">
        <div class="card-shine"></div>
        <div class="card-header">
          <div class="card-icon" aria-hidden="true">${prompt.icon}</div>
          <div class="card-title-area">
            <h3 class="card-title">${prompt.title}</h3>
            <span class="card-category" style="color:${color}">${CATEGORY_META[prompt.category]?.label || prompt.category}</span>
          </div>
        </div>
        <p class="card-description">${prompt.description}</p>
        <div class="card-tags">${prompt.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-actions">
          <button class="btn btn-primary" data-action="view" data-id="${prompt.id}">
            View Prompt
          </button>
          <button class="btn btn-secondary" data-action="copy" data-id="${prompt.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy
          </button>
        </div>
      </article>`;
  }).join('');

  /* Reveal */
  requestAnimationFrame(() => {
    document.querySelectorAll('.prompt-card').forEach((c, i) => {
      c.classList.add('revealed');
    });
  });
}

/* --- 3D Card Tilt --- */
function handleCardTilt(e) {
  const cards = document.querySelectorAll('.prompt-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8;
    const ry = ((x - cx) / cx) * 8;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);

    /* Only tilt on hover */
    if (card.matches(':hover')) {
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
    }
  });
}

function resetCardTilt() {
  document.querySelectorAll('.prompt-card').forEach(card => {
    if (!card.matches(':hover')) {
      card.style.transform = '';
    }
  });
}

/* --- Event Binding --- */
function bindEvents() {
  /* Search */
  searchInput.addEventListener('input', debounce(function() {
    searchQuery = this.value;
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    renderPrompts();
  }, 180));

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    renderPrompts();
    searchInput.focus();
  });

  /* Categories */
  categoriesEl.addEventListener('click', e => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    activeCategory = chip.dataset.category;
    renderCategories();
    renderPrompts();
  });

  /* Card clicks */
  gridEl.addEventListener('click', e => {
    const card = e.target.closest('.prompt-card');
    if (!card) return;
    const btn = e.target.closest('button');
    const promptId = btn ? btn.dataset.id : card.dataset.id;
    const action = btn ? btn.dataset.action : 'view';
    if (action === 'copy') copyPrompt(promptId);
    else openModal(promptId);
  });

  /* Modal close */
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay || e.target.closest('.modal-close')) closeModal();
  });

  /* Keyboard */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (modalOverlay.classList.contains('active')) closeModal();
      else { searchInput.blur(); searchQuery = ''; searchInput.value = ''; searchClear.classList.remove('visible'); activeCategory = 'all'; renderCategories(); renderPrompts(); }
    }
    if (e.key === '/' && document.activeElement !== searchInput && !modalOverlay.classList.contains('active')) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (modalOverlay.classList.contains('active')) closeModal();
      searchInput.focus();
      searchInput.select();
    }
  });

  /* Card tilt on mouse move */
  document.addEventListener('mousemove', e => {
    handleCardTilt(e);
  });

  /* Reset tilt when mouse leaves a card */
  gridEl.addEventListener('mouseleave', e => {
    const card = e.target.closest('.prompt-card');
    if (card) card.style.transform = '';
  });

  /* Hide KB hint when typing */
  searchInput.addEventListener('focus', () => { if (kbHintEl) kbHintEl.classList.add('hidden-hint'); });
  searchInput.addEventListener('blur', () => { if (kbHintEl) kbHintEl.classList.remove('hidden-hint'); });
}

/* --- Modal --- */
function openModal(id) {
  const prompt = promptData.find(p => p.id === id);
  if (!prompt) return;

  modalDetail.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <div class="modal-icon">${prompt.icon}</div>
        <div class="modal-title-area">
          <h2 class="modal-title">${prompt.title}</h2>
          <p class="modal-category">${CATEGORY_META[prompt.category]?.label || prompt.category}</p>
        </div>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <p class="modal-description">${prompt.description}</p>
        <div class="card-tags" style="margin-bottom:18px">${prompt.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <h4>The Prompt</h4>
        <div class="prompt-content">${escapeHTML(prompt.prompt)}</div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" id="modalCopyBtn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy to Clipboard
        </button>
        <button class="btn btn-secondary close-modal-btn">Close</button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalCopyBtn').addEventListener('click', () => copyPrompt(prompt.id));
  modalDetail.querySelectorAll('.close-modal-btn, .modal-close').forEach(b => b.addEventListener('click', closeModal));
}

function closeModal() {
  modalOverlay.classList.remove('active');
  setTimeout(() => { document.body.style.overflow = ''; }, 300);
}

/* --- Copy --- */
function copyPrompt(id) {
  const prompt = promptData.find(p => p.id === id);
  if (!prompt) return;

  const text = prompt.prompt;
  navigator.clipboard.writeText(text).then(() => showToast('&#x2714;', 'Copied')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast('&#x2714;', 'Copied');
  });
}

/* --- Toast --- */
function showToast(icon, msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
  toastContainer.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 2200);
}

/* --- Boot --- */
document.addEventListener('DOMContentLoaded', init);

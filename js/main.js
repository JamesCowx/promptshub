/* ============================================================
   PromptsHub v3 — High-Performance Interaction Engine
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
  'productivity-automation': { label: 'Productivity', icon: '&#x26A1;', color: '#FB923C', order: 10 },
  'ai-prompt-engineering': { label: 'AI Prompt Engineering', icon: '&#x1F9E0;', color: '#C084FC', order: 11 },
  'security-compliance': { label: 'Security & Compliance', icon: '&#x1F6E1;', color: '#F87171', order: 12 },
  'marketing-growth':   { label: 'Marketing & Growth', icon: '&#x1F4C8;', color: '#FBBF24', order: 14 },
  'finance-business':   { label: 'Finance & Business', icon: '&#x1F4BC;', color: '#38BDF8', order: 15 },
  'miscellaneous':      { label: 'Miscellaneous',    icon: '&#x1F4CB;', color: '#94A3B8', order: 16 },
};

/* ============================================================
   STATE
   ============================================================ */
let activeCategory = 'all';
let searchQuery = '';
const totalCategories = Object.keys(CATEGORY_META).filter(k => k !== 'all').length;
let cardElements = {};      /* id → DOM element */
let lastFocusedEl = null;   /* For modal focus restore */
let tiltCard = null;        /* Currently hovered card for tilt */
let tiltRAF = null;
let copyTimer = null;

/* ============================================================
   DOM REFS
   ============================================================ */
const gridEl        = document.getElementById('promptsGrid');
const searchInput   = document.getElementById('searchInput');
const searchClear   = document.getElementById('searchClear');
const categoriesEl  = document.getElementById('categories');
const resultsCountEl = document.getElementById('resultsCount');
const noResultsEl   = document.getElementById('noResults');
const modalOverlay  = document.getElementById('modalOverlay');
const modalDetail   = document.getElementById('modalDetail');
const toastContainer = document.getElementById('toastContainer');
const kbHintEl      = document.getElementById('kbHint');
const scrollTopBtn  = document.getElementById('scrollTop');
const skeletonGrid  = document.getElementById('skeletonGrid');

/* ============================================================
   UTILS
   ============================================================ */
function debounce(fn, ms) {
  let t;
  return function(...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); };
}

function escRegex(s) {
  return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]);
}

function lerp(a,b,t){return a+(b-a)*t}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el, target, duration = 1200) {
  if (!el) return;
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

/* ============================================================
   HIGHLIGHT MATCHES
   ============================================================ */
function highlightText(text, query) {
  if (!query) return escRegex(text);
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${escaped})`, 'gi');
  return escRegex(text).replace(re, '<mark>$1</mark>');
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  if (typeof promptData === 'undefined') { console.error('promptData not loaded'); return; }

  renderCategories();
  renderAllCards();
  applyFilters();
  /* Hide skeleton once real cards are rendered */
  if (skeletonGrid) skeletonGrid.style.display = 'none';
  bindEvents();

  animateCounter(document.getElementById('promptCount'), promptData.length, 1400);
  animateCounter(document.getElementById('categoryCount'), totalCategories, 1200);
  animateCounter(document.getElementById('statPrompts'), promptData.length, 1500);
  animateCounter(document.getElementById('statCategories'), totalCategories, 1300);
}

/* ============================================================
   ONE-TIME CARD RENDER (never destroy DOM)
   ============================================================ */
function renderAllCards() {
  const catColor = activeCategory !== 'all' ? CATEGORY_META[activeCategory]?.color : null;

  gridEl.innerHTML = promptData.map((prompt, i) => {
    const color = catColor || CATEGORY_META[prompt.category]?.color || 'var(--accent)';
    return `
      <article class="prompt-card" data-id="${prompt.id}" data-category="${prompt.category}" style="--cat-color:${color};transition-delay:${i * 0.025}s" tabindex="0" role="button" aria-label="View prompt: ${escRegex(prompt.title)}">
        <div class="card-shine" aria-hidden="true"></div>
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
          <button class="btn btn-primary" data-action="view" data-id="${prompt.id}" tabindex="-1">View Prompt</button>
          <button class="btn btn-secondary" data-action="copy" data-id="${prompt.id}" tabindex="-1">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy
          </button>
        </div>
      </article>`;
  }).join('');

  /* Build card element lookup */
  cardElements = {};
  document.querySelectorAll('.prompt-card').forEach(el => {
    cardElements[el.dataset.id] = el;
  });
}

/* ============================================================
   FILTER: toggle visibility (NO innerHTML rebuild)
   ============================================================ */
function applyFilters() {
  let visibleCount = 0;

  promptData.forEach(p => {
    const el = cardElements[p.id];
    if (!el) return;

    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const searchMatch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.prompt.toLowerCase().includes(q);

    if (catMatch && searchMatch) {
      el.classList.remove('hidden-card');
      /* Highlight search matches in title & description */
      if (q) {
        el.querySelector('.card-title').innerHTML = highlightText(p.title, q);
        el.querySelector('.card-description').innerHTML = highlightText(p.description, q);
      } else {
        el.querySelector('.card-title').textContent = p.title;
        el.querySelector('.card-description').textContent = p.description;
      }
      /* Reveal with animation */
      const idx = visibleCount;
      el.style.transitionDelay = `${idx * 0.02}s`;
      el.classList.add('revealed');
      /* Move to end so visible cards stay in order */
      gridEl.appendChild(el);
      visibleCount++;
    } else {
      el.classList.remove('revealed');
      el.classList.add('hidden-card');
    }
  });

  /* Update counters */
  if (visibleCount === 0) {
    noResultsEl.classList.add('visible');
    resultsCountEl.innerHTML = 'No prompts found';
  } else {
    noResultsEl.classList.remove('visible');
    resultsCountEl.innerHTML = `Showing <strong>${visibleCount}</strong> of <strong>${promptData.length}</strong> prompt${visibleCount !== 1 ? 's' : ''}`;
    /* Smooth scroll to first result if scrolled down */
    const firstCard = gridEl.querySelector('.prompt-card:not(.hidden-card)');
    if (firstCard && window.scrollY > firstCard.offsetTop - 100) {
      firstCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

const applyFiltersDebounced = debounce(applyFilters, 120);

/* ============================================================
   RENDER CATEGORIES
   ============================================================ */
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
              style="--cat-color:${meta.color}">
        ${meta.icon} ${meta.label}
        <span class="cat-count">${count}</span>
      </button>`;
  }).join('');
}

/* ============================================================
   CARD TILT (RAF-throttled, single card only)
   ============================================================ */
function onGridMouseMove(e) {
  /* Find which card is under the mouse */
  const card = e.target.closest('.prompt-card');
  if (card !== tiltCard) {
    /* Reset previous card */
    if (tiltCard) tiltCard.style.transform = '';
    tiltCard = card;
  }
  if (!card || !card.classList.contains('revealed')) {
    if (tiltCard) { tiltCard.style.transform = ''; tiltCard = null; }
    return;
  }

  if (tiltRAF) return;
  tiltRAF = requestAnimationFrame(() => {
    tiltRAF = null;
    if (!tiltCard) return;

    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -6;
    const ry = ((x - cx) / cx) * 6;

    tiltCard.style.setProperty('--mx', `${x}px`);
    tiltCard.style.setProperty('--my', `${y}px`);
    tiltCard.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015,1.015,1.015)`;
  });
}

function resetTilt(card) {
  if (tiltCard === card) {
    card.style.transform = '';
    tiltCard = null;
  }
}

/* ============================================================
   EVENT BINDING
   ============================================================ */
function bindEvents() {
  /* Search */
  searchInput.addEventListener('input', function() {
    searchQuery = this.value;
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    applyFiltersDebounced();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    applyFilters();
    searchInput.focus();
  });

  /* Categories */
  categoriesEl.addEventListener('click', e => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    if (activeCategory === chip.dataset.category) return;
    activeCategory = chip.dataset.category;
    renderCategories();
    applyFilters();
  });

  /* Card grid — clicks and keyboard */
  gridEl.addEventListener('click', e => {
    const btn = e.target.closest('button');

    if (btn) {
      if (btn.dataset.action === 'copy') {
        copyPrompt(btn.dataset.id, btn);
      } else {
        const card = btn.closest('.prompt-card');
        if (card) openModal(card.dataset.id);
      }
      e.stopPropagation();
      return;
    }

    const card = e.target.closest('.prompt-card');
    if (card) openModal(card.dataset.id);
  });

  gridEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.prompt-card');
      if (card) {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    }
  });

  /* Card hover for tilt (touch devices skip — no hover) */
  gridEl.addEventListener('mouseenter', e => {
    const card = e.target.closest('.prompt-card');
    if (card) {
      tiltCard = card;
      /* Pre-cache rect once on enter to avoid layout thrash on first mousemove */
      card.getBoundingClientRect();
    }
  }, true);

  gridEl.addEventListener('mouseleave', e => {
    const card = e.target.closest('.prompt-card');
    if (card) resetTilt(card);
  }, true);

  /* Global mousemove for tilt (only if grid is visible) */
  document.addEventListener('mousemove', onGridMouseMove, { passive: true });

  /* Modal close */
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  /* Keyboard */
  document.addEventListener('keydown', e => {
    /* Escape: only close modal */
    if (e.key === 'Escape') {
      if (modalOverlay.classList.contains('active')) {
        closeModal();
        return;
      }
    }

    /* / to focus search (only when no input focused) */
    if (e.key === '/' && !modalOverlay.classList.contains('active')) {
      const tag = document.activeElement?.tagName?.toLowerCase();
      const editable = document.activeElement?.isContentEditable;
      if (tag !== 'input' && tag !== 'textarea' && tag !== 'select' && !editable) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    }

    /* Ctrl+K to focus search */
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      if (modalOverlay.classList.contains('active')) closeModal();
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  /* KB hint visibility */
  searchInput.addEventListener('focus', () => { if (kbHintEl) kbHintEl.classList.add('hidden-hint'); });
  searchInput.addEventListener('blur', () => { if (kbHintEl) kbHintEl.classList.remove('hidden-hint'); });

  /* Scroll to top visibility */
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  /* Scroll to top click */
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const prompt = promptData.find(p => p.id === id);
  if (!prompt) return;

  lastFocusedEl = document.activeElement;

  modalDetail.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-header">
        <div class="modal-icon" aria-hidden="true">${prompt.icon}</div>
        <div class="modal-title-area">
          <h2 class="modal-title" id="modalTitle">${prompt.title}</h2>
          <p class="modal-category">${CATEGORY_META[prompt.category]?.label || prompt.category}</p>
        </div>
        <button class="modal-close" aria-label="Close dialog">&times;</button>
      </div>
      <div class="modal-body">
        <p class="modal-description">${prompt.description}</p>
        <div class="card-tags" style="margin-bottom:16px">${prompt.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <h4>The Prompt</h4>
        <div class="prompt-content">${escRegex(prompt.prompt)}</div>
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
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  /* Focus trap: focus the close button first */
  const closeBtn = modalDetail.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();

  /* Bind close buttons */
  document.getElementById('modalCopyBtn').addEventListener('click', () => copyPrompt(prompt.id));
  modalDetail.querySelectorAll('.close-modal-btn, .modal-close').forEach(b => {
    b.addEventListener('click', closeModal);
  });

  /* Focus trap */
  modalDetail.addEventListener('keydown', trapFocus);
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const modal = modalDetail.querySelector('.modal');
  if (!modal) return;
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}

function closeModal() {
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  /* Restore focus */
  setTimeout(() => {
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }, 200);
}

/* ============================================================
   COPY
   ============================================================ */
function copyPrompt(id, btnEl) {
  const prompt = promptData.find(p => p.id === id);
  if (!prompt) return;

  navigator.clipboard.writeText(prompt.prompt).then(() => {
    showToast('&#x2714;', 'Copied to clipboard');

    /* Flash the card green */
    const card = cardElements[id] || btnEl?.closest('.prompt-card');
    if (card) {
      card.classList.add('copy-flash');
      setTimeout(() => card.classList.remove('copy-flash'), 600);
    }

    /* If initiated from card button, change it temporarily */
    if (btnEl) {
      const origHTML = btnEl.innerHTML;
      btnEl.classList.add('btn-copied');
      btnEl.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      clearTimeout(copyTimer);
      copyTimer = setTimeout(() => {
        btnEl.classList.remove('btn-copied');
        btnEl.innerHTML = origHTML;
      }, 1800);
    }

    /* Also update modal button if open */
    const modalBtn = document.getElementById('modalCopyBtn');
    if (modalBtn) {
      modalBtn.classList.add('btn-copied');
      modalBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      setTimeout(() => {
        modalBtn.classList.remove('btn-copied');
        modalBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy to Clipboard';
      }, 1800);
    }
  }).catch(() => {
    showToast('&#x26A0;', 'Copy failed — try again');
  });
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(icon, msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.setAttribute('role', 'status');
  el.innerHTML = `<span class="toast-icon" aria-hidden="true">${icon}</span> ${msg}`;
  toastContainer.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

/* ============================================================
   BOOT
   ============================================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================================
//  BOOKLY / Quebook — Recommendations Module (recommendations.js)
//  Rating interaction, flying-book animation, and recommendations
// ============================================================

import { BOOKS, getBooksByGenre } from './data.js';
import { getRating, saveRating, getAllRatings } from './ratings.js';
import { getQueryParam } from './navigation.js';
import { openModal, el } from './app.js';

const MIN_RATINGS = 5;
let currentGenre = 'Fiction';

export function initRecommendationsPage() {
  currentGenre = getQueryParam('genre') || 'Fiction';
  renderRatingScreen();
}

export function renderRatingScreen() {
  const genre = currentGenre;

  // Back button
  const backBtn = document.getElementById('rating-back-btn');
  if (backBtn) {
    backBtn.textContent = `← ${genre ? genre.toUpperCase() : 'DISCOVER'}`;
    backBtn.onclick = () => {
      window.location.href = 'index.html';
    };
  }

  // Get unrated books for selected genre
  let books = getBooksByGenre(genre).filter(b => getRating(b.id) === 0);
  if (books.length < 12) {
    const additional = BOOKS.filter(b => b.genre !== genre && getRating(b.id) === 0 && !books.some(item => item.id === b.id));
    books = [...books, ...additional];
  }
  const totalToShow = Math.min(books.length, 12);
  const booksToRate = books.slice(0, totalToShow);

  const totalRated = getAllRatings().length;
  updateProgress(totalRated, Math.max(totalRated + booksToRate.length, 12));

  // Render grid
  const grid = document.getElementById('rating-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (booksToRate.length === 0) {
    grid.innerHTML = '<p style="color:var(--grey-3); font-size:1rem; padding: 40px 0; text-align:center; grid-column: 1/-1;">You\'ve rated all available books! Check your recommendations below or explore more genres.</p>';
    showRecommendationsSection();
    return;
  }

  booksToRate.forEach(book => {
    const currentRating = getRating(book.id);
    const card = el('div', 'rating-book-card');
    card.setAttribute('data-book-id', book.id);

    // Cover
    const coverWrap = el('div', 'rating-cover-wrap');
    const img = document.createElement('img');
    img.src = book.coverUrl;
    img.alt = `${book.title} cover`;
    img.loading = 'lazy';
    img.onerror = () => {
      coverWrap.innerHTML = `
        <div class="book-cover-placeholder">
          <span class="placeholder-icon">📚</span>
          <span class="placeholder-title">${book.title}</span>
        </div>`;
    };
    coverWrap.appendChild(img);
    coverWrap.addEventListener('click', () => openModal(book));
    card.appendChild(coverWrap);

    // Meta
    const meta = el('div', 'rating-book-meta', `
      <div class="rating-book-title">${book.title}</div>
      <div class="rating-book-author">${book.author}</div>
      <div class="rating-prompt">How much did you like it?</div>
    `);
    card.appendChild(meta);

    // Stars
    const starsRow = el('div', 'stars');
    starsRow.setAttribute('role', 'radiogroup');
    starsRow.setAttribute('aria-label', `Rate ${book.title}`);

    const ratingValueEl = el('span', `rating-value${currentRating > 0 ? ' rated' : ''}`);
    ratingValueEl.textContent = currentRating > 0 ? `${currentRating}/5` : '';

    for (let i = 1; i <= 5; i++) {
      const star = el('span', `star${i <= currentRating ? ' filled' : ''}`, '★');
      star.setAttribute('role', 'radio');
      star.setAttribute('aria-label', `${i} star${i !== 1 ? 's' : ''}`);
      star.setAttribute('aria-checked', i <= currentRating ? 'true' : 'false');
      star.setAttribute('tabindex', '0');
      star.dataset.value = i;

      const handleRate = () => {
        const val = parseInt(star.dataset.value);

        // Update stars in this group immediately
        starsRow.querySelectorAll('.star').forEach((s, idx) => {
          if (idx < val) {
            s.classList.add('filled');
            s.setAttribute('aria-checked', 'true');
          } else {
            s.classList.remove('filled');
            s.setAttribute('aria-checked', 'false');
          }
        });

        // Update value label
        ratingValueEl.textContent = `${val}/5`;
        ratingValueEl.classList.add('rated');

        // Launch smooth flying book animation to My Ratings and remove from screen!
        flyBookToRatings(book, val, card);
      };

      star.addEventListener('click', handleRate);
      star.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handleRate(); });
      starsRow.appendChild(star);
    }

    starsRow.appendChild(ratingValueEl);
    meta.appendChild(starsRow);
    grid.appendChild(card);
  });

  grid.dataset.total = Math.max(totalRated + booksToRate.length, 12);
}

export function updateProgress(rated, total) {
  const min = MIN_RATINGS;
  const pct = Math.min((rated / total) * 100, 100);
  const minPct = Math.min((min / total) * 100, 100);
  const ready = rated >= min;

  // Label
  const labelEl = document.getElementById('progress-label-count');
  if (labelEl) labelEl.textContent = `${rated} / ${total} rated`;

  const hintEl = document.getElementById('progress-hint');
  if (hintEl) {
    hintEl.textContent = ready ? '✓ Ready' : `${min - rated} more needed`;
    hintEl.className = `progress-label-right${ready ? ' ready' : ''}`;
  }

  // Bar
  const fill = document.getElementById('progress-fill');
  if (fill) {
    fill.style.width = `${pct}%`;
    fill.style.background = ready ? 'var(--black)' : '#AAAAAA';
  }

  const marker = document.getElementById('progress-marker');
  if (marker) marker.style.left = `${minPct}%`;

  // CTA button
  const btn = document.getElementById('get-reco-btn');
  if (btn) {
    btn.disabled = !ready;
    btn.setAttribute('aria-disabled', String(!ready));
    btn.textContent = ready ? 'Get My Recommendations →' : `Rate at least ${min} books`;
    btn.onclick = () => showRecommendationsSection();
  }
}

export function flyBookToRatings(book, ratingVal, sourceElement) {
  let coverEl = null;
  if (sourceElement) {
    coverEl = sourceElement.querySelector('.rating-cover-wrap') || 
              sourceElement.querySelector('.book-cover-wrap') || 
              sourceElement.querySelector('img') || 
              sourceElement;
  }
  
  const navRatings = document.getElementById('nav-ratings');
  if (!coverEl || !navRatings) {
    saveRating(book, ratingVal);
    return;
  }

  const startRect = coverEl.getBoundingClientRect();
  const targetRect = navRatings.getBoundingClientRect();

  // Create flying clone
  const clone = document.createElement('div');
  clone.className = 'flying-book-clone';
  clone.style.left = `${startRect.left}px`;
  clone.style.top = `${startRect.top}px`;
  clone.style.width = `${startRect.width}px`;
  clone.style.height = `${startRect.height}px`;

  const cloneImg = document.createElement('img');
  cloneImg.src = book.coverUrl;
  cloneImg.alt = `${book.title} cover`;
  clone.appendChild(cloneImg);
  document.body.appendChild(clone);

  // Force reflow
  void clone.offsetWidth;

  // Step 1: Subtle lift
  clone.classList.add('lifting');

  // Fade out source card
  if (sourceElement) {
    sourceElement.style.transition = 'opacity 380ms cubic-bezier(0.16, 1, 0.3, 1), transform 380ms cubic-bezier(0.16, 1, 0.3, 1)';
    sourceElement.style.opacity = '0';
    sourceElement.style.transform = 'scale(0.9) translateY(8px)';
    sourceElement.style.pointerEvents = 'none';
  }

  // Step 2: Fly to #nav-ratings
  setTimeout(() => {
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;
    const startCenterX = startRect.left + startRect.width / 2;
    const startCenterY = startRect.top + startRect.height / 2;

    const deltaX = targetCenterX - startCenterX;
    const deltaY = targetCenterY - startCenterY;

    clone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2) rotate(-5deg)`;
    clone.style.opacity = '0.12';
  }, 70);

  // Step 3: Land, pulse navbar, save rating, remove card from DOM
  setTimeout(() => {
    if (clone && clone.parentNode) {
      clone.parentNode.removeChild(clone);
    }

    navRatings.classList.add('nav-pulse');
    setTimeout(() => navRatings.classList.remove('nav-pulse'), 450);

    saveRating(book, ratingVal);

    if (sourceElement && sourceElement.parentNode) {
      sourceElement.parentNode.removeChild(sourceElement);
    }

    const totalRated = getAllRatings().length;
    const grid = document.getElementById('rating-grid');
    const total = parseInt(grid ? grid.dataset.total : '12') || 12;
    updateProgress(totalRated, total);
  }, 680);
}

export function showRecommendationsSection() {
  const recoSection = document.getElementById('recommendations-section');
  if (recoSection) {
    recoSection.style.display = 'block';
    renderRecommendations();
    recoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function renderRecommendations() {
  const genre = currentGenre;
  const allGenreBooks = getBooksByGenre(genre);

  const sorted = [...allGenreBooks]
    .sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0))
    .slice(0, 10);

  if (sorted.length < 6) {
    const others = BOOKS.filter(b => b.genre !== genre && !sorted.find(s => s.id === b.id))
      .sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0))
      .slice(0, 10 - sorted.length);
    sorted.push(...others);
  }

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const genreBadge = document.getElementById('reco-genre-badge');
  if (genreBadge) genreBadge.textContent = `${genre.toUpperCase()} · BOOKS`;

  const countEl = document.getElementById('reco-count');
  if (countEl) countEl.textContent = `${sorted.length} recommendations`;

  renderFeatured(featured);
  renderRecoGrid(rest);
}

function renderFeatured(book) {
  const container = document.getElementById('reco-featured-inner');
  if (!container || !book) return;
  container.innerHTML = '';

  const coverEl = el('div', 'reco-featured-cover');
  const img = document.createElement('img');
  img.src = book.coverUrl;
  img.alt = `${book.title} cover`;
  img.onerror = () => {
    coverEl.innerHTML = `<div class="book-cover-placeholder"><span class="placeholder-icon">📚</span><span class="placeholder-title">${book.title}</span></div>`;
  };
  coverEl.appendChild(img);
  coverEl.addEventListener('click', () => openModal(book));

  const info = el('div', 'reco-featured-info');
  const match = el('div', 'reco-match-badge', `${book.matchPercentage || 90}% Match`);
  info.appendChild(match);

  const titleEl = el('div', 'reco-featured-title', book.title.toUpperCase());
  titleEl.addEventListener('click', () => openModal(book));
  info.appendChild(titleEl);

  info.appendChild(el('div', 'reco-featured-author', book.author));

  const tagsWrap = el('div', 'reco-featured-genres');
  (book.tags || [book.genre]).forEach(tag => {
    tagsWrap.appendChild(el('span', 'genre-tag', tag));
  });
  info.appendChild(tagsWrap);

  const whyWrap = el('div', 'reco-featured-why');
  const whyBtn = el('button', 'why-trigger', '✦ Why this?');
  const whyTooltip = el('div', 'why-tooltip', '"Similar to the books you rated highly, especially in genre and themes."');
  whyBtn.addEventListener('click', () => {
    whyTooltip.classList.toggle('visible');
    whyBtn.textContent = whyTooltip.classList.contains('visible') ? '✦ Hide' : '✦ Why this?';
  });
  whyWrap.appendChild(whyBtn);
  whyWrap.appendChild(whyTooltip);
  info.appendChild(whyWrap);

  const openBtn = el('div', '');
  openBtn.style.marginTop = '8px';
  const viewBtn = el('button', 'btn-secondary', 'View details');
  viewBtn.addEventListener('click', () => openModal(book));
  openBtn.appendChild(viewBtn);
  info.appendChild(openBtn);

  container.appendChild(coverEl);
  container.appendChild(info);
}

function renderRecoGrid(books) {
  const grid = document.getElementById('reco-grid');
  if (!grid) return;
  grid.innerHTML = '';

  books.forEach(book => {
    const card = el('div', 'reco-card');
    card.addEventListener('click', () => openModal(book));

    const coverWrap = el('div', 'reco-cover-wrap');
    const img = document.createElement('img');
    img.src = book.coverUrl;
    img.alt = `${book.title} cover`;
    img.loading = 'lazy';
    img.onerror = () => {
      coverWrap.innerHTML = `<div class="book-cover-placeholder"><span class="placeholder-icon">📚</span><span class="placeholder-title">${book.title}</span></div>`;
    };
    coverWrap.appendChild(img);
    card.appendChild(coverWrap);

    const info = el('div', 'reco-card-info');
    info.innerHTML = `
      <div class="reco-card-title">${book.title}</div>
      <div class="reco-card-author">${book.author}</div>
    `;

    const whyRow = el('div', 'reco-card-why-row');
    const matchSpan = el('span', 'reco-card-match', `${book.matchPercentage || 85}% Match`);
    const whyBtn = el('button', 'why-trigger', 'Why?');
    const tooltip = el('div', 'reco-card-why-tooltip', 'Similar genre, themes, and style to what you rated highly.');

    whyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      tooltip.classList.toggle('visible');
      whyBtn.textContent = tooltip.classList.contains('visible') ? 'Hide' : 'Why?';
    });

    whyRow.appendChild(matchSpan);
    whyRow.appendChild(whyBtn);
    info.appendChild(whyRow);
    info.appendChild(tooltip);
    card.appendChild(info);
    grid.appendChild(card);
  });
}

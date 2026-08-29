// ============================================================
//  BOOKLY / Quebook — My Ratings Module (my-ratings.js)
//  Rendering rated books, user star ratings, and empty state
// ============================================================

import { getAllRatings, removeRating } from './ratings.js';
import { openModal, el } from './app.js';

export function initMyRatingsPage() {
  const backBtn = document.getElementById('my-ratings-back-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      window.location.href = 'index.html';
    };
  }

  renderMyRatingsGrid();
}

export function renderMyRatingsGrid() {
  const grid = document.getElementById('my-ratings-grid');
  const emptyState = document.getElementById('my-ratings-empty');
  const countBadge = document.getElementById('my-ratings-count');

  if (!grid || !emptyState || !countBadge) return;

  const ratedBooks = getAllRatings();
  countBadge.textContent = `${ratedBooks.length} ${ratedBooks.length === 1 ? 'book' : 'books'}`;

  if (ratedBooks.length === 0) {
    grid.innerHTML = '';
    grid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';
  grid.style.display = 'grid';
  grid.innerHTML = '';

  ratedBooks.forEach(book => {
    const card = el('div', 'my-ratings-card');
    card.setAttribute('data-book-id', book.id);

    // Cover
    const coverWrap = el('div', 'my-ratings-card-cover');
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

    // Content
    const content = el('div', 'my-ratings-card-content');

    const titleEl = el('div', 'my-ratings-card-title', book.title);
    titleEl.addEventListener('click', () => openModal(book));
    content.appendChild(titleEl);

    content.appendChild(el('div', 'my-ratings-card-author', book.author));

    if (book.genre) {
      content.appendChild(el('div', 'my-ratings-card-genre', book.genre));
    }

    // Star rating pill
    const ratingPill = el('div', 'my-ratings-card-rating');
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="my-ratings-star${i <= (book.rating || 0) ? ' filled' : ''}">★</span>`;
    }
    starsHtml += `<span class="my-ratings-num">${book.rating || 0}/5</span>`;
    ratingPill.innerHTML = starsHtml;
    content.appendChild(ratingPill);

    // Remove button
    const removeBtn = el('button', 'my-ratings-remove-btn', '✕ Remove');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.style.transition = 'opacity 300ms ease, transform 300ms ease';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.92) translateY(10px)';
      setTimeout(() => {
        removeRating(book.id);
        renderMyRatingsGrid();
      }, 280);
    });
    content.appendChild(removeBtn);

    card.appendChild(content);
    grid.appendChild(card);
  });
}

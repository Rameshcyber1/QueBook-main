// ============================================================
//  BOOKLY / Quebook — Ratings Module (ratings.js)
//  Single source of truth for rating data and localStorage
// ============================================================

const STORAGE_KEY = 'quebook_user_ratings';
let memoryRatings = null;

export function loadRatings() {
  if (memoryRatings !== null) {
    return memoryRatings;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    memoryRatings = raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load ratings from localStorage', e);
    memoryRatings = {};
  }
  return memoryRatings;
}

export function saveRating(book, ratingVal) {
  if (!book || !book.id) return;
  const ratings = loadRatings();
  ratings[book.id] = {
    id: book.id,
    title: book.title,
    author: book.author,
    coverUrl: book.coverUrl,
    genre: book.genre,
    description: book.description || '',
    rating: ratingVal,
    ratedAt: Date.now(),
  };
  memoryRatings = ratings;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
  } catch (e) {
    console.error('Failed to save rating to localStorage', e);
  }
}

export function removeRating(bookId) {
  const ratings = loadRatings();
  if (ratings[bookId]) {
    delete ratings[bookId];
    memoryRatings = ratings;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
    } catch (e) {
      console.error('Failed to update localStorage', e);
    }
  }
}

export function getRating(bookId) {
  const ratings = loadRatings();
  const r = ratings[bookId];
  if (!r) return 0;
  return typeof r === 'object' ? (r.rating || 0) : r;
}

export function getAllRatings() {
  const ratings = loadRatings();
  return Object.values(ratings)
    .filter(r => r && (typeof r === 'object' ? r.rating > 0 : r > 0))
    .sort((a, b) => (b.ratedAt || 0) - (a.ratedAt || 0));
}

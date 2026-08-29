// ============================================================
//  BOOKLY / Quebook — Data Module (data.js)
//  Mock dataset for Books and Genres
// ============================================================

export const BOOKS = [
  // ── Science Fiction ──────────────────────────────────────
  {
    id: 'dune',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.8,
    description: 'Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides, whose family accepts stewardship of the desert planet Arrakis—source of the universe\'s most valuable substance.',
    matchPercentage: 97,
    tags: ['Science Fiction', 'Classic']
  },
  {
    id: 'foundation',
    title: 'Foundation',
    author: 'Isaac Asimov',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.6,
    description: 'A mathematician develops a theory called psychohistory to preserve humanity\'s knowledge as the Galactic Empire crumbles. The first of Asimov\'s legendary Foundation series.',
    matchPercentage: 93,
    tags: ['Science Fiction', 'Classic']
  },
  {
    id: 'neuromancer',
    title: 'Neuromancer',
    author: 'William Gibson',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.2,
    description: 'The sky above the port was the color of television, tuned to a dead channel. The novel that defined cyberpunk.',
    matchPercentage: 88,
    tags: ['Science Fiction', 'Cyberpunk']
  },
  {
    id: 'the-martian',
    title: 'The Martian',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.5,
    description: 'Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he\'s sure he\'ll be the first person to die there.',
    matchPercentage: 90,
    tags: ['Science Fiction', 'Adventure']
  },
  {
    id: 'enders-game',
    title: "Ender's Game",
    author: 'Orson Scott Card',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.4,
    description: 'Andrew "Ender" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate.',
    matchPercentage: 87,
    tags: ['Science Fiction', 'Military']
  },
  {
    id: 'left-hand-darkness',
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.6,
    description: 'A lone human ambassador travels to a distant alien world where people have no fixed gender. A masterpiece of speculative fiction.',
    matchPercentage: 94,
    tags: ['Science Fiction', 'Classic']
  },
  {
    id: 'hyperion',
    title: 'Hyperion',
    author: 'Dan Simmons',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.7,
    description: 'Seven pilgrims journey to the legendary Time Tombs on the distant world of Hyperion. Each carries a burden—and a secret.',
    matchPercentage: 91,
    tags: ['Science Fiction', 'Epic']
  },
  {
    id: 'blindsight',
    title: 'Blindsight',
    author: 'Peter Watts',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.3,
    description: 'A first contact novel that interrogates consciousness itself. Cerebral, dark, and unforgettable.',
    matchPercentage: 85,
    tags: ['Science Fiction', 'Hard Sci-Fi']
  },

  // ── Fantasy ──────────────────────────────────────────────
  {
    id: 'name-of-the-wind',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    genre: 'Fantasy',
    coverUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.5,
    description: 'The riveting first-person narrative of Kvothe, now a legend, who recounts his extraordinary life—full of magic, music, love, and loss.',
    matchPercentage: 95,
    tags: ['Fantasy', 'Epic']
  },
  {
    id: 'hobbit',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    coverUrl: 'https://images.unsplash.com/photo-1476275466078-4cad320851b3?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.7,
    description: 'Bilbo Baggins, a thoroughly respectable hobbit, is swept into an epic quest by the wizard Gandalf and thirteen dwarves.',
    matchPercentage: 96,
    tags: ['Fantasy', 'Classic']
  },
  {
    id: 'lies-locke-lamora',
    title: 'The Lies of Locke Lamora',
    author: 'Scott Lynch',
    genre: 'Fantasy',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.4,
    description: 'In the city of Camorr, a gang of con artists bite off more than they can chew in a scheme against the city\'s most powerful crime lord.',
    matchPercentage: 89,
    tags: ['Fantasy', 'Heist']
  },
  {
    id: 'way-of-kings',
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    genre: 'Fantasy',
    coverUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.6,
    description: 'In a world battered by deadly highstorms, three separate characters are drawn into an ancient war that could determine humanity\'s fate.',
    matchPercentage: 92,
    tags: ['Fantasy', 'Epic']
  },

  // ── Mystery / Thriller ────────────────────────────────────
  {
    id: 'silent-patient',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Mystery',
    coverUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.0,
    description: 'Alicia Berenson shoots her husband five times and then never speaks another word. A psychotherapist becomes obsessed with uncovering her motive.',
    matchPercentage: 88,
    tags: ['Mystery', 'Psychological']
  },
  {
    id: 'gone-girl',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Thriller',
    coverUrl: 'https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.0,
    description: 'On their fifth wedding anniversary, Nick Dunne reports his wife Amy missing. Two unreliable narrators spiral toward a devastating conclusion.',
    matchPercentage: 85,
    tags: ['Thriller', 'Mystery']
  },
  {
    id: 'girl-dragon-tattoo',
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    genre: 'Thriller',
    coverUrl: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.3,
    description: 'Journalist Mikael Blomkvist teams with hacker Lisbeth Salander to investigate a decades-old disappearance inside a powerful Swedish family.',
    matchPercentage: 86,
    tags: ['Thriller', 'Crime']
  },
  {
    id: 'and-then-there-were-none',
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    genre: 'Mystery',
    coverUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.5,
    description: 'Ten people are lured to an isolated island mansion. One by one they begin to die, and the killer is clearly among them.',
    matchPercentage: 87,
    tags: ['Mystery', 'Classic']
  },

  // ── Fiction / Drama ───────────────────────────────────────
  {
    id: '1984',
    title: '1984',
    author: 'George Orwell',
    genre: 'Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.7,
    description: 'Winston Smith exists in Oceania, a super-state ruled by Big Brother. A terrifyingly prescient novel about totalitarianism and the destruction of truth.',
    matchPercentage: 95,
    tags: ['Fiction', 'Dystopian']
  },
  {
    id: 'book-thief',
    title: 'The Book Thief',
    author: 'Markus Zusak',
    genre: 'Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.7,
    description: 'Narrated by Death, this is the story of a young girl who finds solace in stealing books in Nazi Germany during World War II.',
    matchPercentage: 93,
    tags: ['Fiction', 'Historical']
  },
  {
    id: 'normal-people',
    title: 'Normal People',
    author: 'Sally Rooney',
    genre: 'Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.0,
    description: 'The story of Connell and Marianne, who move through the world differently yet remain drawn to each other across years of change.',
    matchPercentage: 83,
    tags: ['Fiction', 'Romance']
  },

  // ── Romance ───────────────────────────────────────────────
  {
    id: 'pride-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    coverUrl: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.7,
    description: 'The timeless story of Elizabeth Bennet and Mr. Darcy—a story of first impressions, class, and the transformation of pride into love.',
    matchPercentage: 96,
    tags: ['Romance', 'Classic']
  },
  {
    id: 'outlander',
    title: 'Outlander',
    author: 'Diana Gabaldon',
    genre: 'Romance',
    coverUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.4,
    description: 'A WWII nurse is transported to 18th-century Scotland, where she falls in love with a fierce Scottish warrior.',
    matchPercentage: 88,
    tags: ['Romance', 'Historical', 'Time Travel']
  },

  // ── Horror ───────────────────────────────────────────────
  {
    id: 'the-shining',
    title: 'The Shining',
    author: 'Stephen King',
    genre: 'Horror',
    coverUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.6,
    description: 'Jack Torrance becomes winter caretaker of the isolated Overlook Hotel. His son possesses psychic abilities and sees disturbing things—past and future.',
    matchPercentage: 91,
    tags: ['Horror', 'Psychological']
  },
  {
    id: 'it',
    title: 'It',
    author: 'Stephen King',
    genre: 'Horror',
    coverUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.4,
    description: 'In the town of Derry, an ancient malevolent entity exploits its victims\' deepest fears. A group of childhood friends must confront it again as adults.',
    matchPercentage: 88,
    tags: ['Horror', 'Coming of Age']
  },

  // ── Biography ────────────────────────────────────────────
  {
    id: 'becoming',
    title: 'Becoming',
    author: 'Michelle Obama',
    genre: 'Biography',
    coverUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.5,
    description: 'An intimate, powerful, and inspiring memoir by the former First Lady of the United States—a story of identity, purpose, and public life.',
    matchPercentage: 92,
    tags: ['Biography', 'Memoir']
  },
  {
    id: 'steve-jobs',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    genre: 'Biography',
    coverUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.3,
    description: 'Based on more than forty interviews, this is the definitive story of Steve Jobs—his drive, creativity, and relentless perfectionism.',
    matchPercentage: 89,
    tags: ['Biography', 'Technology']
  },

  // ── Self-Help ────────────────────────────────────────────
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    coverUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.6,
    description: 'A proven framework for improving every day. James Clear reveals practical strategies for forming good habits, breaking bad ones, and mastering small behaviors.',
    matchPercentage: 94,
    tags: ['Self-Help', 'Productivity']
  },
  {
    id: 'thinking-fast-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    genre: 'Self-Help',
    coverUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.5,
    description: 'Nobel laureate Daniel Kahneman explores the two systems that drive the way we think—fast, intuitive thinking and slow, deliberate reasoning.',
    matchPercentage: 91,
    tags: ['Self-Help', 'Psychology']
  },

  // ── History ──────────────────────────────────────────────
  {
    id: 'sapiens',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    coverUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.5,
    description: 'A brief history of humankind—from the Stone Age through the present. A sweeping narrative that challenges everything we thought we knew about our species.',
    matchPercentage: 93,
    tags: ['History', 'Non-Fiction']
  },

  // ── Philosophy ───────────────────────────────────────────
  {
    id: 'meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    genre: 'Philosophy',
    coverUrl: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.7,
    description: 'The private journal of a Roman Emperor—a collection of thoughts on duty, resilience, and how to live with purpose. The definitive Stoic text.',
    matchPercentage: 95,
    tags: ['Philosophy', 'Stoicism', 'Classic']
  },

  // ── Adventure ────────────────────────────────────────────
  {
    id: 'alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Adventure',
    coverUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.2,
    description: 'A young shepherd named Santiago travels from Andalusia to Egypt, guided by omens, dreams, and an alchemist—searching for treasure and meaning.',
    matchPercentage: 86,
    tags: ['Adventure', 'Philosophical']
  },
  {
    id: 'into-the-wild',
    title: 'Into the Wild',
    author: 'Jon Krakauer',
    genre: 'Adventure',
    coverUrl: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.3,
    description: 'In April 1992, Christopher McCandless walked alone into the Alaska wilderness. Four months later, he was found dead. A haunting portrait of idealism.',
    matchPercentage: 88,
    tags: ['Adventure', 'Non-Fiction']
  },

  // ── Fahrenheit ────────────────────────────────────────────
  {
    id: 'fahrenheit-451',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    genre: 'Science Fiction',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop&auto=format&q=80',
    rating: 4.5,
    description: 'Guy Montag is a fireman who burns books in a future American society where reading is outlawed. A poetic, urgent novel about censorship.',
    matchPercentage: 89,
    tags: ['Science Fiction', 'Dystopian']
  },
];

export const GENRES = [
  { id: 'Fiction',        desc: 'Timeless stories about the human condition' },
  { id: 'Fantasy',        desc: 'Magic, mythology and extraordinary worlds' },
  { id: 'Science Fiction',desc: 'Futuristic worlds and impossible ideas' },
  { id: 'Mystery',        desc: 'Secrets, clues and stories that keep you guessing' },
  { id: 'Thriller',       desc: 'Tension, twists and edge-of-your-seat stakes' },
  { id: 'Romance',        desc: 'Intimate stories about love in all its forms' },
  { id: 'Horror',         desc: 'Fear crafted with purpose and intelligence' },
  { id: 'Biography',      desc: 'Real lives told with clarity and depth' },
  { id: 'History',        desc: 'The past, illuminated with perspective' },
  { id: 'Self-Help',      desc: 'Clarity, habits and tools for a better life' },
  { id: 'Adventure',      desc: 'Journeys that transform every character involved' },
  { id: 'Philosophy',     desc: 'Big questions, sharply examined' },
];

export function getBooksByGenre(genre) {
  return BOOKS.filter(b => b.genre === genre);
}

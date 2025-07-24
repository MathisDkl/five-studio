export interface Film {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: number;
  duration: string;
  type: 'ai' | 'human';
  genre: string;
  videoUrl?: string;
}

export const aiFilms: Film[] = [
  {
    id: 'ai-astrade',
    title: 'ASTRADE',
    image: '/ASTRADE.png',
    year: '2024',
    rating: 9.6,
    duration: '4 min',
    type: 'ai',
    genre: 'Music Video',
    videoUrl: 'https://youtu.be/example-astrade-video'
  },
  {
    id: 'ai-0',
    title: 'LISA',
    image: '/afficheLinatitre.png',
    year: '2024',
    rating: 9.4,
    duration: '134 min',
    type: 'ai',
    genre: 'Drama',
    videoUrl: 'https://youtu.be/gPK90lm4JAY'
  },
  {
    id: 'ai-1',
    title: 'Quantum Reflections',
    image: 'https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.9,
    duration: '142 min',
    type: 'ai',
    genre: 'Sci-Fi'
  },
  {
    id: 'ai-2',
    title: 'Digital Souls',
    image: 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 9.1,
    duration: '118 min',
    type: 'ai',
    genre: 'Drama'
  },
  {
    id: 'ai-3',
    title: 'The Algorithm',
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.7,
    duration: '95 min',
    type: 'ai',
    genre: 'Thriller'
  },
  {
    id: 'ai-4',
    title: 'Synthetic Dreams',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.5,
    duration: '108 min',
    type: 'ai',
    genre: 'Fantasy'
  },
  {
    id: 'ai-5',
    title: 'Neural Networks',
    image: 'https://images.pexels.com/photos/2832029/pexels-photo-2832029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.8,
    duration: '156 min',
    type: 'ai',
    genre: 'Sci-Fi'
  },
  {
    id: 'ai-6',
    title: 'Machine Learning',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.3,
    duration: '89 min',
    type: 'ai',
    genre: 'Documentary'
  },
  {
    id: 'ai-7',
    title: 'Artificial Consciousness',
    image: 'https://images.pexels.com/photos/2832033/pexels-photo-2832033.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 9.0,
    duration: '167 min',
    type: 'ai',
    genre: 'Philosophy'
  }
];

export const humanFilms: Film[] = [
  {
    id: 'human-venice-journey',
    title: 'Venice Journey',
    image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 9.2,
    duration: '8 min',
    type: 'human',
    genre: 'Drama',
    videoUrl: 'https://www.youtube.com/watch?v=tGHMBfC7z0M'
  },
  {
    id: 'human-1',
    title: 'The Director\'s Vision',
    image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 9.3,
    duration: '134 min',
    type: 'human',
    genre: 'Drama'
  },
  {
    id: 'human-2',
    title: 'Midnight in Tokyo',
    image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.8,
    duration: '126 min',
    type: 'human',
    genre: 'Romance'
  },
  {
    id: 'human-3',
    title: 'Desert Winds',
    image: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.6,
    duration: '112 min',
    type: 'human',
    genre: 'Adventure'
  },
  {
    id: 'human-4',
    title: 'The Artist\'s Touch',
    image: 'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 9.0,
    duration: '98 min',
    type: 'human',
    genre: 'Biography'
  },
  {
    id: 'human-5',
    title: 'Urban Stories',
    image: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.4,
    duration: '145 min',
    type: 'human',
    genre: 'Drama'
  },
  {
    id: 'human-6',
    title: 'The Craftsman',
    image: 'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.9,
    duration: '178 min',
    type: 'human',
    genre: 'Historical'
  },
  {
    id: 'human-7',
    title: 'Emotional Landscapes',
    image: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.7,
    duration: '123 min',
    type: 'human',
    genre: 'Drama'
  },
  {
    id: 'human-8',
    title: 'The Human Experience',
    image: 'https://images.pexels.com/photos/2832031/pexels-photo-2832031.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 9.2,
    duration: '156 min',
    type: 'human',
    genre: 'Documentary'
  }
];

export const shortFilms: Film[] = [
  {
    id: 'short-1',
    title: 'Electric Memories',
    image: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.4,
    duration: '18 min',
    type: 'ai',
    genre: 'Sci-Fi'
  },
  {
    id: 'short-2',
    title: 'The Last Frame',
    image: 'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.9,
    duration: '22 min',
    type: 'human',
    genre: 'Drama'
  },
  {
    id: 'short-3',
    title: 'Binary Emotions',
    image: 'https://images.pexels.com/photos/2832031/pexels-photo-2832031.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.1,
    duration: '15 min',
    type: 'ai',
    genre: 'Romance'
  },
  {
    id: 'short-4',
    title: 'Human Touch',
    image: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.7,
    duration: '20 min',
    type: 'human',
    genre: 'Comedy'
  },
  {
    id: 'short-5',
    title: 'Digital Whispers',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.2,
    duration: '12 min',
    type: 'ai',
    genre: 'Mystery'
  },
  {
    id: 'short-6',
    title: 'Moments',
    image: 'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.6,
    duration: '25 min',
    type: 'human',
    genre: 'Drama'
  },
  {
    id: 'short-7',
    title: 'Code Poetry',
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.0,
    duration: '8 min',
    type: 'ai',
    genre: 'Experimental'
  },
  {
    id: 'short-8',
    title: 'Reflections',
    image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    year: '2024',
    rating: 8.8,
    duration: '16 min',
    type: 'human',
    genre: 'Art'
  }
];
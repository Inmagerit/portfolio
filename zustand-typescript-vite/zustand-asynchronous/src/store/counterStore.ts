import create from 'zustand';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  posts: Post[];
  getPosts: () => Promise<void>;
  hidePosts: () => void; // Añadido tipo para hidePosts
}

export const CounterStore = create<CounterState>((set) => ({
  title: 'the counter',
  count: 10,
  posts: [],

  getPosts: async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      set((state) => ({
        ...state,
        posts,
      }));
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  },

  hidePosts: () => {
    set((state) => ({
      ...state,
      posts: [], // Limpiar el array de posts
    }));
  },

  increment: (value: number) => set((state) => ({
    count: state.count + value,
  })),

  decrement: (value: number) => set((state) => ({
    count: state.count - value,
  })),
}));

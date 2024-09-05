import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavouriteReposState = {
    favouriteReposId: number[],
    addFavouriteRepo: (id: number) => void,
    removeFavouriteRepo: (id: number) => void,
};

export const favouriteReposStore = create(persist<FavouriteReposState>(
    (set) => ({
        favouriteReposId: [],
        addFavouriteRepo: (id: number) => {
            set((state) => ({
                favouriteReposId: [...state.favouriteReposId, id],
            }));
        },
        removeFavouriteRepo: (id: number) => {
            set((state) => ({
                favouriteReposId: state.favouriteReposId.filter(repoId => repoId !== id),
            }));
        },
    }),
    {
        name: 'favourite-repos',
    }
));

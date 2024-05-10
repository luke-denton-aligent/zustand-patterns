import { StateCreator } from 'zustand';
import { Store } from '../useStore.ts';

export type BearSlice = {
  bears: number;
  increaseBearPopulation: (amount?: number) => void;
  removeAllBears: () => void;
};

export const createBearSlice: StateCreator<Store, [], [], BearSlice> = set => ({
  bears: 0,
  increaseBearPopulation: (amount = 1) =>
    set(state => ({ bears: state.bears + amount })),
  removeAllBears: () => set({ bears: 0 })
});

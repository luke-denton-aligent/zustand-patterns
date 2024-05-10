import { StateCreator } from 'zustand';
import { Store } from '../useStore.ts';

export type BearSlice = {
  bears: number;
  actions: {
    increaseBearPopulation: (amount?: number) => void;
    removeAllBears: () => void;
  };
};

export const createBearSlice: StateCreator<Store, [], [], BearSlice> = set => ({
  bears: 0,

  actions: {
    increaseBearPopulation: (amount = 1) =>
      set(state => ({ bears: state.bears + amount })),
    removeAllBears: () => set({ bears: 0 })
  }
});

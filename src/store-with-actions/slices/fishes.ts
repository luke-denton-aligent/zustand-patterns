import { StateCreator } from 'zustand';
import { Store } from '../useStore.ts';

export type FishSlice = {
  fishes: number;
  actions: {
    takeFish: (amount?: number) => void;
  };
};

export const createFishSlice: StateCreator<Store, [], [], FishSlice> = set => ({
  fishes: 100,

  actions: {
    takeFish: (amount = 1) =>
      set(prevState => ({
        fishes: prevState.fishes - amount
      }))
  }
});

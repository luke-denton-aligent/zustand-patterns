import { StateCreator } from 'zustand';
import { Store } from '../useStore.ts';

export type FishSlice = {
  fishes: number;
  takeFish: (amount?: number) => void;
};

export const createFishSlice: StateCreator<Store, [], [], FishSlice> = set => ({
  fishes: 100,
  takeFish: (amount = 1) =>
    set(prevState => ({
      fishes: prevState.fishes - amount
    }))
});

import { StateCreator } from 'zustand';
import { Store } from '../useStore.ts';

export type ForestDensitySlice = {
  forestDensity: number;
  actions: {
    reduceForest: (amount: number) => void;
  };
};

export const createForestDensitySlice: StateCreator<
  Store,
  [],
  [],
  ForestDensitySlice
> = set => ({
  forestDensity: 9000,

  actions: {
    reduceForest: (amount: number) => {
      set(prevState => ({
        forestDensity:
          prevState.forestDensity - amount < 0
            ? 0
            : prevState.forestDensity - amount
      }));
    }
  }
});

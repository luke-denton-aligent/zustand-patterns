import { StateCreator } from 'zustand';
import { Store } from '../useStore.ts';

export type HumanSlice = {
  humans: number;
  increaseHumanPopulation: (amount?: number) => void;
  decreaseHumanPopulation: (amount?: number) => void;
};

export const createHumanSlice: StateCreator<
  Store,
  [],
  [],
  HumanSlice
> = set => ({
  humans: 10,
  increaseHumanPopulation: (amount = 1) =>
    set(prevState => ({
      humans: prevState.humans + amount
    })),
  decreaseHumanPopulation: (amount = 1) =>
    set(prevState => ({
      humans: prevState.humans - amount
    }))
});

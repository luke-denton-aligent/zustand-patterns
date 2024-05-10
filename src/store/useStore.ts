import { create } from "zustand";

export type Store = {
  bears: number;
  fishes: number;
  humans: number;
  forestDensity: number;
  increaseBearPopulation: (amount?: number) => void;
  removeAllBears: () => void;
  takeFish: (amount?: number) => void;
  increaseHumanPopulation: (amount?: number) => void;
  decreaseHumanPopulation: (amount?: number) => void;
};

export const useStore = create<Store>((set) => ({
  bears: 0,
  fishes: 100,
  humans: 10,
  forestDensity: 0.9,
  increaseBearPopulation: (amount = 1) =>
    set((state) => ({ bears: state.bears + amount })),
  removeAllBears: () => set({ bears: 0 }),
  takeFish: (amount = 1) =>
    set((prevState) => ({
      fishes: prevState.fishes - amount,
    })),
  increaseHumanPopulation: (amount = 1) =>
    set((prevState) => ({
      humans: prevState.humans + amount,
    })),
  decreaseHumanPopulation: (amount = 1) =>
    set((prevState) => ({
      humans: prevState.humans - amount,
    })),
}));

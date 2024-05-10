import { create } from 'zustand';
import { BearSlice, createBearSlice } from './slices/bears.ts';
import { createFishSlice, FishSlice } from './slices/fishes.ts';
import { createHumanSlice, HumanSlice } from './slices/humans.ts';
import {
  createForestDensitySlice,
  ForestDensitySlice
} from './slices/forest-density.ts';

export type Store = BearSlice & FishSlice & HumanSlice & ForestDensitySlice;

export const useStore = create<Store>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createHumanSlice(...a),
  ...createForestDensitySlice(...a)
}));

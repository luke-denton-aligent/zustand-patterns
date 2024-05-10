import { useStore } from '../useStore';

export const useBears = () => {
  const bears = useStore(state => state.bears);
  const increaseBearPopulation = useStore(
    state => state.increaseBearPopulation
  );
  const removeAllBears = useStore(state => state.removeAllBears);

  return {
    bears,
    increaseBearPopulation,
    removeAllBears
  };
};

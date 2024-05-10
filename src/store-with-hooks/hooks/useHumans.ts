import { useStore } from '../useStore';

export const useHumans = () => {
  const humans = useStore(state => state.humans);
  const increaseHumanPopulation = useStore(
    state => state.increaseHumanPopulation
  );
  const decreaseHumanPopulation = useStore(
    state => state.decreaseHumanPopulation
  );

  return {
    humans,
    increaseHumanPopulation,
    decreaseHumanPopulation
  };
};

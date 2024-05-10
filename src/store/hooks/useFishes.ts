import { useStore } from "../useStore";

export const useFishes = () => {
  const fishes = useStore((state) => state.fishes);
  const takeFish = useStore((state) => state.takeFish);

  return {
    fishes,
    takeFish,
  };
};

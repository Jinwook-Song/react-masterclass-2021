import { atom, selector } from "recoil";

export const minState = atom({
  key: "min",
  default: 0,
});

export const housrSelector = selector({
  key: "hour",
  get: ({ get }) => {
    const min = get(minState);
    return (min / 60).toFixed(2);
  },
});

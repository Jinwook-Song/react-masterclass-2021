import { atom, selector } from "recoil";

export const minState = atom({
  key: "min",
  default: 0,
});

export const housrSelector = selector<number>({
  key: "hour",
  get: ({ get }) => {
    const min = get(minState);
    return min / 60;
  },
  set: ({ set }, newValue) => {
    const min = Number(newValue) * 60;
    set(minState, min);
  },
});

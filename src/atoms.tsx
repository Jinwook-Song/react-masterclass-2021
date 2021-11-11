import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoState {
  [key: string]: ITodo[];
}

export const todoState = atom<ITodoState>({
  key: "todo",
  default: {
    "To Do": [
      { id: 1, text: "a" },
      { id: 2, text: "b" },
      { id: 3, text: "c" },
    ],
    Doing: [{ id: 4, text: "d" }],
    Done: [
      { id: 5, text: "e" },
      { id: 6, text: "f" },
    ],
  },
});

import { atom, selector } from "recoil";

const localData = localStorage.getItem("todos");

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<ITodo["category"]>({
  key: "category",
  default: Categories.TODO,
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: localData ? JSON.parse(localData) : [],
});

export const todoSelector = selector({
  key: "todoSelector",
  // get func can get any atom
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});

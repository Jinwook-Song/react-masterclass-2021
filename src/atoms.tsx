import { atom } from "recoil";

export const todoState = atom({
  key: "todo",
  default: "a,b,c,d,e,f,g,h,i".split(","),
});

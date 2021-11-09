import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

function Todo({ id, text, category }: ITodo) {
  const setTodos = useSetRecoilState(todoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name: categoryState },
    } = event;
    setTodos((prevTodos) => {
      const targetIndex = prevTodos.findIndex((todo) => todo.id === id);
      const prevTodo = prevTodos[targetIndex];
      const newTodo = { id, text, category: categoryState };
      console.log(prevTodo, newTodo);
      return prevTodos;
    });
  };

  return (
    <li>
      {text}
      <button
        name="TODO"
        onClick={onClick}
        disabled={category === "TODO" ? true : false}
      >
        To Do
      </button>
      <button
        name="DOING"
        onClick={onClick}
        disabled={category === "DOING" ? true : false}
      >
        Doing
      </button>
      <button
        name="DONE"
        onClick={onClick}
        disabled={category === "DONE" ? true : false}
      >
        Done
      </button>
    </li>
  );
}

export default Todo;

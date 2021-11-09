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
      const newTodo: ITodo = {
        id,
        text,
        category: categoryState as ITodo["category"],
      };
      const newTodos = [...prevTodos]; // create new array
      newTodos.splice(targetIndex, 1, newTodo);
      return newTodos;
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

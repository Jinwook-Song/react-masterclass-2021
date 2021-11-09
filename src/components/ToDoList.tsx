import { useRecoilValue } from "recoil";
import { todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function ToDoList() {
  const [todos, doings, dones] = useRecoilValue(todoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />

      <hr />
      <h2>To Do</h2>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>

      <hr />
      <h2>Doing</h2>
      <ul>
        {doings.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>

      <hr />
      <h2>Done</h2>
      <ul>
        {dones.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

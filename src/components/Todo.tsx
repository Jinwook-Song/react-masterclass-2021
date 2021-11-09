import { ITodo } from "../atoms";

function Todo({ text }: ITodo) {
  return (
    <li>
      {text}
      <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default Todo;

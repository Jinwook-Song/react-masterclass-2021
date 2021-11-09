import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  todo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

function ToDoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodos((prevTodos) => [
      { id: Date.now(), text: todo, category: "TODO" },
      ...prevTodos,
    ]);
    setValue("todo", "");
  };
  console.log(todos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "Please write a To Do." })}
          placeholder="Write a to do..."
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

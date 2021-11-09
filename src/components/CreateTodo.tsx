import { useForm } from "react-hook-form";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const [todos, setTodos] = useRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodos((prevTodos) => [
      { id: Date.now(), text: todo, category },
      ...prevTodos,
    ]);
    localStorage.setItem(
      "todos",
      JSON.stringify([{ id: Date.now(), text: todo, category }, ...todos])
    );

    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", { required: "Please write a To Do." })}
        placeholder="Write a to do..."
      />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;

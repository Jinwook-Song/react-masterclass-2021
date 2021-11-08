import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("assword")} placeholder="Password" />
        <input {...register("passwordConfirm")} placeholder="PW Confirm" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

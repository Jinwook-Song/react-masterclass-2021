import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("firstName", { required: "First Name is required." })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: "Last Name is required." })}
          placeholder="Last Name"
        />
        <input
          {...register("email", { required: "Email is required." })}
          placeholder="Email"
        />
        <input
          {...register("username", {
            required: "Username is required.",
            minLength: {
              value: 5,
              message: "Username must be longer than 5 characters.",
            },
          })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: "Password is required." })}
          placeholder="Password"
        />
        <input
          {...register("passwordConfirm", {
            required: "Password Confirm is required.",
          })}
          placeholder="Password Confirm"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

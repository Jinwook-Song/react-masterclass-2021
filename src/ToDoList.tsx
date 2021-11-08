import { useForm } from "react-hook-form";
import styled from "styled-components";

const ErrorMessage = styled.span`
  color: red;
  font-weight: 400;
  font-size: 20px;
  margin: 5px 0px;
`;

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
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
        {errors?.firstName?.message ? (
          <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
        ) : null}

        <input
          {...register("lastName", { required: "Last Name is required." })}
          placeholder="Last Name"
        />
        {errors?.lastName ? (
          <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
        ) : null}

        <input
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed.",
            },
          })}
          placeholder="Email"
        />
        {errors?.email ? (
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        ) : null}

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
        {errors?.username ? (
          <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        ) : null}

        <input
          {...register("password", { required: "Password is required." })}
          placeholder="Password"
        />
        {errors?.password ? (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        ) : null}

        <input
          {...register("passwordConfirm", {
            required: "Password Confirm is required.",
          })}
          placeholder="Password Confirm"
        />
        {errors?.passwordConfirm ? (
          <ErrorMessage>{errors?.passwordConfirm?.message}</ErrorMessage>
        ) : null}

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

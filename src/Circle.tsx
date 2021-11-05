import styled from "styled-components";

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 10rem;
  height: 10rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you ar ${playerObj.age} years old.`;

sayHello({ name: "jw", age: 12 });

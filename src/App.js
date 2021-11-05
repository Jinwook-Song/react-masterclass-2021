import styled from "styled-components";

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  padding: 10px 20px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: pink;
`;

function App() {
  return (
    <Father as="header">
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;

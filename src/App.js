import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius:0;
  }
  50% {
    transform: rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius:0;
  }
`;

const Emoji = styled.span`
  will-change: contents;
  font-size: 3rem;
`;

const Box = styled.div`
  height: 10rem;
  width: 160px;
  background-color: black;
  animation: ${animation} 2s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    animation: none;
    border-radius: 10%;
  }
  ${Emoji} {
    transition: 1s;
    &:hover {
      font-size: 6rem;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🔥</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;

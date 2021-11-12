import styled from "styled-components";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 0.8, borderRadius: 100 },
  drag: {
    backgroundColor: "#00ff00",
    transition: { duration: 0.5 },
  },
};

function App() {
  const x = useMotionValue(0);
  const input = [-400, 0, 400];
  const output = [2, 1, 0.2];
  const scale = useTransform(x, input, output);

  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;

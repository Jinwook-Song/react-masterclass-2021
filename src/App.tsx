import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 200px;
`;

const card: Variants = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const [foward, setFoard] = useState(true);
  const nextCard = () => {
    setFoard(true);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prevCard = () => {
    setFoard(false);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {"1,2,3,4,5,6,7,8,9,10".split(",").map((i) =>
          +i === visible ? (
            <Box
              key={i}
              variants={card}
              initial={`${foward}` ? "invisible" : "exit"}
              animate="visible"
              exit={`${foward}` ? "exit" : "invisible"}
              transition={{ duration: 0.5 }}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={prevCard}>prev</button>
      <button onClick={nextCard}>next</button>
    </Wrapper>
  );
}

export default App;

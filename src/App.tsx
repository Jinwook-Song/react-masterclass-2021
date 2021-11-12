import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  height: 300px;
  width: 300px;
  path {
    stroke: rgb(255, 149, 0);
    stroke-width: "2";
  }
`;

const svg: Variants = {
  start: { pathLength: 0, fill: "rgba(255,149,0,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255,149,0,1)",
  },
};

function App() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 4 },
            fill: { duration: 1, delay: 2 },
          }}
          d="M86.642 0L122 94.469H0l3.914-11.741L35.494 0h14.44l10.391 28.88L72.201 0h14.44zM49.934 83.942h20.783L66.803 74.9l-6.478-17.139-10.391 26.181zM43.32 9.312l-28.88 74.63h24.966l1.215-1.214 14.44-39.407-3.914-10.527-7.827-23.482zm62.89 74.63l-2.7-9.042-7.827-19.838-7.828-22.268L78.68 9.312 65.59 43.32l15.654 40.621h24.967z"
        />
      </Svg>
    </Wrapper>
  );
}

export default App;

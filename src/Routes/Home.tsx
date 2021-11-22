import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { getMovies } from "../api";
import { makeImagePath } from "../utils";

// Card offest
let offset: number;
if (window.innerWidth < 400) {
  offset = 2;
} else if (window.innerWidth < 768) {
  offset = 4;
} else {
  offset = 6;
}

// Style
const Wrapper = styled.div`
  background-color: black;
`;

const Loader = styled.span`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: min(3rem, 60px);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

const Title = styled.h2`
  font-size: min(3rem, 60px);
  margin-bottom: min(0.5rem, 10px);
  white-space: nowrap;
  overflow: hidden;
`;

const Overview = styled.p`
  font-size: min(1.5rem, 30px);
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Slider = styled.div`
  position: relative;
  top: -10rem;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.2rem;
  position: absolute;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 6rem;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const CardInfo = styled(motion.div)`
  padding: min(0.5rem, 14px);
  background-color: ${(props) => props.theme.black.lightDark};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: min(0.5rem, 12px);
  }
`;

// for Animation
const rowVariants: Variants = {
  hidden: {
    x: window.innerWidth * 1.004,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -(window.innerWidth * 0.996),
  },
};

const BoxVariants: Variants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -window.innerHeight * 0.03,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

const CardInfoVariants: Variants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

function Home() {
  const navigate = useNavigate();
  const CardMovieMatch = useMatch("/movies/:movieId");
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset);
      setIndex((prev) => (prev === maxIndex - 1 ? (prev = 0) : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`movies/${movieId}`);
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                transition={{ type: "tween", duration: 0.7 }}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      onClick={() => onBoxClicked(movie.id)}
                      variants={BoxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500" || "")}
                    >
                      <CardInfo variants={CardInfoVariants}>
                        <h4>{movie.title}</h4>
                      </CardInfo>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {CardMovieMatch ? (
              <motion.div
                layoutId={CardMovieMatch.params.movieId}
                style={{
                  position: "absolute",
                  width: "60vw",
                  height: "80vh",
                  backgroundColor: "red",
                  top: 50,
                  left: 0,
                  right: 0,
                  margin: "0 auto",
                }}
              ></motion.div>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;

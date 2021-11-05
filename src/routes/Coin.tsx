import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 1rem;
  max-width: 480px;
  margin: 0 auto;
`;

const Loader = styled.span`
  display: flex;
  justify-content: center;
  font-size: max(min(1.5rem, 20px), 15px);
  color: ${(props) => props.theme.accentColor2};
`;

const Header = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: max(min(3rem, 40px), 20px);
  color: ${(props) => props.theme.accentColor};
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});
  const { coinId } = useParams();
  const { state } = useLocation();
  useEffect(() => {
    (async () => {
      const info = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const infoData = await info.json();
      const price = await fetch(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      const priceData = await price.json();

      console.log(infoData, priceData);
      setInfo(infoData);
      setPrice(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name ?? null}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;

import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.bgAccentColor2};
  color: ${(props) => props.theme.bgColor};
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  font-size: max(min(1.5rem, 20px), 15px);
  a {
    transition: color 0.1s ease-in-out;
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor2};
      font-weight: 600;
    }
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  min-width: 30px;
  min-height: 30px;
  margin-right: 0.5rem;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Crypto Coin</title>
      </Helmet>
      <Header>
        <Title>Crypto Coin</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`coins/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  alt={coin.name}
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;

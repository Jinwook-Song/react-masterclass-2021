import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router";
import { Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.div`
  padding: 0 1rem;
  max-width: 500px;
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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: max(min(1.5rem, 20px), 15px);
    color: ${(props) => props.theme.accentColor};
  }
  span:first-child {
    font-size: max(min(1rem, 15px), 12px);
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.accentColor2};
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: max(min(1.5rem, 20px), 15px);
  color: ${(props) => props.theme.accentColor};
`;

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: string;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [price, setPrice] = useState<PriceData>();
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
  }, [coinId]);
  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{price?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{price?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Outlet />
        </>
      )}
    </Container>
  );
}

export default Coin;

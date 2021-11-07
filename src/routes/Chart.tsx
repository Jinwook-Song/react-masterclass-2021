import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { fetchCoinHistory } from "../api";

function Chart() {
  const {
    state: { id: coinId },
  } = useLocation();
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(isLoading, data);
  return <h1>Chart Screen</h1>;
}

export default Chart;

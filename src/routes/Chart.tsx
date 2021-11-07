import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { theme } from "../theme";

interface CoinHistoryData {
  time_open: "string";
  time_close: "string";
  open: number;
  close: number;
  high: number;
  low: number;
  market_cap: number;
  volume: number;
}

function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<CoinHistoryData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId!),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            colors: [`${theme.accentColor}`],
            chart: {
              height: 300,
              width: 500,
              background: "transparent",
            },
            stroke: {
              curve: "stepline",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                color: `${theme.accentColor2}`,
              },
              type: "datetime",
              categories: data?.map((price) => price.time_close.slice(0, 10)),
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: [`${theme.accentColor2}`],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

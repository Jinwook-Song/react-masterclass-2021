import { HashRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ isDark, toggleDark }: IRouterProps) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />} />
        <Route path="/coins/:coinId/" element={<Coin isDark={isDark} />}>
          <Route path="chart" element={<Chart isDark={isDark} />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;

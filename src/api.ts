const BASE_URL = `https://api.coinpaprika.com/v1`;

// All Coins
export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

// Coin Info
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

// Coin Price
export function fetchCoinPrice(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

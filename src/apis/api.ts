
export const SingleCoin = (id: any) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;
  

// export const HistoricalChart = (id : any, days = 365, currency : any) =>
//  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;


  export const TrendingCoins = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
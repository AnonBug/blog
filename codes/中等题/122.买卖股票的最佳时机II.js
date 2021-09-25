// 在涨价区间一直买
let maxProfit = prices => {
  const len = prices.length;
  let res = 0;

  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1];
    }
  }

  return res;
}

// 暴力解法：超时了
let maxProfit = prices => {
  const len = prices.length;
  let max = 0;

  for (let buy = 0; buy < len - 1; buy++) {
    for (let sell = buy + 1; sell < len; sell++) {
      let profit = prices[sell] - prices[buy];
      max = Math.max(profit, max);
    }
  }

  return max;
}

// 寻找当天之前的历史最低价
let maxProfit = prices => {
  const len = prices.length;
  let max = 0;
  let minPrice = prices[0];

  for (let i = 1; i < len; i++) {
    if (prices[i] > minPrice) {
      max = Math.max(max, prices[i] - minPrice);
    } else {
      minPrice = prices[i];
    }
  }

  return max;
}

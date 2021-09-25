let maxProfit = prices => {
  const len = prices.length;

  /* 
    动态规划定义：
      dp[i][0]: 第 i 天，手上没有股票
      dp[i][1]: 第 i 天，手上买了一支股票
      dp[i][2]: 第 i 天，手上卖了一支股票
      dp[i][3]: 第 i 天，手上买了第二支股票
      dp[i][4]: 第 i 天，卖了第二支股票

    初始化：
      dp[0][0] = 0;
      dp[0][1] = -prices[0]
      dp[0][2] = dp[0][3] = dp[0][4] = 0

    状态转移：
      dp[i][0] = dp[i - 1][0]
      dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
      dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2])
      dp[i][3] = Math.max(dp[i][2] - prices[i], dp[i - 1][3])
      dp[i][4] = Math.max(dp[i][3] + prices[i], dp[i - 1][4])

    答案：
      dp[len - 1][4]
  */

  const dp = new Array(len).fill(0).map(_ => new Array(5).fill(0));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = dp[0][4] = 0;
  dp[0][3] = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);
    dp[i][3] = Math.max(dp[i][2] - prices[i], dp[i - 1][3]);
    dp[i][4] = Math.max(dp[i][3] + prices[i], dp[i - 1][4]);
  }

  return dp[len - 1][4];
}

let res = maxProfit([1, 2, 3, 4, 5]);

console.log(res);
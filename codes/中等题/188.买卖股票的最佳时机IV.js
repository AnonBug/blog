let maxProfit = (k, prices) => {
  const len = prices.length;

  /* 
    动态规划定义：
      dp[i][2k - 1]: 第 i 天，手持了第 k 支股票
      dp[i][2k]: 第 i 天，卖了第 k 支股票

    初始化：
      dp[0][0] = 0
      dp[0][1] = -prices[0]
      dp[0][2] = 0
      dp[0][3] = -prices[0]
      dp[0][4] = 0
      ......
    
    状态转移：
      dp[i][0] = dp[i - 1][0]
      dp[i][1] = Math.max(dp[i - 1][0] - prices[1], dp[i - 1][1])
      dp[i][2] = Math.max(dp[i - 1][1] + prices[2], dp[i - 1][2])
      ......

    答案：
      dp[len - 1][2k]
  */

  const dp = new Array(len).fill(0).map(_ => new Array(2 * k + 1).fill(0))

  for (let i = 1; i <= k; i++) {
    dp[0][2 * i - 1] = Number.MIN_SAFE_INTEGER;
    dp[0][2 * i] = 0;
  }

  dp[0][1] = -prices[0];

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][2 * j - 1] = Math.max(dp[i][2 * j - 2] - prices[i], dp[i - 1][2 * j - 1]);
      dp[i][2 * j] = Math.max(dp[i][2 * j - 1] + prices[i], dp[i - 1][2 * j]);
    }
  }

  return dp[len - 1][2 * k];
}

let res = maxProfit(4, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0])

console.log(res);

let rob = nums => {
  const len = nums.length;

  /* 
    动态规划定义：
      - dp[i][0] 不打劫第 i 家的最大收益
      - dp[i][1] 打劫第 i 家的最大收益
    
    初始化：
      - dp[0][0] = 0
      - dp[0][1] = nums[0]

    状态转移：
      - dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
      - dp[i][1] = dp[i - 1][0] + nums[i];

    答案：
      Math.max(dp[len - 1][0], dp[len - 1][1])
  */

  const dp = new Array(len).fill(0).map(_ => new Array(2).fill(0));

  dp[0][0] = 0;
  dp[0][1] = nums[0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
}

/* 
  动态规划的空间优化：
    主要考虑状态转移时所用到的前一个状态。
*/

rob = nums => {
  const len = nums.length;

  let dp0 = 0;
  let dp1 = nums[0];

  for (let i = 1; i < len; i++) {
    const tmp = dp0;
    dp0 = Math.max(dp0, dp1);
    dp1 = tmp + nums[i];
  }

  return Math.max(dp0, dp1);
}
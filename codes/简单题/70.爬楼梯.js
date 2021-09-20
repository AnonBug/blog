let climbStairs = n => {
  /* 
    直接动态规划解法：

    定义：dp[i] 为爬到第 i 阶楼梯的方法数

    初始化：
      - dp[0] = 0
      - dp[1] = 1
      - dp[2] = 2

    状态转移：
      dp[i] = dp[i - 1] + dp[i - 2]
    
    答案：dp[n]
  */

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
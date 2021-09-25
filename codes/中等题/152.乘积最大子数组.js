let maxProduct = nums => {
  const len = nums.length;

  /* 
    动态规划
    定义：
      dp[i][0]: 以 nums[i] 结尾的子数组最大乘积（正值）
      dp[i][1]: 以 nums[i] 结尾的子数组最小乘积（负值）

    初始化：
      dp[0][0] = nums[0]
      dp[0][1] = nums[0]
    
    状态转移：
      if (nums[i] > 0) 
        - dp[i][0] = Math.max(dp[i - 1][0] * nums[i], nums[i])
        - dp[i][1] = Math.min(dp[i - 1][1] * nums[i], nums[i])
      else if (nums[i] < 0)
        - dp[i][0] = Math.max(dp[i - 1][1] * nums[i], nums[i])
        - dp[i][1] = Math.min(dp[i - 1][0] * nums[i], nums[i])
      else 
        - dp[i][0] = dp[i][1] = 0

      答案：
        Math.max(...dp[i][0])
  */

  const dp = new Array(len).fill(0).map(_ => new Array());

  dp[0][0] = dp[0][1] = nums[0];

  for (let i = 1; i < len; i++) {
    if (nums[i] > 0) {
      dp[i][0] = Math.max(dp[i - 1][0] * nums[i], nums[i]);
      dp[i][1] = Math.min(dp[i - 1][1] * nums[i], nums[i]);
    } else if (nums[i] < 0) {
      dp[i][0] = Math.max(dp[i - 1][1] * nums[i], nums[i]);
      dp[i][1] = Math.min(dp[i - 1][0] * nums[i], nums[i]);
    } else {
      dp[i][0] = dp[i][1] = 0;
    }
  }

  return dp.reduce((pre, next) => Math.max(pre, next[0]), Number.MIN_SAFE_INTEGER);
}
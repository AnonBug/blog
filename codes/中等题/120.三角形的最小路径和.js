// 动态规划
let minimumTotal = triangle => {
  const len = triangle.length;

  /* 
    定义：dp[i][j]: i 行 j 列位置到达底部的最小值

    初始化：
      dp[len - 1][j] = triangle[len - 1][j]

    状态转移：
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]

    答案：
      dp[0][0]
  */

  const dp = new Array(len).fill(0).map((item, index) => new Array(index + 1).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i < len; i++) {
    dp[len - 1][i] = triangle[len - 1][i];
  }

  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    }
  }

  return dp[0][0];
}

// 深搜
minimumTotal = triangle => {
  let res = Number.MAX_SAFE_INTEGER;

  const fn = (i, j, total) => {
    total += triangle[i][j];

    if (i === triangle.length - 1) {
      return res = Math.min(res, total);
    }

    fn(i + 1, j, total);
    fn(i + 1, j + 1, total);
  }

  fn(0, 0, 0);

  return res;
}

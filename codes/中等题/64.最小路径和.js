let minPathSum = grid => {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  dp[m - 1][n - 1] = grid[m - 1][n - 1];

  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = grid[i][n - 1] + dp[i + 1][n - 1];
  }

  for (let j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = grid[m - 1][j] + dp[m - 1][j + 1];
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  return dp[0][0];
}

// 练习一下深搜
minPathSum = grid => {
  const m = grid.length;
  const n = grid[0].length;

  const fn = (i, j, cost) => {
    if (i === m - 1 && j === n - 1) {
      return min = Math.min(min, cost);
    }

    if (j < n - 1) fn(i, j + 1, cost + grid[i][j + 1]);
    if (i < m - 1) fn(i + 1, j, cost + grid[i + 1][j]);
  }

  let min = Number.MAX_SAFE_INTEGER;

  fn(0, 0, grid[0][0]);

  return min;
}
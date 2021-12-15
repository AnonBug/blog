let maximalSquare = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;

  const fn = (i, j) => {
    let size = 1;
    while (i + size <= m - 1 && j + size <= n - 1) {
      let tmpI = i, tmpJ = j;
      for (; tmpI <= i + size; tmpI++) {
        if (matrix[tmpI][j + size] === '0') return size * size;
      }

      for (; tmpJ <= j + size; tmpJ++) {
        if (matrix[i + size][tmpJ] === '0') return size * size;
      }

      size++;
    }

    return size * size;
  } 
  
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        max = Math.max(max, fn(i, j));
      }
    }
  }

  return max;
}

maximalSquare = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;

  /* 
    动态规划定义：
      dp[i][j]: 以 matrix[i][j] 为右下角的最大正方形边长

    初始化：
      dp[0][j] = matrix[0][j] === '1' ? 1 : 0;
      dp[i][0] = matrix[i][0] === '1' ? 1 : 0;

    状态转移：
      dp[i][j] = matrix[i][j] === '0' ? 0 :
        Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1

    答案：
      Math.max(...dp[i][j]) ** 2
  */

  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = matrix[i][0] === '1' ? 1 : 0;
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = matrix[0][j] === '1' ? 1 : 0;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return Math.max(...dp.flat()) ** 2;
}

let res = maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])

console.log(res);
 
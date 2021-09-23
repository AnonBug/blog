// 暴力解法，把第一行到第 rowIndex 行的数全算出来
// O(n^2) 空间复杂度和时间复杂度
let getRow = rowIndex => {
  const res = new Array(rowIndex + 1).fill(0).map(_ => new Array(rowIndex + 1).fill(0));

  for (let i = 0; i <= rowIndex; i++) {
    res[i][0] = 1;
    for (let j = 1; j <= i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }

  return res[rowIndex];
}

// 把空间复杂度降为 O(n) ，就要在同一个数组上操作数据
// 时间复杂度还是需要 O(n^2)
getRow = rowIndex => {
  const res = new Array(rowIndex + 1).fill(0);
  res[0] = 1;

  for (let i = 1; i <= rowIndex; i++) {
    // 从后向前算，以避免在计算下一层时，上一层的相关数据被改变
    for (let j = i; j > 0; j--) {
      res[j] = res[j - 1] + res[j];
    }
  }

  return res;
}

let rotate = matrix => {
  // 旋转后，元素 [i, j] => [j, n - 1 - i]
  const n = matrix.length;
  const newMatrix = new Array(n).fill(0).map(_ => new Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[j][n - 1 - i] = matrix[i][j]
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = newMatrix[i][j];
    }
  }
}

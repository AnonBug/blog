let spiralOrder = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;

  const marked = new Array(m).fill(0).map(_ => new Array(n).fill(false));

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  let row = 0, col = 0, idx = 0;
  const res = [];
  
  for (let k = 0; k < m * n; k++) {
    res.push(matrix[row][col]);
    marked[row][col] = true;

    let nextRow = directions[idx][0] + row;
    let nextCol = directions[idx][1] + col;
    if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || marked[nextRow][nextCol]) {
      idx = (idx + 1) % 4;
    }

    row += directions[idx][0];
    col += directions[idx][1];
  }

  return res;
}

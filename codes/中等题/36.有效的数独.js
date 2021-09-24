let isValidSudoku = board => {
  const map = new Map();
  for (let i = 0; i < 9; i++) {
    map.set(`row-${i}`, new Set());
    map.set(`col-${i}`, new Set());
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      map.set(`grid-${i}-${j}`, new Set());
    }
  }

  const getGrid = (i, j) => {
    return `grid-${Math.floor(i / 3)}-${Math.floor(j / 3)}`
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j];

      if (item === '.') continue;

      if (map.get(`row-${i}`).has(item)) return false;
      if (map.get(`col-${j}`).has(item)) return false;
      if (map.get(getGrid(i, j)).has(item)) return false;

      map.get(`row-${i}`).add(item);
      map.get(`col-${j}`).add(item);
      map.get(getGrid(i, j)).add(item);
    }
  }

  return true;
}

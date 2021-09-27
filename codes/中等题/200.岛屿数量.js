let numIslands = grid => {
  const m = grid.length;
  const n = grid[0].length;

  const uf = new UnionFind(m * n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') continue;


      let curIdx = i * n + j;
      uf.init(curIdx);
      // 向右连接
      if (j < n - 1 && grid[i][j + 1] === '1') {
        uf.union(curIdx, curIdx + 1);
      }

      // 向下连接
      if (i < m - 1 && grid[i + 1][j] === '1') {
        uf.union(curIdx, curIdx + n);
      }
    }
  }

  return uf.count()
}

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map(_ => -1);
    this.rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(x, y) {
    this.init(x);
    this.init(y);

    const parentX = this.find(x);
    const parentY = this.find(y);

    if (parentX === parentY) return;

    let diff = this.rank[parentX] - this.rank[parentY];
    if (diff < 0) {
      this.parent[parentX] = parentY;
    } else if (diff > 0) {
      this.parent[parentY] = parentX;
    } else {
      this.parent[parentX] = parentY;
      this.rank[parentY]++;
    }
  }

  // 初始化集合
  init(x) {
    if (this.parent[x] === -1) {
      this.parent[x] = x;
    }
  }

  // 获取集合个数
  count() {
    let set = new Set();

    for (let item of this.parent) {
      if (item === -1) continue;

      set.add(this.find(item));
    }

    return set.size();
  }
}

// 深搜
numIslands = grid => {
  const fn = (i, j) => {
    grid[i][j] = 0;

    // 向左
    if (j > 0 && grid[i][j - 1] === '1') fn(i, j - 1);
    // 向右
    if (j < n - 1 && grid[i][j + 1] === '1') fn(i, j + 1);
    // 向下
    if (i < m - 1 && grid[i + 1][j] === '1') fn(i + 1, j);
    // 向上
    if (i > 0 && grid[i - 1][j] === '1') fn(i - 1, j);
  }

  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        fn(i, j);
      }
    }
  }

  return count;
}

// 广搜
numIslands = grid => {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        queue.push([i, j]);
        grid[x][y] = '0';

        while (queue.length) {
          const [x, y] = queue.shift();

          grid[x][y] = '0';

          // 向上
          if (x > 0 && grid[x - 1][y] === '1') {
            grid[x - 1][y] = '0';
            queue.push([x - 1, y]);
          }
          // 向下
          if (x < m - 1 && grid[x + 1][y] === '1') {
            grid[x + 1][y] = '0';
            queue.push([x + 1, y]);
          }
          // 向左
          if (y > 0 && grid[x][y - 1] === '1') {
            grid[x][y - 1] = '0';
            queue.push([x, y - 1]);
          }
          // 向右
          if (y < n - 1 && grid[x][y + 1] === '1') {
            grid[x][y + 1] = '0';
            queue.push([x, y + 1]);
          }
        }
      }
    }
  }

  return count;
}
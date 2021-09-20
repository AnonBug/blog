// 第一想法，写一个辅助函数
let maxDepth = root => {
  const fn = (root, depth) => {
    if (!root) return depth;
    
    return Math.max(fn(root.left, depth + 1), fn(root.right, depth + 1));
  }

  return fn(root, 0);
}

// 优化，仔细分析一下，该辅助函数不太需要
// 但同样的，这种优化并不能改变其复杂度本质，优不优化都问题不大
maxDepth = root => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

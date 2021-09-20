// 二叉树遍历的递归实现
let inorderTraversal = root => {
  const res = [];

  const fn = root => {
    if (!root) return;

    fn(root.left);
    res.push(root.val);
    fn(root.right);
  }

  fn(root);

  return res;
}

// 二叉树遍历的迭代实现
inorderTraversal = root => {
  const res = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
}

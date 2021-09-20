// 二叉树问题，最常用的递归思路，就是把父命题的结论套到子问题上
let isSymmetric = root => {
  const fn = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return left.val === right.val && fn(left.left, right.right) && fn(left.right, right.left);
  }

  if (!root) return true;

  return fn(root.left, root.right);
}

// 迭代法
isSymmetric = root => {
  /* 
    使用迭代法处理二叉树，考察对调用栈的手动维护。
    个人感觉，迭代方法比递归方法更难掌握。
  */
  const stack = [];

  if (!root) return true;

  stack.push(root.left);
  stack.push(root.right);

  while (stack.length) {
    const left = stack.shift();
    const right = stack.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    stack.push(left.left);
    stack.push(right.right);

    stack.push(left.right);
    stack.push(right.left);
  }

  return true;
}

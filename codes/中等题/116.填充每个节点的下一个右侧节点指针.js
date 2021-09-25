// 先用层序遍历搞起来
let connect = root => {
  if (!root) return root;
  const queue = [];

  queue.push(root);
  queue.push('-')

  let pre;
  while (queue.length) {
    const item = queue.shift();
    if (item === '-') {
      pre.next = null;
      pre = null;
      if (queue.length) {
        queue.push('-');
      }
      continue;
    }

    if (!pre) {
      pre = item;
    } else {
      pre.next = item;
      pre = item;
    }

    if (item.left) {
      queue.push(item.left);
      queue.push(item.right);
    }
  }
}

// 使用递归
connect = root => {
  const fn = (lTree, rTree) => {
    if (!lTree) return;

    lTree.next = rTree;
    rTree.next = null;

    fn(lTree.left, lTree.right);
    fn(lTree.right, rTree.left);
    fn(rTree.left, rTree.right);
  }

  if (!root) return root;

  root.next = null;
  fn(root.left, root.right);

  return root;
}

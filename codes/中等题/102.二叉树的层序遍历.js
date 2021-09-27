let levelOrder = root => {
  const res = [];
  const queue = [];
  let level = 0;

  if (root) {
    queue.push(root);
    queue.push('-');
    res[level] = [];
  }
  
  while (queue.length) {
    const item = queue.shift();

    if (item === '-') {
      if (queue.length) {
        level++;
        queue.push('-');
        res[level] = [];
      }
      continue;
    }

    res[level].push(item.val);

    if (item.left) queue.push(item.left);
    if (item.right) queue.push(item.right);
  }

  return res;
}

module.exports = {levelOrder}
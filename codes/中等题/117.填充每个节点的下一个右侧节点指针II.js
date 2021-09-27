let connect = root => {
  const fn = (left, right) => {
    if (!left && !right) return;
    if (!left) return fn(right);
    if (!right) return fn(left);

    let queue = [left.left, left.right, right.left, right.right];

    let pre, next;
    for (let i = 0; i < 4; i++) {
      if (!queue[i]) continue;
      if (!pre) pre = queue[i];
      else {
        fn(pre, next);
        pre = next;
        next = null;
      }
    }

    fn(pre);
  }

  fn(root);
  return root;
}

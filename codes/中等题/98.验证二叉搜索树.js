let isValidBST = root => {
  const fn = (root, lower, upper) => {
    if (!root) return true;

    if (root.val <= lower || root.val >= upper) return false;

    return fn(root.left, lower, root.val) && fn(root.right, root.val, upper);
  }

  return fn(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

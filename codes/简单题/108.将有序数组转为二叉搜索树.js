let sortedArrayToBST = nums => {
  const fn = (left, right) => {
    if (left > right) return null;
    if (left === right) return new TreeNode(nums[left]);

    // 使用二分法寻找根节点
    const mid = left + Math.floor((right - left) / 2);

    const root = new TreeNode(nums[mid]);
    root.left = fn(left, mid - 1);
    root.right = fn(mid + 1, right);

    return root;
  }

  return fn(0, nums.length - 1);
}

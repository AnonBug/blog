let searchRange = (nums, target) => {
  const len = nums.length;

  // 该函数能够获取最左侧的边界
  const getBoundary = (left, right, isLeft) => {
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        let newMid;
        if (isLeft) {
          newMid = getBoundary(left, mid - 1, true);
        } else {
          newMid = getBoundary(mid + 1, right, false);
        }
        return newMid === -1 ? mid : newMid;
      }

      if (nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }

    return -1;
  }

  let left = 0, right = len - 1;
  return [getBoundary(left, right, true), getBoundary(left, right, false)];
}

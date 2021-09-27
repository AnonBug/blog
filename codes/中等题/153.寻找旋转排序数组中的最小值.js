let findMin = nums => {
  const len = nums.length;

  let left = 0, right = len - 1;

  // 这表示没有旋转
  if (nums[left] < nums[right]) return nums[left];

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
}
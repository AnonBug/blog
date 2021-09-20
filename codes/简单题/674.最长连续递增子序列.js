let findLengthOfLCIS = nums => {
  const len = nums.length;

  let max = 1;
  let i = 0;

  while (i < len) {
    let count = 1;
    for (i++; i < len; i++) {
      if (nums[i] <= nums[i - 1]) break;
      count++;
    }

    max = Math.max(max, count);
  }

  return max;
}
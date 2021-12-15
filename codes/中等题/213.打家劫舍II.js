let rob = nums => {
  const len = nums.length;

  const fn = (start, end) => {
    if (start > end) return 0;

    let dp0 = 0;
    let dp1 = nums[start];

    for (let i = start + 1; i <= end; i++) {
      const tmp = dp0;
      dp0 = Math.max(dp0, dp1);
      dp1 = tmp + nums[i];
    }

    return Math.max(dp0, dp1);
  }

  return Math.max(fn(0, len - 2), (1, len - 1));
}
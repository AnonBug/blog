let minSubArrayLen = (target, nums) => {
  const len = nums.length;
  let res = Number.MAX_SAFE_INTEGER;

  let left = 0, right = 0;
  let tmp = nums[0];
  while (right < len) {
    while (tmp < target && right < len - 1) {
      tmp += nums[++right];
    }

    if (tmp < target) break;

    while (tmp >= target && left <= right) {
      res = Math.min(res, right - left + 1);
      if (res === 1) return 1;

      tmp -= nums[left++];
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}

let res = minSubArrayLen(4, [1, 4, 4])

console.log(res);
let threeSumClosest = (nums, target) => {
  const len = nums.length;

  nums.sort((a, b) => a - b);

  const removeLeft = left => {
    let num = nums[left++];

    while (nums[left] === num) left++;
    return left;
  }

  const removeRight = right => {
    let num = nums[right--];

    while (nums[right] === num) right--;
    return right;
  }

  let min = Number.MAX_SAFE_INTEGER;
  let res = 0;

  let pre;
  for (let i = 0; i < len - 2; i++) {
    let iNum = nums[i];
    if (iNum === pre) continue;

    let left = i + 1, right = len - 1;
    while (left < right) {
      let diff = iNum + nums[left] + nums[right] - target;
      if (Math.abs(diff) < min) {
        min = Math.abs(diff);
        res = iNum + nums[left] + nums[right];
      }

      if (diff > 0) {
        right = removeRight(right);
      } else if (diff < 0) {
        left = removeLeft(left);
      } else {
        return target;
      }
    }
  }

  return res;
}

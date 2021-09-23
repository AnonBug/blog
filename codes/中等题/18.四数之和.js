let fourSum = (nums, target) => {
  const len = nums.length;

  nums.sort((a, b) => a - b);

  const res = [];

  const removeLeft = left => {
    let item = nums[left++];
    while (item === nums[left]) left++;
    return left;
  }

  const removeRight = right => {
    let item = nums[right--];
    while (item === nums[right]) right--;
    return right;
  }

  let preA;
  for (let a = 0; a < len - 3; a++) {
    if (preA === nums[a]) continue;
    preA = nums[a];

    let preB;
    for (let b = a + 1; b < len - 2; b++) {
      if (preB === nums[b]) continue;
      preB = nums[b];

      let c = b + 1, d = len - 1;
      while (c < d) {
        let diff = nums[a] + nums[b] + nums[c] + nums[d] - target;

        if (diff === 0) {
          res.push([nums[a], nums[b], nums[c], nums[d]]);
          c = removeLeft(c);
          d = removeRight(d);
        } else if (diff < 0) {
          c = removeLeft(c);
        } else {
          d = removeRight(d);
        }
      }
    }
  }

  return res;
}

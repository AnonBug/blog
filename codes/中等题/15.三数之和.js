let threeSum = nums => {
  const len = nums.length;
  const res = [];
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

  let pre;
  for (let i = 0; i < len - 2; i++) {
    const iNum = nums[i];
    if (iNum === pre) continue;

    if (iNum > 0) break;

    pre = iNum;

    let left = i + 1, right = len - 1;
    while (left < right && nums[right] >= 0) {
      let diff = nums[left] + nums[right] + iNum;

      if (diff < 0) {
        left = removeLeft(left);
      } else if (diff > 0) {
        right = removeRight(right);
      } else {
        res.push([iNum, nums[left], nums[right]]);
        left = removeLeft(left);
        right = removeRight(right);
      }
    }
  }

  return res;
}

let res = threeSum([-1, 0, 1, 2, -1, -4])

console.log(res);
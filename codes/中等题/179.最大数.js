let largestNumber = nums => {
  const large = (a, b) => {
    return parseInt(nums[a] + nums[b]) > parseInt(nums[b] + nums[a])
  }

  const exch = (a, b) => {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }

  const partition = (start, end) => {
    let left = start, right = end + 1;

    while (true) {
      while (large(++left, start)) {
        if (left >= end) break;
      }

      while (large(start, --right)) {
        if (right <= start) break;
      }

      if (left >= right) break;

      exch(left, right);
    }

    exch(start, right);
    return right;
  }

  const sort = (start, end) => {
    if (start >= end) return;

    const k = partition(start, end);

    sort(start, k - 1);
    sort(k + 1, end);
  }

  nums = nums.map(num => num + '');

  sort(0, nums.length - 1);

  return nums.join('');
}

// let res = largestNumber([3, 32, 34, 30, 335])
let res = largestNumber([3, 30, 32, 5, 9, 34])

console.log(res);
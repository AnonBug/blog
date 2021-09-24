let nextPermutation = nums => {
  const len = nums.length;

  const exch = (x, y) => {
    [nums[x], nums[y]] = [nums[y], nums[x]];
  }

  // 找到需要调整的索引点
  let split = len - 2;
  for (; split >= 0; split--) {
    if (nums[split] < nums[split + 1]) {
      break;
    }
  }

  // 如果存在更大排列，则交换较大值
  if (split >= 0) {
    for (let i = len - 1; i > split; i--) {
      if (nums[i] > nums[split]) {
        exch(i, split)
        break;
      }
    }
  }

  // 对剩余元素是降序排列，将其改为升序（根据特点，不用常规排序方法）
  // 这个解法刚好兼容了不存在更大排列的问题（此时 split === -1，执行时等于把整个数组反转）
  let left = split + 1, right = len - 1;
  while (left < right) {
    exch(left++, right--);
  }
}
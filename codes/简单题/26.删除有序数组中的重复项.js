const removeDuplicates = nums => {
  let current = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[current]) {
      nums[++current] = nums[i];
    }
  }

  return current + 1;
}
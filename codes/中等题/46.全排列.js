let permute = nums => {
  const len = nums.length;

  const fn = (count) => {
    if (count === len) return res.push([...tmp]);

    for (let i = 0; i < len; i++) {
      if (!marked[i]) {
        marked[i] = true;
        tmp.push(nums[i]);
        fn(count + 1);
        tmp.pop();
        marked[i] = false;
      }
    }
  }

  const res = [];

  const marked = new Array(len).fill(false);
  const tmp = [];
  for (let i = 0; i < len; i++) {
    marked[i] = true;
    tmp.push(nums[i])
    fn(1);
    tmp.pop();
    marked[i] = false;
  }

  return res;
}

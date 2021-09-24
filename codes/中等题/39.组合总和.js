let combinationSum = (candidates, target) => {
  const len = candidates.length;
  candidates.sort((a, b) => a - b);

  const res = [];
  const fn = (arr, index, target) => {
    if (target < 0) return;
    if (target === 0) return res.push([...arr]);

    for (let i = index; i < len; i++) {
      if (target < candidates[i]) break;

      fn([...arr, candidates[i]], i, target - candidates[i]);
    }
  }

  for (let i = 0; i < len; i++) {
    fn([candidates[i]], i,  target - candidates[i]);
  }

  return res;
}

// 空间优化版
combinationSum = (candidates, target) => {
  const len = candidates.length;
  candidates.sort((a, b) => a - b);

  const res = [];
  const fn = (arr, index, target) => {
    if (target < 0) return;
    if (target === 0) return res.push([...arr]);

    for (let i = index; i < len; i++) {
      if (target < candidates[i]) break;
      // 维护过程变量
      tmp.push(candidates[i])
      fn(tmp, i, target - candidates[i]);
      // 维护过程变量
      tmp.pop();
    }
  }

  // 使用一个数组空间来存储过程变量
  let tmp = [];
  for (let i = 0; i < len; i++) {
    // 维护过程变量
    tmp.push(candidates[i]);
    fn(tmp, i,  target - candidates[i]);
    // 维护过程变量
    tmp.pop();
  }

  return res;
};
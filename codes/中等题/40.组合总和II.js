let combinationSum2 = (candidates, target) => {
  const len = candidates.length;
  candidates.sort((a, b) => a - b);

  const fn = (arr, index, target) => {
    if (target === 0) return res.push([...arr]);
    if (index === len) return;
    if (target < 0) return;

    let pre;
    for (let i = index; i < len; i++) {
      if (pre === candidates[i]) continue;
      pre = candidates[i];
      
      if (candidates[i] > target) break;

      fn([...arr, candidates[i]], i + 1, target - candidates[i]);
    }
  }

  const res = [];
  let pre;
  for (let i = 0; i < len; i++) {
    if (pre === candidates[i]) continue;
    pre = candidates[i];

    fn([candidates[i]], i + 1, target - candidates[i]);
  }

  return res;
}

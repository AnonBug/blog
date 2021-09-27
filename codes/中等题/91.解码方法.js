let numDecodings = s => {
  const len = s.length;

  /* 
    动态规划定义：
      dp[i]: 以 s[i] 结尾的字符串的解码数

    初始化：
      dp[0] = s[0] === '0' ? 0 : 1;
      dp[1] = s[1] === '0' ? 0 : dp[0] + 
    
    状态转移：
      dp[i] += 
        s[i] === '0' ? 0 : dp[i - 1]
        +
        s[i - 1] + s[i] > '26' ? 0 : dp[i - 2]

    答案：
      dp[len - 1]
  */

  const dp = new Array(len).fill(0);

  const fn = x => {
    return s[x] !== '0';
  }

  const fn2 = (x, y) => {
    if (!fn(x)) return false;

    return Number(s[x] + s[y]) <= 26;
  }

  if (len === 1) return fn(0) ? 1 : 0;

  dp[0] = fn(0) ? 1 : 0;
  dp[1] = (fn2(0, 1) ? 1 : 0) + (fn(1) ? dp[0] : 0);

  for (let i = 2; i < len; i++) {
    if (fn(i)) dp[i] += dp[i - 1];
    if (fn2(i - 1, i)) dp[i] += dp[i - 2];
  }

  return dp[len - 1];
}

let res = numDecodings('12')

console.log(res);
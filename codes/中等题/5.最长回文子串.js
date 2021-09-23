/* 
  暴力解法：
    以每个元素为中心，向外扩展，如果左右元素相等，就再往外扩。
  
  问题：
    本解法未能考虑到 ‘abbc’ 的 ‘bb’ 情况。
    即该解法是以单个元素为中心外扩，忽略了双元素中心的问题
  
  打补丁：
    想了半天，也没有更优雅的扩展思路，只能增加条件判断和循环了
*/
let longestPalindrome = s => {
  const len = s.length;

  let res = s[0];
  for (let i = 0; i < len - 1; i++) {
    let tmp = s[i];
    for (let j = 1; i - j >= 0 && i + j < len; j++) {
      if (s[i - j] !== s[i + j]) break;
      tmp = s[i - j] + tmp + s[i + j];

      if (tmp.length > res.length) {
        res = tmp;
      }
    }

    // 考虑双数中心的问题
    if (s[i] === s[i + 1]) {
      tmp = s[i] + s[i];
      if (tmp.length > res.length) {
        res = tmp;
      }

      for (let j = 1; i - j >= 0 && i + j + 1 < len; j++) {
        if (s[i - j] !== s[i + j + 1]) break;
        tmp = s[i - j] + tmp + s[i + j + 1];
  
        if (tmp.length > res.length) {
          res = tmp;
        }
      }
    }
  }

  return res;
}

// 动态规划解法
longestPalindrome = s => {
  /* 
    定义：dp[i][j] 表示 i 到 j 是否为回文子串

    初始化：
      单中心：dp[i][i] = true;
      双中心：dp[i][i + 1] = s[i] === s[i + 1];

    状态转移：
      dp[x][y] = dp[x + 1][y - 1] && s[x] === s[y]
    
    答案：
      Math.max(...dp[i][j] === true)
  */

  const len = s.length;
  if (len < 2) return s;

  const dp = new Array(len).fill(0).map(_ => new Array(len).fill(false));
  let left = 0;
  let right = 0;

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  // 最外层循环目标是子串长度
  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      let j = i + L - 1;
      if (j >= len) break;

      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else if (L <= 3) {
        dp[i][j] = true;
      } else {
        dp[i][j] = dp[i + 1][j - 1]
      }

      if (dp[i][j] && j - i > right - left) {
        [left, right] = [i, j];
      }
    }
  }

  return s.subString(left, right + 1);
}

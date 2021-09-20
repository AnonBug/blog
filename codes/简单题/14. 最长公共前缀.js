const longestCommonPrefix = strs => {
  const firstStr = strs[0];

  let res = '';
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== firstStr[i]) {
        return res;
      }
    }

    res += firstStr[i];
  }

  return res;
}
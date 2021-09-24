let groupAnagrams = strs => {
  const len = strs.length;
  
  const map = new Map();

  // 获取单个单词的组词特征
  const getFeat = str => {
    const arr = new Array(26).fill(0);

    for (let char of str) {
      arr[char.charCodeAt() - 'a'.charCodeAt()]++;
    }

    return arr.join('-');
  }

  for (let str of strs) {
    let feat = getFeat(str);
    if (map.has(feat)) {
      map.get(feat).push(str);
    } else {
      map.set(feat, [str]);
    }
  }

  const res = [];
  for (let value of map.values()) {
    res.push(value);
  }

  return res;
}

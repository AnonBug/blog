let singleNumber = nums => {
  const map = new Map();

  // 遍历
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, true);
    } else if (map.get(num)){
      map.set(num, false);
    }
  }

  for (let [key, val] of map.entries()) {
    if (val) return key;
  }
}

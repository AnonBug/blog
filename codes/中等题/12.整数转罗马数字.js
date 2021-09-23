let intToRoman = num => {
  // 不同级别对应的值
  const map = [['I','V'], ['X', 'L'], ['C', 'D'], ['M']];

  // 根据级别，获取数字对应的罗马表示
  const fn = (num, level) => {
    let tmp = '';
    if (num === 9) {
      tmp = map[level][0] + map[level + 1][0];
    } else if (num === 4) {
      tmp = map[level][0] + map[level][1];
    } else {
      if (num >= 5) {
        tmp += map[level][1];
      }

      num = num % 5;
      while (num) {
        tmp += map[level][0];
        num--;
      }
    }

    return tmp;
  }

  let level = 0;
  let res = '';

  while (num) {
    res = fn(num % 10, level++) + res;
    num = Math.floor(num / 10);
  }

  return res;
}


let res = intToRoman(1994);
console.log(res);
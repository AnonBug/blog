let letterCombinations = digits => {
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const mixin = digit => {
    if (!res.length) {
      res = map[digit].split('');
      return;
    }

    res = res.map(item => {
      let tmp = [];
      for (let char of map[digit]) {
        tmp.push(item + char);
      }
      return tmp;
    }).flat();
  }

  let res = [];

  for (let i = 0; i < digits.length; i++) {
    mixin(digits[i]);
  }

  return res;
}

// 使用回溯法
letterCombinations = digits => {
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const len = digits.length;
  const res = [];
  if (!len) return res;


  const fn = (index, tmp) => {
    if (index === len) {
      res.push(tmp);
      return;
    }

    let letters = map[digits[index]]
    for (let char of letters) {
      tmp += char;
      fn(index + 1, tmp);
      tmp = tmp.substring(0, tmp.length - 1);
    }
  }

  fn(0, '');
  return res;
}

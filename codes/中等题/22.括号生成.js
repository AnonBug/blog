let generateParenthesis = n => {
  const res = [];

  const fn = (lNum, rNum, str) => {
    if (lNum === 0 && rNum === 1) {
      str += ')';
      res.push(str);
      return;
    }

    if (lNum > 0) fn(lNum - 1, rNum, str + '(');
    if (rNum > 1 && lNum < rNum) fn(lNum, rNum - 1, str + ')');
  }

  fn(n - 1, n, '(');
  return res;
}

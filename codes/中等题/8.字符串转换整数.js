let myAtoi = s => {
  let flag = 1;
  let i = 0;
  let num = 0;

  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = (-2) ** 31;

  while (s[i] === ' ') i++;

  if (s[i] === '+' || s[i] === '-') {
    flag = s[i] === '+' ? 1 : -1;
    i++;
  }

  while (i < s.length && Number.isInteger(parseInt(s[i]))) {
    num = num * 10 + Number.parseInt(s[i]);

    if (flag === 1 && num >= MAX_INT)  {
      return MAX_INT;
    } else if (flag === -1 && flag * num <= MIN_INT) {
      return MIN_INT;
    }

    i++;
  }

  return flag * num;
}

let res = myAtoi('+1')
console.log(res);

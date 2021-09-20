let plusOne = digits => {
  let decade = 1;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    const newNum = digits[i] + decade;

    if (newNum > 10) {
      digits[i] = newNum % 10;
      decade = 1;
    } else {
      decade = 0;
      break;
    }
  }

  if (decade) digits.unshift(decade);

  return digits;
}

// 上面写得有点啰嗦，仔细想想，很多写法上还可以优化
// 不过这种优化，改变不了该解法 O(n) 时间复杂度的本质
plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const newNum = digits[i] + 1;

    digits[i] = newNum % 10;

    if (newNum < 10) return digits;
  }

  return [1, ...digits];
};

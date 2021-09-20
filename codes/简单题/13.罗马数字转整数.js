const romanToInt = s => {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let max = 'I';
  let res = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];

    if (map[char] >= map[max]) {
      res += map[char];
      max = char;
    } else {
      res -= map[char];
    }
  }

  return res;
}
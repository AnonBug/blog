let lengthOfLongestSubstring = s => {
  if (!s) return 0;
  
  let max = 0;
  let pre = 0, tail = 0;
  let set = new Set();

  while (tail < s.length) {
    while (tail < s.length && !set.has(s[tail])) {
      set.add(s[tail++]);
    }

    max = Math.max(max, tail - pre);

    if (tail === s.length) return max;

    while (s[pre] !== s[tail]) {
      set.delete(s[pre++]);
    }
    set.delete(s[pre++]);
  }
}

let res = lengthOfLongestSubstring("abcabcbb")

console.log(res);

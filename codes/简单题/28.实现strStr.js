const strStr = (haystack, needle) => {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    let flag = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }

    if (flag) return i;
  }

  return -1;
}
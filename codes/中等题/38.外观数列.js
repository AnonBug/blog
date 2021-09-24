let countAndSay = n => {
  const sayStr = str => {
    let i = 0; 
    let newStr = '';
    while (i < str.length) {
      let count = 1;
      let char = str[i];
      while (str[++i] === char) {
        count++;
      }
      newStr += '' + count + char;
    }

    return newStr;
  }

  let str = '1';
  for (let i = 1; i < n; i++) {
    str = sayStr(str);
  }

  return str;
}

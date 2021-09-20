/* 
  思路1：转为字符串反转后比大小
  思路2：使用数学方法，通过边除边更新的方法

  难点：
    问题中要求假设环境不支持 64 位的数字存储，使用思路 1 时，如果反转后的数字超了，就没办法和最大值进行比较了。
    所以要使用思路 2；
    且使用思路 2 时，也要注意更新值不能超限，应当在超限前就设定拦截。
*/

const reverse = x => {
  let res = 0;
  const flag = x > 0 ? 1 : -1;
  x *= flag;

  const INT_MAX = 2 ** 31 - 1;

  while (x !== 0) {
    if (res > INT_MAX / 10) return 0;

    const digit = x % 10;
    x = Math.floor(x / 10);
    res = res * 10 + digit;
  }

  return res * flag;
}

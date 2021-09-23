// 先暴力一波
let convert = (s, numRows) => {
  if (numRows === 1) return s;

  const res = new Array(numRows).fill(0).map(_ => []);

  let convertFlag = false;
  let currentRow = 0;

  for (let i = 0; i < s.length; i++) {
    res[currentRow].push(s[i]);

    currentRow = convertFlag ? currentRow - 1 : currentRow + 1;

    if (currentRow === numRows - 1) {
      convertFlag = true;
    } else if (currentRow === 0) {
      convertFlag = false;
    }
  }

  return res.flat().join('');
}

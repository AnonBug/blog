function mergeSort(arr) {
  const len = arr.length;

  // 数组数量小于 2 时，返回原数组
  if (len < 2) return arr;

  // 将数组二等分，并进行归并处理
  const mid = Math.floor(len / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  let idx1 = idx2 = 0;

  const res = [];
  for (let i = 0; i < len1 + len2; i++) {
      if (idx1 === len1) {
          res[i] = arr2[idx2++]
      } else if (idx2 === len2) {
          res[i] = arr1[idx1++]
      } else if (arr1[idx1] <= arr2[idx2]) {
          res[i] = arr1[idx1++]
      } else {
          res[i] = arr2[idx2++]
      }
  }

  return res;
}

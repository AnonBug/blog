let merge = (nums1, m, nums2, n) => {
  /* 
    问题应该算是经典的归并排序中的归并算法部分。

    由于要求合并到 nums1 中，就不太方便使用辅助数组来处理。
    可以用从后向前的方式归并。
  */ 

  let p1 = m - 1;
  let p2 = n - 1;

  for (let k = m + n - 1; k >= 0; k--) {
    if (p1 < 0) {
      nums1[k] = nums2[p2--];
    } else if (p2 < 0) {
      nums1[k] = nums1[p1--];
    } else if (nums1[p1] >= nums2[p2]) {
      nums1[k] = nums1[p1--]
    } else {
      nums1[k] = nums2[p2--]
    }
  }
}
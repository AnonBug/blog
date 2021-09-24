let removeDuplicates = nums => {
  const len = nums.length;

  let pre;
  let count = 0;
  let split = 0;

  for (let i = 0; i < len; i++) {
    if (pre === nums[i]) {
      if (count < 2) {
        count++;
        nums[split++] = nums[i];
      } else {
        continue;
      }
    } else {
      pre = nums[i];
      count = 1;
      nums[split++] = nums[i];
    }
  }
}

let arr = [1,1,1,2,2,3]
let res = removeDuplicates(arr)
console.log(arr);

let search = (nums, target) => {
  const len = nums.length;

  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    // 未跨越旋转点
    if (nums[left] < nums[right]) {
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // 跨越旋转点
      if (target > nums[right]) {
        // 目标值在左半区
        if (nums[mid] > target) {
          right = mid - 1;
        } else {
          right--;
        }
      } else {
        // 目标值在右半区
        if (nums[mid] < target) {
          left = mid + 1;
        } else {
          left++;
        }
      }
    }
  }

  return -1;
}

// 官解中写得更为简洁，通过判断中间值切分出的左右半区情况来更新 lr
search = (nums, target) => {
  const len = nums.length;

  let left = 0, right = len - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[0]) { // 左半区有序
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // 右半区有序
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

let res = search([4,5,6,7,0,1,2], 0)
console.log(res);
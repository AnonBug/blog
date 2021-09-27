let search = (nums, target) => {
  const len = nums.length;

  let left = 0, right = len - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] > nums[0]) { // [left, mid]有序
      if (target > nums[left]) {
        if (target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (target < nums[left]){
        left = mid + 1;
      } else { 
        return true;
      }
    } else if (nums[mid] < nums[len - 1]) { // [mid, right] 有序
      if (target < nums[right]) {
        if (target > nums[mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else if (target > nums[right]) {
        right = mid - 1;
      } else {
        return true;
      }
    } 
    
    if (nums[mid] === nums[left]) left++;
    
    if (nums[mid] === nums[right]) right--;
  }

  return false;
}

let res = search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 2);
console.log(res);
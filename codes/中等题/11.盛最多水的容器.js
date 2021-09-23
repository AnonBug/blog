let maxArea = height => {
  let left = 0, right = height.length - 1;

  let max = 0;

  while (left < right) {
    let tmp = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, tmp);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

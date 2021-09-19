// 暴力解法
let maxSubArray = nums => {

  const len = nums.length;
  let max = nums[0];

  for (let i = 0; i < len; i++) {
    let sum = 0;
    
    for (let j = i; j < len; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }

  return max;
}

// 动态规划
maxSubArray = nums => {
  const len = nums.length;
  /* 
    定义：dp[j] 为从 0 - j 的区间，以 nums[j] 结尾的最大值

    初始化：dp[0] = nums[0];

    状态转移：
      if (dp[j - 1] >= 0) dp[j] = dp[j - 1] + nums[j]
      else dp[j] = nums[j]
    
    答案：
      Math.max(...dp[j]);
  */
  const dp = new Array(len + 1).fill(0);
  let max = dp[0] = nums[0];

  for (let j = 1; j < len; j++) {
    if (dp[j - 1] >= 0) {
      dp[j] = dp[j - 1] + nums[j];
    } else {
      dp[j] = nums[j];
    }

    max = Math.max(max, dp[j])
  }

  return max;
}

// 分治法
maxSubArray = nums => {
  const len = nums.length;
  /* 
    1. 分解子问题：
      把原命题对半拆分，求左右子数组的相关值
    2. 从子问题得到最终解，从子数组中计算一些值，得到父数组的值
      - 因为所求是连续子数组，为子序列情况分类
        - 所以要么包含左边界 lSum
        - 要么包含右边界 rSum
        - 要么不 care（爱含不含，只要最大）mSum
        - 以及整个子数组的和 iSum
      - 父数组根据两个子数组的值，同样维护这四类数据
        - lSum = Math.max(lSon.lSum, lSon.iSum + rSon.lSum)
        - rSum = Math.max(rSon.rSum, rSon.iSum + lSon.rSum)
        - iSum = lSon.iSum + rSon.iSum
        - mSum
          - 父数组的最大值也分情况，一种是跨越子数组分界，一种是未跨越
          - 跨域分界的 = lSon.rSum + rSon.lSum
          - 未跨越分界的 = Math.max(lSon.mSum, rSon.mSum)
          - 上面两数取最值即可
    3. 所求答案即为父数组的 mSum
  */

  // 定义一个函数来维护
  const fn = (left, right) => {
    if (left === right) return {
      lSum: nums[left],
      rSum: nums[left],
      iSum: nums[left],
      mSum: nums[left],
    }

    const mid = left + Math.floor((right - left) / 2);
    const lSon = fn(left, mid);
    const rSon = fn(mid + 1, right);

    const lSum = Math.max(lSon.lSum, lSon.iSum + rSon.lSum);
    const rSum = Math.max(rSon.rSum, rSon.iSum + lSon.rSum);
    const iSum = lSon.iSum + rSon.iSum;
    const mSum = Math.max(Math.max(lSon.mSum, rSon.mSum), lSon.rSum + rSon.lSum);

    return { lSum, rSum, iSum, mSum }
  }

  return fn(0, len - 1).mSum;
}

let res = maxSubArray( [-2,1,-3,4,-1,2,1,-5,4] )
console.log(res);

// 递归 (时间超限)
const canPartition = nums => {
  let len = nums.length, sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) return false
  const computeSum = (index, sum) => {
    if (!sum) return true
    if (sum < 0 || index < 0) return false
    return computeSum(index - 1, sum) || computeSum(index - 1, sum - nums[index])
  }
  return computeSum(len - 1, sum / 2)
}

// 动态规划
const canPartition = nums => {
  let len = nums.length, sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) return false
  sum = sum / 2
  let dp = [[1]]
  for (let i = 1; i <= len; i++) { // 物品序号
    dp[i] = [1]
    let curr = nums[i - 1]
    for (let j = 1; j <= sum; j++) { // 背包容量
      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - curr]
    }
  }
  return !!dp[len][sum]
}

// 动态规划 (数组降维)
const canPartition = nums => {
  let len = nums.length, sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) return false
  sum = sum / 2
  let dp = [1]
  for (let i = 1; i <= len; i++) { // 物品序号
    let curr = nums[i - 1]
    for (let j = sum; j >= curr; j--) { // 背包容量
      dp[j] = dp[j] || dp[j - curr]
    }
    if (dp[sum]) return true
  }
  return !!dp[sum]
}
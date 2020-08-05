// 动态规划 (效率极低)
const combinationSum4 = (nums, target) => {
  if (!target) return 0
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for (let j = num; j <= target; j++) {
      let sum = 0
      for (let k = i; k >= 0; k--) {
        if (nums[k] > j) continue
        sum += dp[j - nums[k]]
      }
      dp[j] = sum
    }
  }
  return dp[target]
}
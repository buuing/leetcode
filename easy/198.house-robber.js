// 记忆化递归 (leetcode 测试用例可以通过, 提交答案不行)
const dp = []
const rob = (nums, index = 0) => {
  if (index >= nums.length) return 0
  if (index === nums.length - 1) return nums[index]
  if (!dp[index]) {
    dp[index] = Math.max(
      nums[index] + rob(nums, index + 2),
      nums[index + 1] + rob(nums, index + 3)
    )
  }
  return dp[index]
}

// 动态规划 (效率较低)
const rob = nums => {
  if (!nums.length) return 0
  const dp = []
  for (let i = nums.length - 1; i >= 0; i--) {
    dp[i] = Math.max(
      nums[i] + ~~dp[i + 2], ~~nums[i + 1] + ~~dp[i + 3]
    )
  }
  return dp[0]
}

// 动态规划
const rob = nums => {
  const dp = [0, nums[0]], len = nums.length
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }
  return dp[len]
}

// 拆分成两个单列 (效率较低)
const rob = nums => {
  if (nums.length === 1) return nums[0]
  const _rob = nums => {
    const dp = [0, nums[0]], len = nums.length
    for(let i = 2; i <= len; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    console.log(JSON.stringify(dp))
    return dp[len]
  }
  return Math.max(
    _rob(nums.slice(1,)),
    _rob(nums.slice(0, nums.length - 1))
  )
}

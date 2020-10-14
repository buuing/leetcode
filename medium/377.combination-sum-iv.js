// 回溯算法 (超时了)
const combinationSum4 = (nums, target) => {
  if (!target) return 0
  let res = 0
  nums.sort((a, b) => a - b)
  const dfs = (target) => {
    for (let i = 0; i < nums.length; i++) {
      let next = target - nums[i]
      if (next < 0) return false
      else if (next === 0) return res++
      else dfs(next)
    }
  }
  dfs(target)
  return res
}

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

// 记忆化搜索 (效率一般)
const combinationSum4 = (nums, target) => {
  const memo = new Array(target + 1)
  memo[0] = 1
  nums.sort((a, b) => a - b)
  const dfs = target => {
    if (memo[target] === undefined) {
      let sum = 0
      for (let num of nums) {
        if (target < num) break
        sum += dfs(target - num)
      }
      memo[target] = sum
    }
    return memo[target]
  }
  return dfs(target)
}

// 动态规划 (由记忆化搜索推导得出)
const combinationSum4 = (nums, target) => {
  const dp = [1]
  nums.sort((a, b) => a - b)
  for (let i = 1; i <= target; i++) {
    dp[i] = 0
    for (let num of nums) {
      if (i < num) break
      dp[i] += dp[i - num]
    }
  }
  return dp[target]
}

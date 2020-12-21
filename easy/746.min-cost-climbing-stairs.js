// 记忆化递归
const minCostClimbingStairs = cost => {
  cost.push(0)
  const memo = []
  const dfs = (index) => {
    if (index < 0) return 0
    if (!memo[index]) {
      memo[index] = Math.min(
        dfs(index - 1) + ~~cost[index - 1],
        dfs(index - 2) + ~~cost[index - 2]
      )
    }
    return memo[index]
  }
  dfs(cost.length - 1)
  return memo[cost.length - 1]
}

// 动态规划
const minCostClimbingStairs = cost => {
  cost.push(0)
  const dp = []
  for (let i = 0; i < cost.length; i++) {
    dp[i] = Math.min(
      ~~dp[i - 1] + ~~cost[i - 1],
      ~~dp[i - 2] + ~~cost[i - 2]
    )
  }
  return dp[cost.length - 1]
}

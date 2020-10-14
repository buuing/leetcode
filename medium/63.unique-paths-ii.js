// 动态规划 (根据无障碍版优化)
const uniquePathsWithObstacles = grid => {
  if (!grid.length || !grid[0].length) return 0
  let m = grid.length, n = grid[0].length, dp = []
  for (let i = 0; i < n; i++) {
    let obstacle = grid[0].slice(0, i + 1).indexOf(1) > -1
    dp[i] = +!obstacle
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curr = grid[i][j]
      if (curr) dp[j] = 0
      else {
        dp[j] += ~~dp[j - 1]
      }
    }
  }
  return dp[n - 1]
}

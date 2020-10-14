
// 记忆化迭代
let dp = [0, 1, 1]
const integerBreak = n => {
  if (!dp[n]) {
    let max = 0
    for (let i = 1; i < n; i++) {
      max = Math.max(n < 8 ? i * (n - i) : i * integerBreak(n - i), max)
    }
    dp[n] = max
  }
  return dp[n]
}

// 动态规划
const integerBreak = n => {
  let dp = [0, 1, 1]
  for (let i = 2; i <= n; i++) {
    let max = 0
    for (let j = 1; j < i; j++) {
      max = Math.max(i < 8 ? j * (i - j) : j * dp[i - j], max)
    }
    dp[i] = max
  }
  return dp[n]
}
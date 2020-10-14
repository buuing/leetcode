// 记忆化递归 (性能极低)
const memo = [0, 1]
const numSquares = n => {
  if (Math.sqrt(n) % 1 === 0) memo[n] = 1
  if (!memo[n]) {
    let min = n
    for (let i = 1; i <= n / 2; i++) {
      min = Math.min(numSquares(i) + numSquares(n - i), min)
    }
    memo[n] = min
  }
  return memo[n]
}

// 动态规划 (性能较低)
const numSquares = n => {
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1
      continue
    }
    let min = i
    for (let j = 1; j <= i / 2; j++) {
      min = Math.min(min, dp[j] + dp[i - j])
    }
    dp[i] = min
  }
  return dp[n]
}

// 动态规划 (别人的思路很优秀, 每次只关心当前平方数, 剩下的数字读dp)
const numSquares = n => {
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    let min = i
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j] + 1)
    }
    dp[i] = min
  }
  return dp[n]
}

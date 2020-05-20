// 动态规划 (性能较低)
const numSquares = n => {
  if (Math.sqrt(n) % 1 === 0) return 1
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1
      continue
    }
    let min = i
    for (let j = 1; j <= i / 2; j++) {
      let curr = dp[j] + dp[i - j]
      if (min > curr) min = curr
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
      let curr = dp[i - j * j] + 1
      if (min > curr) min = curr
    }
    dp[i] = min
  }
  return dp[n]
}

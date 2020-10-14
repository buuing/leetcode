// 记忆化递归
const dp = []
const numDecodings = (s, index = 0) => {
  if (index === s.length) return 1
  if (s[index] === '0') return 0
  if (!dp[index]) {
    if (!dp[index + 1]) dp[index + 1] = numDecodings(s, index + 1)
    let first = dp[index + 1]
    let second = 0
    if (Number(s[index] + s[index + 1]) <= 26) second = dp[index + 2]
    dp[index] = first + second
  }
  return dp[index]
}

// 动态规划
const numDecodings = (s) => {
  const dp = []
  dp[s.length] = 1
  dp[s.length - 1] = 1
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') {
      dp[i] = 0
      continue
    }
    if (!dp[i]) {
      let first = dp[i + 1]
      let second = 0
      if (Number(s[i] + s[i + 1]) <= 26) second = dp[i + 2]
      dp[i] = first + second
    }
  }
  return dp[0]
}
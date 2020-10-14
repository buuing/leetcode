// 动态规划
const maxProfit = prices => {
  const len = prices.length
  if (len < 2) return 0
  const dp = new Array(len + 2).fill(0)
  for (let i = len - 2; i >= 0; i--) {
    let max = dp[i + 1]
    for (let j = i + 1; j < len; j++) {
      max = Math.max(max, prices[j] - prices[i] + dp[j + 2])
    }
    dp[i] = max
  }
  return dp[0]
}
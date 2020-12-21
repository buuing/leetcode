// 动态规划 (竟然超时了! 然后我发现确实还能优化成单循环)
const maxProfit = (prices, fee) => {
  const dp = [0]
  for (let i = 1; i < prices.length; i++) {
    let max = dp[i - 1]
    for (let j = 0; j < i; j++) {
      max = Math.max(
        prices[i] - prices[j] - fee + ~~dp[j - 1],
        max
      )
    }
    dp[i] = max
  }
  return dp[prices.length - 1]
}

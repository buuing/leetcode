// 数组解题, 每次都比较前一次和当前到最小的差值
const maxProfit = prices => {
  if (prices.length < 2) return 0
  let min = prices[0], res = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i+1]) {
      min = Math.min(prices[i], min)
      res = Math.max(res, prices[i+1] - min)
    }
  }
  return res
}

// 动态规划 (效率较低)
const maxProfit = prices => {
  let len = prices.length
  if (len < 2) return 0
  let dp = new Array(len).fill(0)
  for (let i = len - 2; i >= 0; i--) {
    let max = 0
    for (let j = i + 1; j < len; j++) {
      max = Math.max(prices[j] - prices[i], max)
    }
    dp[i] = Math.max(dp[i + 1], max)
  }
  return dp[0]
}


/**
 * 贪心算法-局部最优解
 */
const maxProfit = prices => {
  let s = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i+1]) s += prices[i+1] - prices[i]
  }
  return s
}
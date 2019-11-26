
/**
 * 每次都比较前一次和当前到最小的差值
 */
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
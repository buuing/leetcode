
// 动态规划 (性能极低)
const coinChange = (coins, amount) => {
  if (!amount) return 0
  if (!coins.length) return -1
  let len = coins.length
  let dp = new Array(amount + 1).fill(0)
  for (let coin of coins) {
    let prev = dp.slice()
    for (let j = coin; j <= amount; j++) {
      let arr = []
      if (prev[j]) arr.push(prev[j])
      for (let k = 1; k * coin <= j; k++) {
        let KCoins = k * coin
        if (j - KCoins === 0) arr.push(k)
        if (!prev[j - KCoins]) continue
        arr.push(prev[j - KCoins] + k)
      }
      dp[j] = arr.length ? Math.min(...arr) : 0
    }
  }
  return dp[amount] || -1
}

// 动态规划 (别人的思路永远那么优秀)
const coinChange = (coins, amount) => {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

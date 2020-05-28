
const canPartition = nums => {
  let len = nums.length, sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) return false
  sum = sum / 2
  let dp = [[1]]
  dp[0][nums[0]] = 1
  for (let i = 1; i < len; i++) { // 物品序号
    dp[i] = [1]
    let curr = nums[i]
    for (let j = 1; j <= sum; j++) { // 背包容量
      // console.log(dp[i - 1])
    console.log(JSON.stringify(dp[]))
      console.log(j, curr, dp[i - 1][j - curr])
      dp[i][j] = (dp[i - 1][j] || dp[i - 1][j - curr]) ? 1 : 0
    }
  }
    console.log(JSON.stringify(dp))
  console.log(sum)
  return !!dp[len - 1][sum]
}

console.log(
  canPartition([
    1,2,5
  ])
)

//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
// [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 5
// [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0] // 3
// [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0] // 3


// [
//   [1,1,0,0,0], // 1
//   [1,1,1,1,0], // 2
//   [1,1,1,1,0], // 5
// ]

// 本身是否等于容量
// 本身 + 前一个是否等于容量

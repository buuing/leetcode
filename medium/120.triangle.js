// 动态规划 (时间复杂度为线性)
const minimumTotal = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      arr[i - 1][j] += Math.min(arr[i][j], arr[i][j + 1])
    }
  }
  return arr[0][0]
}

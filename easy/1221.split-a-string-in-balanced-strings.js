// 这道题竟然在贪心的分类下, 差评
const balancedStringSplit = s => {
  let count = 0, sum = 0, map = { L: 1, R: -1 }
  for (let curr of s) {
    sum += map[curr]
    if (sum === 0) count++
  }
  return count
}

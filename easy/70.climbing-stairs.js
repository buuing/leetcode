// 递归 + 记忆化搜索
const map = [0, 1, 2]
const climbStairs = n => {
  if (map[n] === undefined) map[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return map[n]
}

// 动态规划
const climbStairs = n => {
  const map = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    map[i] = map[i - 1] + map[i - 2]
  }
  return map[n]
}

// 迭代
const climbStairs = n => {
  if (n === 1) return 1
  if (n === 2) return 2
  let left = 1, right = 2, res
  for (let i = 3; i <= n; i++) {
    res = left + right
    left = right
    right = res
  }
  return res
}

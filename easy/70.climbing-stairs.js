// 递归 + 记忆化搜索
const map = [0, 1, 2]
const climbStairs = n => {
  if (map[n] === undefined) map[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return map[n]
}

// 动态规划


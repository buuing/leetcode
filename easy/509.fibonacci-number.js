// 暴力递归
const fib = n => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

// 记忆化搜索
const map = [0, 1]
const fib = n => {
  if (map[n] === undefined) map[n] = fib(n - 1) + fib(n - 2)
  return map[n]
}

// 动态规划
const fib = n => {
  const map = [0, 1]
  for (let i = 2; i <= n; i++) {
    map[i] = map[i - 1] + map[i - 2]
  }
  return map[n]
}

// 迭代
const fib = n => {
  if (n === 0) return 0
  if (n === 1) return 1
  let left = 0, right = 1, res
  for (let i = 2; i <= n; i++) {
    res = left + right
    left = right
    right = res
  }
  return res
}
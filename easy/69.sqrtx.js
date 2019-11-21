
/**
 * 使用递归解题
 */
const mySqrt = x => {
  let findNum = (left, right) => {
    if (left > right) return right
    let m = (left + right) / 2 >> 0
    let num = m**2
    if (num === x) return m
    if (num > x) return findNum(left, m - 1)
    if (num < x) return findNum(m + 1, right)
  }
  return findNum(1, x)
}

/**
 * 使用牛顿迭代法解题
 */
const mySqrt = x => {
  let a = x, prev = 0
  while (prev !== (x >> 0)) {
    prev = x >> 0
    x = (x + a / x) / 2
  }
  return prev
}

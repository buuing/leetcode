
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

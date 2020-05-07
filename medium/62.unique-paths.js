// 记忆化递归
const matrix = [[1]]
const uniquePaths = (m, n) => {
  if (n === 1 || m === 1) return 1
  let x = m - 1, y = n - 1
  if (!matrix[x]) matrix[x] = [1]
  if (!matrix[x][y]) matrix[x][y] = x === y
    ? uniquePaths(m, n - 1) * 2
    : uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
  return matrix[x][y]
}

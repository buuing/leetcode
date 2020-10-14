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

// 动态规划
const uniquePaths = (m, n) => {
  const matrix = [new Array(m).fill(1)]
  for (let i = 1; i < n; i++) {
    matrix[i] = [1]
    for (let j = 1; j < m; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
    }
  }
  return matrix[n - 1][m - 1]
}

// 动态规划 (优化版)
const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) return 1
  if (n > m) [m, n] = [n, m]
  const matrix = [new Array(m).fill(1)]
  for (let i = 1; i < n; i++) {
    let val = matrix[i - 1][i] * 2
    matrix[i] = new Array(i + 1).fill(val)
    for (let j = i + 1; j < m; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
    }
  }
  return matrix[n - 1][m - 1]
}

// 动态规划 (终极优化版 - 数组降维)
const uniquePaths = (m, n) => {
  if (m === 1) return 1
  const arr = new Array(m).fill(1)
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      arr[j] += arr[j - 1]
    }
  }
  return arr[m - 1]
}

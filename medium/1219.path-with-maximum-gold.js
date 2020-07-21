// 回溯算法 + dfs
const getMaximumGold = grid => {
  if (!grid.length || !grid[0].length) return 0
  let m = grid.length, n = grid[0].length, max = 0
  const axis = [[0, 1], [1, 0], [-1, 0], [0, -1]],
    memo = new Array(m).fill().map(_ => [])
  const dfs = (i, j, memo, sum) => {
    if (!grid[i][j] || memo[i][j]) return false
    memo[i][j] = 1
    sum += grid[i][j]
    max = Math.max(max, sum)
    for (let k = 0; k < 4; k++) {
      let x = i + axis[k][0], y = j + axis[k][1]
      if (x < 0 || y < 0 || x > m - 1 || y > n - 1) continue
      dfs(x, y, memo, sum)
    }
    sum -= grid[i][j]
    memo[i][j] = 0
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, memo, 0)
    }
  }
  return max
}

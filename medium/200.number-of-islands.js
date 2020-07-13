// 回溯算法 + dfs
const numIslands = grid => {
  let num = 0, m = grid.length
  if (!m) return 0
  let n = grid[0].length
  if (!n) return 0
  let axis = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const dfs = (x, y) => {
    if (x < 0 || x >= m || y < 0 || y >= n) return false
    if (grid[x][y] === '0') return false
    grid[x][y] = '0'
    for (let i = 0; i < 4; i++) {
      dfs(x + axis[i][0], y + axis[i][1])
    }
    return true
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j)) num++
    }
  }
  return num
}
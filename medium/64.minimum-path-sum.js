// 动态规划
const minPathSum = grid => {
  if (!grid.length) return 0
  let m = grid.length - 1; n = grid[0].length - 1
  for (let x = m; x >= 0; x--) {
    for (let y = n; y >= 0; y--) {
      if (x === m && y === n) continue
      else if (x === m) grid[x][y] += grid[x][y + 1]
      else if (y === n) grid[x][y] += grid[x + 1][y]
      else grid[x][y] += Math.min(grid[x + 1][y], grid[x][y + 1])
    }
  }
  return grid[0][0]
}

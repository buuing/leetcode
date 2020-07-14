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

// 队列 + bfs
const numIslands = grid => {
  if (!grid.length || !grid[0].length) return 0
  let num = 0, axis = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  let m = grid.length, n = grid[0].length
  const bfs = (i, j) => {
    if (grid[i][j] === '0') return false
    let queue = [[i, j]]
    while (queue.length) { // 沉岛
      let [x, y] = queue.shift()
      if (grid[x][y] === '0') continue
      grid[x][y] = '0'
      for (let k = 0; k < 4; k++) {
        let x1 = x + axis[k][0], y1 = y + axis[k][1]
        if (x1 >= 0 && y1 >= 0 && x1 < m && y1 < n && grid[x1][y1] === '1') {
          queue.push([x1, y1])
        }
      }
    }
    return true
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (bfs(i, j)) num++
    }
  }
  return num
}
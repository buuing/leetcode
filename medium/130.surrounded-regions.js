// 回溯算法 + dfs
const solve = board => {
  if (!board.length || !board[0].length) return board
  let m = board.length, n = board[0].length
  let axis = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const dfs = (x, y, arr) => {
    if (x < 0 || y < 0 || x >= m || y >= n) return false
    if (board[x][y] === 'X') return false
    if (x === 0 || y === 0 || x === m - 1 || y === n - 1) return true
    arr.push([x, y])
    board[x][y] = 'X'
    let flag = 0
    for (let i = 0; i < 4; i++) {
      flag += dfs(x + axis[i][0], y + axis[i][1], arr)
    }
    return flag
  }
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === 'X') continue
      let arr = []
      let flag = dfs(i, j, arr)
      if (!flag) continue
      while (arr.length) {
        let [x, y] = arr.shift()
        board[x][y] = 'O'
      }
    }
  }
  return board
}

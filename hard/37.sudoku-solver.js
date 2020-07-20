// 回溯算法 + dfs
const solveSudoku = board => {
  const getNums = (i, j) => {
    let set = new Set('.')
    let x = (i / 3 >> 0) * 3, y = (j / 3 >> 0) * 3
    for (let k = 0; k < 9; k++) {
      set.add(board[i][k]).add(board[k][j]).add(board[x][y])
      y++
      if (y % 3 === 0) {
        x += 1
        y -= 3
      }
    }
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      .filter(n => !set.has(n))
  }
  const dfs = (index) => {
    let [x, y] = arr[index]
    const nums = getNums(x, y)
    for (let k = 0; k < nums.length; k++) {
      board[x][y] = nums[k]
      if (index === arr.length - 1 && nums.length === 1) return true
      if (dfs(index + 1)) return true
      board[x][y] = '.'
    }
    return false
  }
  let arr = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') arr.push([i, j])
    }
  }
  dfs(0)
  return board
}

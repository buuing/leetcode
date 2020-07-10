// 回溯算法+剪枝
const exist = (board, word) => {
  if (!board.length || !board[0].length) return false
  const dfs = (start, i, j) => {
    if (i < 0 || i > board.length) return false
    if (j < 0 || j > board[0].length) return false
    if (board[i][j] !== word[start]) return false
    if (dfs(start + 1, i - 1, j)) return true
    if (dfs(start + 1, i + 1, j)) return true
    if (dfs(start + 1, i, j - 1)) return true
    if (dfs(start + 1, i, j + 1)) return true
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(1, i, j)) return true
    }
  }
  return false
}

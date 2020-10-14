// 回溯算法+剪枝
const exist = (board, word) => {
  if (!board.length || !board[0].length) return false
  let map = new Array(board.length).fill().map(_ => [])
  const dfs = (start, i, j, map) => {
    if (i < 0 || i >= board.length) return false
    if (j < 0 || j >= board[0].length) return false
    if (map[i][j]) return false
    if (board[i][j] !== word[start]) return false
    if (start === word.length - 1) return true
    map[i][j] = 1
    if (
      dfs(start + 1, i - 1, j, map) ||
      dfs(start + 1, i + 1, j, map) ||
      dfs(start + 1, i, j - 1, map) ||
      dfs(start + 1, i, j + 1, map)
    ) return true
    map[i][j] = 0
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(0, i, j, JSON.parse(JSON.stringify(map)))) return true
    }
  }
  return false
}

// 回溯算法 + dfs 从里向外 (严重超时)
const pacificAtlantic = matrix => {
  if (!matrix.length || !matrix[0].length) return []
  let m = matrix.length, n = matrix[0].length
  const res = [],
    axis = [[0, 1], [1, 0], [-1, 0], [0, -1]],
    dp = new Array(m).fill().map(_ => [])
  const dfs = (i, j, map) => {
    let ans = [0, 0], curr = matrix[i][j]
    for (let k = 0; k < 4; k++) {
      let x = i + axis[k][0], y = j + axis[k][1], arr
      if (x < 0 || y < 0) {
        ans[0] += 1
        continue
      }
      if (x >= m || y >= n) {
        ans[1] += 1
        continue
      }
      if (map[x][y] || curr < matrix[x][y]) continue
      if (!dp[x][y]) {
        map[x][y] = 1
        arr = dfs(x, y, map)
        map[x][y] = 0
      } else arr = dp[x][y]
      ans[0] += arr[0]
      ans[1] += arr[1]
    }
    return ans
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!dp[i][j]) dp[i][j] = dfs(i, j, new Array(m).fill().map(_ => []))
      let [pacific, atlantic] = dp[i][j]
      if (pacific && atlantic) res.push([i, j])
    }
  }
  return res
}

// 回溯算法 + dfs 从外向里, 取两个数组的交集
const pacificAtlantic = matrix => {
  if (!matrix.length || !matrix[0].length) return []
  let m = matrix.length, n = matrix[0].length
  const res = [], map = new Array(m).fill().map(_ => [])
    axis = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  const dfs = (i, j, arr) => {
    let curr = matrix[i][j], str = i + ',' + j
    if (arr.has(str)) return
    arr.add(str)
    for (let k = 0; k < 4; k++) {
      let x = i + axis[k][0], y = j + axis[k][1]
      if (x < 0 || y < 0 || x >= m || y >= n) continue
      if (map[x][y] || curr > matrix[x][y]) continue
      map[x][y] = 1
      dfs(x, y, arr)
      map[x][y] = 0
    }
  }
  let pacific = new Set(), atlantic = new Set()
  for (let i = 0; i < n; i++) { // 太平洋边界
    dfs(0, i, pacific)
  }
  for (let i = 1; i < m; i++) { // 太平洋边界
    dfs(i, 0, pacific)
  }
  for (let i = 0; i < n; i++) { // 大西洋边界
    dfs(m - 1, i, atlantic)
  }
  for (let i = 0; i < m - 1; i++) { // 大西洋边界
    dfs(i, n - 1, atlantic)
  }
  for (let item of pacific) {
    atlantic.has(item) && res.push(
      item.split(',').map(num => num * 1)
    )
  }
  return res
}

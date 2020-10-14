// 回溯算法, 性能较低
const combine = (n, k) => {
  let res = []
  const dfs = (arr, j) => {
    if (k === arr.length) return res.push(arr)
    for (let i = j + 1; i <= n; i++) {
      dfs([...arr, i], i)
    }
  }
  dfs([], 0)
  return res
}

// 回溯算法, 性能稍低
const combine = (n, k) => {
  let res = []
  const dfs = (arr, j) => {
    if (k === arr.length) return res.push(arr.slice(0))
    for (let i = j + 1; i <= n; i++) {
      arr.push(i)
      dfs(arr, i)
      arr.pop()
    }
  }
  dfs([], 0)
  return res
}

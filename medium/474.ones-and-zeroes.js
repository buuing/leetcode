// 回溯算法 (超时了)
const findMaxForm = (strs, m, n) => {
  const arr = []
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i], zero = 0
    for (let s of str) {
      if (s === '0') zero++
    }
    arr[i] = [zero, str.length - zero]
  }
  const dfs = (m, n, index, sum) => {
    if (index >= arr.length) return sum
    let curr = arr[index]
    let nextM = m - curr[0], nextN = n - curr[1]
    let max = dfs(m, n, index + 1, sum)
    if (nextM >= 0 && nextN >= 0) {
      max = Math.max(max, dfs(nextM, nextN, index + 1, sum + 1))
    }
    return max
  }
  return dfs(m, n, 0, 0)
}

// 
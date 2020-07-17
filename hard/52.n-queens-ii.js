// 回溯算法 + dfs
const totalNQueens = n => {
  let res = 0, ArrY = [], ArrS = [], ArrK = []
  const dfs = (x, ArrY, ArrS, ArrK) => {
    if (x === n) return res++
    for (let y = 0; y < n; y++) {
      let k = x - y, s = x + y
      if (ArrY.includes(y) || ArrS.includes(s) || ArrK.includes(k)) {
        continue
      }
      ArrY.push(y)
      ArrS.push(s)
      ArrK.push(k)
      dfs(x + 1, ArrY, ArrS, ArrK)
      ArrY.pop()
      ArrS.pop()
      ArrK.pop()
    }
  }
  dfs(0, ArrY, ArrS, ArrK)
  return res
}

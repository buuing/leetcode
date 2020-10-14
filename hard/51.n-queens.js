// 回溯算法 + dfs
const solveNQueens = n => {
  const res = []
  const dfs = (x, ArrY, ArrS, ArrK, arr) => {
    if (x === n) {
      let data = []
      for (let x = 0; x < n; x++) {
        let y = arr[x]
        data[x] = '.'.repeat(y) + 'Q' + '.'.repeat(n - y - 1)
      }
      res.push(data)
      return
    }
    for (let y = 0; y < n; y++) {
      let k = x - y, s = x + y
      if (ArrY.includes(y) || ArrS.includes(s) || ArrK.includes(k)) {
        continue
      }
      ArrY.push(y)
      ArrS.push(s)
      ArrK.push(k)
      arr.push(y)
      dfs(x + 1, ArrY, ArrS, ArrK, arr)
      arr.pop()
      ArrY.pop()
      ArrS.pop()
      ArrK.pop()
    }
  }
  let ArrY = [], ArrS = [], ArrK = []
  dfs(0, ArrY, ArrS, ArrK, [])
  return res
}

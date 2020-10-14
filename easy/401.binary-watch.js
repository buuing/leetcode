// 回溯算法+剪枝
const readBinaryWatch = num => {
  const res = [], arr = [1, 2, 4, 8, 16, 32, 100, 200, 400, 800]
  const dfs = (map, time, lev, prev) => {
    if (lev === num) {
      let m = time % 100
      if (m > 59) return 
      m = ('0' + m).slice(-2)
      let h = time / 100 >> 0
      if (h > 11) return
      return res.push(h + ':' + m)
    }
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i]
      if (map[i] || curr < prev) continue
      time += curr
      map[i] = true
      dfs(map, time, lev + 1, curr)
      map[i] = false
      time -= curr
    }
  }
  dfs([], 0, 0, 0)
  return res
}

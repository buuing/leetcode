// 回溯算法+剪枝
const combinationSum3 = (k, n) => {
  const nums = new Array(9).fill().map((_, i) => i + 1)
  const res = []
  const dfs = (map, prev, sum, lev) => {
    if (lev === k && sum === n) {
      let arr = []
      for (let i = 0; i < nums.length; i++) {
        if (map[i]) arr.push(nums[i])
      }
      res.push(arr)
    }
    for (let i = 0; i < nums.length; i++) {
      if (map[i]) continue
      let curr = nums[i]
      if (sum + curr > n || prev > curr) continue
      map[i] = true
      dfs(map, curr, sum + curr, lev + 1)
      map[i] = false
    }
  }
  dfs([], 0, 0, 0)
  return res
}
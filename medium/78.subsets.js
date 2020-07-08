// 回溯算法+剪枝
const subsets = nums => {
  const res = [[]]
  nums.sort((a, b) => a - b)
  const dfs = (map, arr, prev) => {
    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i]
      if (map[i] || prev > curr) continue
      arr.push(curr)
      res.push(arr.slice(0))
      map[i] = true
      dfs(map, arr, curr)
      map[i] = false
      arr.pop()
    }
  }
  dfs([], [], -Infinity)
  return res
}

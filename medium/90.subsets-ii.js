// 回溯算法+剪枝
const subsetsWithDup = nums => {
  nums.sort((a, b) => a - b)
  const res = [[]], len = nums.length
  const dfs = (map, arr, prev) => {
    if (len === arr.length) return true
    let num = null
    for (let i = 0; i < len; i++) {
      let curr = nums[i]
      if (map[i] || curr < prev || num === curr) continue
      num = curr
      map[i] = true
      arr.push(curr)
      res.push(arr.slice(0))
      dfs(map, arr, curr)
      arr.pop()
      map[i] = false
    }
  }
  dfs([], [], -Infinity)
  return res
}

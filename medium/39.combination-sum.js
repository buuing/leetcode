// 回溯算法+剪枝
const combinationSum = (candidates, target) => {
  const res = []
  candidates = [...new Set(candidates)]
  const dfs = (arr, target, prev) => {
    for (let i = 0; i < candidates.length; i++) {
      let curr = candidates[i]
      let nextTarget = target - curr
      if (nextTarget < 0 || prev > curr) continue
      arr.push(curr)
      if (nextTarget === 0) {
        res.push(arr.slice(0))
      } else {
        dfs(arr, nextTarget, curr)
      }
      arr.pop()
    }
  }
  dfs([], target, 0)
  return res
}

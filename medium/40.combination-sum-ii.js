// 回溯算法+剪枝
const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b)
  const res = []
  const addRes = keys => {
    let arr = []
    for (let i = 0; i < candidates.length; i++) {
      if (keys[i]) arr.push(candidates[i])
    }
    res.push(arr)
  }
  const dfs = (keys, target, upData) => {
    let prev = null
    for (let i = 0; i < candidates.length; i++) {
      if (keys[i]) continue
      let curr = candidates[i]
      let nextTarget = target - curr
      if (nextTarget < 0 || prev === curr || upData > curr) continue
      prev = curr
      keys[i] = true
      if (nextTarget === 0) {
        addRes(keys)
      } else {
        dfs(keys, nextTarget, curr)
      }
      keys[i] = false
    }
  }
  dfs([], target, 0)
  return res
}

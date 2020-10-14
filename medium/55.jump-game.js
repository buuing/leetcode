// 深度优先搜索 (超时了)
const canJump = nums => {
  const dfs = (index) => {
    if (index >= nums.length - 1) return true
    const step = nums[index]
    for (let i = step; i > 0; i--) {
      if (dfs(index + i)) return true
    }
    return false
  }
  return dfs(0)
}

// 贪心算法 (效率一般)
const canJump = nums => {
  let index = nums.length - 1, step = 1
  while (index > 0) {
    let curr = nums[index - 1]
    if (curr >= step) step = 1
    else step++
    index--
  }
  return step === 1
}

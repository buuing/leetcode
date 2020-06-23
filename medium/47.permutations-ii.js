// 基于46题进行剪枝, 在同一层进行去重
const permuteUnique = nums => {
  if (!nums.length) return []
  let res = []
  const deep = (map, arr) => {
    if (arr.length === nums.length) {
      return res.push(JSON.parse(JSON.stringify(arr)))
    }
    let tmp = []
    for (let i = 0; i < map.length; i++) {
      let next = JSON.parse(JSON.stringify(map))
      let curr = next[i]
      if (tmp.indexOf(curr) > -1) continue
      tmp.push(curr)
      next.splice(i, 1)
      arr.push(curr)
      deep(next, arr)
      arr.pop()
    }
  }
  deep(nums, [])
  return res
}
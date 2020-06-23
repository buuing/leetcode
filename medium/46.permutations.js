// 回溯 (深拷贝+动态插入数组)
const permute = nums => {
  if (!nums.length) return []
  let res = []
  const deep = (index, str) => {
    let arr = str.split(',')
    if (nums.length === index) return res.push(arr)
    let curr = nums[index], len = arr.length
    for (let i = 0; i <= len; i++) {
      arr.splice(i, 0, curr)
      deep(index + 1, arr.join(','))
    }
  }
  deep(1, nums[0] + '')
  return res
}

// 回溯+决策树 (利用数组存储读取过的元素)
const permute = nums => {
  if (!nums.length) return []
  let res = []
  const deep = (map, arr) => {
    if (arr.length === nums.length) return res.push(
      JSON.parse(JSON.stringify(arr))
    )
    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i]
      if (map[curr]) continue
      arr.push(curr)
      map[curr] = true
      deep(map, arr)
      map[curr] = false
      arr.pop()
    }
  }
  deep([], [])
  return res
}

// 回溯+决策树 (深拷贝数组传递)
const permute = nums => {
  if (!nums.length) return []
  let res = []
  const deep = (map, arr) => {
    if (arr.length === nums.length) {
      return res.push(JSON.parse(JSON.stringify(arr)))
    }
    for (let i = 0; i < map.length; i++) {
      let next = JSON.parse(JSON.stringify(map))
      let curr = next[i]
      next.splice(i, 1)
      arr.push(curr)
      deep(next, arr)
      arr.pop()
    }
  }
  deep(nums, [])
  return res
}

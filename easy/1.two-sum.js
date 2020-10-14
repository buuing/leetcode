// 暴力解题
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

// indexOf
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let index = nums.lastIndexOf(target - nums[i])
    if (index > -1 && index !== i) return [i, index]
  }
}

// 哈希表
const twoSum = (nums, target) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let curr = target - nums[i]
    if (map.has(curr)) return [map.get(curr), i]
    map.set(nums[i], i)
  }
}
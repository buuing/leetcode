// 删除重复项
const removeDuplicates = nums => {
  let prev = nums[0]
  for (let i = 1; i < nums.length;) {
    if (nums[i] === prev) {
      nums.splice(i, 1)
    } else {
      prev = nums[i++]
    }
  }
  return nums.length
}

// 交换位置
const removeDuplicates = nums => {
  let index = 0, len = nums.length
  for (let i = 1; i < len; i++) {
    let curr = nums[i]
    if (nums[index] !== curr) nums[++index] = curr
  }
  return nums.length
}

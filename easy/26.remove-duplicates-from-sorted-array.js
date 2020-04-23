
const removeDuplicates = nums => {
  let prev = nums[0]
  for (let i = 1; i < nums.length;) {
    if (nums[i] === prev) {
      nums.splice(i, 1)
    } else {
      prev = nums[i]
      i++
    }
  }
  return nums.length
}


const moveZeroes = nums => {
  for (let i = 0, len = nums.length; i < len;) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums[nums.length] = 0
      len--
    } else i++
  }
}
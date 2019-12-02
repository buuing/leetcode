/**
 * 线性循环
 */
const searchRange = (nums, target) => {
  let start = -1, end = -1, len = nums.length
  for (let i = 0; i < len; i++) {
    if (start === -1 && nums[i] === target) {
      start = i
    }
    if (end === -1 && nums[len - i - 1] === target) {
      end = len - i - 1
    }
  }
  return [start, end]
}


/**
 * 使用递归解题
 */
const search = (nums, target) => {
  const findIndex = (left, right) => {
    if (left > right) return -1
    let i = (left + right) / 2 >> 0
    if (nums[i] === target) return i
    if (nums[i] > target) return findIndex(left, i - 1)
    if (nums[i] < target) return findIndex(i + 1, right)
  }
  return findIndex(0, nums.length - 1)
}

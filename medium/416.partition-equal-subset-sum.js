// 递归 (时间超限)
const canPartition = nums => {
  let len = nums.length, sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) return false
  const computeSum = (index, sum) => {
    if (!sum) return true
    if (sum < 0 || index < 0) return false
    return computeSum(index - 1, sum) || computeSum(index - 1, sum - nums[index])
  }
  return computeSum(len - 1, sum / 2)
}
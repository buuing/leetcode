
const minSubsequence = nums => {
  nums.sort((a, b) => b - a)
  const middle = nums.reduce((s, n) => s += n, 0) / 2
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum > middle) return nums.slice(0, i + 1)
  }
}
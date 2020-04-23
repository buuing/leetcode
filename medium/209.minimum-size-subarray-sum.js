
const minSubArrayLen = (s, arr) => {
  if (arr.length === 0) return 0
  let min = arr.length + 1, sum = 0, i = 0, j = 0
  while (i < arr.length) {
    j++
    sum += arr[i]
    if (sum >= s) {
      if (min > j) min = j
      i -= j - 2
      j = 0
      sum = 0
    } else i++
  }
  return min > arr.length ? 0 : min
}
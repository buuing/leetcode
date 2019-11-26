
/**
 * 只需要判断9进位的情况即可
 */
const plusOne = arr => {
  for (let i = arr.length-1; i >= 0; i--) {
    let cur = arr[i] + 1
    if (cur > 9) {
      arr[i] = 0
    } else {
      arr[i] = cur
      return arr
    }
  }
  arr.unshift(1)
  return arr
}

/**
 * [-1,-1,-1,-1,-1,0] 返回2
 */
const pivotIndex = arr => {
  if (arr.length < 3) return -1
  let s = 0, curr = 0
  for (let i = 0; i < arr.length; i++) {
    s += arr[i]
  }
  for (let i = 0; i < arr.length; i++) {
    if ((s - arr[i]) / 2 == curr) return i
    curr += arr[i]
  }
  return -1
}

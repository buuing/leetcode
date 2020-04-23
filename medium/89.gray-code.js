
/**
 * 当n=0时 [0]
 * 当n=1时 [0,1]
 * 当n=2时 [0,1,3,2]
 * 当n=3时 [0,1,3,2,6,7,5,4]
 * 当n=4时 [0,1,3,2,6,7,5,4,12,13,15,14,10,11,9,8]
 */
const grayCode = n => {
  if (n === 0) return [0]
  if (n === 1) return [0, 1]
  let arr = grayCode(--n)
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push((1 << n) + arr[i])
  }
  return arr
}


/**
 * 二分法查找
 */
const solution = isBadVersion => {
  return function(n) {
    let min = 1, max = n
    if (isBadVersion(min)) return min
    while (max - min !== 1) {
      let curr = (min + max) / 2 >> 0
      if (isBadVersion(curr)) max = curr
      else min = curr
    }
    return max
  }
}

/**
 * 递归版
 */
const countAndSay = n => {
  if (n === 1) return '1'
  let prev = countAndSay(n - 1), res = '', queue = prev[0]
  for (let i = 1; i < prev.length; i++) {
    let curr = prev[i]
    if (queue[0] === curr) {
      queue += curr
    } else {
      res += queue.length + queue[0]
      queue = curr
    }
  }
  return res + queue.length + queue[0]
}

/**
 * 暴力if强行刷题
 * 它限制条件太恶心了, 不想做这道题
 * 这道题带出来一个难点, 如何判断字符串的数字是数字?
 */
const myAtoi = str => {
  let i = 0, res = '', flag = true, db = '0123456789'
  while (i < str.length) {
    let curr = str[i++]
    if (isNaN(+curr) && !(curr === '-' && !res) && !(curr === '+' && db.indexOf(str[i]) !== -1 && flag) ) break
    if (curr === '-') {
      if (isNaN(str[i]) || str[i] === ' ') return 0
      flag = false
      continue
    }
    if (curr === ' ' && res.length) break
    curr !== ' ' && (res += curr)
  }
  return flag ? (
    res > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : res
  ) : (
    res > Math.pow(2, 31) ? -Math.pow(2, 31) : -res
  )
}

/**
 * 转小写然后正则过滤
 */
const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^0-9a-z]+/g, '')
  if (!s) return true
  let len = s.length
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len-i-1]) return false
  }
  return true
}

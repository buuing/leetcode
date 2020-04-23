
const repeatedSubstringPattern = str => /^(\w+)\1$/g.test(str)

const repeatedSubstringPattern = str => {
  if (str.length === 1) return false
  for (let i = 1, len = str.length; i <= len / 2; i++) {
    if (len % i !== 0) continue
    let s = str.substring(0, i)
    if (s.repeat(len / s.length) === str) return true
  }
  return false
}

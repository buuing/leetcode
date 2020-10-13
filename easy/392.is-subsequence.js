// 贪心
const isSubsequence = (s, t) => {
  let index = 0, num = 0
  for (let i = 0; i < s.length; i++) {
    let curr = s[i]
    while (true) {
      if (curr === t[index++]) {
        num++
        break
      }
      if (index > t.length) return false
    }
    if (num === s.length) return true
  }
  return true
}

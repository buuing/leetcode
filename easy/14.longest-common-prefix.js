
const longestCommonPrefix = strs => {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  let n = 0, minLen = strs[0].length
  for (let i = 0; i < strs.length; i++) {
    if (minLen > strs[i].length) minLen = strs[i].length
  }
  while (n < minLen) {
    n++
    let str = strs[0].slice(0, n)
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].slice(0, n) !== str) return strs[i].slice(0, n-1)
    }
  }
  return strs[0].slice(0, n)
}

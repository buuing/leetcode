
const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      let flag = true
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          flag = false
          break
        }
      }
      if (flag) return i
    }
  }
  return -1
}

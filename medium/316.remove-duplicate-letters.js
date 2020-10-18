// 使用栈扫描
const removeDuplicateLetters = s => {
  let stack = [s[0]]
  for (let i = 1; i < s.length; i++) {
    let curr = s[i], len = stack.length
    if (stack.indexOf(curr) > -1) continue
    while (len-- && curr < stack[len] && s.lastIndexOf(stack[len]) > i) {
      stack.pop()
    }
    stack.push(curr)
  }
  return stack.join('')
}

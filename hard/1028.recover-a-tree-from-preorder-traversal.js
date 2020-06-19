// 递归
const recoverFromPreorder = (str, lev = 1) => {
  if (!str) return null
  let prev = '', left = '', right = '', root = {}
  for (var i = 1; i < str.length; i++) {
    if (str[i] === '-') {
      root = new TreeNode(str.slice(0, i))
      break
    }
  }
  if (i === str.length) {
    return new TreeNode(str)
  }
  let start = i + lev
  for (let j = start + 1; j < str.length; j++) {
    let curr = str[j]
    if (curr === '-') {
      prev += curr
      continue
    }
    if (prev.length === lev) {
      left = str.slice(start, j - lev)
      right = str.slice(j)
      break
    }
    prev = ''
  }
  if (!left) {
    left = str.slice(start)
  }
  root.left = recoverFromPreorder(left, lev + 1)
  root.right = recoverFromPreorder(right, lev + 1)
  return root
}
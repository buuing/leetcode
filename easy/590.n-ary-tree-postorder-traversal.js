// 递归
const postorder = root => {
  if (!root) return []
  const res = [root.val]
  for (let i = root.children.length; i >= 0; i--) {
    res.unshift(...postorder(root.children[i]))
  }
  return res
}

// 迭代
const postorder = root => {
  if (!root) return []
  const res = [], stack = [root]
  while (stack.length) {
    let curr = stack.pop()
    res.unshift(curr.val)
    for (let i = 0; i < curr.children.length; i++) {
      stack.push(curr.children[i])
    }
  }
  return res
}

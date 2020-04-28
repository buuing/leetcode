// 递归
const preorder = root => {
  if (!root) return []
  const res = [root.val]
  for (let i = 0; i < root.children.length; i++) {
    let child = root.children[i]
    res.push(...preorder(child))
  }
  return res
}

// 迭代
const preorder = root => {
  if (!root) return []
  const res = [], queue = [root]
  while (queue.length) {
    let curr = queue.pop()
    res.push(curr.val)
    for (let i = curr.children.length - 1; i >= 0; i--) {
      queue.push(curr.children[i])
    }
  }
  return res
}

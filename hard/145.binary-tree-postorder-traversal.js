// 递归
const postorderTraversal = root => {
  if (!root) return []
  const res = [root.val]
  root.right && res.unshift(...postorderTraversal(root.right))
  root.left && res.unshift(...postorderTraversal(root.left))
  return res
}

// 迭代
const postorderTraversal = root => {
  if (!root) return []
  const stack = [root], res = []
  while (stack.length) {
    let curr = stack.pop()
    res.unshift(curr.val)
    curr.left && stack.push(curr.left)
    curr.right && stack.push(curr.right)
  }
  return res
}
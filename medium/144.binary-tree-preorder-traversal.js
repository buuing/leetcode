/**
 * 前序迭代
 */
const preorderTraversal = root => {
  if (!root) return []
  const res = [root.val]
  res.push(...preorderTraversal(root.left))
  res.push(...preorderTraversal(root.right))
  return res
}

/**
 * 前序迭代
 */
const preorderTraversal = root => {
  if (!root) return []
  const stack = [root], res = []
  while (stack.length) {
    const curr = stack.pop()
    res.push(curr.val)
    curr.right && stack.push(curr.right)
    curr.left && stack.push(curr.left)
  }
  return res
}

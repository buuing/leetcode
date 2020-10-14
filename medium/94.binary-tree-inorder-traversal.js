
/**
 * 中序递归
 */
const inorderTraversal = root => {
  if (!root) return []
  const res = [root.val]
  res.unshift(...inorderTraversal(root.left))
  res.push(...inorderTraversal(root.right))
  return res
}

/**
 * 中序迭代 (这个是官网题解, 思路完美, 时间复杂度为2n)
 */
const inorderTraversal = root => {
  let stack = [], res = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}

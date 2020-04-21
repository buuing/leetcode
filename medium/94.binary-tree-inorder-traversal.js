
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

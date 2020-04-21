/**
 * 前序迭代
 */
const preorderTraversal = root => {
  if (!root) return []
  let arr = [root.val]
  arr.push(...preorderTraversal(root.left))
  arr.push(...preorderTraversal(root.right))
  return arr
}
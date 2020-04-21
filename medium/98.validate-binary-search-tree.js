
const isValidBST = root => {
  if (!root) return true
  const _deep = (node, min, max) => {
    if (!node) return true
    const val = node.val
    if (val >= max || val <= min) return false
    return _deep(node.left, min, node.val) && _deep(node.right, node.val, max)
  }
  return _deep(root.left, -Infinity, root.val) && _deep(root.right, root.val, Infinity)
}

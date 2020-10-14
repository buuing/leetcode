
/**
 * 递归解题
 */
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

/**
 * 中序遍历二叉搜索树会得到一个升序的数组
 */
const isValidBST = root => {
  let stack = [], num = -Infinity
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.val <= num) return false
    num = root.val
    root = root.right
  }
  return true
}

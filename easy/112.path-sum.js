// dfs
const hasPathSum = (root, sum) => {
  if (!root) return false
  sum -= root.val
  if (!root.left && !root.right) {
    return sum === 0
  } else {
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
  }
}


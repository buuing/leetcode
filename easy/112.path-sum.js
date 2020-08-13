// 递归 + 深度优先搜索
const hasPathSum = (root, sum) => {
  if (!root) return false
  sum -= root.val
  if (!root.left && !root.right) {
    return sum === 0
  } else {
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
  }
}

// 层序 + 广度优先搜索
const hasPathSum = (root, sum) => {
  if (!root) return false
  root.val = sum - root.val
  const stack = [root]
  while (stack.length) {
    let len = stack.length
    while (len--) {
      const curr = stack.shift()
      let left = curr.left, right = curr.right
      if (!left && !right && curr.val === 0) return true
      if (left) {
        left.val = curr.val - left.val
        stack.push(left)
      }
      if (right) {
        right.val = curr.val - right.val
        stack.push(right)
      }
    }
  }
  return false
}
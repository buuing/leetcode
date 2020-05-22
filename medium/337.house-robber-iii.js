// 递归
const rob = root => {
  if (!root) return 0
  let val = root.val
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right)
  }
  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right)
  }
  return Math.max(val, rob(root.left) + rob(root.right))
}

// 记忆化递归
const dp = new Map()
const rob = root => {
  if (!root) return 0
  if (dp.has(root)) return dp.get(root)
  let val = root.val
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right)
  }
  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right)
  }
  dp.set(root, Math.max(val, rob(root.left) + rob(root.right)))
  return dp.get(root)
}

// 动态规划

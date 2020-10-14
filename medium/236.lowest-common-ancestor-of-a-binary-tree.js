// 获取路径对比交集, 性能极差, 差点超时
const lowestCommonAncestor = (root, p, q) => {
  const getPath = (curr, node) => {
    let path = []
    if (curr === node) return [curr]
    if (curr.left) {
      const leftPath = getPath(curr.left, node)
      leftPath.length && path.push(curr, ...leftPath)
    }
    if (curr.right) {
      const rightPath = getPath(curr.right, node)
      rightPath.length && path.push(curr, ...rightPath)
    }
    return path
  }
  let path1 = getPath(root, p), path2 = getPath(root, q)
  for (let i = path1.length - 1; i >= 0; i--) {
    if (path1[i] === path2[i]) return path1[i]
  }
}

// 递归查找
const lowestCommonAncestor = (root, p, q) => {
  if(!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) return root
  return left || right
}
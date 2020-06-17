// 递归好简单
const bstFromPreorder = preorder => {
  if (!preorder.length) return null
  let val = preorder[0]
  let root = new TreeNode(val)
  root.left = bstFromPreorder(preorder.filter(item => item < val))
  root.right = bstFromPreorder(preorder.filter(item => item > val))
  return root
}

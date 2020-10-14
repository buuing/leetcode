const insertIntoBST = (root, val) => {
  let curr = parent = root
  while (curr && curr.val !== val) {
    parent = curr
    curr = curr.val > val ? curr.left : curr.right
  }
  if (parent.val > val) parent.left = TreeNode(val)
  else parent.right = TreeNode(val)
  return root
}


const searchBST = (root, val) => {
  while (root && root.val !== val) {
    root = root.val > val ? root.left : root.right
  }
  return root
}
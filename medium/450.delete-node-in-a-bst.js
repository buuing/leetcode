const deleteNode = (root, val) => {
  const mergeTree = node => { // 合并左右节点
    if (!node.left && !node.right) return null
    if (!node.left && node.right) return node.right
    if (node.left && !node.right) return node.left
    let curr = node.right
    while (curr.left) curr = curr.left
    curr.left = node.left
    return node.right
  }
  if (!root) return null
  if (root.val === val) return mergeTree(root)
  let curr = root, parent, key = ''
  while (curr && curr.val !== val) {
    parent = curr
    key = curr.val > val ? 'left' : 'right'
    curr = curr[key]
  }
  if (!curr) return root
  parent[key] = mergeTree(curr)
  return root
}
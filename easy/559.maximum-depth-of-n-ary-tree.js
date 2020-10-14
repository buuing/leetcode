// 层序迭代
const maxDepth = root => {
  if (!root) return 0
  let queue = [root], n = 0
  while (queue.length) {
    let len = queue.length
    while (len--) {
      let curr = queue.shift()
      for (let i = 0; i < curr.children.length; i++) {
        queue.push(curr.children[i])
      }
    }
    n++
  }
  return n
}

// 递归
const maxDepth = (root, level) => {
  if (!root) return 0
  level = ~~level + 1
  let max = level
  for (let i = 0; i < root.children.length; i++) {
    let lev = maxDepth(root.children[i], level)
    lev > max && (max = lev)
  }
  return max
}

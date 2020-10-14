// 迭代 = 队列 + bfs
const levelOrder = root => {
  if (!root) return []
  let queue = [root], res = []
  while (queue.length) {
    let len = queue.length, arr = []
    while (len--) {
      let curr = queue.shift()
      arr.push(curr.val)
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    res.push(arr)
  }
  return res
}
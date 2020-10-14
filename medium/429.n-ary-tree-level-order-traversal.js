// 迭代
const levelOrder = root => {
  if (!root) return []
  let res = [], queue = [root]
  while (queue.length) {
    let len = queue.length, arr = []
    while (len--) {
      let curr = queue.shift()
      arr.push(curr.val)
      for (let i = 0; i < curr.children.length; i++) {
        queue.push(curr.children[i])
      }
    }
    res.push(arr)
  }
  return res
}
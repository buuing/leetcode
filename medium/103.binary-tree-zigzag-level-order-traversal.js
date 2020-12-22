// 层序遍历
const zigzagLevelOrder = root => {
  if (!root) return []
  let queue = [root], res = [], flag = true
  while (queue.length) {
    let len = queue.length, tmp = []
    flag = !flag
    for (let i = 0; i < len; i++) {
      let curr = queue.shift()
      tmp[flag ? len - i - 1 : i] = curr.val
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    res.push(tmp)
  }
  return res
}

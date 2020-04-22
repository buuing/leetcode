
class BSTIterator {
  constructor (root) {
    this.queue = []
    this.initQueue(root)
  }
  initQueue (root) {
    const stack = []
    while (root || stack.length) {
      while (root) {
        stack.push(root)
        root = root.left
      }
      root = stack.pop()
      this.queue.push(root.val)
      root = root.right
    }
  }
  next () {
    return this.queue.shift()
  }
  hasNext () {
    return this.queue.length
  }
}
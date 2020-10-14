
class MyCircularQueue {
  /**
   * 数据结构 - 循环队列
   * @param { Number } k 队列的长度
   */
  constructor (k) {
    this.k = k
    this.head = -1 // 头部指针
    this.tail = -1 // 尾部指针
    this.size = 0 // 队列长度
    this.data = new Array(k)
  }
  /**
   * 从队首获取元素, 如果队列为空, 返回-1
   */
  Front () {
    return this.size === 0 ? -1 : this.data[this.head]
  }
  /**
   * 从队尾获取元素, 如果队列为空, 返回-1
   */
  Rear () {
    return this.size === 0 ? -1 : this.data[this.tail]
  }
  /**
   * 向循环队列中插入一个元素, 成功返回真
   * @param { Any } val 插入的值
   */
  enQueue (val) {
    if (this.size === this.k) return false // 队列已满
    if (this.tail === this.head && this.tail === -1) this.head++
    this.tail = this.tail === this.k - 1 ? 0 : this.tail + 1
    this.size++
    this.data[this.tail] = val
    return true
  }
  /**
   * 从循环队列中删除一个元素, 成功返回真
   */
  deQueue () {
    if (this.size === 0) return false
    delete this.data[this.head]
    this.head++
    this.size--
    if (this.size === 0) {
      this.head = -1
      this.tail = -1
    }
    if (this.head == this.k && this.size !== 0) {
      this.head = 0
    }
    return true
  }
  /**
   * 检查队列是否为空
   */
  isEmpty () {
    return this.size === 0
  }
  /**
   * 检查循环队列是否已满
   */
  isFull () {
    return this.size === this.k
  }
}

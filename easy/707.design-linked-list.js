
// 使用对象
class MyLinkedList {
  constructor () {
    this.data = {}
  }
  get(index) {
    if (index < 0) return -1
    let curr = this.data
    for (let i = 0; i < index; i++) {
      if (!curr.next) return -1
      curr = curr.next
    }
    return curr.val === undefined || curr.val === null ? -1 : curr.val
  }
  addAtHead(val) {
    if (this.data && !(this.data.val === undefined || this.data.val === null)) {
      this.data = { val, next: this.data }
    } else {
      this.data = { val, next: null }
    }
  }
  addAtTail(val) {
    let curr = this.data
    while (curr.next) {
      curr = curr.next
    }
    curr.next = { val, next: null }
  }
  addAtIndex(index, val) {
    if (index <= 0) return this.addAtHead(val)
    let curr = this.data
    for (let i = 0; i < index - 1; i++) {
      if (!curr || !curr.next) return null
      curr = curr.next
    }
    if (!curr.val && curr.val !== 0) return null
    curr.next = { val, next: curr.next }
  }
  deleteAtIndex(index) {
    if (index < 0) return null
    if (index === 0) return this.data = this.data.next
    let curr = this.data
    for (let i = 0; i < index - 1; i++) {
      if (!curr.next || !curr.next.next) return null
      curr = curr.next
    }
    if (!curr.next) return null
    if (!curr.next.next) return curr.next = null
    else return curr.next = curr.next.next
  }
}

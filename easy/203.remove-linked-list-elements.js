
const removeElements = (head, val) => {
  let slow = head, fast = head
  while (fast && fast.next) {
    slow = fast
    fast = fast.next
    while (fast && fast.val === val) {
      slow.next = fast.next
      fast = fast.next
    }
  }
  return head && head.val === val ? head.next : head
}
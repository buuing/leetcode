
const hasCycle = head => {
  if (!head || !head.next) return false
  let slow = head, fast = head.next
  while (slow !== fast) {
    if (!fast || !fast.next) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
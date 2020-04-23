
const isPalindrome = head => {
  if (!head || !head.next) return true
  let curr = head, res = null, n = 0
  while (curr) {
    n++
    res = { val: curr.val, next: res }
    curr = curr.next
  }
  while (n > 0) {
    if (head.val !== res.val) return false
    head = head.next
    res = res.next
    n -= 2
  }
  return true
}

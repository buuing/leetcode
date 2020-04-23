
const reverseList = head => {
  let res = null
  while (head) {
    res = {
      val: head.val,
      next: res
    }
    head = head.next
  }
  return res
}

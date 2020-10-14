
const removeNthFromEnd = (head, n) => {
  let arr = [head.val], curr = null
  while (head.next) {
    head = head.next
    arr.push(head.val)
  }
  if (n > 0 && n <= arr.length) arr.splice(-n, 1)
  for (let i = arr.length - 1; i >= 0; i--) {
    curr = {
      val: arr[i],
      next: curr
    }
  }
  return curr
}

const removeNthFromEnd = (head, n) => {
  let arr = [head], curr = null
  while (head.next) {
    head = head.next
    arr.push(head)
  }
  let len = arr.length
  if (n > 0 && n < len) {
    arr[len - n - 1].next = arr[len - n].next
  } else if (n === len) {
    return arr[len - n].next
  }
  return arr[0]
}


// 暴力解题
const oddEvenList = head => {
  let curr = head, arr = [], res = null
  let flag = true
  while (curr) {
    arr.unshift(curr.val)
    if (!curr.next || !curr.next.next) {
      curr = flag ? head.next : null
      flag = false
    } else {
      curr = curr.next.next
    }
  }
  for (let i = 0; i < arr.length; i++) {
    res = { val: arr[i], next: res }
  }
  return res
}

// 双指针原地算法
const oddEvenList = head => {
  if (!head || !head.next || !head.next.next) return head
  let odd = head, even = head.next
  let temp = even
  while (odd && even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = temp
  return head
}

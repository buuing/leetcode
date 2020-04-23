
// 双for循环解题
const detectCycle = head => {
  if (!head || !head.next) return null
  if (head === head.next) return head
  let arr = [], curr = head
  while (curr.next) {
    arr.push(curr)
    curr = curr.next
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === curr) return curr
    }
  }
  return null
}

// 使用map模拟哈希表解题
const detectCycle = head => {
  if (!head || !head.next) return null
  if (head === head.next) return head
  let map = new Map(), curr = head
  while (curr.next) {
    map.set(curr, true)
    curr = curr.next
    if (map.get(curr)) return curr
  }
  return null
}

// 双指针解题
const detectCycle = head => {
  if (!head || !head.next) return null
  if (head === head.next) return head
  let slow = head, fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      fast = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return fast
    }
  }
  return null
}

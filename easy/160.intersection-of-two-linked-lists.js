
// 暴力枚举
const getIntersectionNode = (headA, headB) => {
  while (headA) {
    let temp = headB
    while (temp) {
      if (headA === temp) return headA
      temp = temp.next
    }
    headA = headA.next
  }
  return null
}

const getIntersectionNode = (headA, headB) => {
  let map = new Map()
  while (headA) {
    map.set(headA, true)
    headA = headA.next
  }
  while (headB) {
    if (map.get(headB)) return headB
    headB = headB.next
  }
  return null
}

// 双指针解题
const getIntersectionNode = (headA, headB) => {
  let a = headA, b = headB, ai = 1, bi = 1
  while (a !== b) {
    a = a ? a.next : headB
    b = b ? b.next : headA
  }
  return a
}
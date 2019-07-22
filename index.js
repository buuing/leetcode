/**
 * @Author { String } ldq
 */
const oddEvenList = head => {
  if (!head || !head.next || !head.next.next) return head
  let odd = head, even = head.next
  let temp = even
  while (odd && even && even.next) {
    console.log(JSON.stringify(odd))
    console.log(JSON.stringify(even))
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  console.log(JSON.stringify(odd))
  console.log(JSON.stringify(even))
  odd.next = temp
  return head
}

console.log(JSON.stringify(
  oddEvenList(
    {val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6,next:null}}}}}}
  )
))

// a={

// head: {val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6,next:null}}}}}}



// // 刚开始
// odd: {val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6,next:null}}}}}}
// even: {val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6,next:null}}}}}

// head: {val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6,next:null}}}}}}
// head[next]: {val:2,next:{val:3,next:{val:4,next:{val:5,next:{val:6,next:null}}}}}


// // 第一次交换



// // 第二次交换

// }
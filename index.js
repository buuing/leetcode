/**
 * @Author { String } ldq
 */
const flatten = (head, next) => {
  let curr = head
  while (curr && (curr.next || curr.child)) {
    if (curr.child) {
      console.log('curr',curr.val)
      curr.next = flatten(curr.child, curr.next)
      curr.child = null
      // curr.next.prev = curr
    }
    curr = curr.next
  }
  next && (curr.next = next)
  return head
}


console.log(JSON.stringify(
  flatten(
    {val:"1","child":null,"next":{val:"2","child":null,"next":{val:"3","next":{val:"4","child":null,"next":{val:"5","child":null,"next":{val:"6","child":null,"next":null}},
      "child":{val:"7","child":null,"next":{val:"8","child":{val:"11","child":null,"next":{val:"12","child":null,"next":null}},"next":{val:"9","child":null,"next":{val:"10","child":null,"next":null}}}}}}}}
  )
))

// {"$id":"1","child":null,"next":{"$id":"2","child":null,"next":{"$id":"3","child":null,"next":{"$id":"4","child":null,"next":{"$id":"5","child":null,"next":{"$id":"6","child":null,"next":{"$id":"7","child":null,"next":{"$id":"8","child":null,"next":{"$id":"9","child":null,"next":{"$id":"10","child":null,"next":{"$id":"11","child":null,"next":{"$id":"12","child":null,"next":null,"prev":{"$ref":"11"},"val":6},"prev":{"$ref":"10"},"val":5},"prev":{"$ref":"3"},"val":4},"prev":{"$ref":"8"},"val":10},"prev":{"$ref":"5"},"val":9},"prev":{"$ref":"6"},"val":12},"prev":{"$ref":"5"},"val":11},"prev":{"$ref":"4"},"val":8},"prev":{"$ref":"3"},"val":7},"prev":{"$ref":"2"},"val":3},"prev":{"$ref":"1"},"val":2},"prev":null,"val":1}
// {"$id":"1","child":null,"next":{"$id":"2","child":null,"next":{"$id":"3","child":null,"next":{"$id":"4","child":null,"next":{"$id":"5","child":null,"next":{"$id":"6","child":null,"next":{"$id":"7","child":null,"next":{"$id":"8","child":null,"next":{"$id":"9","child":null,"next":{"$id":"10","child":null,"next":{"$id":"11","child":null,"next":{"$id":"12","child":null,"next":null,"prev":{"$ref":"11"},"val":6},"prev":{"$ref":"10"},"val":5},"prev":{"$ref":"9"},"val":4},"prev":{"$ref":"8"},"val":10},"prev":{"$ref":"7"},"val":9},"prev":{"$ref":"6"},"val":12},"prev":{"$ref":"5"},"val":11},"prev":{"$ref":"4"},"val":8},"prev":{"$ref":"3"},"val":7},"prev":{"$ref":"2"},"val":3},"prev":{"$ref":"1"},"val":2},"prev":null,"val":1}

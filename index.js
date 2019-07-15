/**
 * @Author { String } ldq
 */
const addTwoNumbers = (a, b) => {
  let carry = 0, arr = [], res = {}
  while (a.val !== 0 || b.val !== 0) {
    let s = a.val + b.val + carry
    if (s > 9) carry = 1
    else carry = 0
    arr.push(s % 10)
    a = a.next ? a.next : { val: 0, next: null }
    b = b.next ? b.next : { val: 0, next: null }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    res.val = 
  }
}

console.log(JSON.stringify(
  addTwoNumbers(
    {"val":2,"next":{"val":4,"next":{"val":3,"next":null}}},
    {"val":5,"next":{"val":6,"next":{"val":4,"next":{"val":9,"next":null}}}}
  )
))

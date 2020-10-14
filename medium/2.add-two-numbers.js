
const addTwoNumbers = (a, b) => {
  let carry = 0, arr = [], res = null
  while (a.val !== null || b.val !== null) {
    let s = a.val + b.val + carry
    if (s > 9) carry = 1
    else carry = 0
    arr.push(s % 10)
    a = a.next ? a.next : { val: null, next: null }
    b = b.next ? b.next : { val: null, next: null }
  }
  if (carry) arr.push(1)
  for (let i = arr.length - 1; i >= 0; i--) {
    res = {
      val: arr[i],
      next: res
    }
  }
  return res
}

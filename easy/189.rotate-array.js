
const rotate = (arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop())
  }
  return arr
}

const rotate = (arr, k) => {
  arr.unshift(...arr.splice(arr.length - (k % arr.length), k))
}
